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

let generateShop =()=>{
    return (shop.innerHTML = shopItemsData
        .map((x)=>{
            let {id, name, price, desc, img} =x
        return `
        <div id=product-id-${id} class="menu-item">
        <h4>${name}</h4>
        <p>${desc}</p>
        <p>$${price}</p>
        </div>
        `
    }),join(""));
}

generateShop()
