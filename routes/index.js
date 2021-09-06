const express = require("express");
const router = express.Router();
const passport = require("passport");
const userControllers = require("../controllers/userControllers");
const doctorControllers = require("../controllers/doctorControllers");
const patientControllers = require("../controllers/patientControllers");
const appointmentControllers = require("../controllers/appointmentControllers");

router.route("/user").post(userControllers.addUser);

router.route("/doctor").get(doctorControllers.singIn);

router
  .route("/doctor/:id")
  .get(doctorControllers.getDoctorById)
  .put(
    passport.authenticate("jwt", { session: false }),
    doctorControllers.changedDoctor
  ); //llega el id del doc y por token la info del paciente

// router.route('/doctor/perfil')
// .put(doctorControllers.editPerfil)

router
  .route("/patient")
  .get(patientControllers.singIn)
  .put(
    passport.authenticate("jwt", { session: false }),
    patientControllers.putPatient
  );

router
  .route("/patient/:id")
  .put(
    passport.authenticate("jwt", { session: false }),
    patientControllers.addMedicalData
  );

router
  .route("/appointment/:id")

  .post(
    passport.authenticate("jwt", { session: false }),
    appointmentControllers.addAppointment
  );
router
  .route("/appointments")
  .get(
    passport.authenticate("jwt", { session: false }),
    appointmentControllers.getAppointments
  );
module.exports = router;
