// Getting body elmeent so that there is a parent element for footer
const body = document.querySelector("body");
// Add a footer element 
const footerElement = document.createElement("footer");
// Append footer element to body
body.appendChild(footerElement);

// Create a new date object
const today = new Date();
// Get current year
const thisYear = today.getFullYear();

// Get footer element
const footer = document.querySelector("footer");
// Create copyright with p
const copyright = document.createElement("p");
// Set inner html to display name and current year
// add unicode for copyright symbol
copyright.innerHTML = (`\u00A9 Winnie Kelley ${thisYear}`);
// Append copyright element to footer
footer.appendChild(copyright);

// Creating list of skills
const skills = [
    "HTML", 
    "CSS", 
    "JavaScript", 
    "React", 
    "React Native", 
    "TypeScript", 
    "Postgres", 
    "Node", 
    "Express",
    "Java", 
    "Python", 
    "Swift", 
    "C++"
];

// Get skills section - skillsSection
const skillsSection = document.querySelector("#skills");
// Get ul in skills - skillsList
const skillsList = skillsSection.querySelector("ul");

// Create for loop to go over skills Array
for(let i = 0; i < skills.length; i++){
    // Create li element
    const skill = document.createElement("li");
    // Set inner text to the skill in the array of i
    skill.innerText = skills[i];
    // Append skill element to skillsList
    skillsList.appendChild(skill);
}