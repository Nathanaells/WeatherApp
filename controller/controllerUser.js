class ControllersUser {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllersUser;
