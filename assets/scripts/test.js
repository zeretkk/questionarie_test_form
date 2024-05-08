const positiveAnswerCounted = [6, 7, 9, 11, 12, 13, 15, 18, 21, 23, 24, 25, 26, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 40, 42, 44, 45, 46, 47, 48, 49, 50, 51, 54, 56, 60]
const negativeAnswerCounted = [1, 3, 4, 5, 8, 14, 17, 19, 22, 39, 43, 52, 57, 58]
const positiveLiedAnswer = [2, 10, 55]
const negativeLiedAnswer = [16, 20, 27, 29, 41, 51, 59]

const questions = [
    'Я могу долго работать не уставая.',
    'Я всегда выполняю свои обещания, не считаясь с тем, удобно мне это или нет.',
    'Обычно руки и ноги у меня теплые.',
    'У меня редко болит голова.',
    'Я уверен в своих силах.',
    'Ожидание меня нервирует.',
    'Порой мне кажется, что я ни на что не годен.',
    'Обычно я чувствую себя вполне счастливым.',
    'Я не могу сосредоточиться на чем-то одном.',
    'В детстве я всегда немедленно и безропотно выполнял все то, что мне поручали.',
    'Раз в месяц или чаще у меня бывает расстройство желудка.',
    'Я часто ловлю себя на том, что меня что-то тревожит.',
    'Я думаю, что я не более нервный, чем большинство людей.',
    'Я не слишком застенчив.',
    'Жизнь для меня почти всегда связана с большим напряжением.',
    'Иногда бывает, что я говорю о вещах, в которых не разбираюсь.',
    'Я краснею не чаще, чем другие.',
    'Я часто расстраиваюсь из-за пустяков.',
    'Я редко замечаю у себя сердцебиение или одышку.',
    'Не все люди, которых я знаю, мне нравятся.',
    'Я не могу уснуть, если меня что-то тревожит.',
    'Обычно я спокоен и меня не легко расстроить.',
    'Меня часто мучают ночные кошмары.',
    'Я склонен все принимать слишком серьезно.',
    'Когда я нервничаю, у меня усиливается потливость.',
    'У меня беспокойный и прерывистый сон.',
    'В играх я предпочитаю скорее выигрывать, чем проигрывать.',
    'Я более чувствителен, чем большинство людей.',
    'Бывает, что нескромные шутки и остроты вызывают у меня смех.',
    'Я хотел бы быть так же доволен своей жизнью, как, вероятно, довольны другие',
    'Мой желудок сильно беспокоит меня.',
    'Я постоянно озабочен своими материальными и служебными делами.',
    'Я настороженно отношусь к некоторым людям, хотя знаю, что они не могут причинить мне вреда.',
    'Мне порой кажется, что передо мной нагромождены такие трудности, которых мне не преодолеть.',
    'Я легко прихожу в замешательство.',
    'Временами я становлюсь настолько возбужденными, что это мешает мне заснуть.',
    'Я предпочитаю уклоняться от конфликтов и затруднительных положений.',
    'У меня бывают приступы тошноты и рвоты.',
    'Я никогда не опаздывал на свидание или paботу.',
    'Временами я определенно чувствую себя бесполезным.',
    'Иногда мне хочется выругаться',
    'Почти всегда я испытываю тревогу в связи с чем-либо или с кем-либо',
    'Меня беспокоят возможные неудачи.',
    'Я часто боюсь, что вот-вот покраснею.',
    'Меня нередко охватывает отчаяние.',
    'Я - человек нервный и легко возбудимый.',
    'Я часто замечаю, что мои руки дрожат, когда я пытаюсь что-нибудь сделать.',
    'Я почти всегда испытываю чувство голода.',
    'Мне не хватает уверенности в себе.',
    'Я легко потею, даже в прохладные дни.',
    'Я часто мечтаю о таких вещах, о которых лучше никому не рассказывать.',
    'У меня очень редко болит живот.',
    'Я считаю, что мне очень трудно сосредоточиться на какой-либо задаче или работе.',
    'У меня бывают периоды такого сильною беспокойства, что я не могу долго усидеть на одном месте.',
    'Я всегда отвечаю на письма сразу же после прочтения.',
    'Я легко расстраиваюсь.',
    'Практически я никогда не краснею.',
    'У меня гораздо меньше опасений и страхов чем у моих друзей и знакомых.',
    'Бывает, что я откладываю на завтра то, что следует сделать сегодня.',
    'Обычно я работаю с большим напряжением.',
]
const createQuestion =()=>{
    const currentQuestion = parseInt(localStorage.getItem('currentQuestion'))
    if(currentQuestion>questions.length-1){
        handleTextFinish()
        return
    }
    const questionString = `
    <div class="form__group">
        <p>${questions[currentQuestion]}</p>
        <div class="form__group-select">
            <input type="radio" class="form__group-select" name="answer" value="yes" id="yes">
            <label for="yes">Да</label>
        </div>
        <div class="form__group-select">
            <input type="radio" class="form__group-select" name="answer" value="no" id="no">
            <label for="no">Нет</label>
        </div>
    </div>
    <div class="form__group">
        <button type="submit">Следующий вопрос</button>
        <button type="reset">Отмена</button>
    </div>
    `
    const testQuestionContainer = document.querySelector('.test__content')
    testQuestionContainer.innerHTML = questionString
    testQuestionContainer.querySelector('button[type="reset"]').addEventListener('click', () => {
        resetTest()
    })
    const inputYes = testQuestionContainer.querySelector('input[value="yes"]')
    const inputNo = testQuestionContainer.querySelector('input[value="no"]')
    testQuestionContainer.querySelector('button[type="submit"]').addEventListener('click', () => {
        handleAnswer(inputYes, inputNo)
    })
}

