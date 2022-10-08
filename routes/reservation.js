const express = require('express');
const router = express.Router();
const Validator = require('fastest-validator');
const v = new Validator();
const { Reservation } = require('../models');

router.get('/', async(req, res)=>{
    res.render("../public/reservation/index");
});

router.get('/get_data', async(req, res)=>{
    const data = await Reservation.findAll();
    res.send(data);
});

router.get('/edit/:id', async(req, res)=>{
    const id = req.params.id
    const reservation = await Reservation.findByPk(id);

    if(reservation){
        res.send(reservation);
    }else{
        return res.status(404).json({ message: `Data with id ${id} was not found` });
    }
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
    };
});

router.put('/:id', async(req, res)=>{
    const id = req.params.id;

    let reservation = await Reservation.findByPk(id);
    
    if(reservation){
        const schema = {
            reservation_goverment_service: "string|max:55|optional",
            reservation_contact_number: "number|integer|optional",
            reservation_email: "email|max:55|optional",
            reservation_date_start: "string|optional",
            reservation_date_finish: "string|optional"
        };

        const validate = v.validate(req.body, schema);

        if(validate.length){
            return res.status(400).json(validate);
        }else{
            await reservation.update(req.body);
            return res.status(200).json({message: "Data has been update successfully"});
        }

    }else{
        return res.json({message: `There's no data with id: ${id}`});
    }
});

router.delete('/delete/:id', async(req, res)=>{
    const id = req.params.id;
    const reservation = await Reservation.findByPk(id);
    if(reservation){
        await reservation.destroy();
        res.status(200).json({message: `Data with id ${id} has been deleted`});
    }else{
        res.status(400).json({message: `Data with id ${id} not found`});
    }
});

module.exports = router;