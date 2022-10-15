const express = require('express');
const router = express.Router();
const Validator = require('fastest-validator');
const v = new Validator();
const { Reservation } = require('../models');

router.get("/", async(req, res)=>{
    const page = 'reservation';
    res.render('../public/reservation/index',{
        page: page
    });
});

router.get("/reservation", async(req, res)=>{
    const page = 'reservation';
    res.render('../public/reservation/index',{
        page: page
    });
});

router.get('/list_menu', async(req, res)=>{
    const page = 'reservation';
    res.render("../public/reservation/list_menu",{
        page: page
    });
});

router.get('/procedures', async(req, res)=>{
    const page= 'reservation';
    res.render('../public/reservation/procedures', {
        page: page
    });
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
        reservation_date_finish: "string",
        reservation_status: "string",
        reservation_description: "string", 
        reservation_destination: "number"
    };
    
    const check = v.compile(schema);
    const checked = check({
        reservation_goverment_service: req.body.reservation_goverment_service,
        reservation_contact_number: Number(req.body.reservation_contact_number),
        reservation_email: req.body.reservation_email,
        reservation_date_start: req.body.reservation_date_start,
        reservation_date_finish: req.body.reservation_date_finish,
        reservation_status: req.body.reservation_status,
        reservation_description: req.body.reservation_description,
        reservation_destination: req.body.reservation_destination
    });
    
    if(checked){
        await Reservation.create(req.body);
       req.flash('alert', 'Data telah sukses dikirim');
        
        res.redirect('/');
    }else{
        res.redirect('/reservation');
        
    }
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