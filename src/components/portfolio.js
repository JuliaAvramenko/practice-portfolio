console.log("hi");
const leftPointer = document.querySelector(".portfolio__left-pointer");
const rightPointer = document.querySelector(".portfolio__right-pointer");
leftPointer.addEventListener("click", (evt) => {
    console.log("im a left button")
    // получить текущую карточку

    let index = projects.indexOf(currentProject);
    if (index === 0) {
        index = projects.length - 1
    } else {
        index = index - 1
    }

    const nextProject = projects[index];
    console.log(nextProject);
    showProject(nextProject);


})
rightPointer.addEventListener("click", (evt) => {
    console.log("im a right button")
    let index = projects.indexOf(currentProject);
    if (index === projects.length - 1) {
        index = 0
    } else {
        index = index + 1
    }
    const nextProject = projects[index];
    console.log(nextProject);
    showProject(nextProject);


})
let currentProject = null;

const projects = [{
    header: "Mesto",
    description: "Описание 1",
    link: "https://juliaavramenko.github.io/mesto-project-bootcamp/"

}, {
    header: "How to learn",
    description: "Описание 2",
    link: "https://juliaavramenko.github.io/how-to-learn-bootcamp/"
}, {
    header: "Travel",
    description: "Описание 3",
    link: "https://juliaavramenko.github.io/russian-travel-JUL-LIA/"
}
]




const newprojectSubtitle = document.querySelector(".portfolio__subtitle");
const newprojectAbout = document.querySelector(".portfolio__about");
const newProjectIframe = document.querySelector(".portfolio__iframe");


function showProject(project) {

    currentProject = project;



    newprojectSubtitle.textContent = project.header;
    newprojectAbout.textContent = project.description;
    newProjectIframe.src = project.link;


}

showProject(projects[0]);





/* const projectElementFragmentTemplate = document.querySelector(".portfolio__template").content;
const projectElementInfoTemplate = projectElementFragmentTemplate.querySelector(".portfolio__info");


const projectNode = document.querySelector(".portfolio__container");



function showProject(project) {
    const newInfo = projectElementInfoTemplate.cloneNode(true);
    currentProject = project;

    const newInfoContainer = newInfo.querySelector(".portfolio__info-container")


    const newprojectSubtitle = newInfoContainer.querySelector(".portfolio__subtitle");
    const newprojectAbout = newInfoContainer.querySelector(".portfolio__about");
    const newProjectIframe = newInfo.querySelector(".portfolio__iframe");


    newprojectSubtitle.textContent = project.header;
    newprojectAbout.textContent = project.description;
    newProjectIframe.src = project.link;

    const sidePointers = projectNode.querySelector(".portfolio__side-pointers");
    projectNode.insertBefore(newInfoContainer, sidePointers);
    projectNode.insertBefore(newProjectIframe, sidePointers);

}

showProject(projects[0]);
*/