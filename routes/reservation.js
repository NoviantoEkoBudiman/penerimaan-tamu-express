const express = require('express');
const router = express.Router();
const Validator = require('fastest-validator');
const v = new Validator();
const { Reservation } = require('../models');

router.get('/', function(req, res){
    res.send("this is reservation page");
});


router.post('/create', async(req, res)=>{
    
    const schema={
        reservation_goverment_service: "string|max:55",
        reservation_contact_number: "number|integer",
        reservation_email: "email|max:55",
        reservation_date_start: "string",
        reservation_date_finish: "string"
    };

    const validated = v.validate(req.body, schema);
    
    if(validated.length){
        return res.status(400).json(validated);
    }else{
        await Reservation.create(req.body);
        res.send(req.body);
    }
})

module.exports = router;