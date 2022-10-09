const express = require('express');
const router = express.Router();
const { Reservation } = require('../models');

router.get('/', async(req, res)=>{
    const page = 'schedule';
    const data = await Reservation.findAll({
        where:{
            reservation_status: 'disetujui'
        }
    });
    res.json(data);
    // res.render("../public/schedule/index",{
    //     page: page
    // });
});

module.exports = router;