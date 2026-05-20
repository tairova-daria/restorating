var baseRestaurantsData = [
    {
        id: 1,
        name: "Golden Spoon",
        cuisine: "Европейская",
        price: 1800,
        rating: 4.5,
        address: "ул. Ленина, 15, Благовещенск",
        hours: "Пн–Вс: 12:00–23:00",
        image: "images/food-1.jpg",
        reviewText: "Потрясающее ризотто! Очень нежное и ароматное.",
        reviews: [
            { name: "Анна Смирнова", stars: 5, text: "Потрясающее ризотто! Очень нежное и ароматное. Обязательно вернусь!" },
            { name: "Игорь М.", stars: 4, text: "Хорошее место, вкусно, но немного дороговато." }
        ]
    },
    {
        id: 2,
        name: "Red Tomato",
        cuisine: "Итальянская",
        price: 1200,
        rating: 4.8,
        address: "ул. Калинина, 8, Благовещенск",
        hours: "Пн–Вс: 11:00–23:00",
        image: "images/food-2.jpg",
        reviewText: "Лучшая пицца в городе! Тонкое тесто, много начинки.",
        reviews: [
            { name: "Максим Иванов", stars: 5, text: "Лучшая пицца в городе! Тонкое тесто, много начинки." },
            { name: "Елена К.", stars: 4, text: "Вкусно, но долго готовили заказ." }
        ]
    },
    {
        id: 3,
        name: "Coffee Mood",
        cuisine: "Кофейня",
        price: 800,
        rating: 4.6,
        address: "ул. Амурская, 22, Благовещенск",
        hours: "Пн–Вс: 08:00–21:00",
        image: "images/food-3.jpg",
        reviewText: "Идеальный капучино и чизкейк, который тает во рту.",
        reviews: [
            { name: "Елена Козлова", stars: 5, text: "Идеальный капучино и чизкейк! Уютное место." },
            { name: "Дмитрий П.", stars: 4, text: "Хороший кофе, но маловато места." }
        ]
    },
    {
        id: 4,
        name: "Fresh Leaf",
        cuisine: "Веганская",
        price: 1100,
        rating: 4.3,
        address: "ул. Шевченко, 5, Благовещенск",
        hours: "Пн–Вс: 10:00–21:00",
        image: "images/food-4.jpg",
        reviewText: "Свежайшие салаты и отличные смузи.",
        reviews: [
            { name: "Дмитрий Петров", stars: 5, text: "Боул с киноа — просто бомба! Свежо и полезно." },
            { name: "Анна С.", stars: 4, text: "Очень вкусно, но немного маленькие порции." }
        ]
    },
    {
        id: 5,
        name: "Salt & Pepper",
        cuisine: "Русская",
        price: 1400,
        rating: 4.4,
        address: "ул. Горького, 12, Благовещенск",
        hours: "Пн–Вс: 11:00–22:00",
        image: "images/food-5.jpg",
        reviewText: "Домашняя атмосфера, очень вкусные супы.",
        reviews: [
            { name: "Ольга Соколова", stars: 5, text: "Домашняя атмосфера, очень вкусный борщ." },
            { name: "Иван К.", stars: 4, text: "Котлеты отличные, но суп был чуть пересолен." }
        ]
    },
    {
        id: 6,
        name: "Tasty Day",
        cuisine: "Комбинированная",
        price: 1300,
        rating: 4.2,
        address: "ул. Красноармейская, 7, Благовещенск",
        hours: "Пн–Вс: 10:00–23:00",
        image: "images/food-6.jpg",
        reviewText: "Большой выбор блюд, быстрая подача.",
        reviews: [
            { name: "Максим И.", stars: 4, text: "Большой выбор блюд, быстрая подача." },
            { name: "Светлана П.", stars: 4, text: "Неплохо, но шумновато." }
        ]
    },
    {
        id: 7,
        name: "Sun Plate",
        cuisine: "Завтраки",
        price: 900,
        rating: 4.7,
        address: "ул. Ленина, 45, Благовещенск",
        hours: "Пн–Вс: 09:00–21:00",
        image: "images/food-7.jpg",
        reviewText: "Лучшие завтраки в городе! Очень сытно и вкусно.",
        reviews: [
            { name: "Алексей С.", stars: 5, text: "Лучшие завтраки! Овсянка и сырники." },
            { name: "Мария К.", stars: 4, text: "Вкусно, но долго ждать." }
        ]
    }
];

