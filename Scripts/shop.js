document.addEventListener("DOMContentLoaded", () => {
    const cartBtn = document.getElementById("cart-btn");
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const checkoutBtn = document.getElementById("checkout-btn");
    const closeCartBtn = document.getElementById("close-cart");
    let cart = [];

    cartBtn.addEventListener("click", () => {
        cartSidebar.classList.toggle("active");
    });

    closeCartBtn.addEventListener("click", () => {
        cartSidebar.classList.remove("active");
    });

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.closest(".product");
            const name = product.dataset.name;
            const price = parseFloat(product.dataset.price);
            
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            const li = document.createElement("li");
            li.textContent = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
            cartItems.appendChild(li);
        });
        cartTotal.textContent = total;
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    checkoutBtn.addEventListener("click", () => {
        let receiptContent = `<div class='receipt'>
            <img src='logo.png' alt='GreenCan Logo' class='receipt-logo'>
            <h2>GreenCan Receipt</h2>
            <div class='receipt-items'>`;
        
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            receiptContent += `<div><span>${item.name} x${item.quantity}</span> <span>$${item.price * item.quantity}</span></div>`;
        });
        
        receiptContent += `</div>
            <h3>Total: $${total}</h3>
            <div class='receipt-footer'>
                <p>CEO OF GREENCAN</p>
                <p><strong>Vansh Patel</strong></p>
                <img src='signature.png' alt='Signature' width='100'>
            </div>
        </div>`;
        
        let printWindow = window.open('', '', 'width=400,height=600');
        printWindow.document.write(receiptContent);
        printWindow.document.close();
        printWindow.print();
        cart = [];
        updateCart();
        cartSidebar.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const receiptItems = document.getElementById("receipt-items");
    const subtotalElem = document.getElementById("subtotal");
    const taxElem = document.getElementById("tax");
    const totalElem = document.getElementById("total");
    const dateElem = document.getElementById("receipt-date");
    const receiptDiv = document.getElementById("receipt");
    
    dateElem.textContent = new Date().toLocaleDateString();
    
    let cart = [
        { name: "Eco Bag", price: 10, quantity: 1 },
        { name: "Recycled Bottle", price: 8, quantity: 2 }
    ];
    
    function updateReceipt() {
        receiptItems.innerHTML = "";
        let subtotal = 0;
        
        cart.forEach((item, index) => {
            let itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.quantity}</td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button class="cancel-btn" onclick="removeItem(${index})">X</button></td>
            `;
            receiptItems.appendChild(row);
        });
        
        let tax = subtotal * 0.06;
        let total = subtotal + tax;
        subtotalElem.textContent = subtotal.toFixed(2);
        taxElem.textContent = tax.toFixed(2);
        totalElem.textContent = total.toFixed(2);
    }
    
    window.removeItem = (index) => {
        cart.splice(index, 1);
        updateReceipt();
    };
    
    window.showReceipt = () => {
        receiptDiv.style.display = "block";
        updateReceipt();
    };
});



