const links = document.querySelectorAll(".menu a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

const categories = {

    cake: [
        {
            name: "Black Velvet Cake",
            price: 850,
            image: "products/Black Velvet Cake.jpg"
        },
        {
            name: "Tiramisu Cake",
            price: 900,
            image: "products/TIRAMISU.jpg"
        },
        {
            name: "Ube Custard",
            price: 750,
            image: "products/Ube.jpg"
        },
        {
            name: "Pistachio Crunch Cake",
            price: 950,
            image: "products/Pistachio Crunch Cake.webp"
        },
        {
            name: "Blueberry Cheesecake",
            price: 850,
            image: "products/Blueberry Cheesecake.jpg"
        },
        {
            name: "Mango Bravo",
            price: 1000,
            image: "products/MangoBravo_1.webp"
        }
    ],

    muffins: [
        {
            name: "Banana Nut Muffin",
            price: 80,
            image: "products/Banana Nut Muffin.jpg"
        },
        {
            name: "Blueberry Muffin",
            price: 85,
            image: "products/Blueberry Muffin.jpg"
        },
        {
            name: "Carrot Muffin",
            price: 75,
            image: "products/Carrot Muffin.jpg"
        },
        {
            name: "Chocolate Chip Muffin",
            price: 90,
            image: "products/muffins.jpg"
        },
        {
            name: "Strawberry Muffin",
            price: 85,
            image: "products/Strawberry Muffin.jpg"
        },
        {
            name: "Apple Cinnamon Muffin",
            price: 80,
            image: "products/Apple Cinnamon Muffin.jpg"
        }
    ],

    croissant: [
        {
            name: "Almond Croissant",
            price: 140,
            image: "products/Almond Croissant.jpg"
        },
        {
            name: "Cheese Croissant",
            price: 120,
            image: "products/Cheese Croissant.jpg"
        },
        {
            name: "Chocolate Croissant",
            price: 130,
            image: "products/Chocolate Croissant.jpg"
        },
        {
            name: "Classic Butter Croissant",
            price: 90,
            image: "products/Classic Butter Croissant.jpg"
        },
        {
            name: "Ham and Cheese Croissant",
            price: 130,
            image: "products/Ham and Cheese Croissant.webp"
        },
        {
            name: "Strawberry Cream Croissant",
            price: 140,
            image: "products/Strawberry Cream Croissant.jpg"
        }
    ],

    bread: [
        {
            name: "Cheese Bun",
            price: 65,
            image: "products/cheesebun.jpg"
        },
        {
            name: "French Baguette",
            price: 120,
            image: "products/French Baguette.jpg"
        },
        {
            name: "Pork Floss Bread",
            price: 95,
            image: "products/floss.jpg"
        },
        {
            name: "Garlic Bread",
            price: 120,
            image: "products/Garlic Bread.jpg"
        },
        {
            name: "Pretzel Bread",
            price: 110,
            image: "products/Pretzel Bread.jpg"
        },
        {
            name: "Sourdough Bread",
            price: 150,
            image: "products/Sourdough Bread.jpg"
        }
    ],

    tart: [
        {
            name: "Apple Cinnamon Tart",
            price: 180,
            image: "products/Apple Cinnamon Tart.jpg"
        },
        {
            name: "Blueberry Tart",
            price: 190,
            image: "products/Blueberry Tart.jpg"
        },
        {
            name: "Chocolate Tart",
            price: 200,
            image: "products/Chocolate Tart.jpg"
        },
        {
            name: "Lemon Tart",
            price: 180,
            image: "products/Lemon Tart.jpg"
        },
        {
            name: "Mango Tart",
            price: 180,
            image: "products/Mango Tart.webp"
        },
        {
            name: "Strawberry Tart",
            price: 190,
            image: "products/Strawberry Tart.jpg"
        }
    ]

};
function showCategory(category){

    for(let i = 0; i < 6; i++){

        document.getElementById(`img${i+1}`).src =
            categories[category][i].image;

        document.getElementById(`title${i+1}`).textContent =
            categories[category][i].name;

        document.getElementById(`price${i+1}`).textContent =
            "₱" + categories[category][i].price;

        document.getElementById(`btn${i+1}`).dataset.name =
            categories[category][i].name;

        document.getElementById(`btn${i+1}`).dataset.price =
            categories[category][i].price;
            
            document.getElementById(`btn${i+1}`).dataset.image =
        categories[category][i].image;
    }
}
