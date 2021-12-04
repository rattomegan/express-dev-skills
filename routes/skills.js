var express = require('express');
var router = express.Router();

// Require the controller that exports the Skills CRUD functions
const skillsCtrl = require('../controllers/skills');

// GET "/todos" - Index Route
router.get('/', skillsCtrl.index);

// GET "/skill/:id" - Show Route
router.get('/:id', skillsCtrl.show)

module.exports = router;
