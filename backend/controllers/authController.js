const register = (req, res) => {
    res.json({
        message: "Register API Working"
    });
};

const login = (req, res) => {
    res.json({
        message: "Login API Working"
    });
};

module.exports = {
    register,
    login
};