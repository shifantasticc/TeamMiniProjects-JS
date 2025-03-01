let cart = [];
        let total = 0;

        function addToCart(productName, price) {
            cart.push({ name: productName, price: price });
            total += price;
            updateCart();
        }

        function removeFromCart(index) {
            total -= cart[index].price;
            cart.splice(index, 1);
            updateCart();
        }

        function updateCart() {
            const cartItems = document.getElementById("cartItems");
            cartItems.innerHTML = "";
            cart.forEach((item, index) => {
                const li = document.createElement("li");
                li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">X</button>`;
                cartItems.appendChild(li);
            });
            document.getElementById("totalPrice").textContent = total;
        }