var additionalRestaurants = [
    {
        id: 8,
        name: "Wok & Roll",
        cuisine: "Азиатская",
        price: 950,
        rating: 4.5,
        address: "ул. Пионерская, 10, Благовещенск",
        hours: "Пн–Вс: 11:00–22:00",
        image: "images/food-8.jpg",
        reviewText: "Отличный вок! Быстро и вкусно.",
        reviews: [
            { name: "Павел Н.", stars: 5, text: "Отличный вок! Очень вкусно и быстро." },
            { name: "Ирина В.", stars: 4, text: "Неплохо, но островато." }
        ]
    },
    {
        id: 9,
        name: "Pasta House",
        cuisine: "Итальянская",
        price: 1500,
        rating: 4.6,
        address: "ул. Комсомольская, 30, Благовещенск",
        hours: "Пн–Вс: 12:00–23:00",
        image: "images/food-9.jpg",
        reviewText: "Лучшая паста в городе.",
        reviews: [
            { name: "Мария С.", stars: 5, text: "Паста с морепродуктами великолепна!" },
            { name: "Андрей К.", stars: 4, text: "Хорошо, но дороговато." }
        ]
    }
];

var restaurantsData = [];
var allRestaurantsLoaded = false;

function resetToBaseRestaurants() {
    restaurantsData = [];
    for (var i = 0; i < baseRestaurantsData.length; i++) {
        restaurantsData.push(baseRestaurantsData[i]);
    }
    allRestaurantsLoaded = false;
}

function loadAdditionalRestaurants() {
    for (var i = 0; i < additionalRestaurants.length; i++) {
        restaurantsData.push(additionalRestaurants[i]);
    }
    allRestaurantsLoaded = true;
}

resetToBaseRestaurants();

var reviewsData = [
    { id: 1, name: "Анна Смирнова", stars: 5, text: "Потрясающее ризотто! Очень нежное и ароматное. Обязательно вернусь!", restaurant: "Golden Spoon", image: "images/review-food-1.jpg" },
    { id: 2, name: "Максим Иванов", stars: 4, text: "Лучшая пицца в городе! Тонкое тесто, много начинки. Рекомендую!", restaurant: "Red Tomato", image: "images/review-food-2.jpg" },
    { id: 3, name: "Елена Козлова", stars: 5, text: "Идеальный капучино и чизкейк. Уютное место, приятная музыка.", restaurant: "Coffee Mood", image: "images/review-food-3.jpg" },
    { id: 4, name: "Дмитрий Петров", stars: 5, text: "Свежайшие салаты, отличные смузи. Боул с киноа - супер!", restaurant: "Fresh Leaf", image: "images/review-food-4.jpg" },
    { id: 5, name: "Ольга Соколова", stars: 4, text: "Домашняя атмосфера, очень вкусный борщ и котлеты.", restaurant: "Salt & Pepper", image: "images/review-food-5.jpg" }
];

