const express = require('express');
const router = express.Router();
const { Reservation } = require('../models');

router.get('/', async(req, res)=>{
    const page = 'schedule';
    let scheldule = [];

    const data = await Reservation.findAll({
        where:{
            reservation_status: 'disetujui'
        }
    });

    // for(let i=0;i<data.length;i++){
    //     console.log(data[0]);
    // }
    // res.send(data);
    res.render("../public/schedule/index",{
        page: page,
        data: data
    });
});

module.exports = router;