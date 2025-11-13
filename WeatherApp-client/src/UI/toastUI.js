import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const showSuccess = (message = "Success") => {
  Toastify({
    text: message,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#00FF7F",
      color: "#FFFFFF",
    },
  }).showToast();
};

const showError = (message = "Error") => {
  Toastify({
    text: message,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#EE4B2B",
      color: "#FFFFFF",
    },
  }).showToast();
};

export { showSuccess, showError };