function renderStars(rating) {
    var stars = '';
    var full = Math.floor(rating);
    for (var i = 0; i < full; i++) stars = stars + '★';
    for (var i = stars.length; i < 5; i++) stars = stars + '☆';
    return stars;
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function renderRestaurants(restaurants) {
    var container = document.getElementById('popularScrollContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (var i = 0; i < restaurants.length; i++) {
        var rest = restaurants[i];
        var colorClass = '';
        if (rest.cuisine === 'Европейская' || rest.cuisine === 'Завтраки') colorClass = 'golden';
        else if (rest.cuisine === 'Итальянская' || rest.cuisine === 'Комбинированная') colorClass = 'red';
        else if (rest.cuisine === 'Кофейня') colorClass = 'coffee';
        else if (rest.cuisine === 'Веганская') colorClass = 'fresh';
        else colorClass = 'golden';
        
        var card = document.createElement('div');
        card.className = 'restaurant-card restaurant-card--' + colorClass;
        card.setAttribute('data-cuisine', rest.cuisine);
        card.setAttribute('data-price', rest.price);
        card.setAttribute('data-rating', rest.rating);
        card.setAttribute('data-id', rest.id);
        
        card.innerHTML = `
            <div class="restaurant-card__left">
                <h3 class="restaurant-card__name">${rest.name}</h3>
                <div class="restaurant-card__type">
                    <span class="restaurant-card__type-label">Тип кухни</span>
                    <span class="restaurant-card__type-value">${rest.cuisine}</span>
                </div>
                <p class="restaurant-card__price">Средний чек: ${rest.price} руб.</p>
                <div class="restaurant-card__rating-row">
                    <span class="restaurant-card__rating">Рейтинг ${rest.rating}</span>
                    <span class="restaurant-card__reviews">${rest.reviews.length} отзывов</span>
                </div>
                <p class="restaurant-card__review">${rest.reviewText}</p>
                <p class="restaurant-card__city">г. Благовещенск</p>
            </div>
            <div class="restaurant-card__right">
                <img class="restaurant-card__image" src="${rest.image}" alt="${rest.name}">
            </div>
        `;
        
        card.onclick = (function(id) {
            return function() { openRestaurantModal(id); };
        })(rest.id);
        
        container.appendChild(card);
    }
}

function renderReviews(reviews) {
    var container = document.getElementById('reviewsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (var i = 0; i < reviews.length; i++) {
        var review = reviews[i];
        var card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <img class="review-card__image" src="${review.image}" alt="Фото блюда">
            <div class="review-card__content">
                <div class="review-card__header">
                    <span class="review-card__name">${escapeHtml(review.name)}</span>
                    <div class="review-card__stars">${renderStars(review.stars)}</div>
                </div>
                <p class="review-card__text">${escapeHtml(review.text)}</p>
                <span class="review-card__restaurant">${escapeHtml(review.restaurant)}</span>
            </div>
        `;
        container.appendChild(card);
    }
}

var activeFilters = [];

function filterRestaurants() {
    var cards = document.querySelectorAll('.restaurant-card');
    
    if (activeFilters.length === 0) {
        for (var c = 0; c < cards.length; c++) {
            cards[c].style.display = 'flex';
        }
        return;
    }
    
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var show = true;
        var cuisine = card.getAttribute('data-cuisine') || '';
        var price = parseInt(card.getAttribute('data-price') || '0');
        var rating = parseFloat(card.getAttribute('data-rating') || '0');
        
        for (var f = 0; f < activeFilters.length; f++) {
            var filter = activeFilters[f];
            if (filter === 'rating' && rating < 4) show = false;
            if (filter === 'price' && price > 1500) show = false;
            if (filter === 'italian' && cuisine !== 'Итальянская') show = false;
            if (filter === 'chinese' && cuisine !== 'Китайская') show = false;
            if (filter === 'vegan' && cuisine !== 'Веганская') show = false;
        }
        
        card.style.display = show ? 'flex' : 'none';
    }
}

var filterBtns = document.querySelectorAll('.filters__item');
for (var b = 0; b < filterBtns.length; b++) {
    filterBtns[b].onclick = function() {
        var filter = this.getAttribute('data-filter');
        var index = activeFilters.indexOf(filter);
        if (index !== -1) {
            activeFilters.splice(index, 1);
            this.classList.remove('filters__item--active');
        } else {
            activeFilters.push(filter);
            this.classList.add('filters__item--active');
        }
        filterRestaurants();
    };
}

function openRestaurantModal(restId) {
    var rest = null;
    for (var i = 0; i < restaurantsData.length; i++) {
        if (restaurantsData[i].id === restId) {
            rest = restaurantsData[i];
            break;
        }
    }
    if (!rest) return;
    
    var modal = document.getElementById('restaurantModal');
    var content = document.getElementById('restaurantModalContent');
    
    var reviewsHtml = '';
    for (var i = 0; i < rest.reviews.length; i++) {
        var rev = rest.reviews[i];
        reviewsHtml += `
            <div class="modal-restaurant__review">
                <div class="modal-restaurant__review-name">
                    ${rev.name}
                    <span class="modal-restaurant__review-stars">${renderStars(rev.stars)}</span>
                </div>
                <p class="modal-restaurant__review-text">${rev.text}</p>
            </div>
        `;
    }
    
    content.innerHTML = `
        <div class="modal-restaurant__header">
            <img class="modal-restaurant__image" src="${rest.image}" alt="${rest.name}">
            <div class="modal-restaurant__info">
                <h3 class="modal-restaurant__name">${rest.name}</h3>
                <div class="modal-restaurant__rating">
                    <div class="modal-restaurant__stars">${renderStars(rest.rating)}</div>
                    <span>${rest.rating}</span>
                </div>
                <p class="modal-restaurant__address">Адрес: ${rest.address}</p>
                <p class="modal-restaurant__hours">Время работы: ${rest.hours}</p>
                <p class="modal-restaurant__price">Средний чек: ${rest.price} руб.</p>
            </div>
        </div>
        <h4 class="modal-restaurant__reviews-title">Отзывы о ресторане</h4>
        ${reviewsHtml}
        <button class="modal-restaurant__btn" id="writeReviewFromModal">Написать отзыв</button>
    `;
    
    modal.style.display = 'flex';
    
    var writeBtn = document.getElementById('writeReviewFromModal');
    if (writeBtn) {
        writeBtn.onclick = function() {
            modal.style.display = 'none';
            openModal();
        };
    }
}

var restaurantModal = document.getElementById('restaurantModal');
var closeRestaurantModal = document.getElementById('closeRestaurantModal');
if (closeRestaurantModal) {
    closeRestaurantModal.onclick = function() {
        restaurantModal.style.display = 'none';
    };
}

window.onclick = function(e) {
    if (e.target === restaurantModal) {
        restaurantModal.style.display = 'none';
    }
    if (e.target === modal) {
        closeModalFunc();
    }
};

function fillRestaurantSelect() {
    var select = document.getElementById('restaurantSelect');
    if (!select) return;
    select.innerHTML = '<option value="">Выберите ресторан</option>';
    for (var i = 0; i < restaurantsData.length; i++) {
        var option = document.createElement('option');
        option.value = restaurantsData[i].name;
        option.textContent = restaurantsData[i].name;
        select.appendChild(option);
    }
}

function initGallery() {
    var container = document.getElementById('photoScroll');
    if (!container) return;
    for (var i = 1; i <= 9; i++) {
        var card = document.createElement('div');
        card.className = 'gallery__card';
        card.innerHTML = '<img src="images/res-' + i + '.jpg" alt="Ресторан">';
        container.appendChild(card);
    }
    var leftBtn = document.getElementById('scrollLeft');
    var rightBtn = document.getElementById('scrollRight');
    if (leftBtn) leftBtn.onclick = function() { container.scrollLeft -= 400; };
    if (rightBtn) rightBtn.onclick = function() { container.scrollLeft += 400; };
}

var modal = document.getElementById('modal');
var openBtn = document.getElementById('openModalBtn');
var closeBtn1 = document.getElementById('closeModalBtn');
var closeBtn2 = document.getElementById('closeModalBtn2');

function openModal() {
    fillRestaurantSelect();
    modal.style.display = 'flex';
}
function closeModalFunc() {
    modal.style.display = 'none';
}
if (openBtn) openBtn.onclick = openModal;
if (closeBtn1) closeBtn1.onclick = closeModalFunc;
if (closeBtn2) closeBtn2.onclick = closeModalFunc;

var stars = document.querySelectorAll('.review-form__star');
var ratingInput = document.getElementById('ratingValue');
if (stars.length > 0 && ratingInput) {
    for (var s = 0; s < stars.length; s++) {
        stars[s].onclick = function() {
            var value = parseInt(this.getAttribute('data-value'));
            ratingInput.value = value;
            for (var t = 0; t < stars.length; t++) {
                if (t < value) {
                    stars[t].classList.add('active');
                    stars[t].textContent = '★';
                } else {
                    stars[t].classList.remove('active');
                    stars[t].textContent = '☆';
                }
            }
        };
    }
}

var photoInput = document.getElementById('reviewPhoto');
var chooseBtn = document.getElementById('choosePhotoBtn');
var photoPreview = document.getElementById('photoPreview');
if (chooseBtn && photoInput) {
    chooseBtn.onclick = function() { photoInput.click(); };
    photoInput.onchange = function(e) {
        var file = e.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(event) {
                photoPreview.innerHTML = '<img src="' + event.target.result + '" alt="preview">';
            };
            reader.readAsDataURL(file);
        } else {
            photoPreview.innerHTML = '';
        }
    };
}

var reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
    reviewForm.onsubmit = function(e) {
        e.preventDefault();
        var restaurant = document.getElementById('restaurantSelect').value;
        var userName = document.getElementById('userName').value.trim();
        var rating = parseInt(ratingInput.value) || 0;
        var reviewText = document.getElementById('reviewText').value.trim();
        var errors = [];
        if (!restaurant) errors.push('Выберите ресторан');
        if (userName.length < 2) errors.push('Введите имя (минимум 2 символа)');
        if (rating === 0) errors.push('Поставьте оценку');
        if (reviewText.length < 10) errors.push('Напишите отзыв (минимум 10 символов)');
        if (errors.length > 0) {
            alert('Ошибка:\n' + errors.join('\n'));
            return;
        }
        alert('Спасибо за отзыв! Он будет опубликован после проверки.');
        reviewForm.reset();
        if (stars) {
            for (var st = 0; st < stars.length; st++) {
                stars[st].classList.remove('active');
                stars[st].textContent = '☆';
            }
        }
        ratingInput.value = 0;
        photoPreview.innerHTML = '';
        closeModalFunc();
    };
}

var showAllRestaurantsBtn = document.getElementById('showAllRestaurants');
if (showAllRestaurantsBtn) {
    showAllRestaurantsBtn.onclick = function() {
        window.location.href = 'restaurants.html';
    };
}

var showAllReviewsBtn = document.getElementById('showAllReviews');
if (showAllReviewsBtn) {
    showAllReviewsBtn.onclick = function() {
        window.location.href = 'reviews.html';
    };
}

var burger = document.getElementById('burgerBtn');
var navMenu = document.getElementById('navMenu');
if (burger && navMenu) {
    burger.onclick = function() {
        navMenu.classList.toggle('header__nav--open');
    };
}

var scrollBtn = document.getElementById('scrollTopBtn');
if (scrollBtn) {
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    };
    scrollBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

var cityBtn = document.getElementById('cityBtn');
var cityModal = document.getElementById('cityModal');
var closeCityModal = document.getElementById('closeCityModal');
var cityItems = document.querySelectorAll('.modal-city__item');

if (cityBtn) {
    cityBtn.onclick = function() {
        cityModal.style.display = 'flex';
    };
}
if (closeCityModal) {
    closeCityModal.onclick = function() {
        cityModal.style.display = 'none';
    };
}
for (var i = 0; i < cityItems.length; i++) {
    cityItems[i].onclick = function(e) {
        var selected = e.target.textContent;
        var cityNameSpan = document.querySelector('.top-bar__city-name');
        if (cityNameSpan) {
            cityNameSpan.textContent = selected;
        }
        cityModal.style.display = 'none';
    };
}
window.onclick = function(e) {
    if (e.target === cityModal) {
        cityModal.style.display = 'none';
    }
};

var navLinks = document.querySelectorAll('.header__link, .footer__link');
for (var a = 0; a < navLinks.length; a++) {
    var anchor = navLinks[a];
    var href = anchor.getAttribute('href');
    if (href && href.startsWith('#')) {
        anchor.onclick = function(e) {
            var targetHref = this.getAttribute('href');
            if (targetHref && targetHref.startsWith('#')) {
                e.preventDefault();
                var target = document.querySelector(targetHref);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
    }
}

renderRestaurants(restaurantsData);
renderReviews(reviewsData.slice(0, 4));
initGallery();