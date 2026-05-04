let text = "JEWEL HOLIC";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("logo").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 120);
    }
}
typeEffect();

// الفورم
function openForm(product) {
    document.getElementById("orderForm").style.display = "block";
    document.getElementById("productName").innerText = product;
}

function closeForm() {
    document.getElementById("orderForm").style.display = "none";
}

function submitOrder() {
    alert("تم استلام طلبك بنجاح ✨");
    closeForm();
}



// Get product from URL
let params = new URLSearchParams(window.location.search);
let product = params.get("product");
let price = params.get("price");






let ownerNumber = "201021702269";

let url = "https://wa.me/201021702269" + "?text=" + message;

// Open WhatsApp
window.location.href = "https://wa.me/201021702269?text=" + encodeURIComponent(message);
