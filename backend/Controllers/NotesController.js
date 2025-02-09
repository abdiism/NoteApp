// import express from "express";
import dotenv from "dotenv";
import Notes from "../models/Notes.js";
import multer from "multer";
import path from "path";

dotenv.config();
const storage = multer.memoryStorage();
var upload = multer({
  storage: storage,
});

const uploadNote = async (req, res) => {
  try {
    const fileName = req.body.file;
    const fileDescription = req.body.description;
    const tags = req.body.tags;
    const file = req.body.file;

    //map the user who uploaded thenote
    const uploadedBy = req.body.userId;
    console.log(uploadedBy);
    //  imika hadaba databaseka gali
    const newFile = new Notes({
      fileName: fileName,
      fileDescription: fileDescription,
      tags: tags,
      files: file,
      uploadedBy: uploadedBy,
    });
    await newFile.save();
    res.send({
      status: "file is uploaded ",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
    console.log(error);
  }
};

const getNote = async (req, res) => {
  try {
    const { title, tag } = req.query; //userka kaqaad titlka io tag fileka
    const query = {}; // kadib masx si markale u qadato
    if (title) {
      query.fileName = {
        $regex: title,
        $options: "i", //wax walbo lamida soo qabanysaa
      };
    }
    if (tag) {
      query.tag = {
        $regex: tag,
        $options: "i",
      };
    }
    //kadip  databseka ka baadh
    const data = await Notes.find(query);
    res.sen({
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

const getNoteByID = async (req, res) => {
  try {
    const userId = req.params.id; //marka hore userka id giisa hel
    console.log(userId);
    //database ka sug kadip
    await Notes.find({ uploadedBy: userId }).then((data) => {
      res.send({ data: data });
    });
  } catch (error) {
    console.log(error);
  }
};

// Exporting as NotesController//mesha ku dhex uruuri wixi quseya
const NotesController = {
  uploadNote,
  getNote,
  getNoteByID,
};

export default NotesController;
