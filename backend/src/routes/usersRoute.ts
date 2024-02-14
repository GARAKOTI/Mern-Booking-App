import express, { Request, Response } from "express";
import User from "../models/userModel";
import jwt from "jsonwebtoken";
import {check, validationResult} from 'express-validator'
const router = express.Router();

router.post("/register",[
  check("firstName", "first Name is required").isString(),
  check("lastName", "last Name is required").isString(),
  check("email", "email is required").isEmail(),
  check("password", "password with 6 or more characters is required").isLength({
    min: 6,
  })

], async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    res.status(400).json({message:errors.array()});
  }
  try {
    let user = await User.findOne({
      email: req.body.email,
    });

    if (user) {
      return res.status(400).json({ message: "User already registered" });
    }
    user = new User(req.body);
    await user.save();

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET_KEY as string,{
        expiresIn: "1d"
      }

    );

    res.cookie("auth_token", token,{
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });
    return res.sendStatus(200).send({message:"User Registered  successfully"});
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
});

export default router