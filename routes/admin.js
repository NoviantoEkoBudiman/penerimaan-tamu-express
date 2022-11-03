const express = require('express');
const router = express.Router();
const {Reservation} = require('../models')

router.get('/', async(req, res)=>{
    const page = "all";
    data = await Reservation.findAll();
    res.render('../public/admin/index',{
        data: data,
        page: page
    });
});

router.get('/unread', async(req, res)=>{
    const page = "unread";
    data = await Reservation.findAll({
        where:{
            reservation_read_status: 0
        }
    });
    
    res.render('../public/admin/unread',{
        data: data,
        page: page
    });
});

router.get('/read', async(req, res)=>{
    const page = "read";
    data = await Reservation.findAll({
        where:{
            reservation_read_status: 1
        }
    });
    
    res.render('../public/admin/read',{
        data: data,
        page: page
    });
});

router.get('/process', async(req, res)=>{
    const page = "process";
    data = await Reservation.findAll({
        where:{
            reservation_read_status: 1
        }
    });
    
    res.render('../public/admin/read',{
        data: data,
        page: page
    });
});

router.get('/returned', async(req, res)=>{
    const page = "returned";
    data = await Reservation.findAll({
        where:{
            reservation_read_status: 1
        }
    });
    
    res.render('../public/admin/read',{
        data: data,
        page: page
    });
});

router.get('/revised', async(req, res)=>{
    const page = "revised";
    data = await Reservation.findAll({
        where:{
            reservation_read_status: 1
        }
    });
    
    res.render('../public/admin/read',{
        data: data,
        page: page
    });
});

router.get('/proof', async(req, res)=>{
    const page = "proof";
    data = await Reservation.findAll({
        where:{
            reservation_read_status: 1
        }
    });
    
    res.render('../public/admin/read',{
        data: data,
        page: page
    });
});

router.get('/approved', async(req, res)=>{
    const page = "approved";
    data = await Reservation.findAll({
        where:{
            reservation_read_status: 1
        }
    });
    
    res.render('../public/admin/read',{
        data: data,
        page: page
    });
});

router.get('/innovation', async(req, res)=>{
    const page = "innovation";
    data = await Reservation.findAll({
        where:{
            reservation_read_status: 1
        }
    });
    
    res.render('../public/admin/read',{
        data: data,
        page: page
    });
});


router.get('/inovation', async(req, res)=>{
    res.render('../public/admin/inovation');
});

module.exports = router;