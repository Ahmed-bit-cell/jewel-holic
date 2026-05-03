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

// Send order
function sendOrder() {

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();

    // Validation
    if (!name || !phone || !address) {
        alert("Please fill in all fields!");
        return;
    }

    if (phone.length !== 11) {
        alert("Phone number must be 11 digits!");
        return;
    }

    let message = `
New Order from JEWEL HOLIC:
Product: ${product || "Not specified"}
Price: ${price || "Not specified"}
Name: ${name}
Customer Phone: ${phone}
Address: ${address}
`;

    let ownerNumber = "201021702269"; // 👈 put your WhatsApp number

    let url = "https://wa.me/" + ownerNumber + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}