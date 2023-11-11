let cart = [];
        let total = 0;

        function addToCart(item, price) {
            cart.push({ item, price });
            updateCart();
        }

        function updateCart() {
            const cartItemsElement = document.getElementById('cartItems');
            const cartTotalElement = document.getElementById('cartTotal');

            cartItemsElement.innerHTML = '';
            total = 0;

            cart.forEach((cartItem) => {
                const li = document.createElement('li');
                li.innerHTML = `<span>${cartItem.item}</span><span>$${cartItem.price.toFixed(2)}</span>`;
                cartItemsElement.appendChild(li);

                total += cartItem.price;
            });

            cartTotalElement.textContent = `Итого: $${total.toFixed(2)}`;
        }
