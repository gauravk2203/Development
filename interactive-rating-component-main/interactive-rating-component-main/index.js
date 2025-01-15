const ratingBtns = document.querySelectorAll('.ratebtn');
const selectedRating = document.querySelector('.selected-rating');
const ThankyouMessage = document.getElementById('thank-you');
const Rating_state = document.getElementById('rating-state');
const submit = document.querySelector('.submit-btn');

const handleClick = (e) => {
    if (e.target.matches('.ratebtn')) {
        const btnValue = parseInt(e.target.dataset.rate);
        const numberOfBtns = ratingBtns.length;
        selectedRating.textContent = `You selected ${btnValue} out of ${numberOfBtns}`;
    }
};

const togglePopup = () => {
    if (getComputedStyle(ThankyouMessage).display === 'none') {
        ThankyouMessage.style.display = "flex";
        Rating_state.style.display = "none";
    } else {
        Rating_state.style.display = "flex";
        ThankyouMessage.style.display = "none";
    }
};

ratingBtns.forEach((ratingBtn) => {
    ratingBtn.addEventListener('click', handleClick);
});

submit.addEventListener('click', togglePopup);
