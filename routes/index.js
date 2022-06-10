const express = express('express');

const router = express.Router();

router.get('/', profesionalController.getData);

module.exports = router; 