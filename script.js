 const products = [
            { id: 1, name: "T-shirt", category: "clothing", price: 499, image: "https://m.media-amazon.com/images/I/61ThK8RnMjL._AC_UL480_FMwebp_QL65_.jpg" },
            { id: 2, name: "Smartphone", category: "electronics", price: 114999, image: "https://m.media-amazon.com/images/I/61giwQtR1qL._AC_UY327_FMwebp_QL65_.jpg" },
            { id: 3, name: "Watch", category: "accessories", price: 1999, image: "https://m.media-amazon.com/images/I/81u1EddMdrL._AC_UL480_FMwebp_QL65_.jpg" },
            { id: 4, name: "Jeans", category: "clothing", price: 1199, image: "https://m.media-amazon.com/images/I/81kt3gV6RAL._AC_UL480_FMwebp_QL65_.jpg" },
            { id: 5, name: "Headphones", category: "electronics", price: 2499, image: "https://m.media-amazon.com/images/I/51Tf2zsMODL._AC_UY327_FMwebp_QL65_.jpg" }, 
            { id: 6, name: "T-shirt", category: "clothing", price: 599, image: "https://m.media-amazon.com/images/I/518gS92fNJL._AC_UL480_FMwebp_QL65_.jpg" },
            { id: 7, name: "Smartphone", category: "electronics", price: 12999, image: "https://m.media-amazon.com/images/I/61UqPjhVI3L._AC_UY327_FMwebp_QL65_.jpg" },
            { id: 8, name: "Watch", category: "accessories", price: 2999, image: "https://m.media-amazon.com/images/I/71Vx928Yx2L._AC_UL480_FMwebp_QL65_.jpg" },
            { id: 9, name: "Shirts", category: "clothing", price: 1599, image: "https://m.media-amazon.com/images/I/61rR0es4v3L._AC_UL480_FMwebp_QL65_.jpg" }
        ];
        
        let cart = [];
        const productsContainer = document.getElementById("products-container");
        const cartItems = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");
        const cartCount = document.getElementById("cart-count");

        function renderProducts(filter = "all") {
            productsContainer.innerHTML = "";
            const filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);
            
            filteredProducts.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>₹${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productsContainer.appendChild(productCard);
            });
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            cart.push(product);
            updateCart();
        }

        function updateCart() {
            cartItems.innerHTML = "";
            let total = 0;
            cart.forEach((item, index) => {
                total += item.price;
                const listItem = document.createElement("li");
                listItem.innerHTML = `${item.name} - ₹${item.price} 
                    <button class="delete-btn" onclick="removeFromCart(${index})">❌</button>`;
                cartItems.appendChild(listItem);
            });
            cartTotal.textContent = total.toFixed(2);
            cartCount.textContent = cart.length;
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        // Cart Modal Open/Close Functionality
        const cartButton = document.getElementById("cart-button");
        const cartModal = document.getElementById("cart-modal");
        const closeCartButton = document.getElementById("close-cart");

        cartButton.addEventListener("click", () => {
            cartModal.classList.remove("hidden");
        });

        closeCartButton.addEventListener("click", () => {
            cartModal.classList.add("hidden");
        });

        document.getElementById("category-filter").addEventListener("change", (e) => renderProducts(e.target.value));
        renderProducts();
