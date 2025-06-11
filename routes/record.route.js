const express = require('express');

const router = express.Router();

const {
    getRecords,
    getSingleRecord,
    getSingleRecordbyName,
    postRecord,
    updateRecord,
    deleteRecord
} = require('../controller/record.controller.js');


router.get('/', getRecords);

router.get('/:id', getSingleRecord);

router.get('/byName/:name', getSingleRecordbyName);

router.post('/', postRecord);

router.put('/:id', updateRecord);

router.delete('/:id', deleteRecord)

module.exports = router;