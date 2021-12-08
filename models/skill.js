const skills = [
    { id: 123, skill: "CSS", level: 'Proficient' },
    { id: 456, skill: "HTML", level: 'Proficient' },
    { id: 789, skill: "JavaScript", level: 'Proficient' },
];

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
};

function getAll() {
    return skills;
}

function getOne(id) {
    // In the skills array, for each skill, look to see if the id matches the id passed into the function
    return skills.find(skill => skill.id == id);
}


// The skillsObj is starting as our req.body
function create(skillObj) {
    skillObj.id = Math.floor(Math.random() * 1000);
    skillObj.level = 'Proficient';
    skills.push(skillObj);
};

function deleteOne(id) {
    const skillIdx = skills.findIndex(skill => skill.id == id);
    skills.splice(skillIdx, 1);
}

function update(id, value) {
    const skillObj = skills.find(skill => skill.id == id);
    skillObj.skill = value.skill;
    skillObj.level = value.level;
};