// ======================================================
// CONTENT-BASED RECOMMENDATION SYSTEM
// ======================================================

const products = [

    {
        id: 1,
        name: "Nova X Pro",
        category: "Smartphones",
        brand: "NovaTech",
        price: 54999,
        colour: "Midnight Blue",
        features: ["5G","AMOLED","120Hz","AI Camera"],
        description: "Premium smartphone with AMOLED display, 5G performance and intelligent camera.",
        rating: 4.7,
        image: "📱"
    },

    {
        id: 2,
        name: "PixelEdge 12",
        category: "Smartphones",
        brand: "PixelEdge",
        price: 42999,
        colour: "Obsidian",
        features: ["5G","OLED","120Hz","AI Camera"],
        description: "Fast 5G smartphone with OLED display and computational photography.",
        rating: 4.6,
        image: "📱"
    },

    {
        id: 3,
        name: "AeroBook Pro 14",
        category: "Laptops",
        brand: "Aero",
        price: 74999,
        colour: "Silver",
        features: ["Core i7","16GB RAM","512GB SSD","AI Engine"],
        description: "Slim performance laptop designed for coding, creativity and AI workloads.",
        rating: 4.8,
        image: "💻"
    },

    {
        id: 4,
        name: "ZenBook Air",
        category: "Laptops",
        brand: "Zen",
        price: 68999,
        colour: "Midnight Blue",
        features: ["Core i5","16GB RAM","512GB SSD","OLED"],
        description: "Portable OLED laptop with efficient performance and premium design.",
        rating: 4.5,
        image: "💻"
    },

    {
        id: 5,
        name: "ProSound X9",
        category: "Headphones",
        brand: "ProSound",
        price: 3499,
        colour: "Black",
        features: ["Bluetooth","Wireless","ANC","40h Battery"],
        description: "Wireless over-ear headphones with active noise cancellation and deep bass.",
        rating: 4.7,
        image: "🎧"
    },

    {
        id: 6,
        name: "BassFlow Max",
        category: "Headphones",
        brand: "BassFlow",
        price: 2999,
        colour: "Black",
        features: ["Bluetooth","Wireless","Deep Bass","35h Battery"],
        description: "Comfortable wireless headphones built for powerful music and long listening.",
        rating: 4.4,
        image: "🎧"
    },

    {
        id: 7,
        name: "AirBeat Studio",
        category: "Headphones",
        brand: "AirBeat",
        price: 4599,
        colour: "White",
        features: ["Bluetooth","Wireless","ANC","Spatial Audio"],
        description: "Premium wireless audio with spatial sound and adaptive noise control.",
        rating: 4.8,
        image: "🎧"
    },

    {
        id: 8,
        name: "Pulse Watch S",
        category: "Smart Watches",
        brand: "Pulse",
        price: 4299,
        colour: "Rose Gold",
        features: ["AMOLED","Heart Rate","GPS","Sleep Tracking"],
        description: "Smart watch with health tracking, GPS and vivid AMOLED screen.",
        rating: 4.5,
        image: "⌚"
    },

    {
        id: 9,
        name: "FitTrack Ultra",
        category: "Smart Watches",
        brand: "FitTrack",
        price: 6999,
        colour: "Black",
        features: ["AMOLED","Heart Rate","GPS","SpO2"],
        description: "Fitness-focused smartwatch with advanced activity and wellness tracking.",
        rating: 4.7,
        image: "⌚"
    },

    {
        id: 10,
        name: "StreetRun X",
        category: "Shoes",
        brand: "RunX",
        price: 2499,
        colour: "Red",
        features: ["Running","Lightweight","Cushion","Mesh"],
        description: "Lightweight running shoes with breathable mesh and cushioning.",
        rating: 4.3,
        image: "👟"
    },

    {
        id: 11,
        name: "UrbanFlex Pro",
        category: "Shoes",
        brand: "UrbanFlex",
        price: 3299,
        colour: "Black",
        features: ["Running","Lightweight","Cushion","Grip"],
        description: "Modern athletic shoes with flexible cushioning and all-day comfort.",
        rating: 4.5,
        image: "👟"
    },

    {
        id: 12,
        name: "Voyage Backpack",
        category: "Bags",
        brand: "Voyage",
        price: 1899,
        colour: "Black",
        features: ["Laptop Sleeve","Water Resistant","Travel","USB Port"],
        description: "Smart travel backpack with laptop protection and USB access.",
        rating: 4.6,
        image: "🎒"
    },

    {
        id: 13,
        name: "MetroPack Lite",
        category: "Bags",
        brand: "Metro",
        price: 1499,
        colour: "Navy Blue",
        features: ["Laptop Sleeve","Lightweight","College","Water Resistant"],
        description: "Lightweight everyday backpack for college and work essentials.",
        rating: 4.4,
        image: "🎒"
    },

    {
        id: 14,
        name: "VisionCam 4K",
        category: "Cameras",
        brand: "Vision",
        price: 55999,
        colour: "Black",
        features: ["4K","Mirrorless","WiFi","AI Autofocus"],
        description: "Compact mirrorless camera with 4K recording and intelligent autofocus.",
        rating: 4.8,
        image: "📷"
    },

    {
        id: 15,
        name: "SnapPro Z",
        category: "Cameras",
        brand: "SnapPro",
        price: 39999,
        colour: "Silver",
        features: ["4K","Mirrorless","Bluetooth","Fast Focus"],
        description: "Versatile mirrorless camera for travel, portraits and content creation.",
        rating: 4.6,
        image: "📷"
    },

    {
        id: 16,
        name: "GameCore Mouse",
        category: "Gaming Accessories",
        brand: "GameCore",
        price: 1799,
        colour: "Black",
        features: ["RGB","Wireless","16000 DPI","Low Latency"],
        description: "Precision wireless gaming mouse with programmable controls and RGB.",
        rating: 4.6,
        image: "🖱️"
    },

    {
        id: 17,
        name: "HyperKey RGB",
        category: "Gaming Accessories",
        brand: "HyperKey",
        price: 2999,
        colour: "Black",
        features: ["RGB","Mechanical","Low Latency","USB-C"],
        description: "Mechanical RGB keyboard with fast response and compact layout.",
        rating: 4.7,
        image: "⌨️"
    },

    {
        id: 18,
        name: "GamePad X",
        category: "Gaming Accessories",
        brand: "GameCore",
        price: 2499,
        colour: "White",
        features: ["Wireless","Low Latency","Vibration","PC Compatible"],
        description: "Comfortable wireless controller with low latency controls.",
        rating: 4.5,
        image: "🎮"
    },

    {
        id: 19,
        name: "UltraPhone Lite",
        category: "Smartphones",
        brand: "NovaTech",
        price: 29999,
        colour: "Rose Gold",
        features: ["5G","AMOLED","90Hz","AI Camera"],
        description: "Stylish 5G smartphone with AMOLED display and smart camera features.",
        rating: 4.4,
        image: "📱"
    },

    {
        id: 20,
        name: "AeroBook Studio",
        category: "Laptops",
        brand: "Aero",
        price: 89999,
        colour: "Black",
        features: ["Core i7","32GB RAM","1TB SSD","AI Engine"],
        description: "High-performance creator laptop with AI-ready processor.",
        rating: 4.9,
        image: "💻"
    }

];


