// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            !nav.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            nav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const lessons = document.querySelectorAll('.lesson');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and lessons
            navLinks.forEach(l => l.classList.remove('active'));
            lessons.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding lesson
            const targetId = this.getAttribute('href').substring(1);
            const targetLesson = document.getElementById(targetId);
            if (targetLesson) {
                targetLesson.classList.add('active');
                
                // Smooth scroll to top of lesson
                targetLesson.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Code execution simulation
function runCode(button) {
    const codeExample = button.closest('.code-example');
    const output = codeExample.querySelector('.output');
    const code = codeExample.querySelector('code').textContent;
    
    // Show loading state
    button.innerHTML = '<span class="loading"></span> Running...';
    button.disabled = true;
    output.classList.remove('show', 'success', 'error');
    
    // Simulate code execution delay
    setTimeout(() => {
        try {
            const result = simulateCodeExecution(code);
            output.innerHTML = result;
            output.classList.add('show', 'success');
        } catch (error) {
            output.innerHTML = `Error: ${error.message}`;
            output.classList.add('show', 'error');
        }
        
        // Reset button
        button.innerHTML = 'Run Code';
        button.disabled = false;
    }, 1000);
}

// Exercise code execution
function runExercise(exerciseId) {
    const textarea = document.getElementById(exerciseId);
    const codeEditor = textarea.closest('.code-editor');
    const output = codeEditor.querySelector('.output');
    const button = codeEditor.querySelector('.run-code');
    const code = textarea.value;
    
    if (!code.trim()) {
        output.innerHTML = 'Please write some code first!';
        output.classList.add('show', 'error');
        return;
    }
    
    // Show loading state
    button.innerHTML = '<span class="loading"></span> Running...';
    button.disabled = true;
    output.classList.remove('show', 'success', 'error');
    
    // Simulate code execution delay
    setTimeout(() => {
        try {
            const result = simulateCodeExecution(code);
            output.innerHTML = result;
            output.classList.add('show', 'success');
        } catch (error) {
            output.innerHTML = `Error: ${error.message}`;
            output.classList.add('show', 'error');
        }
        
        // Reset button
        button.innerHTML = 'Run Code';
        button.disabled = false;
    }, 1500);
}

// Simulate C++ code execution
function simulateCodeExecution(code) {
    // This is a simplified simulation - in a real application, 
    // you would send the code to a server for actual compilation
    
    const lines = code.split('\n');
    let output = '';
    
    // Basic simulation for common C++ patterns
    for (let line of lines) {
        const trimmedLine = line.trim();
        
        // Simulate cout statements
        if (trimmedLine.includes('cout') && trimmedLine.includes('<<')) {
            const match = trimmedLine.match(/cout\s*<<\s*(.+?)\s*<<\s*endl/);
            if (match) {
                let content = match[1];
                
                // Handle string literals
                if (content.includes('"')) {
                    const stringMatch = content.match(/"([^"]*)"/);
                    if (stringMatch) {
                        output += stringMatch[1] + '\n';
                    }
                }
                // Handle variable output
                else if (content.includes('age')) {
                    output += 'Age: 25\n';
                }
                else if (content.includes('height')) {
                    output += 'Height: 5.9\n';
                }
                else if (content.includes('grade')) {
                    output += 'Grade: A\n';
                }
                else if (content.includes('isStudent')) {
                    output += 'Is Student: 1\n';
                }
                else if (content.includes('Positive number')) {
                    output += 'Positive number\n';
                }
                else if (content.includes('Negative number')) {
                    output += 'Negative number\n';
                }
                else if (content.includes('Zero')) {
                    output += 'Zero\n';
                }
                else if (content.includes('Counting from 1 to 5')) {
                    output += 'Counting from 1 to 5: 1 2 3 4 5 \n';
                }
                else if (content.includes('While loop countdown')) {
                    output += 'While loop countdown: 3 2 1 \n';
                }
                else if (content.includes('Sum:')) {
                    output += 'Sum: 8\n';
                }
                else if (content.includes('Hello,')) {
                    output += 'Hello, Alice!\n';
                }
                else if (content.includes('Array elements:')) {
                    output += 'Array elements: 10 20 30 40 50 \n';
                }
                else if (content.includes('String:')) {
                    output += 'String: C++ Programming\n';
                }
                else if (content.includes('Length:')) {
                    output += 'Length: 16\n';
                }
                else if (content.includes('First character:')) {
                    output += 'First character: C\n';
                }
                else if (content.includes('Name:') && content.includes('Age:')) {
                    if (content.includes('Alice')) {
                        output += 'Name: Alice, Age: 20\n';
                    } else if (content.includes('Bob')) {
                        output += 'Name: Bob, Age: 22\n';
                    }
                }
                else if (content.includes('Hello, World!')) {
                    output += 'Hello, World!\n';
                }
            }
        }
    }
    
    // If no specific output was generated, provide a generic response
    if (!output) {
        output = 'Code executed successfully!\n(Note: This is a simulation. In a real environment, your C++ code would be compiled and executed.)';
    }
    
    return output.trim();
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu on escape
            const nav = document.getElementById('nav');
            const menuToggle = document.getElementById('menuToggle');
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        }
    });
    
    // Add touch support for mobile
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - could be used for navigation
                console.log('Swipe up detected');
            } else {
                // Swipe down - could be used for navigation
                console.log('Swipe down detected');
            }
        }
    }
    
    // Add code editor enhancements
    const textareas = document.querySelectorAll('.code-editor textarea');
    textareas.forEach(textarea => {
        // Add tab support
        textarea.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = this.selectionStart;
                const end = this.selectionEnd;
                
                // Insert tab character
                this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
                
                // Move cursor to after the inserted tab
                this.selectionStart = this.selectionEnd = start + 4;
            }
        });
        
        // Auto-resize textarea
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    });
    
    // Add progress tracking
    let completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    
    // Mark lessons as completed when user interacts with them
    const lessonSections = document.querySelectorAll('.lesson');
    lessonSections.forEach((lesson, index) => {
        const lessonId = lesson.id;
        
        // Check if lesson is already completed
        if (completedLessons.includes(lessonId)) {
            const navLink = document.querySelector(`a[href="#${lessonId}"]`);
            if (navLink) {
                navLink.innerHTML += ' <i class="fas fa-check-circle" style="color: #48bb78;"></i>';
            }
        }
        
        // Mark as completed when user runs code in the lesson
        const runButtons = lesson.querySelectorAll('.run-code');
        runButtons.forEach(button => {
            button.addEventListener('click', function() {
                if (!completedLessons.includes(lessonId)) {
                    completedLessons.push(lessonId);
                    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
                    
                    const navLink = document.querySelector(`a[href="#${lessonId}"]`);
                    if (navLink && !navLink.innerHTML.includes('check-circle')) {
                        navLink.innerHTML += ' <i class="fas fa-check-circle" style="color: #48bb78;"></i>';
                    }
                }
            });
        });
    });
    
    // Add theme toggle (optional enhancement)
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #667eea;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(themeToggle);
    
    // Theme toggle functionality
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        this.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
});

// Add dark mode styles
const darkModeStyles = `
    .dark-mode {
        background-color: #1a1a1a !important;
        color: #e0e0e0 !important;
    }
    
    .dark-mode .lesson-content {
        background: #2d2d2d !important;
        color: #e0e0e0 !important;
    }
    
    .dark-mode .nav {
        background: #2d2d2d !important;
    }
    
    .dark-mode .nav-link {
        color: #e0e0e0 !important;
    }
    
    .dark-mode .nav-link:hover {
        background-color: #3d3d3d !important;
    }
    
    .dark-mode .info-box {
        background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%) !important;
        color: #e0e0e0 !important;
    }
    
    .dark-mode .exercise {
        background: #2d2d2d !important;
        color: #e0e0e0 !important;
    }
    
    .dark-mode .footer {
        background: #1a1a1a !important;
    }
`;

// Inject dark mode styles
const styleSheet = document.createElement('style');
styleSheet.textContent = darkModeStyles;
document.head.appendChild(styleSheet);
