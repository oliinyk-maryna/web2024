// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get elements using different methods
    const header = document.querySelector('header');
    const menuItems = document.querySelectorAll('.menu-option'); // Correct selector for menu items
    const contactForm = document.getElementById('contact-form');
    const footer = document.querySelector('footer');
    const logo = document.querySelector('.logo h1');
    const contactInputs = contactForm.querySelectorAll('input, textarea');
    const windowWidthInfo = document.createElement('div');
    windowWidthInfo.id = 'window-width-info';
    document.body.appendChild(windowWidthInfo);

    // Function to change header background color on mouseover
    header.addEventListener('mouseover', function() {
        header.style.backgroundColor = '#5f9ea0';
    });

    // Function to revert header background color on mouseout
    header.addEventListener('mouseout', function() {
        header.style.backgroundColor = '';
    });

    // Add double-click event on the logo to change its color
    logo.addEventListener('dblclick', function() {
        logo.style.color = logo.style.color === 'red' ? '' : 'red';
    });
    
    // Add click event to each menu option (e.g., "Еспресо - 40 грн")
    menuItems.forEach(option => {
        option.addEventListener('click', function() {
            menuItems.forEach(item => item.classList.remove('highlight')); // Remove highlight from all
            option.classList.add('highlight'); // Add highlight only to the clicked option
        });

        // Add mouseover event to change text color
        option.addEventListener('mouseover', function() {
            option.style.color = 'blue';
        });

        // Add mouseout event to reset text color
        option.addEventListener('mouseout', function() {
            option.style.color = '';
        });

        // Add contextmenu event (right-click) to edit the menu item text
        option.addEventListener('contextmenu', function(event) {
            event.preventDefault(); // Prevent the default context menu
            const newText = prompt('Введіть новий текст для цього пункту меню:', option.textContent);
            if (newText) {
                option.textContent = newText;
            }
        });
    });

    // Function to handle form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        if (name && email && message) {
            alert(`Дякуємо, ${name}! Ваше повідомлення надіслано.`);
            contactForm.reset(); // Clear form fields
        } else {
            alert('Будь ласка, заповніть всі поля.');
        }
    });

    // Add focus and blur events to inputs in the contact form
    contactInputs.forEach(input => {
        input.addEventListener('focus', function() {
            input.style.border = '2px solid green';
        });
        input.addEventListener('blur', function() {
            input.style.border = '';
        });
    });

    // Function to change footer text on keydown event
    document.addEventListener('keydown', function(event) {
        if (event.key === 'f') {
            footer.querySelector('p').textContent = 'Нове повідомлення в футері!';
        }
    });

    // Add scroll event to change background color of the header on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#ffe4b5';
        } else {
            header.style.backgroundColor = '';
        }
    });

    // Function to animate the menu items
    function animateMenuItems() {
        menuItems.forEach(item => {
            item.style.transition = 'transform 0.5s';
            item.addEventListener('mouseover', function() {
                item.style.transform = 'scale(1.1)';
            });
            item.addEventListener('mouseout', function() {
                item.style.transform = 'scale(1)';
            });
        });
    }

    animateMenuItems();
});