// ======================================================
// STATE
// ======================================================

let selectedProduct = null;

let favourites =
    JSON.parse(localStorage.getItem("favourites")) || [];

let recentlyViewed =
    JSON.parse(localStorage.getItem("recentlyViewed")) || [];

let recommendationCount =
    Number(localStorage.getItem("recommendationCount")) || 0;

let bestMatch =
    Number(localStorage.getItem("bestMatch")) || 0;


// ======================================================
// ELEMENTS
// ======================================================

const productGrid =
    document.getElementById("productGrid");

const recommendationGrid =
    document.getElementById("recommendationGrid");

const personalGrid =
    document.getElementById("personalGrid");


// ======================================================
// INITIALIZATION
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    createFilters();

    createCategories();

    displayProducts();

    displayPersonalRecommendations();

    displayRecent();

    updateDashboard();

    setupEvents();

});


// ======================================================
// CREATE FILTERS
// ======================================================

function createFilters() {

    const categories =
        [...new Set(products.map(p => p.category))];

    const brands =
        [...new Set(products.map(p => p.brand))];

    const colours =
        [...new Set(products.map(p => p.colour))];


    categories.forEach(category => {

        document.getElementById("categoryFilter")
            .innerHTML +=
            `<option value="${category}">
                ${category}
            </option>`;

    });


    brands.forEach(brand => {

        document.getElementById("brandFilter")
            .innerHTML +=
            `<option value="${brand}">
                ${brand}
            </option>`;

    });


    colours.forEach(colour => {

        document.getElementById("colourFilter")
            .innerHTML +=
            `<option value="${colour}">
                ${colour}
            </option>`;

    });

}


