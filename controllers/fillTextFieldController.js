const express = require('express');
const router = express.Router();


router.get('/', (req,res) =>{


    const patientId = req.query.pid;
    console.log("Patient ID:", patientId);
    
    res.render('index',{patientId : patientId});
})

module.exports = router;