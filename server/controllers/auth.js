const User = require("../models/User")
const { createError } = require ("../utils/error")
const bcrypt = require ("bcryptjs");
const jwt = require("jsonwebtoken")

 
exports.register = async (req, res,next)=> {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hash,
        });
        await newUser.save();
        res.status(200).send("User has been created.")
        }catch (err){
        next(err);
    };
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    // Créez un jeton JWT en incluant le nom et l'adresse e-mail de l'utilisateur
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      process.env.JWT, // Assurez-vous d'utiliser votre propre secret pour le JWT
      { expiresIn: '1h' } // Optionnel : définissez une durée d'expiration pour le jeton
    );

    // Envoyez le jeton JWT dans le cookie ou dans le corps de la réponse, selon votre besoin
    res.cookie("access_token", token, {
      httpOnly: true,
    });

    // Renvoyez le jeton JWT et d'autres détails de l'utilisateur dans la réponse
    res.status(200).json({ token, details: { username: user.username, email: user.email } });
  } catch (err) {
    next(err);
  }
};