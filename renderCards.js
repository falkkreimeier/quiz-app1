const appData = [
  {
    question: 'Warum sind Eichhörnchen eigentlich gar nicht so süß?',
    answer:
      'Eichhörnchen sind in Wirklichkeit keine süßen kleinen Nussknacker, sondern Raubtiere und Nesträuber, die sich hauptsächlich von Eiern und kleinen Vögeln ernähren.',
    isBookmarked: false,
    showAnswer: false,
    tags: ['fun Fact', 'Natur', 'Grausam'],
  },
  {
    question: 'Wo kommen die Babys her?',
    answer:
      'Die Anwort kommt geschwind, die bringt der Storch, getragen vom Wind',
    isBookmarked: false,
    showAnswer: false,
    tags: ['NSFW', 'Labor', 'Vögeln'],
  },
  {
    question: 'Ist BEM verwandt mit BamBam?',
    answer:
      'Nein, BEM ist eine einfache Struktur-Methode für die Klassen von HTML Elementen. Die Feuersteins haben damit herzlich wenig zu tun.',
    isBookmarked: false,
    showAnswer: false,
    tags: ['Cartoon', 'Logik', 'HTML'],
  },
  {
    question:
      'Wenn man ein Nutellebrot auf den Rücken einer Katze klebt, landet sie dann noch auf den Beinen?',
    answer:
      'Nein, das physikalische Gesetz: Nutellabrote landen immer mit der bestrichenen Seite auf dem Boden, sorgt dafür, dass auch der geliebte Vierebeiner, im freien Fall auf der Nutellaseite des Lebens landet – der Rücken.',
    isBookmarked: false,
    showAnswer: false,
    tags: ['Süß', 'Fakt', 'Lecker'],
  },
]

const mainHome = document.querySelector('#home')
const mainBookmark = document.querySelector('#bookmarks')
const mainCreate = document.querySelector('#create')
const mainProfile = document.querySelector('#profile')
const bookmark = document.querySelectorAll('.bookmark')

function renderCard(cardData, targetElement) {
  const cardSection = document.createElement('section')
  cardSection.classList.add('card')
  cardSection.classList.add('main__card--styling')
  targetElement.appendChild(cardSection)

  const cardBookmark = document.createElement('button')
  cardBookmark.classList.add('bookmark')
  if (appData.isBookmarked == true) {
    cardBookmark.classList.add('bookmark--active')
  }
  cardSection.appendChild(cardBookmark)

  const cardQuestion = document.createElement('h2')
  cardQuestion.classList.add('card__question')
  cardQuestion.textContent = cardData.question
  cardSection.appendChild(cardQuestion)

  const showAnswer = document.createElement('button')
  showAnswer.classList.add('card__button')
  showAnswer.textContent = 'Show Answer'
  cardSection.appendChild(showAnswer)

  const cardAnswer = document.createElement('p')
  cardAnswer.classList.add('card__answer')
  cardAnswer.classList.add('card__hidden')
  cardAnswer.textContent = cardData.answer
  cardSection.appendChild(cardAnswer)

  const cardTags = document.createElement('ul')
  cardTags.classList.add('tags')
  cardSection.appendChild(cardTags)

  cardData.tags.forEach(tag => {
    const cardTag = document.createElement('li')
    cardTag.classList.add('tags__item')
    cardTag.textContent = tag
    cardSection.appendChild(cardTag)
  })
}

// Funktion ruft alle renderCard Elemente auf
function renderHomepage() {
  mainHome.innerHTML = ''
  appData.forEach(getEl => {
    renderCard(getEl, mainHome)
  })
}

function renderBookmarks() {
  mainBookmark.innerHTML = ''
  appData.forEach(getEl => {
    renderCard(getEl, mainBookmark)
  })
}

function init() {
  renderHomepage()
}

init()

function docTor(selector) {
  const el = document.querySelector(selector)
  return el
}

function docTorAll(selector) {
  const ela = document.querySelectorAll(selector)
  return ela
}

// Navigations Buttons
const buttonHome = docTor('#buttonHome')
const buttonBookmarks = docTor('#buttonBookmarks')
const buttonCreate = docTor('#buttonCreate')
const buttonProfile = docTor('#buttonProfile')

const headerHome = docTor('#header--home')
const headerBookmarks = docTor('#header--bookmark')
const headerCreate = docTor('#header--create')
const headerProfile = docTor('#header--profile')

function hideAll() {
  const headerElArr = docTorAll('header')

  headerElArr.forEach((mainEl, index) => {
    mainEl.classList.add('header--hidden')
  })

  const mainElArr = docTorAll('main')

  mainElArr.forEach((mainEl, index) => {
    mainEl.classList.add('main--hidden')
  })
}

buttonHome.addEventListener('click', event => {
  hideAll()
  renderHomepage()
  const buttonBookmarkActivate = docTorAll('.bookmark')
  buttonBookmarkActivate.forEach(activate => {
    activate.addEventListener('click', event => {
      activate.classList.toggle('bookmark--active')
    })
  })

  mainHome.classList.remove('main--hidden')
  headerHome.classList.remove('header--hidden')
})

buttonBookmarks.addEventListener('click', event => {
  hideAll()
  renderBookmarks()
  mainBookmark.classList.remove('main--hidden')
  headerBookmarks.classList.remove('header--hidden')
})

buttonCreate.addEventListener('click', event => {
  hideAll()
  mainCreate.classList.remove('main--hidden')
  headerCreate.classList.remove('header--hidden')
})

buttonProfile.addEventListener('click', event => {
  hideAll()
  mainProfile.classList.remove('main--hidden')
  headerProfile.classList.remove('header--hidden')
})

// Bookmark buttons

const buttonBookmarkActivate = docTorAll('.bookmark')

buttonBookmarkActivate.forEach(activate => {
  activate.addEventListener('click', event => {
    activate.classList.toggle('bookmark--active')
  })
})

function resetForm() {
  document.getElementById('createQuestion').reset()
}

//Add Question Function
function submitForm(addCart) {
  document.getElementById('createQuestion').submit()

  const newObject = {
    question: getElementByClassName('create__card--question')[0].value,
    answer: getElementByClassName('create__card--answer')[0].value,
    isBookmarked: false,
    showAnswer: false,
    // tags: ['.value', '.value', '.value'],
  }
  appData.push(newObject)
}
