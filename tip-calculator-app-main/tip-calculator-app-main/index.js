const Bill = document.getElementById('bill');
const People = document.getElementById('People');
const tips = document.querySelectorAll('.tipPercentValue');
const Tip_amnt = document.getElementById('TipAmount');
const Total = document.getElementById('Total-Tip-Amount');
const Reset = document.querySelector('.reset-button');
const input = document.querySelectorAll('.input');

// Global variables to store the values
let BillValue = 0;
let tipValue = 0;
let PeopleValue = 0;

// Function to calculate the tip
const CalculateTip = () => {
    if (BillValue && tipValue && PeopleValue) {
        const TipAmount = BillValue * (tipValue / 100);
        const totalTipAmount = TipAmount / PeopleValue;
        Tip_amnt.textContent = TipAmount.toFixed(2);
        Total.textContent = totalTipAmount.toFixed(2);
    } else {
        Tip_amnt.textContent = '$0.00';
        Total.textContent = '$0.00';
    }
};

// Initial values for the tip amounts
Tip_amnt.textContent = '$0.00';
Total.textContent = '$0.00';

// Event listeners to update the global values
Bill.addEventListener('input', (e) => {
    BillValue = parseFloat(e.target.value);
    e.target.style.border = ""; // Reset border on valid input
    CalculateTip();
});

People.addEventListener('input', (e) => {
    PeopleValue = parseInt(e.target.value);
    e.target.style.border = ""; // Reset border on valid input
    CalculateTip();
});

// Add blur event listener to check if input is empty
input.forEach((field) => {
    field.addEventListener('blur', (e) => {
        if (!e.target.value.trim()) {
            e.target.style.border = "2px solid red"; // Add red border if empty
        } else {
            e.target.style.border = ""; // Reset border if valid
        }
    });
});

// Event listener for tip percentage
let handleclick = (e) => {
    tipValue = parseInt(e.target.dataset.tip);
    tips.forEach((tip) => {
        tip.classList.remove('selected');
    });
    e.target.classList.add('selected');
    CalculateTip();
};

tips.forEach((tip) => {
    tip.addEventListener('click', handleclick);
});

// Function to reset all values and the UI
let handleclick2 = () => {
    Bill.value = '';
    People.value = '';
    BillValue = 0;
    PeopleValue = 0;
    tipValue = 0;
    Tip_amnt.textContent = '$0.00';
    Total.textContent = '$0.00';

    tips.forEach((tip) => {
        tip.classList.remove('selected');
    });

    // Reset borders for input fields
    input.forEach((field) => {
        field.style.border = ""; // Reset the border
    });
};

// Reset button click event listener
Reset.addEventListener('click', handleclick2);
