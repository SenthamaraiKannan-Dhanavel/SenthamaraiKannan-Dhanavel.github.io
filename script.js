// Toggle Dark Mode
const themeToggleButton = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

themeToggleButton.addEventListener('click', () => {
    // Toggle dark mode class on body
    document.body.classList.toggle('dark-mode');

    // Check if dark mode is active
    if (document.body.classList.contains('dark-mode')) {
        // Show moon icon, hide sun icon
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        
        // Set navbar background for dark mode
        document.querySelector('.navbar').style.background = 'rgba(34, 34, 34, 0.9)'; // Dark mode background
    } else {
        // Show sun icon, hide moon icon
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        
        // Set navbar background for light mode
        document.querySelector('.navbar').style.background = 'rgba(255, 255, 255, 0.9)'; // Light mode background
    }
});

// Smooth Scroll Behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});

// Sample project data to simulate API response
const projects = [
  {
    title: "Movie Search Engine",
    description: "A responsive React-based movie search application that delivers lightning-fast results, enhancing user experience through seamless interactions. This project showcases efficient data fetching using React hooks and Axios, optimized database queries across SQL and NoSQL stores, and adherence to modern JavaScript practices. The structured project architecture ensures maintainability and scalability, making it an ideal solution for dynamic web applications.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Axios", "API", "Express"],
    githubLink: "https://github.com/SenthamaraiKannan-Dhanavel/movie-search-engine"
  },
  {
    title: " Smart Healthcare Appointment System",
    description: "A comprehensive web application designed to streamline the process of scheduling and managing healthcare appointments. This system caters to both patients and healthcare providers, offering a user-friendly interface for booking appointments, managing schedules, and facilitating efficient communication between all parties involved.",
    technologies: ["Angular", "TypeScript", "Tailwind", "Bootstrap", "jQuery", "Django", "PostgreSQL", "Celery", "Docker", "Kubernetes"],
    githubLink: "https://github.com/SenthamaraiKannan-Dhanavel/Smart-Healthcare-Appointment-System"
  },
  {
    title: "Job Info Extractor",
    description: "Job Info Extractor is a Chrome extension designed to streamline the process of extracting job-related information from websites and storing it directly into a Google Spreadsheet. Whether you're a recruiter, job seeker, or HR professional, this tool simplifies data collection, ensuring your job listings are organized and easily accessible.",
    technologies: ["JavaScript", "Chrome Extensions APIs", "OAuth2", "Google Sheets API", "HTML", "CSS"],
    githubLink: "https://github.com/SenthamaraiKannan-Dhanavel/Job-Info-Extractor"
  }
];