// ======================================================
// CATEGORIES
// ======================================================

function createCategories() {

    const categories = [

        ["📱","Smartphones"],
        ["💻","Laptops"],
        ["🎧","Headphones"],
        ["⌚","Smart Watches"],
        ["👟","Shoes"],
        ["🎒","Bags"],
        ["📷","Cameras"],
        ["🎮","Gaming Accessories"]

    ];


    document.getElementById("categoryGrid").innerHTML =
        categories.map(category => `

            <button class="category"
                data-category="${category[1]}">

                <span class="icon">${category[0]}</span>

                <span>${category[1]}</span>

            </button>

        `).join("");


    document.querySelectorAll(".category")
        .forEach(button => {

            button.addEventListener("click", () => {

                document.getElementById("categoryFilter")
                    .value = button.dataset.category;

                displayProducts();

                document
                    .getElementById("products")
                    .scrollIntoView({
                        behavior:"smooth"
                    });

            });

        });

}


// ======================================================
// PRODUCT CARD
// ======================================================

function productCard(product, score = null) {

    const isFavorite =
        favourites.includes(product.id);

    return `

        <div class="product-card">

            <div class="product-image">

                <span class="tag">
                    ${product.category}
                </span>

                <button
                    class="favorite ${isFavorite ? "active" : ""}"
                    data-favorite="${product.id}">

                    ${isFavorite ? "♥️" : "♡"}

                </button>

                <span class="emoji">
                    ${product.image}
                </span>

            </div>


            <div class="product-info">

                <div class="product-meta">

                    <span>${product.brand}</span>

                    <span>● ${product.colour}</span>

                </div>


                <h3>
                    ${product.name}
                </h3>


                <p class="description">
                    ${product.description}
                </p>


                <div class="price-row">

                    <span class="price">
                        ₹${product.price.toLocaleString("en-IN")}
                    </span>

                    <span class="rating">
                        ★ ${product.rating}
                    </span>

                </div>


                <div class="card-buttons">

                    <button
                        data-view="${product.id}">

                        View Details

                    </button>


                    <button
                        class="similar"
                        data-similar="${product.id}">

                        ✦ ${score ? score + "% Match" : "Similar"}

                    </button>

                </div>

            </div>

        </div>

    `;
}


// ======================================================
// DISPLAY PRODUCTS
// ======================================================

