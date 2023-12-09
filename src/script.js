
function showCategory(category) {
    // Hide all food panels
    var foodPanels = document.querySelectorAll('.food-panel');
    foodPanels.forEach(function(panel) {
        panel.classList.remove('active');
    });

    // Show the selected category
    var selectedPanel = document.getElementById(category);
    if (selectedPanel) {
        selectedPanel.classList.add('active');
    }
}

//Parallax Effect

document.addEventListener('DOMContentLoaded', function () {
    var parallaxSection = document.querySelector('.parallax');

    // Initial adjustment for smoother start
    parallaxSection.style.backgroundPositionY = -window.scrollY * 0.15 + 'px';

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        parallaxSection.style.backgroundPositionY = -scrollPosition * 0.15 + 'px';
    });
});

// Hide all food panels except the default one (e.g., 'appetizers') on page load
        document.addEventListener('DOMContentLoaded', function() {
            var defaultCategory = 'appetizers';
            showCategory(defaultCategory);
        });

        function openCustomizeMenu(foodName) {
            // Existing code to show/hide panels
            // ...
        
            // Additional code to populate the customization menu
            var foodItem = document.querySelector('.food-panel.active .food-item[data-name="' + foodName + '"]');
        
            var foodDetails = {
                name: foodName,
                description: foodItem.getAttribute('data-description'),
                price: foodItem.getAttribute('data-price')
            };
        
            document.getElementById('customizeFoodImage').src = foodDetails.image; // Assuming you have a way to get the image path
            document.getElementById('customizeFoodName').innerText = foodDetails.name;
            document.getElementById('customizeFoodDescription').innerText = foodDetails.description;
            document.getElementById('customizeFoodPrice').innerText = 'Price: ' + foodDetails.price;
        
            // Show the customize menu
            document.querySelector('.customize-menu').style.display = 'block';
        }

        function closeCustomizeMenu() {
            // Hide the customize menu
            document.querySelector('.customize-menu').style.display = 'none';
        }

        function addToCart() {
            // Additional code to handle adding the item to the cart
            // ...
            
            // Close the customize menu after adding to the cart
            closeCustomizeMenu();
        }

        function getFoodDetails(foodName) {
            // Add your logic to fetch food details based on the foodName
            // This could be from an array, an API, or any other data source
            // Return an object with image, name, description, and price properties
            // For example:
            return {
                image: '/images/' + foodName.toLowerCase().replace(/\s/g, '') + '.jpg',
                name: foodName,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: '$10.99'
            };
        }

        function findTable() {
            // Get the selected values
            var date = document.getElementById('reservationDate').value;
            var time = document.getElementById('reservationTime').value;
            var people = document.getElementById('peopleCount').value;
    
            // Add your logic to handle the reservation search
            // You can use the date, time, and people variables in your backend logic or API call
    
            // For now, let's log the selected values to the console
            console.log('Date:', date);
            console.log('Time:', time);
            console.log('People:', people);
    
            // You can add further logic here, such as displaying a confirmation message or redirecting to a reservation page
        }
        var slideIndex = 1;

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // Automatic slideshow
    var slideInterval = setInterval(function () {
        plusSlides(1);
    }, 5000); // Change slide every 5 seconds