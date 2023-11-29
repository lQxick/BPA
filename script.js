document.addEventListener('DOMContentLoaded', function () {
    // Get the "Add to Order" button
    var addToOrderButton = document.querySelector('.food-select');

    // Get the pop-up container and order container
    var popupContainer = document.getElementById('popup-container');
    var orderContainer = document.getElementById('order-container');

    // Get the food info container and food img element
    var foodInfoContainer = document.getElementById('food-info-container');

    // Get all menu items
    var menuItems = document.querySelectorAll('.menu-item');

    // Add hover effect to change cursor on the "Add to Order" button
    addToOrderButton.addEventListener('mouseover', function () {
        addToOrderButton.style.cursor = 'pointer';
    });

    addToOrderButton.addEventListener('mouseout', function () {
        addToOrderButton.style.cursor = 'auto';
    });

    // Add click event listener to each menu item
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            // Get data attributes from the clicked menu item
            var itemName = menuItem.getAttribute('data-name');
            var itemDescription = menuItem.getAttribute('data-description');
            var itemPrice = menuItem.getAttribute('data-price');
            var itemImg = menuItem.getAttribute('data-img');

            // Update the content in the food info container
            foodInfoContainer.innerHTML = `
                <div class="food-item">
                   <div class="food-img" style="background-image: url('${itemImg}')"></div>
                </div>
                <div class="food-item">
                   <h1>${itemName}</h1>
                   <p class="food-desc">${itemDescription}</p>
                   <p class="food-price">${itemPrice}</p>
                </div>                             
            `;

            // Show the pop-up container
            popupContainer.style.display = 'block';
        });
    });

    // Close the pop-up when clicking outside the order container
    window.addEventListener('click', function (event) {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
        }
    });

    // Add click event listener to the "Add to Order" button
    addToOrderButton.addEventListener('click', function () {
        // Add your logic for adding the selected item to the order
        console.log('Item added to order!');

        // Close the pop-up after clicking "Add to Order"
        popupContainer.style.display = 'none';
    });

    // Get the "Cart" link in the navigation bar
    var cartLink = document.querySelector('a[href="#cart"]');

    // Get the cart section
    var cartSection = document.getElementById('cart');

    // Get all menu categories
    var menuCategories = document.querySelectorAll('.menu-category');

    // Get all navigation menu items
    var menuLinks = document.querySelectorAll('.menu a');

    // Get the menu heading
    var menuHeading = document.getElementById('menu-heading');

// Add click event listener to the "Cart" link
cartLink.addEventListener('click', function () {
    // Toggle the visibility of the cart section
    if (cartSection.style.display === 'none' || cartSection.style.display === '') {
        // Show the cart section
        cartSection.style.display = 'block';

        // Populate the cart items
        cartItemsContainer.innerHTML = ''; // Clear previous items

        // Add each item to the cart
        cartItems.forEach(function (cartItem) {
            var itemName = cartItem.name;
            var itemPrice = cartItem.price;

            var cartItemElement = document.createElement('li');
            cartItemElement.innerHTML = `${itemName} - ${itemPrice}`;
            cartItemsContainer.appendChild(cartItemElement);
        });
    } else {
        // Hide the cart section
        cartSection.style.display = 'none';
    }

    // Hide other sections if needed
    orderContainer.style.display = 'none';
    popupContainer.style.display = 'none';
});

    // Add click event listener to each navigation menu item
    menuLinks.forEach(function (menuLink) {
        menuLink.addEventListener('click', function (event) {
            // Prevent the default behavior of the anchor link
            event.preventDefault();

            // Hide the cart section
            cartSection.style.display = 'none';

            // Get the target menu category id from the href attribute
            var targetCategoryId = menuLink.getAttribute('href').substring(1);

            // Set the dynamic menu heading
            menuHeading.textContent =
                targetCategoryId.charAt(0).toUpperCase() + targetCategoryId.slice(1) + ' Menu';

            // Hide all menu categories
            menuCategories.forEach(function (category) {
                category.style.display = 'none';
            });

            // Show the selected menu category
            var targetCategory = document.getElementById(targetCategoryId);
            if (targetCategory) {
                targetCategory.style.display = 'block';
            }
        });
    });
});
