import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../utils/api";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import {
  Cloud,
  CloudRain,
  Sun,
  Wind,
  Snowflake,
  Plus,
  ThumbsUp,
  X,
  LogOut,
  Edit,
  Trash2,
  Globe as GlobeIcon,
  RefreshCw,
  MapPin,
  Thermometer,
  Droplets,
  Wind as WindIcon,
  Search,
} from "lucide-react";

const Home = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const globeRef = useRef(null);
  const markersRef = useRef([]);
  const markerMeshesRef = useRef([]);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [showAddWeather, setShowAddWeather] = useState(false);
  const [countriesData, setCountriesData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [userWeatherData, setUserWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingWeather, setEditingWeather] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [newWeather, setNewWeather] = useState({
    cityName: "",
    lat: 0,
    lon: 0,
    temperature: 25,
    description: "Clear sky",
    humidity: 50,
    windSpeed: 5,
  });

  useEffect(() => {
    fetchInitialData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = countriesData.filter((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countriesData);
    }
  }, [searchQuery, countriesData]);

  const fetchInitialData = async () => {
    setLoading(true);
    try {
      // Fetch countries list untuk globe markers
      const countriesResponse = await api.get(
        "http://localhost:3000/weather/countries"
      );
      setCountriesData(countriesResponse.data.countries);

      // Fetch all weather data
      const weatherResponse = await api.get("http://localhost:3000/weather");
      setWeatherData(weatherResponse.data.data);

      // Fetch user weather
      await fetchUserWeatherData();

      console.log(
        `✅ Loaded ${
          countriesResponse.data.totalCountries
        } countries with ${countriesResponse.data.countries.reduce(
          (sum, c) => sum + c.cityCount,
          0
        )} cities`
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to load weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserWeatherData = async () => {
    try {
      const response = await api.get("/user-weather");
      setUserWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching user weather:", error);
    }
  };

  const handleCountryClick = async (countryName) => {
    console.log("➡️ handleCountryClick called:", countryName);
    setSelectedCountry(countryName);
    setSelectedCity(null);
    setShowAddWeather(false);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const handleVote = async (id) => {
    try {
      await api.post(`/user-weather/vote/${id}`);
      fetchUserWeatherData();
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  const handleAddWeather = async () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    try {
      await api.post("/user-weather", newWeather);
      setShowAddWeather(false);
      setNewWeather({
        cityName: "",
        lat: 0,
        lon: 0,
        temperature: 25,
        description: "Clear sky",
        humidity: 50,
        windSpeed: 5,
      });
      fetchUserWeatherData();
      alert("Weather report added successfully!");
    } catch (error) {
      console.error("Error adding weather:", error);
      alert(error.response?.data?.message || "Failed to add weather");
    }
  };

  const handleUpdateWeather = async () => {
    try {
      await api.put(`/user-weather/${editingWeather.id}`, newWeather);
      setEditingWeather(null);
      setShowAddWeather(false);
      fetchUserWeatherData();
      alert("Weather report updated successfully!");
    } catch (error) {
      console.error("Error updating weather:", error);
      alert(error.response?.data?.message || "Failed to update weather");
    }
  };

  const handleDeleteWeather = async (id) => {
    if (
      !window.confirm("Are you sure you want to delete this weather report?")
    ) {
      return;
    }

    try {
      await api.delete(`/user-weather/${id}`);
      fetchUserWeatherData();
      alert("Weather report deleted successfully!");
    } catch (error) {
      console.error("Error deleting weather:", error);
      alert(error.response?.data?.message || "Failed to delete weather");
    }
  };

  const startEdit = (weather) => {
    setEditingWeather(weather);
    setNewWeather({
      cityName: weather.cityName,
      lat: weather.lat,
      lon: weather.lon,
      temperature: weather.temperature,
      description: weather.description,
      humidity: weather.humidity,
      windSpeed: weather.windSpeed,
    });
    setShowAddWeather(true);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleRefreshWeather = async () => {
    if (
      !window.confirm(
        "This will refresh weather data for all locations. It may take a few minutes. Continue?"
      )
    ) {
      return;
    }

    try {
      setLoading(true);
      await api.post("http://localhost:3000/weather/refresh");
      await fetchInitialData();
      alert("Weather data refreshed successfully!");
    } catch (error) {
      console.error("Error refreshing weather:", error);
      alert("Failed to refresh weather data");
    }
  };

  // Three.js Globe Setup
  useEffect(() => {
    if (!mountRef.current) return;

    // Debugging: log mount element and sizes so we can see why the globe may be blank
    try {
      console.log("Globe init:", {
        mount: mountRef.current,
        width: mountRef.current?.clientWidth,
        height: mountRef.current?.clientHeight,
        countries: countriesData.length,
      });
    } catch (err) {
      console.warn("Failed to log mountRef info", err);
    }

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000510);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2.5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    // Ensure the clear color is set so the canvas doesn't appear white when alpha is enabled
    try {
      renderer.setClearColor(new THREE.Color(0x000510), 1);
    } catch (e) {
      // ignore if not available
    }
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    // Prevent page from scrolling when interacting with the globe canvas
    // expose removeWheel so cleanup can call it (declare in outer scope)
    let removeWheel = null;
    try {
      const wheelHandler = (e) => {
        // Allow browser zoom when Ctrl (or meta) is pressed; otherwise prevent page scroll while
        // interacting with the globe so the page doesn't jump/zoom the UI.
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
        }
      };
      renderer.domElement.addEventListener("wheel", wheelHandler, {
        passive: false,
      });
      // remove on cleanup
      removeWheel = () =>
        renderer.domElement.removeEventListener("wheel", wheelHandler);
    } catch (err) {
      // ignore
    }
    // Ensure the mount container has a positioning context (in case Tailwind isn't applied)
    try {
      if (
        mountRef.current &&
        getComputedStyle(mountRef.current).position === "static"
      ) {
        mountRef.current.style.position = "relative";
      }
    } catch (e) {
      /* ignore */
    }

    // Make the canvas fill the mount container and sit behind UI overlays
    try {
      const canvas = renderer.domElement;
      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.zIndex = "0";
      // allow pointer interaction for globe controls
      canvas.style.pointerEvents = "auto";
      // ensure it's visible
      canvas.style.display = "block";

      const rect = canvas.getBoundingClientRect();
      console.log("✅ Renderer created and canvas appended:", {
        canvasWidth: renderer.domElement.width,
        canvasHeight: renderer.domElement.height,
        containerWidth: mountRef.current.clientWidth,
        containerHeight: mountRef.current.clientHeight,
        canvasRect: rect,
      });
    } catch (err) {
      console.warn("Could not style canvas:", err);
    }

    // Ensure mount container occupies viewport to avoid layout shifts
    try {
      if (mountRef.current) {
        mountRef.current.style.minHeight = "100vh";
        mountRef.current.style.minWidth = "100%";
      }
    } catch (e) {
      /* ignore */
    }

    // Ensure body background matches scene background so transparent canvas looks correct
    try {
      document.body.style.background = "#000510";
    } catch (e) {
      /* ignore */
    }

    // Create Earth texture with enhanced detail
    const createEarthTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 4096; // Higher resolution for more detail
      canvas.height = 2048;
      const ctx = canvas.getContext("2d");

      // Ocean base with gradient
      const oceanGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      oceanGradient.addColorStop(0, "#0a1f2e");
      oceanGradient.addColorStop(0.3, "#0d2137");
      oceanGradient.addColorStop(0.5, "#1a3a52");
      oceanGradient.addColorStop(0.7, "#0d2137");
      oceanGradient.addColorStop(1, "#0a1f2e");
      ctx.fillStyle = oceanGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Deep ocean details with waves
      for (let i = 0; i < 15000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3;
        const opacity = Math.random() * 0.4;
        ctx.fillStyle = `rgba(80, 120, 160, ${opacity})`;
        ctx.fillRect(x, y, size, size);
      }

      // Land colors with altitude variation
      const landColors = {
        beach: "#c2a878",
        lowland: "#3d6b1f",
        midland: "#2a5c1e",
        highland: "#1a4d1a",
        mountain: "#8b6f47",
        snowpeak: "#ffffff",
      };

      // Helper to draw realistic landmasses
      const drawContinent = (x, y, radiusX, radiusY, rotation, color) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      };

      // Draw continents with layered detail
      // Africa - with multiple shades for terrain
      drawContinent(2200, 1100, 350, 450, 0.3, landColors.lowland);
      drawContinent(2200, 1050, 300, 400, 0.3, landColors.midland);
      drawContinent(2250, 1150, 100, 150, 0.5, landColors.highland); // Mountains

      // Europe
      drawContinent(2100, 700, 200, 150, 0, landColors.lowland);
      drawContinent(2080, 680, 150, 120, 0.2, landColors.midland);

      // Asia - large and detailed
      drawContinent(2800, 800, 600, 400, -0.2, landColors.lowland);
      drawContinent(2850, 800, 550, 350, -0.2, landColors.midland);
      drawContinent(3000, 650, 200, 250, -0.3, landColors.highland); // Himalayas

      // North America
      drawContinent(800, 700, 400, 380, 0.2, landColors.lowland);
      drawContinent(800, 720, 360, 350, 0.2, landColors.midland);
      drawContinent(700, 600, 100, 150, -0.1, landColors.highland); // Rockies

      // South America
      drawContinent(1100, 1300, 250, 400, 0.1, landColors.lowland);
      drawContinent(1100, 1320, 220, 370, 0.1, landColors.midland);
      drawContinent(1150, 1100, 80, 200, 0.15, landColors.highland); // Andes

      // Australia
      drawContinent(3200, 1400, 280, 220, 0, landColors.lowland);
      drawContinent(3200, 1400, 240, 180, 0, landColors.midland);

      // Greenland
      drawContinent(1950, 300, 120, 180, 0.2, landColors.snowpeak);

      // Antarctica (bottom edge)
      ctx.fillStyle = landColors.snowpeak;
      ctx.fillRect(0, canvas.height - 200, canvas.width, 200);

      // Add coastal details and beaches
      ctx.fillStyle = landColors.beach;
      for (let i = 0; i < 8000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 4;
        ctx.fillRect(x, y, size, size);
      }

      // Add forest/vegetation texture
      ctx.fillStyle = landColors.midland;
      for (let i = 0; i < 20000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2;
        ctx.fillRect(x, y, size, size);
      }

      // Add mountain peaks detail
      ctx.fillStyle = landColors.mountain;
      for (let i = 0; i < 10000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3;
        ctx.globalAlpha = Math.random() * 0.6;
        ctx.fillRect(x, y, size, size);
      }
      ctx.globalAlpha = 1;

      // Add city lights effect (night lights on land)
      ctx.fillStyle = "rgba(255, 200, 100, 0.6)";
      for (let i = 0; i < 8000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1.5;
        ctx.globalAlpha = Math.random() * 0.4;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      return new THREE.CanvasTexture(canvas);
    };

    // Enhanced bump map with terrain variation
    const createBumpMap = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 2048; // Higher resolution for better terrain detail
      canvas.height = 1024;
      const ctx = canvas.getContext("2d");

      // Dark base for ocean depths
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Mountain ranges with Perlin-like noise simulation
      // Add concentrated bumps for major mountain ranges
      const mountainRanges = [
        { x: 3000, y: 650, intensity: 0.8, radius: 300 }, // Himalayas
        { x: 700, y: 600, intensity: 0.7, radius: 200 }, // Rockies
        { x: 1150, y: 1100, intensity: 0.75, radius: 250 }, // Andes
        { x: 2250, y: 1150, intensity: 0.6, radius: 180 }, // East African mountains
      ];

      mountainRanges.forEach((range) => {
        for (let i = 0; i < 5000; i++) {
          const angle = Math.random() * Math.PI * 2;
          const dist = Math.random() * range.radius;
          const x = range.x + Math.cos(angle) * dist;
          const y = range.y + Math.sin(angle) * dist;
          const radius = Math.random() * 8;
          const intensity = Math.random() * range.intensity;

          ctx.fillStyle = `rgba(255, 255, 255, ${intensity})`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Continental terrain roughness
      for (let i = 0; i < 30000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 4;
        const intensity = Math.random() * 0.6;

        ctx.fillStyle = `rgba(255, 255, 255, ${intensity})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add ocean floor texture (subtle bumps)
      ctx.fillStyle = "rgba(100, 100, 100, 0.3)";
      for (let i = 0; i < 15000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      return new THREE.CanvasTexture(canvas);
    };

    // Globe with enhanced material for better detail visibility
    const globeGeometry = new THREE.SphereGeometry(1, 256, 256); // Even higher detail
    const globeMaterial = new THREE.MeshStandardMaterial({
      map: createEarthTexture(),
      bumpMap: createBumpMap(),
      bumpScale: 0.08, // Increased for more visible terrain
      metalness: 0.1,
      roughness: 0.7,
      envMapIntensity: 1.5,
    });

    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);
    globeRef.current = globe;

    // Try to load Blender 3D globe model (OBJ)
    (async () => {
      try {
        const objLoader = new OBJLoader();
        const textureLoader = new THREE.TextureLoader();

        // Set the base path for OBJ file
        objLoader.setPath("/models/");

        // Load OBJ file without MTL (skip material issues)
        const object = await objLoader.loadAsync("world.obj");

        // Scale and position the loaded model
        object.scale.set(1, 1, 1);
        object.position.set(0, 0, 0);

        // Try to load the compressed landmask texture with error handling
        let earthTexture = null;
        try {
          earthTexture = await textureLoader.loadAsync(
            "/models/landmask4K.png"
          );
          earthTexture.anisotropy = renderer.capabilities.maxAnisotropy;
        } catch (texError) {
          console.warn("⚠️ Could not load landmask texture:", texError.message);
          // Use procedural texture instead
          earthTexture = globeMaterial.map; // Use the procedural canvas texture
        }

        // Apply clean material to all mesh parts
        object.traverse((child) => {
          if (child.isMesh) {
            // Dispose old material if it exists
            if (child.material && child.material.dispose) {
              child.material.dispose();
            }

            // Create clean PBR material with optional texture
            child.material = new THREE.MeshStandardMaterial({
              map: earthTexture,
              color: 0x8888aa,
              metalness: 0.1,
              roughness: 0.7,
              side: THREE.FrontSide,
            });
          }
        });

        // Replace procedural globe with loaded model
        scene.remove(globe);

        // Transfer markers from old globe to new globe
        markersRef.current.forEach((marker) => {
          globe.remove(marker);
          object.add(marker);
        });

        globeGeometry.dispose();
        globeMaterial.dispose();

        scene.add(object);
        globeRef.current = object;

        console.log(
          "✅ Loaded Blender globe model (OBJ) with procedural/compressed texture"
        );
      } catch (e) {
        console.warn(
          "⚠️ Could not load OBJ globe, using procedural instead:",
          e.message
        );
        // Keep the procedural globe if OBJ fails
      }
    })();

    // Try to replace the placeholder with high-resolution photographic textures (if available)
    (async () => {
      try {
        const loader = new THREE.TextureLoader();
        const tryLoad = (url) =>
          new Promise((resolve) =>
            loader.load(
              url,
              (t) => resolve(t),
              undefined,
              () => resolve(null)
            )
          );

        const [dayMap, bumpMap, specMap, cloudMap] = await Promise.all([
          tryLoad("/textures/earth_daymap.jpg"),
          tryLoad("/textures/earth_bump.jpg"),
          tryLoad("/textures/earth_specular.jpg"),
          tryLoad("/textures/earth_clouds.png"),
        ]);

        let updated = false;
        if (dayMap) {
          globeMaterial.map = dayMap;
          updated = true;
        }
        if (bumpMap) {
          globeMaterial.bumpMap = bumpMap;
          globeMaterial.bumpScale = 0.05;
          updated = true;
        }
        if (specMap) {
          globeMaterial.specularMap = specMap;
          updated = true;
        }
        if (updated) globeMaterial.needsUpdate = true;

        if (cloudMap) {
          const cloudMaterial = new THREE.MeshLambertMaterial({
            map: cloudMap,
            transparent: true,
            depthWrite: false,
            opacity: 0.8,
          });
          const cloudMesh = new THREE.Mesh(
            new THREE.SphereGeometry(1.015, 128, 128),
            cloudMaterial
          );
          cloudMesh.renderOrder = 1;
          scene.add(cloudMesh);
        }
      } catch (e) {
        // ignore if textures not present or fail to load
      }
    })();

    // Atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(1.01, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      transparent: true,
    });

    const starsVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Enhanced lighting to show terrain detail better
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Main directional light from the sun
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(8, 5, 8);
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Fill light to add depth
    const fillLight = new THREE.DirectionalLight(0x8899ff, 0.4);
    fillLight.position.set(-8, -3, 5);
    scene.add(fillLight);

    // Point light for additional highlights
    const pointLight = new THREE.PointLight(0xffffff, 0.6);
    pointLight.position.set(-5, 3, 5);
    scene.add(pointLight);

    // Country markers will be added later when countriesData arrives.
    // markersRef.current and markerMeshesRef.current will be populated by a separate effect.

    // Mouse interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      rotationVelocity = { x: 0, y: 0 };
    };

    const onMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        rotationVelocity.x = deltaY * 0.005;
        rotationVelocity.y = deltaX * 0.005;

        // Rotate the current globe (could be procedural or OBJ)
        const currentGlobe = globeRef.current || globe;
        currentGlobe.rotation.y += rotationVelocity.y;
        currentGlobe.rotation.x += rotationVelocity.x;
        currentGlobe.rotation.x = Math.max(
          -Math.PI / 2,
          Math.min(Math.PI / 2, currentGlobe.rotation.x)
        );

        // Markers are now children of the globe, so they rotate automatically
        // No need to manually rotate them anymore

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseClick = (e) => {
      if (
        Math.abs(e.clientX - previousMousePosition.x) > 5 ||
        Math.abs(e.clientY - previousMousePosition.y) > 5
      ) {
        return;
      }

      const rect = renderer.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        markerMeshesRef.current || []
      );
      console.log("🔎 Click raycast", {
        clientX: e.clientX,
        clientY: e.clientY,
        rect,
        mouse,
        intersectsCount: intersects.length,
        firstIntersect: intersects[0]?.object,
      });

      if (intersects.length > 0) {
        const first = intersects[0].object;
        const clickedMarker = markersRef.current.find((m) =>
          m.children.some((child) => child === first)
        );

        console.log("🔔 Clicked marker candidate:", { clickedMarker });

        if (clickedMarker) {
          handleCountryClick(clickedMarker.userData.country);
        }
      }
    };

    // support both mouse and pointer events (better touch support)
    renderer.domElement.addEventListener("mousedown", onMouseDown);
    renderer.domElement.addEventListener("mousemove", onMouseMove);
    renderer.domElement.addEventListener("mouseup", onMouseUp);
    renderer.domElement.addEventListener("click", onMouseClick);
    // pointer events
    renderer.domElement.addEventListener("pointerdown", onMouseDown);
    renderer.domElement.addEventListener("pointermove", onMouseMove);
    renderer.domElement.addEventListener("pointerup", onMouseUp);

    // Animation
    let animationId;
    let frameCount = 0;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      frameCount++;

      // Log first few frames to confirm animation is running
      if (frameCount === 1) {
        console.log("🎬 Animation started, frame 1");
      }
      if (frameCount === 10) {
        console.log("🎬 Animation running, frame 10 - globe should be visible");
      }

      if (!isDragging) {
        globe.rotation.y += 0.0005;
        markersRef.current.forEach((marker) => (marker.rotation.y += 0.0005));
        rotationVelocity.x *= 0.95;
        rotationVelocity.y *= 0.95;
      }

      markersRef.current.forEach((marker, index) => {
        const glow = marker.children[2];
        if (glow) {
          const time = Date.now() * 0.001;
          glow.material.opacity = 0.3 + Math.sin(time + index) * 0.2;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousedown", onMouseDown);
      renderer.domElement.removeEventListener("mousemove", onMouseMove);
      renderer.domElement.removeEventListener("mouseup", onMouseUp);
      renderer.domElement.removeEventListener("click", onMouseClick);
      // pointer events
      renderer.domElement.removeEventListener("pointerdown", onMouseDown);
      renderer.domElement.removeEventListener("pointermove", onMouseMove);
      renderer.domElement.removeEventListener("pointerup", onMouseUp);
      try {
        if (typeof removeWheel === "function") removeWheel();
      } catch (e) {
        /* ignore */
      }

      cancelAnimationFrame(animationId);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      globeGeometry.dispose();
      globeMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // When countriesData changes, add/update markers on the globe (scene must be initialized first)
  useEffect(() => {
    if (!sceneRef.current) return;

    // cleanup previous markers
    try {
      markersRef.current.forEach((m) => {
        sceneRef.current.remove(m);
        // dispose geometries and materials
        m.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach((mat) => mat.dispose && mat.dispose());
            } else {
              obj.material.dispose && obj.material.dispose();
            }
          }
        });
      });
    } catch (e) {
      // ignore
    }

    const markers = [];
    const markerMeshes = [];
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#FFE66D",
      "#95E1D3",
      "#F38181",
      "#AA96DA",
      "#FCBAD3",
      "#A8E6CF",
      "#FFD3B6",
      "#FFAAA5",
    ];

    countriesData.forEach((country, index) => {
      if (!isFinite(country.lat) || !isFinite(country.lon)) return;
      const pinGroup = new THREE.Group();
      const color = colors[index % colors.length];

      const stickGeometry = new THREE.CylinderGeometry(0.008, 0.008, 0.12, 8);
      const stickMaterial = new THREE.MeshBasicMaterial({ color });
      const stick = new THREE.Mesh(stickGeometry, stickMaterial);
      stick.position.y = 0.06;
      pinGroup.add(stick);

      const headGeometry = new THREE.SphereGeometry(0.025, 16, 16);
      const headMaterial = new THREE.MeshBasicMaterial({ color });
      const head = new THREE.Mesh(headGeometry, headMaterial);
      head.position.y = 0.135;
      pinGroup.add(head);

      const glowGeometry = new THREE.SphereGeometry(0.035, 16, 16);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.3,
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.position.y = 0.135;
      pinGroup.add(glow);

      const phi = (90 - country.lat) * (Math.PI / 180);
      const theta = (country.lon + 180) * (Math.PI / 180);
      const radius = 1.02;
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      pinGroup.position.set(x, y, z);

      // Rotate marker to point outward from globe surface (radial direction)
      // This uses quaternion to rotate from default Y-up to point in direction of position
      const normal = new THREE.Vector3(x, y, z).normalize();
      pinGroup.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0), // Default up (Y-axis)
        normal // Point radially outward
      );

      pinGroup.userData = { country: country.name, color };

      // Add marker as child of globe so it rotates with the globe
      if (globeRef.current) {
        globeRef.current.add(pinGroup);
      } else {
        sceneRef.current.add(pinGroup);
      }

      markers.push(pinGroup);
      markerMeshes.push(head, stick, glow);
    });

    markersRef.current = markers;
    markerMeshesRef.current = markerMeshes;
    console.log(`🗺️ Added ${markers.length} country markers to globe`);
  }, [countriesData]);

  const getWeatherIcon = (description) => {
    if (!description) return Sun;
    const desc = description.toLowerCase();
    if (desc.includes("rain") || desc.includes("drizzle")) return CloudRain;
    if (desc.includes("cloud") || desc.includes("overcast")) return Cloud;
    if (desc.includes("snow") || desc.includes("sleet")) return Snowflake;
    if (desc.includes("wind")) return Wind;
    if (desc.includes("clear") || desc.includes("sunny")) return Sun;
    return Cloud;
  };

  const countryWeatherData = weatherData.find(
    (w) => w.country === selectedCountry
  );
  const userWeathersForCountry = userWeatherData.filter((w) =>
    countryWeatherData?.cities.some(
      (city) =>
        city.cityName === w.cityName ||
        (Math.abs(city.lat - w.lat) < 0.1 && Math.abs(city.lon - w.lon) < 0.1)
    )
  );

  if (loading) {
    return (
      <div className="flex h-screen bg-gray-900 text-white">
        {/* Globe Container - still render it behind the loading screen */}
        <div className="flex-1 relative">
          <div ref={mountRef} className="w-full h-full" />

          {/* Loading overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-white text-xl">Loading weather data...</p>
              <p className="text-gray-400 text-sm mt-2">
                This may take a moment
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Globe Container */}
      <div className="flex-1 relative">
        {/* Make the globe canvas fixed to the viewport so it doesn't affect document layout */}
        <div
          ref={mountRef}
          className="w-full h-full"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        />

        {/* Top Left - User Info */}
        <div
          style={{ zIndex: 10 }}
          className="absolute top-4 left-4 bg-gray-800 bg-opacity-95 p-4 rounded-lg max-w-xs shadow-xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <GlobeIcon className="w-6 h-6 text-blue-400" />
            <h2 className="text-lg font-bold">Weather Globe</h2>
          </div>
          {isAuthenticated ? (
            <div className="space-y-2">
              <p className="text-sm text-gray-300">
                <span className="font-semibold">{user?.username}</span>
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleLogout}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 rounded transition text-sm"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
                <button
                  onClick={handleRefreshWeather}
                  className="flex items-center justify-center px-3 py-2 bg-green-600 hover:bg-green-700 rounded transition text-sm"
                  title="Refresh weather data"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <button
                onClick={() => navigate("/login")}
                className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded transition text-sm"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded transition text-sm"
              >
                Register
              </button>
            </div>
          )}
        </div>

        {/* Bottom Left - Countries List */}
        <div
          style={{ zIndex: 10, pointerEvents: "auto" }}
          className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-95 p-3 rounded-lg max-w-xs max-h-96 overflow-y-auto shadow-xl"
        >
          <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Countries ({countriesData.length})
          </h3>

          {/* Search */}
          <div className="mb-2 relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-2 py-1 bg-gray-700 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-1 max-h-64 overflow-y-auto">
            {filteredCountries.slice(0, 50).map((c, idx) => (
              <button
                key={idx}
                onClick={() => handleCountryClick(c.name)}
                className={`w-full text-left px-2 py-1 rounded text-xs hover:bg-gray-700 transition ${
                  selectedCountry === c.name ? "bg-blue-600" : ""
                }`}
              >
                {c.name} ({c.cityCount} cities)
              </button>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div
          style={{ zIndex: 10, pointerEvents: "auto" }}
          className="absolute top-4 right-4 bg-gray-800 bg-opacity-95 p-3 rounded-lg max-w-xs shadow-xl"
        >
          <h3 className="text-sm font-bold mb-2">How to use</h3>
          <ul className="text-xs text-gray-300 space-y-1">
            <li>🖱️ Drag to rotate the globe</li>
            <li>📍 Click markers to view countries</li>
            <li>🏙️ Select cities to see weather</li>
            <li>➕ Add your weather observations</li>
            <li>👍 Vote on weather reports</li>
          </ul>
        </div>
      </div>
      {/* Sidebar - Country/City Details */}
      {selectedCountry && (
        <div
          className="w-96 bg-gray-800 border-l border-gray-700 overflow-y-auto"
          style={{ position: "relative", zIndex: 20, pointerEvents: "auto" }}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedCountry}</h2>
              <button
                onClick={() => {
                  setSelectedCountry(null);
                  setSelectedCity(null);
                  setShowAddWeather(false);
                }}
                className="p-2 hover:bg-gray-700 rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cities List */}
            {!selectedCity && countryWeatherData && (
              <div className="space-y-3">
                <h3 className="font-bold text-lg">
                  Cities ({countryWeatherData.cities.length})
                </h3>
                <div className="grid gap-2">
                  {countryWeatherData.cities.map((city) => {
                    const WeatherIcon = getWeatherIcon(city.description);
                    return (
                      <button
                        key={city.id}
                        onClick={() => handleCityClick(city)}
                        className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition text-left"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <WeatherIcon className="w-6 h-6 text-yellow-400" />
                            <div>
                              <div className="font-semibold">
                                {city.cityName}
                              </div>
                              <div className="text-xs text-gray-400 capitalize">
                                {city.description || "No data"}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">
                              {city.temperature
                                ? `${Math.round(city.temperature)}°C`
                                : "N/A"}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* City Detail */}
            {selectedCity && (
              <div className="space-y-4">
                <button
                  onClick={() => setSelectedCity(null)}
                  className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 mb-2"
                >
                  ← Back to cities
                </button>

                {/* City Weather Card */}
                <div className="p-4 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg border border-blue-700">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {React.createElement(
                        getWeatherIcon(selectedCity.description),
                        {
                          className: "w-10 h-10 text-yellow-400",
                        }
                      )}
                      <div>
                        <h3 className="text-xl font-bold">
                          {selectedCity.cityName}
                        </h3>
                        <p className="text-sm text-gray-300 capitalize">
                          {selectedCity.description || "No description"}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold">
                        {selectedCity.temperature
                          ? `${Math.round(selectedCity.temperature)}°`
                          : "N/A"}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="bg-blue-800 bg-opacity-50 p-2 rounded">
                      <div className="flex items-center gap-1 text-gray-300 mb-1">
                        <Droplets className="w-4 h-4" />
                        <span className="text-xs">Humidity</span>
                      </div>
                      <div className="font-semibold">
                        {selectedCity.humidity || 0}%
                      </div>
                    </div>
                    <div className="bg-blue-800 bg-opacity-50 p-2 rounded">
                      <div className="flex items-center gap-1 text-gray-300 mb-1">
                        <WindIcon className="w-4 h-4" />
                        <span className="text-xs">Wind</span>
                      </div>
                      <div className="font-semibold">
                        {selectedCity.windSpeed || 0} km/h
                      </div>
                    </div>
                    <div className="bg-blue-800 bg-opacity-50 p-2 rounded">
                      <div className="flex items-center gap-1 text-gray-300 mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-xs">Location</span>
                      </div>
                      <div className="font-semibold text-xs">
                        {selectedCity.lat.toFixed(2)},{" "}
                        {selectedCity.lon.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-gray-400">
                    Last updated:{" "}
                    {new Date(selectedCity.updatedAt).toLocaleString()}
                  </div>
                </div>

                {/* Add Weather Button */}
                {isAuthenticated && !showAddWeather && (
                  <button
                    onClick={() => {
                      setNewWeather({
                        cityName: selectedCity.cityName,
                        lat: selectedCity.lat,
                        lon: selectedCity.lon,
                        temperature: 25,
                        description: "Clear sky",
                        humidity: 50,
                        windSpeed: 5,
                      });
                      setShowAddWeather(true);
                    }}
                    className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center gap-2 transition"
                  >
                    <Plus className="w-5 h-5" />
                    Add Weather Report for {selectedCity.cityName}
                  </button>
                )}

                {/* Add/Edit Weather Form */}
                {showAddWeather && (
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h3 className="font-bold mb-3">
                      {editingWeather
                        ? "Edit Weather Report"
                        : "Add Weather Report"}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm mb-1">City</label>
                        <input
                          type="text"
                          value={newWeather.cityName}
                          className="w-full p-2 bg-gray-600 rounded text-white"
                          disabled
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-sm mb-1">Latitude</label>
                          <input
                            type="number"
                            step="0.01"
                            value={newWeather.lat}
                            onChange={(e) =>
                              setNewWeather({
                                ...newWeather,
                                lat: parseFloat(e.target.value),
                              })
                            }
                            className="w-full p-2 bg-gray-600 rounded text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-1">
                            Longitude
                          </label>
                          <input
                            type="number"
                            step="0.01"
                            value={newWeather.lon}
                            onChange={(e) =>
                              setNewWeather({
                                ...newWeather,
                                lon: parseFloat(e.target.value),
                              })
                            }
                            className="w-full p-2 bg-gray-600 rounded text-white"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm mb-1">
                          Description
                        </label>
                        <select
                          value={newWeather.description}
                          onChange={(e) =>
                            setNewWeather({
                              ...newWeather,
                              description: e.target.value,
                            })
                          }
                          className="w-full p-2 bg-gray-600 rounded text-white"
                        >
                          <option value="Clear sky">Clear sky</option>
                          <option value="Few clouds">Few clouds</option>
                          <option value="Scattered clouds">
                            Scattered clouds
                          </option>
                          <option value="Broken clouds">Broken clouds</option>
                          <option value="Overcast clouds">
                            Overcast clouds
                          </option>
                          <option value="Light rain">Light rain</option>
                          <option value="Moderate rain">Moderate rain</option>
                          <option value="Heavy rain">Heavy rain</option>
                          <option value="Snow">Snow</option>
                          <option value="Thunderstorm">Thunderstorm</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm mb-1">
                          Temperature (°C)
                        </label>
                        <input
                          type="number"
                          value={newWeather.temperature}
                          onChange={(e) =>
                            setNewWeather({
                              ...newWeather,
                              temperature: parseFloat(e.target.value),
                            })
                          }
                          className="w-full p-2 bg-gray-600 rounded text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">
                          Humidity (%)
                        </label>
                        <input
                          type="number"
                          value={newWeather.humidity}
                          onChange={(e) =>
                            setNewWeather({
                              ...newWeather,
                              humidity: parseInt(e.target.value),
                            })
                          }
                          className="w-full p-2 bg-gray-600 rounded text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">
                          Wind Speed (km/h)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          value={newWeather.windSpeed}
                          onChange={(e) =>
                            setNewWeather({
                              ...newWeather,
                              windSpeed: parseFloat(e.target.value),
                            })
                          }
                          className="w-full p-2 bg-gray-600 rounded text-white"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={
                            editingWeather
                              ? handleUpdateWeather
                              : handleAddWeather
                          }
                          className="flex-1 py-2 bg-green-600 hover:bg-green-700 rounded transition"
                        >
                          {editingWeather ? "Update" : "Submit"}
                        </button>
                        <button
                          onClick={() => {
                            setShowAddWeather(false);
                            setEditingWeather(null);
                          }}
                          className="flex-1 py-2 bg-gray-600 hover:bg-gray-500 rounded transition"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* User Reports Section */}
                <div className="space-y-3">
                  <h3 className="font-bold text-lg flex items-center justify-between">
                    <span>User Reports</span>
                    <span className="text-sm font-normal text-gray-400">
                      (
                      {
                        userWeathersForCountry.filter(
                          (w) => w.cityName === selectedCity.cityName
                        ).length
                      }
                      )
                    </span>
                  </h3>

                  {userWeathersForCountry.filter(
                    (w) => w.cityName === selectedCity.cityName
                  ).length === 0 ? (
                    <p className="text-gray-400 text-sm">
                      No user reports yet. Be the first to add one!
                    </p>
                  ) : (
                    userWeathersForCountry
                      .filter((w) => w.cityName === selectedCity.cityName)
                      .sort((a, b) => b.votes - a.votes)
                      .map((weather) => {
                        const WeatherIcon = getWeatherIcon(weather.description);
                        const isOwner = user?.id === weather.userId;

                        return (
                          <div
                            key={weather.id}
                            className="p-4 bg-gray-700 rounded-lg"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <WeatherIcon className="w-8 h-8 text-yellow-400" />
                                <div>
                                  <div className="font-semibold capitalize">
                                    {weather.description}
                                  </div>
                                  <div className="text-2xl font-bold">
                                    {Math.round(weather.temperature)}°C
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    by {weather.User?.username || "Unknown"}
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={() => handleVote(weather.id)}
                                className="flex flex-col items-center gap-1 p-2 hover:bg-gray-600 rounded transition"
                              >
                                <ThumbsUp className="w-5 h-5 text-blue-400" />
                                <span className="text-sm font-bold">
                                  {weather.votes}
                                </span>
                              </button>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                              <div>
                                <span className="text-gray-400">Humidity:</span>{" "}
                                {weather.humidity}%
                              </div>
                              <div>
                                <span className="text-gray-400">Wind:</span>{" "}
                                {weather.windSpeed} km/h
                              </div>
                            </div>

                            {isOwner && (
                              <div className="flex gap-2 pt-2 border-t border-gray-600">
                                <button
                                  onClick={() => startEdit(weather)}
                                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-700 rounded transition text-sm"
                                >
                                  <Edit className="w-4 h-4" />
                                  Edit
                                </button>
                                <button
                                  onClick={() =>
                                    handleDeleteWeather(weather.id)
                                  }
                                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-red-600 hover:bg-red-700 rounded transition text-sm"
                                >
                                  <Trash2 className="w-4 h-4" />
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
