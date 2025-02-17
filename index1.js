document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('navButtons').addEventListener("click", function(event) {
        if (event.target.tagName === 'BUTTON') {
            const taskId = event.target.getAttribute('data-task');
            showTask(taskId);
        }
    });

    function showTask(taskId) {
        //clear all active timers
        clearTimeout(sliderTimeout);
        clearInterval(timerInterval);

        document.querySelectorAll('.task').forEach(task => {
            task.classList.remove('active');
        });

        const selectedTask = document.getElementById(taskId);
        if (selectedTask) {
            selectedTask.classList.add('active');
        }
    }
});
 //image slider
const nextE1 = document .querySelector(".next");
const prevE1 = document.querySelector(".prev");
const imgsE1 = document .querySelector("img");
const imageContainerE1 = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextE1.addEventListener("click" ,() => {
    currentImg++;
    clearTimeout(sliderTimeout);
    updateImg();
});

prevE1.addEventListener("click" , () => {
    currentImg--;
    clearTimeout(sliderTimeout);
    updateImg();
});

  updateImg();

function updateImg(){
    if (currentImg > imgsE1.length) {
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = imgsE1.length;
    }
    imageContainerE1.style.transform = `translateX(-${(currentImg - 1)*500}px)`;
    sliderTimeout = setTimeout(() => {
        currentImg++;
        updateImg();
    },3000);
}

//timer

let timerInterval;
        let timeLeft = 0; 
        const timerDisplay = document.getElementById('timer-display');
        const startButton = document.getElementById('start-button');
        const stopButton = document.getElementById('stop-button');
        const resetButton = document.getElementById('reset-button');

        function updateTimerDisplay() {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        function startTimer() {
            if (timerInterval) return; 
            timerInterval = setInterval(() => {
                timeLeft++;
                updateTimerDisplay();
            }, 1000);
        }

        function stopTimer() {
            clearInterval(timerInterval);
            timerInterval = null; 
        }

        function resetTimer() {
            stopTimer();
            timeLeft = 0;
            updateTimerDisplay();
        }

        startButton.addEventListener('click', startTimer);
        stopButton.addEventListener('click', stopTimer);
        resetButton.addEventListener('click', resetTimer);
        
//color changer
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('body');
    const colorChangerSection = document.getElementById('color changer'); 

    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            // Change background color
            body.style.backgroundColor = e.target.id;

            // Scroll to the color changer section
            colorChangerSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

//digital clock
const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12){
        h = h - 12;
        ampm = "pm";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();