// Function to render project cards
function renderProjects() {
  const projectCardsContainer = document.getElementById("project-cards");
  
  // Check if the container exists
  if (!projectCardsContainer) {
    console.error("Project cards container not found!");
    return;
  }
  
  projectCardsContainer.innerHTML = ""; // Clear existing cards

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-content">
        <div class="card-header">
          <h3>${project.title}</h3>
        </div>
        <p class="card-description">${project.description}</p>
        <div class="card-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="card-actions">
          <a href="${project.githubLink}" target="_blank" class="card-btn secondary">
            <svg class="github-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            Source Code
          </a>
        </div>
      </div>
    `;
    projectCardsContainer.appendChild(card);
  });
}

// Ensure this is called when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initial render of all projects
  renderProjects();
});

// Event listener for filter change
// document.getElementById("project-filter").addEventListener("change", (event) => {
//   renderProjects(event.target.value);
// });

// Event listener for timeline item clicks
document.querySelectorAll('.timeline-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active'); // Toggle active class to show/hide job description
  });
});

// Event listener for form submission
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    // Simulate a loading state
    const button = this.querySelector("button");
    button.textContent = "Sending...";
    button.disabled = true;

    // Simulate an API call
    setTimeout(() => {
      alert("Message sent successfully!");
      button.textContent = "Send Message";
      button.disabled = false;
      this.reset(); // Reset the form
    }, 2000); // Simulate a 2-second delay
  });
}

// Sticky Navigation and Scroll Animation
// Update the scroll animation threshold
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('.section');

  // Sticky navbar
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Check if dark mode is active
  if (document.body.classList.contains('dark-mode')) {
    navbar.style.background = 'rgba(34, 34, 34, 0.95)'; // Slightly more opaque
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)'; // Slightly more opaque
  }

  // Scroll animations with adjusted threshold
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.9) { // Increased threshold for earlier animation
      section.classList.add('visible');
    }
  });
});
// Update footer year
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
// Initial call to set visibility on page load
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.add('visible'); // Ensure sections are visible on load
  });
});
// Add this near the top of your script.js file
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.add('visible'); // Ensure sections are visible on load
  });
});

// Terminal typing effect - improved version
document.addEventListener('DOMContentLoaded', function() {
  // Find the terminal element
  const terminalText = document.getElementById('terminal-text');
  
  if (!terminalText) {
    console.error("Terminal element not found!");
    return;
  }
  
  console.log("Terminal element found, starting simulation");
  
  // Clear any existing content and set up initial prompt
  terminalText.innerHTML = '<div class="command-line"><span class="prompt">visitor@portfolio:~$</span> <span class="command-text"></span><span class="cursor">█</span></div>';
  
  // Commands and outputs to display
  const interactions = [
    {
      command: 'whoami',
      output: 'Senthamarai Kannan Dhanavel - Full-Stack Engineer'
    },
    {
      command: 'ls -la',
      output: 'total 16<br>drwxr-xr-x 2 visitor portfolio 4096 Mar 5 10:23 .<br>drwxr-xr-x 12 visitor portfolio 4096 Mar 5 10:22 ..<br>-rw-r--r-- 1 visitor portfolio 256 Mar 5 10:23 skills.txt<br>-rw-r--r-- 1 visitor portfolio 128 Mar 5 10:23 projects.txt<br>-rw-r--r-- 1 visitor portfolio 192 Mar 5 10:23 contact.txt'
    },
    {
      command: 'fetch-personal-data',
      output: 'Fetching personal data... [Connected]'
    },
    {
      command: 'cat skills.txt',
      output: '• JavaScript, Node.js, React<br>• AWS, Docker, CI/CD<br>• MongoDB, PostgreSQL<br>• RESTful APIs, GraphQL'
    }
  ];
  
  let currentInteraction = 0;
  let charIndex = 0;
  
  // Function to simulate typing
  function typeCommand() {
    const activeCommandLine = terminalText.querySelector('.command-line:last-child');
    const commandSpan = activeCommandLine.querySelector('.command-text');
    
    if (!commandSpan) return;
    
    const currentCommand = interactions[currentInteraction].command;
    
    if (charIndex < currentCommand.length) {
      // Still typing the command
      commandSpan.textContent += currentCommand.charAt(charIndex);
      charIndex++;
      setTimeout(typeCommand, 100);
    } else {
      // Command finished typing, show output after a delay
      setTimeout(() => showOutput(activeCommandLine), 500);
    }
  }
  
  // Function to show command output
  function showOutput(commandLine) {
    // Remove cursor from current line
    const cursor = commandLine.querySelector('.cursor');
    if (cursor) cursor.remove();
    
    const output = interactions[currentInteraction].output;
    
    // Create output element
    const outputDiv = document.createElement('div');
    outputDiv.className = 'command-output';
    outputDiv.innerHTML = output;
    terminalText.appendChild(outputDiv);
    
    // Scroll parent container to the bottom to show new content
    const terminalContent = terminalText.closest('.terminal-content');
    if (terminalContent) {
      terminalContent.scrollTop = terminalContent.scrollHeight;
    }
    
    // Move to next interaction
    currentInteraction++;
    
    // If there are more interactions, create a new prompt and continue
    if (currentInteraction < interactions.length) {
      const newPrompt = document.createElement('div');
      newPrompt.className = 'command-line';
      newPrompt.innerHTML = '<span class="prompt">visitor@portfolio:~$</span> <span class="command-text"></span><span class="cursor">█</span>';
      terminalText.appendChild(newPrompt);
      
      // Reset char index and start typing next command after a delay
      charIndex = 0;
      setTimeout(typeCommand, 1000);
    } else {
      // Restart the sequence after a longer delay
      setTimeout(resetTerminal, 3000);
    }
  }
  
  // Function to reset the terminal and start over
  function resetTerminal() {
    terminalText.innerHTML = '<div class="command-line"><span class="prompt">visitor@portfolio:~$</span> <span class="command-text"></span><span class="cursor">█</span></div>';
    currentInteraction = 0;
    charIndex = 0;
    setTimeout(typeCommand, 500);
  }
  
  // Start the typing animation
  setTimeout(typeCommand, 1000);
});

// Skills section functionality with auto-cycling
document.addEventListener('DOMContentLoaded', function() {
  // Define skills data
  const skillsData = {
    programming: {
      category: "Programming Languages",
      items: [
        { name: "Java", icon: "assets/icons/programming/java.svg" },
        { name: "Python", icon: "assets/icons/programming/python.svg" },
        { name: "JavaScript", icon: "assets/icons/programming/javascript.svg" },
        { name: "SQL", icon: "assets/icons/programming/sql.svg" },
        { name: "C++", icon: "assets/icons/programming/cpp.svg" },
        { name: "C", icon: "assets/icons/programming/c.svg" }
      ]
    },
    frontend: {
      category: "Front-End Development",
      items: [
        { name: "React.js", icon: "assets/icons/frontend/react.svg" },
        { name: "HTML5", icon: "assets/icons/frontend/html5.svg" },
        { name: "CSS3", icon: "assets/icons/frontend/css3.svg" },
        { name: "JavaScript (ES6+)", icon: "assets/icons/frontend/javascript.svg" },
        { name: "TypeScript", icon: "assets/icons/frontend/typescript.svg" },
        { name: "Next.js", icon: "assets/icons/frontend/nextjs.svg" },
        { name: "Angular", icon: "assets/icons/frontend/angular.svg" },
        { name: "Redux", icon: "assets/icons/frontend/redux.svg" },
        { name: "Tailwind CSS", icon: "assets/icons/frontend/tailwind.svg" }
      ]
    },
    backend: {
      category: "Back-End Development",
      items: [ { name: "Spring Boot", icon: "assets/icons/backend/spring.svg" },
        { name: "Node.js", icon: "assets/icons/backend/nodejs.svg" },
        { name: "Express.js", icon: "assets/icons/backend/express.svg" },
        { name: "RESTful APIs", icon: "assets/icons/backend/rest.svg" },
        { name: "GraphQL", icon: "assets/icons/backend/graphql.svg" },
        { name: "Django", icon: "assets/icons/backend/django.svg" }
      ]
    },
    cloud: {
      category: "Cloud & DevOps",
      items: [ { name: "AWS (EC2, S3, RDS, Lambda)", icon: "assets/icons/cloud/aws.svg" },
        { name: "Docker", icon: "assets/icons/cloud/docker.svg" },
        { name: "Kubernetes", icon: "assets/icons/cloud/kubernetes.svg" },
        { name: "Git", icon: "assets/icons/cloud/git.svg" },
        { name: "Jenkins", icon: "assets/icons/cloud/jenkins.svg" },
        { name: "Terraform", icon: "assets/icons/cloud/terraform.svg" }
      ]
    },
    database: {
      category: "Database Management",
      items: [ { name: "MySQL", icon: "assets/icons/database/mysql.svg" },
        { name: "PostgreSQL", icon: "assets/icons/database/postgresql.svg" },
        { name: "MongoDB", icon: "assets/icons/database/mongodb.svg" },
        { name: "Redis", icon: "assets/icons/database/redis.svg" }
      ]
    },
    testing: {
      category: "Testing & QA",
      items: [ { name: "JUnit", icon: "assets/icons/testing/junit.svg" },
        { name: "Mockito", icon: "assets/icons/testing/mockito.png" },
        { name: "Jest", icon: "assets/icons/testing/jest.svg" },
        { name: "Selenium", icon: "assets/icons/testing/selenium.svg" },
        { name: "Cucumber", icon: "assets/icons/testing/cucumber.svg" },
        { name: "Postman", icon: "assets/icons/testing/postman.svg" },
        { name: "JMeter", icon: "assets/icons/testing/jmeter.png" }
      ]
    },
    tools: {
      category: "Tools & Methodologies",
      items: [ { name: "GitHub", icon: "assets/icons/tools/github.svg" },
        { name: "Maven", icon: "assets/icons/tools/maven.svg" },
        { name: "CircleCI", icon: "assets/icons/tools/circleci.svg" },
        { name: "CI/CD", icon: "assets/icons/tools/cicd.svg" },
        { name: "JIRA", icon: "assets/icons/tools/jira.svg" },
        { name: "Trello", icon: "assets/icons/tools/trello.svg" },
      ]
    }
  };

  // Function to render skills
  function renderSkills(filter = 'all') {
    const skillsContainer = document.getElementById('skills-container');
    
    // Clear existing content
    skillsContainer.innerHTML = '';
    
    // If filter is 'all', show all categories
    if (filter === 'all') {
      Object.keys(skillsData).forEach(key => {
        const category = skillsData[key];
        const categoryElement = createCategoryElement(category.category, category.items, key);
        skillsContainer.appendChild(categoryElement);
      });
    } else {
      // Show only the selected category
      const category = skillsData[filter];
      if (category) {
        const categoryElement = createCategoryElement(category.category, category.items, filter);
        skillsContainer.appendChild(categoryElement);
      }
    }
    
    // Add animation to make the transition smooth
    skillsContainer.style.opacity = 0;
    setTimeout(() => {
      skillsContainer.style.opacity = 1;
    }, 50);
  }
  
  // Function to create a category element - updated to remove the title
  function createCategoryElement(categoryName, items, categoryKey) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = `skill-category ${categoryKey}`;
    
    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'skill-items-container';
    
    items.forEach(item => {
      const skillItem = document.createElement('div');
      skillItem.className = 'skill-item';
      
      // Create icon element
      const icon = document.createElement('img');
      icon.src = item.icon;
      icon.alt = `${item.name} icon`;
      icon.className = 'skill-icon';
      
      // Create text element
      const text = document.createElement('span');
      text.textContent = item.name;
      text.className = 'skill-text';
      
      skillItem.appendChild(icon);
      skillItem.appendChild(text);
      itemsContainer.appendChild(skillItem);
    });
    
    categoryDiv.appendChild(itemsContainer);
    return categoryDiv;
  }
  
  // Auto-cycling functionality
  let autoCycleInterval;
  let userInteracted = false;
  const filterButtons = document.querySelectorAll('.skill-filter-btn');
  
  // Function to cycle through skill categories
  function startAutoCycle() {
    const filters = ['all', 'programming', 'frontend', 'backend', 'cloud', 'database', 'testing', 'tools'];
    let currentIndex = 0;
    
    // Initial render
    updateActiveButton(filters[currentIndex]);
    renderSkills(filters[currentIndex]);
    
    // Set interval for cycling
    autoCycleInterval = setInterval(() => {
      if (userInteracted) {
        clearInterval(autoCycleInterval);
        return;
      }
      
      currentIndex = (currentIndex + 1) % filters.length;
      updateActiveButton(filters[currentIndex]);
      renderSkills(filters[currentIndex]);
    }, 3000); // Change category every 3 seconds
  }
  
  // Function to update active button
  function updateActiveButton(filter) {
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-filter') === filter) {
        btn.classList.add('active');
      }
    });
  }
  
  // Add event listeners to filter buttons
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Stop auto-cycling when user interacts
        userInteracted = true;
        if (autoCycleInterval) {
          clearInterval(autoCycleInterval);
        }
        
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value and render skills
        const filter = this.getAttribute('data-filter');
        renderSkills(filter);
      });
    });
    
    // Start auto-cycling
    startAutoCycle();
  }
  
  // Reset auto-cycling when user scrolls away and back to skills section
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If skills section is visible and user hasn't interacted yet
        if (entry.isIntersecting && !userInteracted) {
          // Clear any existing interval and restart
          if (autoCycleInterval) {
            clearInterval(autoCycleInterval);
          }
          startAutoCycle();
        } else if (!entry.isIntersecting) {
          // Clear interval when section is not visible
          if (autoCycleInterval) {
            clearInterval(autoCycleInterval);
          }
        }
      });
    }, { threshold: 0.3 }); // Trigger when 30% of the section is visible
    
    // Start observing the skills section
    observer.observe(skillsSection);
  }
});

// Backend & Cloud Simulation
document.addEventListener('DOMContentLoaded', function() {
  // Server logs simulation
  simulateServerLogs();
  
  // API response simulation
  simulateApiResponses();
});

function simulateServerLogs() {
  const serverLogs = document.getElementById('server-logs');
  if (!serverLogs) return;
  
  const serverInteractions = [
    {
      command: 'systemctl start server',
      output: 'Starting server... [OK]'
    },
    {
      command: 'mongo --connect',
      output: 'Connecting to database... [Connected]'
    },
    {
      command: 'tail -f /var/log/server.log',
      output: 'API request received... [Processing]<br>API response sent... [Success]<br>API request completed... [Success]'
    },
    {
      command: 'docker ps',
      output: 'CONTAINER ID   IMAGE          COMMAND       STATUS          PORTS                    NAMES<br>123abc456de   node:latest   "npm start"    Up 3 hours      0.0.0.0:3000->3000/tcp   api-server<br>789def012gh   mongo:4.4     "mongod"       Up 3 hours      0.0.0.0:27017->27017/tcp  database'
    }
  ];
  
  simulateTerminalTyping(serverLogs, serverInteractions);
}

function simulateApiResponses() {
  const apiResponse = document.getElementById('api-response');
  if (!apiResponse) return;
  
  const apiInteractions = [
    {
      command: 'curl api/skills/frontend',
      output: 'Fetching frontend skills... [Success]<br>Data: { "skills": ["React", "Vue", "Angular", "CSS3", "HTML5", "JavaScript"] }'
    },
    {
      command: 'curl api/skills/backend',
      output: 'Fetching backend skills... [Success]<br>Data: { "skills": ["Node.js", "Express", "Django", "Flask", "Spring Boot"] }'
    },
    {
      command: 'curl api/skills/database',
      output: 'Fetching database skills... [Success]<br>Data: { "skills": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"] }'
    },
    {
      command: 'curl api/skills/cloud',
      output: 'Fetching cloud skills... [Success]<br>Data: { "skills": ["AWS", "Azure", "GCP", "Docker", "Kubernetes"] }'
    }
  ];
  
  simulateTerminalTyping(apiResponse, apiInteractions);
}

function simulateTerminalTyping(terminalElement, interactions) {
  let currentInteraction = 0;
  let charIndex = 0;
  
  // Clear terminal and set initial prompt
  terminalElement.innerHTML = `<div class="command-line">
    <span class="prompt">${terminalElement.id === 'server-logs' ? 'server' : 'api'}@portfolio:~$</span> 
    <span class="command-text"></span><span class="cursor">█</span>
  </div>`;
  
  // Function to simulate typing
  function typeCommand() {
    const commandLine = terminalElement.querySelector('.command-line:last-child');
    if (!commandLine) return;
    
    const commandText = commandLine.querySelector('.command-text');
    const cursor = commandLine.querySelector('.cursor');
    if (!commandText || !cursor) return;
    
    const currentCommand = interactions[currentInteraction].command;
    
    if (charIndex < currentCommand.length) {
      // Still typing the command
      commandText.textContent += currentCommand.charAt(charIndex);
      charIndex++;
      setTimeout(typeCommand, 100);
    } else {
      // Command finished typing, remove cursor from this line
      cursor.remove();
      
      // Show output after a delay
      setTimeout(showOutput, 500);
    }
  }
  
  // Function to show command output
  function showOutput() {
    const output = interactions[currentInteraction].output;
    
    // Create output element
    const outputDiv = document.createElement('div');
    outputDiv.className = 'command-output';
    outputDiv.innerHTML = output;
    
    // Add output to terminal
    terminalElement.appendChild(outputDiv);
    
    // Move to next interaction
    currentInteraction++;
    
    // If there are more interactions, create a new prompt and continue
    if (currentInteraction < interactions.length) {
      // Create a new command line with prompt and cursor
      const newCommandLine = document.createElement('div');
      newCommandLine.className = 'command-line';
      newCommandLine.innerHTML = `
        <span class="prompt">${terminalElement.id === 'server-logs' ? 'server' : 'api'}@portfolio:~$</span> 
        <span class="command-text"></span><span class="cursor">█</span>
      `;
      
      terminalElement.appendChild(newCommandLine);
      
      // Scroll to the bottom
      const terminalContent = terminalElement.closest('.terminal-content');
      if (terminalContent) {
        terminalContent.scrollTop = terminalContent.scrollHeight;
      }
      
      // Reset char index and start typing next command after a delay
      charIndex = 0;
      setTimeout(typeCommand, 1000);
    } else {
      // Restart the sequence after a longer delay
      setTimeout(resetTerminal, 3000);
    }
  }
  
  // Function to reset the terminal and start over
  function resetTerminal() {
    // Clear terminal and add initial prompt with cursor
    terminalElement.innerHTML = `<div class="command-line">
      <span class="prompt">${terminalElement.id === 'server-logs' ? 'server' : 'api'}@portfolio:~$</span> 
      <span class="command-text"></span><span class="cursor">█</span>
    </div>`;
    
    currentInteraction = 0;
    charIndex = 0;
    setTimeout(typeCommand, 500);
  }
  
  // Start the typing animation
  setTimeout(typeCommand, 1000);
}

// Update the handle404 function
function handle404() {
  // Get the current URL parts
  const currentPath = window.location.pathname;
  const hostname = window.location.hostname;
  
  // Check if we're on GitHub Pages
  const isGitHubPages = hostname.includes('github.io');
  
  // Don't redirect if we're on localhost or file:// protocol
  if (window.location.protocol === 'file:' || 
      hostname === 'localhost' || 
      hostname === '127.0.0.1') {
    return;
  }

  // Define valid paths
  const validPaths = ['/', '/index.html', '/404.html'];
  
  // If we're on the main GitHub Pages site
  if (isGitHubPages && hostname === 'senthamaraikannan-dhanavel.github.io') {
    // Only redirect if the path is not valid
    if (!validPaths.includes(currentPath)) {
      window.location.href = '/404.html';
    }
  } 
  // If we're trying to access the portfolio subdirectory
  else if (currentPath.startsWith('/portfolio')) {
    // Redirect to the main site
    window.location.href = 'https://senthamaraikannan-dhanavel.github.io/';
  }
}

// Call handle404 when the page loads
document.addEventListener('DOMContentLoaded', handle404);