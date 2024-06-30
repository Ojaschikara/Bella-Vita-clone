let loginBtn = document.querySelector("#login");
let isAuth = localStorage.getItem("isAuth") || "Not Authenticated"
if (isAuth !== "Authenticated") {
    loginBtn.innerText = "Login";
} else {
    loginBtn.innerText = "Logout";
    loginBtn.addEventListener("click", function () {
        localStorage.setItem("isAuth", "Not Authenticated");
        window.location.reload();
    })
}

let viewAllBtn = document.querySelector("#viewAllBtn");
viewAllBtn.addEventListener("click",function(){
    window.location.href = "./bestSellers.html";
})
const cart = [];


function addToCart(productName) {
    cart.push({ product: productName });
    alert('Item added to cart!');
    // addToCart(el);
}