function displayProducts() {

    const search =
        document.getElementById("searchInput")
        .value.toLowerCase();

    const category =
        document.getElementById("categoryFilter")
        .value;

    const brand =
        document.getElementById("brandFilter")
        .value;

    const colour =
        document.getElementById("colourFilter")
        .value;

    const price =
        document.getElementById("priceFilter")
        .value;

    const sort =
        document.getElementById("sortFilter")
        .value;


    let filtered = products.filter(product => {

        const searchable = (

            product.name + " " +
            product.brand + " " +
            product.category + " " +
            product.colour + " " +
            product.description + " " +
            product.features.join(" ")

        ).toLowerCase();


        let priceOK = true;


        if(price !== "all") {

            const values =
                price.split("-").map(Number);

            priceOK =
                product.price >= values[0] &&
                product.price <= values[1];

        }


        return (

            searchable.includes(search) &&

            (category === "all" ||
             product.category === category) &&

            (brand === "all" ||
             product.brand === brand) &&

            (colour === "all" ||
             product.colour === colour) &&

            priceOK

        );

    });


    // SORTING

    if(sort === "low") {

        filtered.sort((a,b) =>
            a.price - b.price
        );

    }

    if(sort === "high") {

        filtered.sort((a,b) =>
            b.price - a.price
        );

    }

    if(sort === "rating") {

        filtered.sort((a,b) =>
            b.rating - a.rating
        );

    }

    if(sort === "name") {

        filtered.sort((a,b) =>
            a.name.localeCompare(b.name)
        );

    }


    if(filtered.length === 0) {

        productGrid.innerHTML = `

            <div class="empty">

                <div>⌕</div>

                <h3>No Products Found</h3>

                <p>
                    Try changing your filters.
                </p>

            </div>

        `;

        return;

    }


    productGrid.innerHTML =
        filtered.map(productCard).join("");

    attachProductEvents();

}


// ======================================================
// RECOMMENDATION ALGORITHM
// ======================================================

function calculateSimilarity(productA, productB) {

    if(productA.id === productB.id) {
        return 0;
    }


    // CATEGORY = 30%

    const categoryScore =
        productA.category === productB.category
        ? 30
        : 0;


    // BRAND = 15%

    const brandScore =
        productA.brand === productB.brand
        ? 15
        : 0;


    // COLOUR = 10%

    const colourScore =
        productA.colour === productB.colour
        ? 10
        : 0;


    // FEATURES = 30%

    const commonFeatures =
        productA.features.filter(feature =>
            productB.features.includes(feature)
        );


    const featureScore =
        (commonFeatures.length /
        Math.max(
            productA.features.length,
            productB.features.length
        )) * 30;


    // PRICE = 15%

    const priceDifference =
        Math.abs(
            productA.price - productB.price
        ) /
        Math.max(
            productA.price,
            productB.price
        );


    const priceScore =
        Math.max(
            0,
            15 * (1 - priceDifference)
        );


    // FINAL SCORE

    const finalScore =
        categoryScore +
        featureScore +
        brandScore +
        colourScore +
        priceScore;


    return Math.min(
        99,
        Math.round(finalScore)
    );

}


// ======================================================
// SELECT PRODUCT
// ======================================================

function selectProduct(id) {

    const product =
        products.find(p => p.id === id);

    selectedProduct = product;


    // RECENTLY VIEWED

    recentlyViewed =
        recentlyViewed.filter(
            item => item !== id
        );

    recentlyViewed.unshift(id);

    recentlyViewed =
        recentlyViewed.slice(0,6);


    // CALCULATE RECOMMENDATIONS

    const recommendations =
        products
        .filter(p => p.id !== id)
        .map(product => ({

            product: product,

            score:
                calculateSimilarity(
                    product,
                    product
                )

        }));


    // Correct similarity calculation

    const results =
        products
        .filter(p => p.id !== id)
        .map(product => ({

            product: product,

            score:
                calculateSimilarity(
                    selectedProduct,
                    product
                )

        }))
        .sort((a,b) =>
            b.score - a.score
        )
        .slice(0,6);


    recommendationCount++;

    if(results.length > 0) {

        bestMatch =
            Math.max(
                bestMatch,
                results[0].score
            );

    }


    saveData();

    displaySelectedProduct();

    displayRecommendations(results);

    displayPersonalRecommendations();

    displayRecent();

    updateDashboard();


    document
        .getElementById("recommendations")
        .scrollIntoView({
            behavior:"smooth"
        });

}


// ======================================================
// SELECTED PRODUCT
// ======================================================

