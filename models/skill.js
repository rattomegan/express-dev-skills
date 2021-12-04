const skills = [
    { id: 001, skill: "JavaScript", proficiency: 'basic' },
    { id: 002, skill: "HTML", proficiency: 'basic' },
    { id: 003, skill: "CSS", proficiency: 'basic' },
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
}

function getOne(id) {
    // In the skills array, for each skill, look to see if the id matches the id passed into the function
    return skills.find(skill => skill.id == id);
}
