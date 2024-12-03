const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const {
        patientId,
        smokingHistory,
        drinkingHistory,
        height,
        weight,
        bmi,
        medicalConditions
    } = req.body;

    res.render('patient-data', {
        patientId,
        smokingHistory,
        drinkingHistory,
        height,
        weight,
        bmi,
        medicalConditions
    });
});

module.exports = router; 