let orderItems = []

const menuItems = [
    {
        name: "Hamburger",
        price: 12.99,
        image: "../images/hamburger.jpg",
        category: "Burgers"
    },
    {
        name: "Spaghetti",
        price: 14.99,
        image: "../images/spaghetti.jpg",
        category: "Pasta"
    },
    {
        name: "Caesar Salad",
        price: 9.99,
        image: "../images/caesar.png",
        category: "Salads"
    }
]

function fetchMenu() {
    document.getElementById("name-1").textContent = menuItems[0].name
    document.getElementById("price-1").textContent = "$" + menuItems[0].price
    document.getElementById("image-1").src = menuItems[0].image

    document.getElementById("name-2").textContent = menuItems[1].name
    document.getElementById("price-2").textContent = "$" + menuItems[1].price
    document.getElementById("image-2").src = menuItems[1].image

    document.getElementById("name-3").textContent = menuItems[2].name
    document.getElementById("price-3").textContent = "$" + menuItems[2].price
    document.getElementById("image-3").src = menuItems[2].image
}

fetchMenu()

function addToOrder(index) {
    orderItems.push(menuItems[index])

    displayOrder()
}

function removeFromOrder(index) {
    orderItems.splice(index, 1)

    displayOrder()
}

function displayOrder() {

    document.querySelector(".order-section").innerHTML = `
        <h2>Your Order <span id="totalQuantity">(${orderItems.length})</span></h2>`

    let total = 0

    orderItems.forEach((item, index) => {
        total += item.price

        document.querySelector(".order-section").innerHTML += `
            <p class="order-item" onclick="removeFromOrder(${index})">
                <span>1x</span>
                <span>${item.name}</span>
                <span>$${item.price}</span>
            </p>`
    })

    document.querySelector(".order-section").innerHTML += `
        <p id="total">[ Total: $${total.toFixed(2)} ]</p>`
}