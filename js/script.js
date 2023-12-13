let currentIndex = 0;
const slides = document.querySelector('.slides');
const balls = document.querySelectorAll('.ball');
let slideInterval;

function changeSlide(index) {
    currentIndex = index;
    updateSlider();
    resetTimer();
}

function updateSlider() {
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;

    balls.forEach((ball, index) => {
        if (index === currentIndex) {
            ball.style.backgroundColor = '#555';
        } else {
            ball.style.backgroundColor = '#333';
        }
    });
}

function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % balls.length;
        updateSlider();
    }, 3000);
}

slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % balls.length;
    updateSlider();
}, 3000);

//calender//

document.addEventListener('DOMContentLoaded', function() {
    const daysContainer = document.getElementById('days');
    const currentMonthElement = document.getElementById('currentMonth');
    let currentMonth = 10; // November (0-indexed)

    function updateCalendar() {
        daysContainer.innerHTML = '';

        const daysInMonth = new Date(2023, currentMonth + 1, 0).getDate();

        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.textContent = i;
            daysContainer.appendChild(dayElement);
        }

        currentMonthElement.textContent = new Date(2023, currentMonth, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }

    document.getElementById('prevMonth').addEventListener('click', function() {
        currentMonth--;
        updateCalendar();
    });

    document.getElementById('nextMonth').addEventListener('click', function() {
        currentMonth++;
        updateCalendar();
    });

    updateCalendar();
});
//poll
const optionsContainer = document.getElementById('options');
const resultsContainer = document.getElementById('results');

const votes = {};
let resultsTitle = 'Poll Results';

optionsContainer.addEventListener('click', function(event) {
    const selectedOption = event.target.dataset.option;

    if (selectedOption) {
        votes[selectedOption] = (votes[selectedOption] || 0) + 1;
        updateResults();
    }
});

function updateResults() {
    resultsContainer.innerHTML = `<h3>${resultsTitle}:</h3>`;

    const optionElements = optionsContainer.querySelectorAll('[data-option]');
    
    optionElements.forEach(optionElement => {
        const option = optionElement.dataset.option;
        const optionText = optionElement.textContent;
        const voteCount = votes[option] || 0;

        const resultElement = document.createElement('div');
        resultElement.textContent = `${optionText}: ${voteCount}`;
        resultsContainer.appendChild(resultElement);
    });
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))