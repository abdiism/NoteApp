import e from "express";
import dotenv from "dotenv";
import { User } from "../models/User.js";
import multer from "multer";

import cloudinary from "cloudinary";
import bcrypt from "bcrypt";

dotenv.config();
const router = e.Router();

//waxansamenaynaa multer ka
const storage = multer.memoryStorage(); //waxan isticmalynaa laptopka storagekisa
var upload = multer({
  storage: storage,
});

const signup = async (req, res) => {
  try {
    const { firstName, lastName, userBio, userEmail, userMobile, userName } =
      req.body;

    //hadii u jiro userka db an ka egno
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      res.status(401).send("User already exists with this email");
    }
    //egayna hadii file ka  ina siyen
    if (!req.file) {
      return res.status(400).json({
        error: "No profile image profided",
      });
    }

    //cloudinary  aan ku  store gareno fileka io sawirkena
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result);

    const password = req.body.userPassword;
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const encryptedPassword = await bcrypt.hash(password, salt);
    console.log("Request Body : ", req.body);

    //imika dbka an galino ,,marka dta da kaso qaaday userkaweye

    const newUser = User({
      firstName,
      lastName,
      userBio,
      userEmail,
      userMobile,
      userName,
      userPassword: encryptedPassword,
      profileImage: result.secure_url,
    });
    await newUser.save();
    return res.status(200).json({
      status: "OK",
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
    console.log(error);
  }
};

//imika aan sameno loginka
const login = async (req, res) => {
  try {
    //login with email n pass
    const { userEmail, userPassword } = req.body;
    const user = await User.findOne({ userEmail }); //qof imalka wata  raadi
    if (user) {
      const passwordMatch = await bcrypt.compare(
        userPassword,
        user.userPassword
      );
      if (passwordMatch) {
        return res.json(user);
      } else {
        return res.json({
          status: "Error password  is incorrect ",
          getUser: false,
        });
      }
    } else {
      return res.json({
        status: "Error email is  incorect",
        getUser: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
    console.log(error);
  }
};

export default { signup, login };
