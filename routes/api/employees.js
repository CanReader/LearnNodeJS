const express = require('express');
const router = express.Router();
const path = require('path');

const data = {};
data.employees = require('../../data/employees.json');

router.route('/')
.get((req,res) => {
    res.json(data.employees);
})
.post((req,res) =>{
    res.json({
        "first":req.body.first,
        "last":req.body.last
    });
});

router.route('/:id')
.get((req,res) => {
    res.json(data.employees[req.params.id-1]);
})

module.exports = router;