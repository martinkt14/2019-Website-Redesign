//Define button constants
const frontendBtn = document.querySelector("#skill-frontend");
const backendBtn = document.querySelector("#skill-backend");
const toolsBtn = document.querySelector("#skill-tools");

//Select all buttons
const buttons = document.querySelectorAll(".skill-btn");

//Define skillset list container
const skillList = document.querySelector("#skill-list");

//Define skills
const skills = document.querySelectorAll(".skillset");
const frontendSkills = document.querySelector("#frontend-skills");
const backendSkills = document.querySelector("#backend-skills");
const toolSkills = document.querySelector("#tool-skills");

//Define utility functions
const changeActiveButton = btn => {
    buttons.forEach(button => {
        button.classList.remove("active-skillset");
    });
    btn.classList.add("active-skillset");
};

const changeSkillset = skillset => {
    skills.forEach(skill => {
        skill.classList.remove("active");
        skill.classList.add("inactive");
    });
    skillset.classList.remove("inactive");
    skillset.classList.add("active");
};

//Define button events
frontendBtn.addEventListener("click", () => {
    changeActiveButton(frontendBtn);
    changeSkillset(frontendSkills);
});

backendBtn.addEventListener("click", () => {
    changeActiveButton(backendBtn);
    changeSkillset(backendSkills);
});

toolsBtn.addEventListener("click", () => {
    changeActiveButton(toolsBtn);
    changeSkillset(toolSkills);
});
