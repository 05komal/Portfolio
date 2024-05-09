// JavaScript file (script.js)

// Function to add a new project card to the Projects section
function addProject(title, description) {
    const projectsSection = document.getElementById('projects');
    
    // Create a new card element
    const card = document.createElement('div');
    card.classList.add('card');
    
    // Create card body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    
    // Set title and description
    const titleElement = document.createElement('h5');
    titleElement.classList.add('card-title');
    titleElement.textContent = title;
    
    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('card-text');
    descriptionElement.textContent = description;
    
    // Append title and description to card body
    cardBody.appendChild(titleElement);
    cardBody.appendChild(descriptionElement);
    
    // Append card body to card
    card.appendChild(cardBody);
    
    // Append card to projects section
    projectsSection.appendChild(card);
  }
  
  // Add event listener for adding new project
  document.getElementById('add-project-btn').addEventListener('click', function() {
    const title = prompt('Enter project title:');
    const description = prompt('Enter project description:');
    
    // Call addProject function with user input
    if (title && description) {
      addProject(title, description);
    } else {
      alert('Title and description are required.');
    }
  });
  