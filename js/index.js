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

// Create variable : messageForm (leave_message)
const messageForm = document.querySelector('form[name="leave_message"]');

// Add event listener for submit
messageForm.addEventListener("submit", function (event){
    // Adding prevent default refreshing behavior
    event.preventDefault();
    // Create 3 new variables, one for each field
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    // Use console log to log it out
    console.log(`Name: ${usersName}`);
    console.log(`Email: ${usersEmail}`);
    console.log(`Message: ${usersMessage}`);

    // Create variable messageSection = select by id
    const messageSection = document.getElementById("messages");
    // Create variable messageList = select by element
    const messageList = messageSection.querySelector("ul");
    // Create variable newMessage = create a new li element
    const newMessage = document.createElement("li");

    /***
     * Set newMessage inner HTML to: 
     * <a> element that displays the "usersName" and is a clickable link to the "usersEmail" (hint: use the mailto: prefix)
     * <span> element that displays the "usersMessage" 
     *** */
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span>${usersMessage}</span>
    `;
    
    // Stretch goal: Add edit button
    // Create a edit button 
    const editButton = document.createElement("button");

    // Set editButton text to edit / icon
    editButton.innerHTML = '<i class="fa-solid fa-pencil"></i>';

    // Set editButton type to button
    editButton.type = "button";

    // Add event listener to editButton
    editButton.addEventListener("click", function() {
        // Get the span inside the current message
        const messageText = newMessage.querySelector("span");
        // Open up the prompt with the current message
        const updatedMessage = prompt("Edit your message:", messageText.textContent);
        // Update the message with what the user typed in the prompt
        messageText.textContent = updatedMessage;
    });

    // Create a removeButton = makes a new button element
    const removeButton = document.createElement("button");

    // Set removeButton innerText  to "remove"
    removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    // Adding aria-label
    removeButton.setAttribute('aria-label', 'remove');
    
    // set removeButton type to "button"
    removeButton.type = "button";

    // Add event listener to removeButton
    removeButton.addEventListener("click", function() {
        // Create variable entry = find the parent element
        const entry = removeButton.parentNode;

        // Remove entry element
        entry.remove();
    })

    // Append edit button to newMessage
    newMessage.appendChild(editButton);

    // Append removeButton to newMessage
    newMessage.appendChild(removeButton);

    // Append newMessage to messageList
    messageList.appendChild(newMessage);

    // Clear the form after
    event.target.reset();
});

// lesson 9 APIs - fetching github API  for projects section
// Create variable projectSection (select by id)
const projectSection = document.getElementById("projects");

// Create variable projectList (query the ul)
const projectList = projectSection.querySelector("ul");

// fetch api `https://api.github.com/users/{GITHUB_USERNAME}/repos` 
// adding query parameter to increase the numbers of repos displayed
// to test the error handling change wk642 to wk1642 to see the message
fetch(`https://api.github.com/users/wk642/repos?per_page=100`)
    // Chain then method
    .then (function(response) {
        // returns the response JSON data
        return response.json();
    })
    // Chain another then method passing in variable, repositories 
    .then (function(repositories) {
        // Console log the values of repositories
        console.log(repositories);

        // Adding filter here so that only my repos, no forked ones I contributed on displays
        const myRepos = repositories.filter(function(repo){
            return repo.owner.login === "wk642" && !repo.fork;
        }) 

        // Create loop to go over each repo starting at 0
        for (let i = 0; i < myRepos.length; i++) {
            // Create variable project (createElement li)
            const project = document.createElement("li");

            // Set innerText of project to repo name with bracket notation
            project.innerText = myRepos[i].name;

            // Append project to projectList
            projectList.appendChild(project);
        }
    })
    // Chain catch for error handling
    .catch(function(error){
        console.log(error);
        projectList.innerHTML = "Sorry, my projects could not load right now. I am working on a fix";
    });
