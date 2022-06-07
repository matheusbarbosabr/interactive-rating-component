const ratingSection = document.querySelector(".rating-section");
const thankYouSection = document.querySelector(".thankyou-section");
const ratingButtons = document.querySelectorAll(".rating-container button");
const submitBtn = document.querySelector(".submit-btn");
const ratingValue = document.querySelector(".selected-rating span");

let userRating;

const hideRatingSection = () => {
    ratingSection.classList.add("hide");
};

const showThankYouSection = () => {
    thankYouSection.classList.add("active");
};

const getRating = () => {
    ratingButtons.forEach((button) => {
        button.addEventListener("focus", (e) => {
            userRating = e.target.textContent;
            ratingValue.textContent = userRating;
        });
    });
};

getRating();

submitBtn.addEventListener("click", () => {
    hideRatingSection();
    showThankYouSection();
});