function handleTextFinish() {
    const answers = JSON.parse(localStorage.getItem('answers'))
    const regData = JSON.parse(localStorage.getItem('regData'))
    const results = {
        liedScale: 0,
        mainScale: 0
    }
    positiveAnswerCounted.forEach((val)=>{
        const index = val -1
        if(index >= questions.length)return
        if(answers[index]){
            console.log(index, '+1 main')
            results.mainScale += 1
        }
    })
    negativeAnswerCounted.forEach((val)=>{
        const index = val -1
        if(index >= questions.length)return
        if(!answers[index]){
            console.log(index, '+1 main')
            results.mainScale += 1
        }
    })
    positiveLiedAnswer.forEach((val)=>{
        const index = val -1
        if(index >= questions.length)return
        if(answers[index]){
            console.log(index, '+1 lied')
            results.liedScale += 1
        }
    })
    negativeLiedAnswer.forEach((val)=>{
        const index = val -1
        if(index >= questions.length)return
        if(!answers[index]){
            console.log(index, '+1 lied')
            results.liedScale += 1
        }
    })
    console.log(results)
    document.querySelector('.test__content').innerHTML = `
                    <div>
                        <p class="test__result-desc test__result-heading">Информация о тестируемом</p>
                        <p class="test__result-desc">Логин: <span>${regData.login}</span></p>
                        <p class="test__result-desc">Имя: <span>${regData.firstName}</span></p>
                        <p class="test__result-desc">Фамилия <span>${regData.lastName}</span></p>
                        <p class="test__result-desc">Возраст: <span>${regData.age}</span></p>
                        <p class="test__result-desc">Пол: <span>${regData.gender==='male'? 'мужской':'женский'}</span></p>
                        <p class="test__result-desc">Почта: <span>${regData.email}</span></p>
                        <p class="test__result-desc">Телефон: <span>${regData.phone}</span></p>
                        <p class="test__result-desc">Адрес: <span>${regData.address}</span></p>
                        <p class="test__result-desc test__result-heading">Результат</p>
                        <p class="test__result-desc">Оценка по шкале лжи:<span>${results.liedScale}</span></p>
                        <p class="test__result-desc">Оценка по шкале тревоги: <span>${results.mainScale}</span></p>
                    </div>
    `

    console.log('finish')
}

function handleAnswer(inputYes, inputNo) {
    const currentAnswers = JSON.parse(localStorage.getItem('answers'))
    const currentQuestion = parseInt(localStorage.getItem('currentQuestion'))
    if(inputYes.checked){
        localStorage.setItem('answers', JSON.stringify([...currentAnswers, true]))
        localStorage.setItem('currentQuestion', currentQuestion+1)
        return createQuestion()
    }
    if(inputNo.checked){
        localStorage.setItem('answers', JSON.stringify([...currentAnswers, false]))
        localStorage.setItem('currentQuestion', currentQuestion+1)
        return createQuestion()
    }
    inputNo.classList.add('registration-form__text-field-error')
    inputYes.classList.add('registration-form__text-field-error')
}

function startTest() {
    localStorage.setItem('currentQuestion', 0)
    localStorage.setItem('answers', JSON.stringify([]))
    createQuestion()
}
function resetTest() {
    localStorage.setItem('currentQuestion', 0)
    localStorage.setItem('answers', JSON.stringify([]))
    document.querySelector('.test__content').innerHTML = ''
    document.querySelector('.test__actions>button').classList.remove('display-hidden')
}

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.test__actions>button')
    startButton.addEventListener('click', () => {
        startButton.classList.add('display-hidden')
        startTest()
    })
})