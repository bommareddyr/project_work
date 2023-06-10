// JavaScript code for handling button click event

const toggleButton = document.getElementById('toggleButton');
const gridContainer = document.getElementById('gridContainer');

toggleButton.addEventListener('click', function() {
  if (gridContainer.style.display === 'none') {
    gridContainer.style.display = 'grid';
  } else {
    gridContainer.style.display = 'none';
  }
});


// JavaScript to handle button click event and generate menu items
document.addEventListener("DOMContentLoaded", function () {
    var breakfastButton = document.getElementById("breakfast-btn");
    var lunchButton = document.getElementById("lunch-btn");
    var dinnerButton = document.getElementById("dinner-btn");
    var menuItemsContainer = document.getElementById("menu-items-container");

    breakfastButton.addEventListener("click", function () {
        generateMenuItems([
            {
                image: "path/to/image1.jpg",
                name: "Item 1",
                price: "$10"
            },
            {
                image: "path/to/image2.jpg",
                name: "Item 2",
                price: "$12"
            },
            {
                image: "path/to/image3.jpg",
                name: "Item 3",
                price: "$15"
            }
        ]);
    });

    lunchButton.addEventListener("click", function () {
        generateMenuItems([
            {
                image: "path/to/image4.jpg",
                name: "Item 4",
                price: "$8"
            },
            {
                image: "path/to/image5.jpg",
                name: "Item 5",
                price: "$11"
            },
            {
                image: "path/to/image6.jpg",
                name: "Item 6",
                price: "$13"
            }
        ]);
    });

    dinnerButton.addEventListener("click", function () {
        generateMenuItems([
            {
                image: "path/to/image7.jpg",
                name: "Item 7",
                price: "$20"
            },
            {
                image: "path/to/image8.jpg",
                name: "Item 8",
                price: "$18"
            },
            {
                image: "path/to/image9.jpg",
                name: "Item 9",
                price: "$22"
            }
        ]);
    });

    function generateMenuItems(menuItems) {
        menuItemsContainer.innerHTML = ""; // Clear previous menu items

        menuItems.forEach(function (item) {
            var menuItem = document.createElement("div");
            menuItem.className = "menu-item";

            var image = document.createElement("img");
            image.src = item.image;

            var name = document.createElement("p");
            name.textContent = item.name;

            var price = document.createElement("p");
            price.textContent = item.price;

            var actions = document.createElement("div");
            actions.className = "menu-item-actions";

            var viewButton = document.createElement("button");
            viewButton.textContent = "View";

            var updateButton = document.createElement("button");
            updateButton.textContent = "Update";

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";

            actions.appendChild(viewButton);
            actions.appendChild(updateButton);
            actions.appendChild(deleteButton);

            menuItem.appendChild(image);
            menuItem.appendChild(name);
            menuItem.appendChild(price);
            menuItem.appendChild(actions);

            menuItemsContainer.appendChild(menuItem);
        });
    }
});