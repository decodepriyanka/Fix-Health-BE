import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import doctorRoute from "./routes/doctorRoutes.js";
import formData from "express-form-data";

dotenv.config();

const app = express();
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(formData.parse());

app.use("/api/doctor", doctorRoute);

const PORT = process.env.PORT || 8000;
const MONGO_URI =
  "mongodb+srv://priyankayadav7282:priyanka-123@cluster0.lpynemr.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
