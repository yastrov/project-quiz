let countAsk = 0;
let countAnswer = 0;
let nextBtn = document.getElementById('nextBtn');
let options = document.getElementById('options')
let question = document.getElementById('question');

nextBtn.addEventListener('click', function () {
    if (countAsk < data.length) {
        displayAsk(countAsk);
        countAsk++;
    }
    else {
        options.innerHTML = `
        <div>Вы закончили игру!</div>
        <div>Вы заработали ${countAnswer}!</div>
    `
    }
})
function displayAsk(countAsk) {
    nextBtn.textContent = 'Некст';
    document.getElementById('title').innerHTML = '';
    question.innerHTML = `
        <p>${data[countAsk].question}</p>
    `
    options.innerHTML = `
            <button class="option">${data[countAsk].options[0]}</button>
            <button class="option">${data[countAsk].options[1]}</button>
            <button class="option">${data[countAsk].options[2]}</button>
            <button class="option">${data[countAsk].options[3]}</button>
    `
    let currentAnswer = data[countAsk].answer;
    let optionAll = document.querySelectorAll('.option')
    optionAll.forEach((element, index) => {
        element.addEventListener('click', function() {
            optionAll.forEach(option => {
                option.classList.remove('wrong', 'correct');
            })
            optionAll.forEach(element => {
                element.disabled = true;
            });
            if (index == currentAnswer) {
                element.classList.add('correct');
                countAnswer++; 
            }
            else {
                element.classList.add('wrong');
            }
        });
        
    });
}



data = [
    {
        question: "How many you have?",
        options: ["первый", "второй", "третий", "четвертый"],
        answer: 0
    },
    {
        question: "How many?",
        options: ["11", "22", "33", "44"],
        answer: 2
    }
]