const menucards = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

const menuItems = document.getElementById("menu-items");
const above_4 = document.getElementById("4-above");
const below_4 = document.getElementById("4-below");
const all = document.getElementById("all");
const veg = document.getElementById("veg");
const nonveg = document.getElementById("non-veg");
const search = document.getElementById("search");

function generateMenuCard(recipe) {
    const item = document.createElement("div");
    item.classList.add("recipe-item");
    
    const image = document.createElement("img");
    image.src = recipe.imageSrc;
    image.classList.add("item-image")
    item.appendChild(image);

    const type = document.createElement("p");
    type.textContent = `${recipe.type}`;
    item.appendChild(type);

    const div1 = document.createElement("div");
    div1.classList.add("name-rating");

    const name = document.createElement("h3");
    name.textContent = recipe.name;
    div1.appendChild(name);

    const rating = document.createElement("p");
    rating.textContent = `⭐ ${recipe.rating}`;
    div1.appendChild(rating);

    item.appendChild(div1);

    const div2 = document.createElement("div");
    div2.classList.add("time-like");

    const time = document.createElement("p");
    time.textContent = `${recipe.time}`;
    div2.appendChild(time);

    const likeButton = document.createElement("span");
    likeButton.classList.add("like-button");
    likeButton.addEventListener("click", () => {
        recipe.isLiked = !recipe.isLiked;
        likeButton.textContent = recipe.isLiked ? "🧡" : "🤍";
    })
    likeButton.textContent = recipe.isLiked ? "🧡" : "🤍";
    div2.appendChild(likeButton);

    item.appendChild(div2);

    menuItems.appendChild(item);
}

menucards.forEach((recipe) => {
    generateMenuCard(recipe);
});






function filterMenucardsByRecipies() {
    menuItems.innerHTML = "";

    let filterMenuItems;
    if(above_4.checked){
        filterMenuItems = menucards.filter((recipe) => recipe.rating > 4.0);
    }else if(below_4.checked){
        filterMenuItems = menucards.filter((recipe) => recipe.rating < 4.0);
    }else{
        filterMenuItems = menucards;
    }

    filterMenuItems.forEach((recipe) => {
        generateMenuCard(recipe);
    });
}

above_4.addEventListener("change", filterMenucardsByRecipies);
below_4.addEventListener("change", filterMenucardsByRecipies);







function toggleMenuItems(type) {
    menuItems.innerHTML = "";
    
    let filterMenuItems;
    if(type === "all"){
        filterMenuItems = menucards;
    }else{
        filterMenuItems = menucards.filter((recipe) => recipe.type === type);
    }

    filterMenuItems.forEach((recipe) => {
        generateMenuCard(recipe);
    });
}

all.addEventListener("click",() => toggleMenuItems("all"));
veg.addEventListener("click",() => toggleMenuItems("veg"));
nonveg.addEventListener("click",() => toggleMenuItems("non-veg"));






function filteredMenuItems(searchElement) {
    menuItems.innerHTML = "";

    const filteredMenuItems = menucards.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchElement.toLowerCase())
    );

    filteredMenuItems.forEach((recipe) =>{
        generateMenuCard(recipe);
    });
}

search.addEventListener("input", (event) => {
    const searchElement = event.target.value.trim();
    filteredMenuItems(searchElement)
});