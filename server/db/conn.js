const mongoose = require("mongoose");

const DB = 'mongodb+srv://mernStack:rockstar@cluster0.asgk2bx.mongodb.net/mernstack?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(DB);
    console.log("Connection successful");
  } catch (error) {
    console.error("Connection error: ", error);
  }
}

connect();
