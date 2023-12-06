let shop = document.getElementById("shop");

let shopItemsData = [{
    id: "Eggs",
    name: "Eggs Benedict",
    price: 10.99,
    desc: "Poached eggs on an English muffin with hollandaise sauce.",
    img: "/imgMenu/eggsBenedict.jpg"
},
{
    id: "Pancakes",
    name: "Pancakes",
    price: 8.99,
    desc: "Fluffy pancakes with maple syrup and butter.",
    img: "/imgMenu/pancakes.jpg"
},
{
    id: "Omelette",
    name: "Omelette",
    price: 9.99,
    desc: "Customizable omelette with your choice of ingredients.",
    img: "/imgMenu/omelette.jpg"
},
{
    id: "Salad",
    name: "Grilled Chicken Salad",
    price: 12.99,
    desc: "Fresh greens with grilled chicken and balsamic vinaigrette.",
    img: "/imgMenu/salad.jpg"
},
{
    id: "Burger",
    name: "Classic Burger",
    price: 11.99,
    desc: "Beef patty with lettuce, tomato, and your choice of toppings.",
    img: "/imgMenu/burger.jpg"
},
{
    id: "Wrap",
    name: "Vegetarian Wrap",
    price: 10.99,
    desc: "Roasted veggies, hummus, and feta in a spinach wrap.",
    img: "/imgMenu/veggie.jpg"
},
{
    id: "Mignon",
    name: "Filet Mignon",
    price: 24.99,
    desc: "Tender filet mignon with garlic mashed potatoes.",
    img: "/imgMenu/mignon.jpg"
},
{
    id: "Salmon",
    name: "Salmon with Lemon Butter",
    price: 20.99,
    desc: "Grilled salmon with a tangy lemon butter sauce.",
    img: "/imgMenu/salmon.jpg"
},
{
    id: "Risotto",
    name: "Vegetable Risotto",
    price: 16.99,
    desc: "Creamy risotto with a medley of seasonal vegetables.",
    img: "/imgMenu/risotto.jpg"
},
{
    id: "Cake",
    name: "Chocolate Lava Cake",
    price: 7.99,
    desc: "Warm chocolate cake with a molten center.",
    img: "/imgMenu/cake.jpg"
},
{
    id: "Cheesecake",
    name: "New York Cheesecake",
    price: 6.99,
    desc: "Creamy cheesecake with a graham cracker crust.",
    img: "/imgMenu/cheesecake.jpg"
},
{
    id: "Pie",
    name: "Apple Pie",
    price: 5.99,
    desc: "Homemade apple pie with a flaky crust.",
    img: "/imgMenu/pie.jpg"
}]

let basket = [];

let generateShop =()=>{
    return (shop.innerHTML = shopItemsData
        .map((x)=>{
            let {id, name, price, desc, img} =x
        return `
        <div class="item">
        <img width="200" src="${img}" alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$${price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
        `
    }).join(""));
}

generateShop()

let increment = (id) => {
    let selectedItem = id
    let search = basket.find((x) => x.id === selectedItem.id)

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        })
    }
    else{
        search.item += 1;
    }

    localStorage.setItem("data", basket);
    
    update(selectedItem.id);
};
let decrement = (id) => {
    let selectedItem = id
    let search = basket.find((x) => x.id === selectedItem.id)

    if(search.item === 0) return;
    else{
        search.item -= 1;
    }

    
    update(selectedItem.id);
};
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
};
