// the ".." is saying that we want to look one level above our current location instead of writing out the entire path from the home folder
const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    edit,
    update,
    delete: deleteSkill,
}

function newSkill(req, res) {
    res.render('skills/new');
};

function create(req, res) {
    Skill.create(req.body);
    // once skill is created redirect back to skills list page
    res.redirect('/skills');
};

function edit(req, res) {
    let skill = Skill.getOne(req.params.id);
    res.render('skills/edit', { skill } );
};

function update(req, res) {
    Skill.update(req.params.id, req.body);
    res.redirect('/skills');
};

function index(req, res) {
    // We are creating a new variable skills, that is looking into our Skills
    // export object to the key of the getAll function and invoking it. then we are returning that variable within our res.render function.
    let skills = Skill.getAll();
    res.render('skills/index', {
        skills
    });
};

function show(req, res) {
    let skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill } );
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}


