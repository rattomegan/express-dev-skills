var express = require('express');
var router = express.Router();

// Require the controller that exports the Skills CRUD functions
const skillsCtrl = require('../controllers/skills');

// GET "/skill" - Index Route
router.get('/', skillsCtrl.index);

// GET "/skills/new" - New Route
router.get('/new', skillsCtrl.new);

// POST "/skills" - Create Route
router.post('/', skillsCtrl.create);

// GET "/skills/:id/edit" - Edit Route
router.get('/:id/edit', skillsCtrl.edit);



// GET "/skills/:id" - Show Route
router.get('/:id', skillsCtrl.show);

// PUT "/skills/:id" - Update Route
router.put('/:id', skillsCtrl.update);

// DELETE "/skills/:id" - Delete Route
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
