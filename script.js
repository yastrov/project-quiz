let countAsk = 0;
let countAnswer = 0;
let nextBtn = document.getElementById('nextBtn');
let options = document.getElementById('options')
let question = document.getElementById('question');
let responceDiv = document.getElementById('responce')
let result = document.getElementById('result')

nextBtn.addEventListener('click', function () {
    responceDiv.innerHTML = ``
    if (countAsk < data.length) {
        displayAsk(countAsk);
        countAsk++;
    }
    else {
        question.innerHTML = '';
        options.innerHTML = '';
        result.innerHTML = `
            <p>Ты заработал/а <b>${countAnswer}</b> балла!</p>
            <br>
            <p>5 баллов - <b>кент</b></p>
            <p>4 баллов - <b>ну норм чел</b></p>
            <p>3 баллов - <b>...</b></p>
            <p>2 баллов - <b>постыдился бы</b></p>
            <p>1 баллов - <b>иди извиняться</b></p>
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
                getGoodResponce()
                countAnswer++; 
            }
            else {
                element.classList.add('wrong');
                getBadResponce()
            }
        });
        
    });
}


function getBadResponce() {
    let badWords = ["нихера ты придумал", "ну дебил", "ну ты изюм сушенный", "кент ты сигаретный", "поэтому и иди нахуй", "гори в котлу", "ебушки воробушки", "готовь защеканочку", "п*д*р*с", "кукареку как ты"];
    let number = Math.floor(Math.random() * 10);
    let responce = badWords[number];
    responceDiv.innerHTML = `
        <p class="responce-item">${responce}</p>
    `
}
function getGoodResponce() {
    let goodWords = ["поэтому ты и красивый/ая", "нихуя ты знаешь", "храни тебя господь", "ну видно молодец", "ашалеть ты шаришь", "ну и мозги!","возьми печеньку с полки","ну это каждый знает","никому не говори только","бляя стяще",];
    let number = Math.floor(Math.random() * 10);
    let responce = goodWords[number];
    responceDiv.innerHTML = `
        <p class="responce-item">${responce}</p>
    `
}

data = [
    {
        question: "Моя любимая марка машины?",
        options: ["BMW", "Audi", "Mercedes", "Toyota"],
        answer: 1
    },
    {
        question: "Самое любимое блюдо из перечисленных",
        options: ["Плов", "Шашлык", "Курица с картошкой", "Роллы"],
        answer: 0
    },
    {
        question: "Ради интереса. Кто король рок н ролла?",
        options: ["Пол Маккартни", "Курт Кобейн", "Элвис Пресли", "Фредди Меркьюри"],
        answer: 2
    },
    {
        question: "Че самое красивое в этой жизни?",
        options: ["Меган Фокс", "RS6", "Диана", "Ольга с подьезда"],
        answer: 1
    },
    {
        question: "А че тогда самое лучшее?",
        options: ["Жить", "Парить", "Диана", "Зальный тренажер"],
        answer: 2
    },
    {
        question: "Зачем я все это сделал?",
        options: ["Ради интереса", "Знания все-таки", "Нехуй делать", "По приколу"],
        answer: 1
    }
]