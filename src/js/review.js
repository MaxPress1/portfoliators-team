import axios from "axios"
import Swiper from "swiper";
import {Navigation, Keyboard, Mousewheel} from 'swiper/modules';
import 'swiper/css'
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
const reviewsList = document.querySelector(".reviews-list")

const fetchReviews = async() =>  {
    const url = "https://portfolio-js.b.goit.study/api/reviews"
    try {
        const response = await axios.get(url)
        const reviewData = response.data
        return reviewData
    } catch (error) {
        iziToast.show ({
        fontSize: 'large',
        position: 'topRight',
        messageColor: 'white', 
        timeout: 6000,
        backgroundColor: '#ED3B44',
        progressBar: false,
        message: 'Error while fetching reviews',
        });
        console.error('Error fetching reviews:', error);
        reviewsList.insertAdjacentHTML("beforeend", `
        <li class="not-found-item">
        <p class="not-found-text">Not found</p>
        </li>
        `);
        }
    }

const renderReviews = async() => {
    const reviewsData = await fetchReviews();
    if (reviewsData) {
        const markup = reviewsData.map((reviewDatum) => `
            <li class="reviews-list-item swiper-slide">
                <p class="reviews-text">${reviewDatum.review}</p>
                <div class="author-information">
                    <img class="author-image" src="${reviewDatum.avatar_url}" alt="review from ${reviewDatum.author}" 
                    width="40" height="40" loading="lazy">
                    <p class="name-text">${reviewDatum.author}</p>
                </div>
            </li>
        `).join("");
        reviewsList.insertAdjacentHTML('beforeend', markup);
    }
}
renderReviews()
const swiper = new Swiper('.reviews .swiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    mousewheel: {
    enabled: true,
    invert: true,
    },
    keyboard: {
    enabled: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    breakpoints: {
    360: {
        slidesPerView: 1,
        
    },
    768: {
        slidesPerView: 1,
    },
    1280: {
        slidesPerView: 2,
        spaceBetween: 32,
    }
    },
}
);