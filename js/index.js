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
    {name: "HTML", icon: "fa-brands fa-html5"},
    {name: "CSS", icon: "fa-brands fa-css3-alt"}, 
    {name: "JavaScript", icon: "fa-brands fa-js"},
    {name: "React", icon: "fa-brands fa-react"}, 
    {name: "TypeScript", icon: "devicon-typescript-plain"},
    {name: "Tailwind", icon: "devicon-tailwindcss-original"},
    {name: "Postgres", icon: "devicon-postgresql-plain"},
    {name: "Node", icon: "fa-brands fa-node-js"},
    {name: "Express", icon: "devicon-express-original colored"},
    {name: "oAuth", icon: "devicon-oauth-plain"},
    {name: "Git", icon: "fa-brands fa-git"},
    {name: "Github", icon: "fa-brands fa-github"},
    {name: "Figma", icon: "fa-brands fa-figma"},
    {name: "Java",  icon: "fa-brands fa-java"}, 
    {name: "Python", icon: "fa-brands fa-python"}, 
    {name: "Swift", icon: "fa-brands fa-swift"},
    {name: "C++", icon: "devicon-cplusplus-plain"},
    {name: "Jira", icon: "fa-brands fa-jira"},
    {name: "Slack", icon: "fa-brands fa-slack"}
];

// Get skills section - skillsSection
const skillsSection = document.querySelector("#skills");
// Get ul in skills - skillsList
const skillsList = skillsSection.querySelector("ul");

// Create for loop to go over skills Array
for(let i = 0; i < skills.length; i++){
    // Create li element
    const skill = document.createElement("li");
    // Creating i for the icons
    const icon = document.createElement("i");
    // i needs to match this formatt: <i class="fa-brands fa-slack"></i>
    icon.className = skills[i].icon;
    // Creating spand for the text
    const text = document.createElement("span");
    // Set inner text to the skill in the array of i
    text.innerText = skills[i].name;

    // Append icon to skill
    skill.appendChild(icon);
    skill.appendChild(text);
    skillsList.appendChild(skill);
}