import { Router } from "express";
import {
  saveDoctors,
  getAllDoctors,
  getDoctorsByCity,
} from "../controllers/doctorController.js";

const router = Router();

router.post("/saveDoctors", async (req, res) => {
  try {
    const doctorsData = req.body;
    await saveDoctors(doctorsData);
    res.status(201).json({ message: "Doctors data saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getAllDoctors", async (req, res) => {
  try {
    const doctors = await getAllDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getDoctorsByCity", async (req, res) => {
  try {
    const { city } = req.query;
    if (!city) {
      return res.status(400).json({ error: "City parameter is required" });
    }

    const doctors = await getDoctorsByCity(city);
    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
