const { Router } = require("express");
const { emailValidator } = require("../middleware/emailValidator.js");
const {loginController,signupController} = require("../controller/userController.js");
const { emailPassRequiredValidator } = require("../middleware/emailPasswordRequiredValidator.js");
const { passwordValidator } = require("../middleware/passwordValidator.js");
const userRouter = Router();

userRouter.post("/api/users/signup",[emailPassRequiredValidator, emailValidator, passwordValidator], signupController);
userRouter.post("api/users/login", [emailPassRequiredValidator, emailValidator, passwordValidator], loginController);

module.exports = { userRouter };