function displaySelectedProduct() {

    const p = selectedProduct;

    const best =
        products
        .filter(x => x.id !== p.id)
        .map(x =>
            calculateSimilarity(p,x)
        )
        .sort((a,b) => b-a)[0];


    document.getElementById("selectedProduct")
        .innerHTML = `

        <div class="selected">

            <div class="selected-image">
                ${p.image}
            </div>

            <div>

                <small style="color:#7657ff">
                    SELECTED PRODUCT
                </small>

                <h3>${p.name}</h3>

                <p>
                    ${p.category} ·
                    ${p.brand} ·
                    ₹${p.price.toLocaleString("en-IN")}
                </p>

            </div>

            <div class="selected-score">

                <strong>
                    ${best}%
                </strong>

                <small>
                    Best Content Match
                </small>

            </div>

        </div>

    `;


    document.getElementById("recommendationText")
        .textContent =
        `Comparing ${p.name} with the product catalogue using weighted content similarity.`;

}


// ======================================================
// DISPLAY RECOMMENDATIONS
// ======================================================
function displayRecommendations(results) {

    recommendationGrid.innerHTML =
        results.map(result => `

            <div class="recommendation-card">

                <span class="match-score">

                    ${result.score}%

                    <small>Match</small>

                </span>

                ${productCard(
                    result.product,
                    result.score
                )}

            </div>

        `).join("");


    attachProductEvents();

}


// ======================================================
// PERSONALIZED RECOMMENDATIONS
// ======================================================

function displayPersonalRecommendations() {

    let base =
        selectedProduct ||
        products.find(p =>
            p.category === "Headphones"
        );


    let list =
        products
        .filter(p => p.id !== base.id)
        .map(p => ({

            product:p,

            score:
                calculateSimilarity(
                    base,
                    p
                )

        }))
        .sort((a,b) =>
            b.score - a.score
        )
        .slice(0,4);


    personalGrid.innerHTML =
        list.map(item =>
            productCard(
                item.product,
                item.score
            )
        ).join("");


    attachProductEvents();

}


// ======================================================
// PRODUCT EVENTS
// ======================================================

function attachProductEvents() {

    document
        .querySelectorAll("[data-favorite]")
        .forEach(button => {

            button.onclick = () => {

                toggleFavorite(
                    Number(button.dataset.favorite)
                );

            };

        });


    document
        .querySelectorAll("[data-view]")
        .forEach(button => {

            button.onclick = () => {

                openModal(
                    Number(button.dataset.view)
                );

            };

        });


    document
        .querySelectorAll("[data-similar]")
        .forEach(button => {

            button.onclick = () => {

                selectProduct(
                    Number(button.dataset.similar)
                );

            };

        });

}


// ======================================================
// FAVORITES
// ======================================================

function toggleFavorite(id) {

    if(favourites.includes(id)) {

        favourites =
            favourites.filter(
                item => item !== id
            );

        showToast(
            "Removed from favourites"
        );

    }

    else {

        favourites.push(id);

        showToast(
            "Added to favourites ♥️"
        );

    }


    saveData();

    displayProducts();

    displayPersonalRecommendations();

    updateDashboard();

}


// ======================================================
// RECENT PRODUCTS
// ======================================================

function displayRecent() {

    const container =
        document.getElementById(
            "recentProducts"
        );


    if(recentlyViewed.length === 0) {

        container.innerHTML = `

            <p class="empty-recent">
                No recently viewed products.
            </p>

        `;

        return;

    }


    container.innerHTML =
        recentlyViewed.map(id => {

            const p =
                products.find(
                    product => product.id === id
                );


            return `

                <div class="recent-item">

                    <div class="recent-image">
                        ${p.image}
                    </div>

                    <div>

                        <b>${p.name}</b>

                        <small>
                            ${p.category}
                        </small>

                    </div>

                    <strong>
                        ₹${p.price.toLocaleString("en-IN")}
                    </strong>

                </div>

            `;

        }).join("");

}


// ======================================================
// DASHBOARD
// ======================================================

