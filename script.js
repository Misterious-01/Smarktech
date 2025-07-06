// Product data array - accessible globally
const productsData = [
    {
        id: 'product001',
        name: 'HP LaserJet Printer',
        price: 19900.00,
        currency: 'KSH',
        image: 'https://via.placeholder.com/300x200?text=HP+LaserJet',
        category: 'printers',
        brand: 'brand-a',
        description: 'Fast monochrome laser printer for home or office use.',
        specs: { 'Brand': 'Brand A', 'Category': 'Printer', 'Connectivity': 'Wireless', 'Print Speed': '20 ppm', 'Resolution': '1200 DPI' },
        box_contents: 'Product unit, Power cable, USB cable, User manual.'
    },
    {
        id: 'product002',
        name: 'Epson Inkjet Printer',
        price: 12500.00,
        currency: 'KSH',
        image: 'https://via.placeholder.com/300x200?text=Epson+Inkjet',
        category: 'printers',
        brand: 'brand-b',
        description: 'High-quality color inkjet printer, perfect for photos and documents.',
        specs: { 'Brand': 'Brand B', 'Category': 'Printer', 'Connectivity': 'USB, Wi-Fi', 'Print Speed': '15 ppm', 'Color': 'Yes' },
        box_contents: 'Printer, Ink cartridges, Setup guide, Power cord.'
    },
    {
        id: 'product003',
        name: 'Logitech Mechanical Keyboard',
        price: 8500.00,
        currency: 'KSH',
        image: 'https://via.placeholder.com/300x200?text=Mechanical+Keyboard',
        category: 'keyboards',
        brand: 'brand-b',
        description: 'Durable mechanical keyboard with tactile switches for gaming and typing.',
        specs: { 'Brand': 'Brand B', 'Category': 'Keyboard', 'Type': 'Mechanical', 'Backlight': 'RGB', 'Connectivity': 'Wired' },
        box_contents: 'Keyboard, USB cable, Keycap puller.'
    },
    {
        id: 'product004',
        name: 'Logitech Wireless Keyboard',
        price: 6200.00,
        currency: 'KSH',
        image: 'https://via.placeholder.com/300x200?text=Wireless+Keyboard',
        category: 'keyboards',
        brand: 'brand-a',
        description: 'Compact wireless keyboard for versatile use with multiple devices.',
        specs: { 'Brand': 'Brand A', 'Category': 'Keyboard', 'Type': 'Membrane', 'Connectivity': 'Wireless (Bluetooth)', 'Battery Life': '24 months' },
        box_contents: 'Keyboard, USB receiver, AA batteries.'
    },
    {
        id: 'product005',
        name: 'Dell UltraSharp Monitor',
        price: 45000.00,
        currency: 'KSH',
        image: 'https://via.placeholder.com/300x200?text=27-inch+4K+Monitor',
        category: 'monitors',
        brand: 'brand-b',
        description: 'Stunning 4K resolution on a 27-inch display for professional use.',
        specs: { 'Brand': 'Brand B', 'Category': 'Monitor', 'Size': '27 inch', 'Resolution': '3840x2160', 'Panel Type': 'IPS' },
        box_contents: 'Monitor, HDMI cable, DisplayPort cable, Power cable.'
    },
    {
        id: 'product006',
        name: 'Samsung Gaming Monitor',
        price: 78000.00,
        currency: 'KSH',
        image: 'https://via.placeholder.com/300x200?text=Gaming+Monitor',
        category: 'monitors',
        brand: 'brand-c',
        description: 'High refresh rate gaming monitor for an immersive experience.',
        specs: { 'Brand': 'Brand C', 'Category': 'Monitor', 'Size': '32 inch', 'Resolution': '2560x1440', 'Refresh Rate': '144Hz' },
        box_contents: 'Monitor, DisplayPort cable, USB hub cable, Stand.'
    },
    {
        id: 'product007',
        name: 'Razer Wireless Gaming Mouse',
        price: 9800.00,
        currency: 'KSH',
        image: 'https://via.placeholder.com/300x200?text=Wireless+Gaming+Mouse',
        category: 'mouse',
        brand: 'brand-a',
        description: 'Ultra-lightweight gaming mouse with high precision sensor.',
        specs: { 'Brand': 'Brand A', 'Category': 'Mouse', 'DPI': '20000', 'Buttons': '8', 'Connectivity': 'Wireless (2.4GHz)' },
        box_contents: 'Mouse, USB dongle, Charging cable.'
    },
    {
        id: 'product008',
        name: 'Dell Ergonomic Mouse',
        price: 3200.00,
        currency: 'KSH',
        image: 'https://via.placeholder.com/300x200?text=Ergonomic+Mouse',
        category: 'mouse',
        brand: 'brand-b',
        description: 'Comfortable and precise mouse for everyday office use.',
        specs: { 'Brand': 'Brand B', 'Category': 'Mouse', 'DPI': '1600', 'Buttons': '3', 'Connectivity': 'Wired (USB)' },
        box_contents: 'Mouse, User manual.'
    },
    {
        id: 'product013',
        name: 'HP Pavilion Laptop',
        price: 75000.00,
        currency: 'KSH',
        image: 'https://via.placeholder.com/300x200?text=HP+Laptop',
        category: 'laptops',
        brand: 'brand-a',
        description: 'Versatile laptop for everyday tasks and entertainment.',
        specs: { 'Brand': 'Brand A', 'Category': 'Laptop', 'Processor': 'Intel Core i5', 'RAM': '8GB', 'Storage': '256GB SSD' },
        box_contents: 'Laptop, Power adapter, User manual.'
    },
    {
        id: 'product014',
        name: 'Dell XPS Desktop',
        price: 120000.00,
        currency: 'KSH',
        image: 'https://via.placeholder.com/300x200?text=Dell+Desktop',
        category: 'desktops',
        brand: 'brand-b',
        description: 'High-performance desktop for demanding applications and gaming.',
        specs: { 'Brand': 'Brand B', 'Category': 'Desktop', 'Processor': 'Intel Core i7', 'RAM': '16GB', 'Storage': '512GB SSD' },
        box_contents: 'Desktop PC, Power cable, Setup guide.'
    }
];


