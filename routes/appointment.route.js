const express = require('express')
const router = express.Router()
const appointmentController = require('../controllers/appointment.controller')

const verifyToken = require('../middlewares/auth.middleware').verifyToken
const verifyRoles = require('../middlewares/auth.middleware').verifyRoles

router.get('/',verifyToken, verifyRoles("ADMIN"), appointmentController.findAllAppointments)
router.post('/book', verifyToken, appointmentController.bookAppointment); 
router.get('/user', verifyToken, appointmentController.getAppointments);  
router.delete('/cancel/:id', verifyToken, appointmentController.cancelAppointment); 


module.exports = router