function updateDashboard() {

    document.getElementById("viewedCount")
        .textContent =
        recentlyViewed.length;


    document.getElementById("recommendCount")
        .textContent =
        recommendationCount;


    document.getElementById("favMetric")
        .textContent =
        favourites.length;


    document.getElementById("favoriteCount")
        .textContent =
        favourites.length;


    document.getElementById("bestMatch")
        .textContent =
        bestMatch
        ? bestMatch + "%"
        : "—";

}


// ======================================================
// MODAL
// ======================================================

function openModal(id) {

    const product =
        products.find(p => p.id === id);


    const modal =
        document.getElementById(
            "productModal"
        );


    document.getElementById("modalContent")
        .innerHTML = `

        <div class="modal-content">

            <div class="modal-img">
                ${product.image}
            </div>

            <div class="modal-info">

                <small style="color:#7657ff;font-weight:800">
                    ${product.category}
                </small>

                <h2>
                    ${product.name}
                </h2>

                <div class="modal-price">
                    ₹${product.price.toLocaleString("en-IN")}
                </div>

                <p>
                    ★ ${product.rating}
                    · ${product.brand}
                    · ${product.colour}
                </p>

                <p>
                    ${product.description}
                </p>

                <div class="features">

                    ${product.features.map(
                        feature =>
                        `<span>${feature}</span>`
                    ).join("")}

                </div>

                <button
                    class="btn primary"
                    style="width:100%"
                    onclick="closeModal();selectProduct(${product.id})">

                    ✦ Recommend Similar Products

                </button>

            </div>

        </div>

    `;


    modal.classList.add("show");


    recentlyViewed =
        recentlyViewed.filter(
            item => item !== id
        );

    recentlyViewed.unshift(id);

    recentlyViewed =
        recentlyViewed.slice(0,6);

    saveData();

    displayRecent();

    updateDashboard();

}


// ======================================================
// CLOSE MODAL
// ======================================================

function closeModal() {

    document
        .getElementById("productModal")
        .classList.remove("show");

}


// ======================================================
// EVENTS
// ======================================================

function setupEvents() {

    document
        .getElementById("searchInput")
        .addEventListener(
            "input",
            displayProducts
        );


    document
        .getElementById("categoryFilter")
        .addEventListener(
            "change",
            displayProducts
        );


    document
        .getElementById("brandFilter")
        .addEventListener(
            "change",
            displayProducts
        );


    document
        .getElementById("colourFilter")
        .addEventListener(
            "change",
            displayProducts
        );


    document
        .getElementById("priceFilter")
        .addEventListener(
            "change",
            displayProducts
        );


    document
        .getElementById("sortFilter")
        .addEventListener(
            "change",
            displayProducts
        );


    document
        .getElementById("closeModal")
        .onclick =
        closeModal;


    document
        .querySelector(".modal-overlay")
        .onclick =
        closeModal;


    // MOBILE MENU

    document
        .getElementById("menuBtn")
        .onclick = () => {

            document
                .getElementById("navMenu")
                .classList.toggle("open");

        };


    // DARK MODE

    document
        .getElementById("themeBtn")
        .onclick = () => {

            document
                .body
                .classList
                .toggle("dark");

        };


    // FAVORITE NAV BUTTON

    document
        .getElementById("favoriteBtn")
        .onclick = () => {

            showToast(
                `You have ${favourites.length} favourite product(s)`
            );

        };


    // ESCAPE MODAL

    document.addEventListener(
        "keydown",
        event => {

            if(event.key === "Escape") {

                closeModal();

            }

        }
    );

}


// ======================================================
// LOCAL STORAGE
// ======================================================

function saveData() {

    localStorage.setItem(
        "favourites",
        JSON.stringify(favourites)
    );


    localStorage.setItem(
        "recentlyViewed",
        JSON.stringify(recentlyViewed)
    );


    localStorage.setItem(
        "recommendationCount",
        recommendationCount
    );


    localStorage.setItem(
        "bestMatch",
        bestMatch
    );

}


// ======================================================
// TOAST
// ======================================================

function showToast(message) {

    const toast =
        document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    document
        .getElementById("toastContainer")
        .appendChild(toast);


    setTimeout(() => {

        toast.remove();

    },2500);

}