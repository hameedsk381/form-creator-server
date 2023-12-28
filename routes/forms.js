const express = require('express');
const router = express.Router();
const formsController = require('../controllers/formsController');

router.get('/', formsController.listAllForms);
router.post('/', formsController.createForm);
router.get('/:id', formsController.getForm);
router.put('/:id', formsController.updateForm);
router.delete('/:id', formsController.deleteForm);

module.exports = router;