document.addEventListener('DOMContentLoaded', () => {

    // --- Common Elements & Variables (Accessible across pages) ---
    const cartIconCount = document.querySelector('.header-cart-icon .cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // --- SHOP.HTML specific elements (declared here for broader scope) ---
    // These need to be accessible to event listeners and applyFiltersAndSorting,
    // which might be called from outside the productGrid check initially.
    const productGrid = document.getElementById('product-grid');
    const priceRange = document.getElementById('price-range');
    const currentPriceDisplay = document.getElementById('current-price-display');
    // Select all checkboxes within the Category filter group using its ID
    const categoryCheckboxes = document.querySelectorAll('#category-filter-group input[type="checkbox"]');
    // Select all checkboxes within the Brand filter group using its ID
    const brandCheckboxes = document.querySelectorAll('#brand-filter-group input[type="checkbox"]');
    const sortBySelect = document.getElementById('sort-by');


    // --- Cart Management Functions ---
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartIconCount) {
            cartIconCount.textContent = totalItems;
            cartIconCount.style.display = totalItems > 0 ? 'inline-block' : 'none';
        }
    }

    function addToCart(productId, quantity = 1) {
        const product = productsData.find(p => p.id === productId);

        if (!product) {
            alert('Product not found!');
            return;
        }

        const existingItemIndex = cart.findIndex(item => item.id === productId);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push({ ...product, quantity: quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} added to cart!`);
    }

    function renderCartItems() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartSubtotalDisplay = document.getElementById('cart-subtotal');
        const cartTotalDisplay = document.getElementById('cart-total');
        const shippingCost = 500.00;

        if (!cartItemsContainer || !cartSubtotalDisplay || !cartTotalDisplay) {
            return;
        }

        cartItemsContainer.innerHTML = '';

        let subtotal = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty. <a href="shop.html">Start shopping!</a></p>';
        } else {
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;

                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');
                cartItemDiv.dataset.productId = item.id;

                cartItemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p class="item-price">${item.currency} ${item.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
                        <div class="item-quantity">
                            <label for="qty-${item.id}">Quantity:</label>
                            <input type="number" id="qty-${item.id}" value="${item.quantity}" min="1">
                            <button class="remove-item-btn"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItemDiv);
            });
        }

        const total = subtotal + shippingCost;
        cartSubtotalDisplay.textContent = `${cart[0]?.currency || 'KSH'} ${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
        cartTotalDisplay.textContent = `${cart[0]?.currency || 'KSH'} ${total.toLocaleString(undefined, {minimumFractionDigits: 2})}`;

        addCartItemEventListeners();
    }

    function addCartItemEventListeners() {
        const quantityInputs = document.querySelectorAll('.cart-item input[type="number"]');
        const removeButtons = document.querySelectorAll('.cart-item .remove-item-btn');

        quantityInputs.forEach(input => {
            input.addEventListener('change', (event) => {
                const productId = event.target.closest('.cart-item').dataset.productId;
                const newQuantity = parseInt(event.target.value, 10);
                updateCartQuantity(productId, newQuantity);
            });
        });

        removeButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.closest('.cart-item').dataset.productId;
                removeFromCart(productId);
            });
        });
    }

    function updateCartQuantity(productId, newQuantity) {
        let itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            if (newQuantity > 0) {
                cart[itemIndex].quantity = newQuantity;
            } else {
                cart.splice(itemIndex, 1);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            renderCartItems();
        }
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();
        alert('Item removed from cart.');
    }

    // Call updateCartCount on initial load for any page
    updateCartCount();

    // Initial call for cart page rendering (only if on cart.html)
    const isCartPage = document.getElementById('cart-items') !== null;
    if (isCartPage) {
        renderCartItems();
    }


    // --- Logic specific to SHOP.HTML ---
    if (productGrid) {
        const productItems = Array.from(productGrid.querySelectorAll('.product-item'));

        // Price Range Slider Functionality
        if (priceRange && currentPriceDisplay) {
            currentPriceDisplay.textContent = priceRange.value;
            priceRange.addEventListener('input', () => {
                currentPriceDisplay.textContent = priceRange.value;
                applyFiltersAndSorting();
            });
        }

        // Event Listeners for Filters
        categoryCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', applyFiltersAndSorting);
        });

        brandCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', applyFiltersAndSorting);
        });

        // Event Listener for Sorting
        if (sortBySelect) {
            sortBySelect.addEventListener('change', applyFiltersAndSorting);
        }

        // Add to Cart buttons on shop.html
        const shopAddToCartButtons = productGrid.querySelectorAll('.add-to-cart-btn');
        if (shopAddToCartButtons.length > 0) {
            shopAddToCartButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const productItem = event.target.closest('.product-item');
                    if (productItem) {
                        const productId = productItem.dataset.productId;
                        addToCart(productId, 1);
                    }
                });
            });
        }


        function applyFiltersAndSorting() {
            let filteredProducts = productItems;

            // 1. Apply Category Filter
            const selectedCategories = Array.from(categoryCheckboxes)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value);

            if (selectedCategories.length > 0) {
                filteredProducts = filteredProducts.filter(product =>
                    selectedCategories.includes(product.dataset.category)
                );
            }

            // 2. Apply Brand Filter
            const selectedBrands = Array.from(brandCheckboxes)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value);

            if (selectedBrands.length > 0) {
                filteredProducts = filteredProducts.filter(product =>
                    selectedBrands.includes(product.dataset.brand)
                );
            }

            // 3. Apply Price Range Filter
            if (priceRange) {
                const maxPrice = parseInt(priceRange.value, 10);
                filteredProducts = filteredProducts.filter(product => {
                    const priceText = product.querySelector('.product-price-display').textContent;
                    const price = parseFloat(priceText.replace('KSH', '').replace(/\s/g, ''));
                    return price <= maxPrice;
                });
            }

            // 4. Apply Sorting
            const sortBy = sortBySelect.value;
            if (sortBy !== 'default') {
                filteredProducts.sort((a, b) => {
                    const priceA = parseFloat(a.querySelector('.product-price-display').textContent.replace('KSH', '').replace(/\s/g, ''));
                    const priceB = parseFloat(b.querySelector('.product-price-display').textContent.replace('KSH', '').replace(/\s/g, ''));
                    const nameA = a.querySelector('h3').textContent.toLowerCase();
                    const nameB = b.querySelector('h3').textContent.toLowerCase();

                    if (sortBy === 'price-asc') {
                        return priceA - priceB;
                    } else if (sortBy === 'price-desc') {
                        return priceB - priceA;
                    } else if (sortBy === 'name-asc') {
                        return nameA.localeCompare(nameB);
                    } else if (sortBy === 'name-desc') {
                        return nameB.localeCompare(nameA);
                    }
                    return 0;
                });
            }

            // 5. Update the Display
            productGrid.innerHTML = '';

            if (filteredProducts.length > 0) {
                filteredProducts.forEach(product => {
                    product.style.display = '';
                    productGrid.appendChild(product);
                });
            } else {
                const noProductsMessage = document.createElement('p');
                noProductsMessage.textContent = 'No products found matching your filters.';
                noProductsMessage.style.textAlign = 'center';
                noProductsMessage.style.gridColumn = '1 / -1';
                productGrid.appendChild(noProductsMessage);
            }
        }

        // Call applyFiltersAndSorting once on shop page load to apply initial state
        applyFiltersAndSorting();
    }


    // --- Logic specific to PRODUCT.HTML ---
    const mainProductImage = document.querySelector('.main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail-gallery .thumbnail');
    const productPageTitle = document.querySelector('.product-info .product-title');
    const productPagePrice = document.querySelector('.product-info .product-price');
    const productPageDescription = document.querySelector('.product-info .product-description');
    const productPageQuantityInput = document.getElementById('quantity');
    const productPageAddToCartBtn = document.getElementById('add-to-cart-btn');
    const productPageSpecsList = document.querySelector('.additional-info ul');
    const productPageBoxContents = document.querySelector('.additional-info p');
    const productBreadcrumb = document.querySelector('.breadcrumb li:last-child');


    if (mainProductImage && thumbnails.length > 0 && productPageAddToCartBtn) {
        // Function to populate product details on product.html
        function populateProductPage(productId) {
            const product = productsData.find(p => p.id === productId);

            if (!product) {
                console.error('Product data not found for ID:', productId);
                return;
            }

            // Update main image and thumbnails
            mainProductImage.src = product.image;
            mainProductImage.alt = product.name;

            // Update thumbnails (assuming product has multiple images, otherwise just use main)
            if (thumbnails[0]) {
                thumbnails[0].src = product.image;
                thumbnails[0].alt = product.name + ' - Thumbnail 1';
                thumbnails[0].classList.add('active');
            }
            for (let i = 1; i < thumbnails.length; i++) {
                thumbnails[i].src = `https://via.placeholder.com/100x70?text=Thumb${i+1}`;
                thumbnails[i].alt = `Placeholder Thumbnail ${i+1}`;
                thumbnails[i].classList.remove('active');
            }


            // Update product info
            if (productPageTitle) productPageTitle.textContent = product.name;
            if (productBreadcrumb) productBreadcrumb.textContent = product.name;
            if (productPagePrice) productPagePrice.textContent = `${product.currency} ${product.price.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
            if (productPageDescription) productPageDescription.textContent = product.description;
            if (productPageQuantityInput) productPageQuantityInput.value = 1;

            // Update Add to Cart button's data-product-id
            productPageAddToCartBtn.dataset.productId = product.id;

            // Update Specifications
            if (productPageSpecsList && product.specs) {
                productPageSpecsList.innerHTML = '';
                for (const [key, value] of Object.entries(product.specs)) {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${key}:</strong> ${value}`;
                    productPageSpecsList.appendChild(li);
                }
            }

            // Update What's in the box
            if (productPageBoxContents && product.box_contents) {
                productPageBoxContents.textContent = product.box_contents;
            }
        }


        // Image Gallery Functionality
        if (document.querySelector('.thumbnail.active') === null && thumbnails.length > 0) {
            thumbnails[0].classList.add('active');
        }

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
                mainProductImage.src = thumbnail.src;
                mainProductImage.alt = thumbnail.alt;
            });
        });

        // Add to Cart button on product.html
        productPageAddToCartBtn.addEventListener('click', () => {
            const productId = productPageAddToCartBtn.dataset.productId;
            const quantity = parseInt(productPageQuantityInput.value, 10);
            if (productId && quantity > 0) {
                addToCart(productId, quantity);
            } else {
                alert('Please select a valid quantity.');
            }
        });

        // Populate product.html based on URL parameter or default
        const urlParams = new URLSearchParams(window.location.search);
        const productIdFromUrl = urlParams.get('id');

        if (productIdFromUrl) {
            populateProductPage(productIdFromUrl);
        } else {
            populateProductPage('product001'); // Fallback to a valid product if no ID is in URL
        }
    }


    // --- Common Search Bar Functionality ---
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    if (searchInput && searchButton) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.toLowerCase();
            if (searchTerm) {
                // In a real application, you'd likely redirect to a search results page
                // or dynamically filter products on the current page if it's the shop page.
                alert(`Searching for: "${searchTerm}"`);
            } else {
                alert('Please enter a search term.');
            }
        });

        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                searchButton.click();
            }
        });
    }

}); // CLOSING BRACE FOR DOMContentLoaded