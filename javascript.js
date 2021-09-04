function docTor(selector) {
  const el = document.querySelector(selector)
  return el
}

function hideAll() {
  const headerElArr = document.querySelectorAll('header')

  headerElArr.forEach((mainEl, index) => {
    mainEl.classList.add('header--hidden')
  })

  const mainElArr = document.querySelectorAll('main')

  mainElArr.forEach((mainEl, index) => {
    mainEl.classList.add('main--hidden')
  })
}

//headerHome.classList.add('header--hidden')
//headerBookmarks.classList.add('header--hidden')
//headerCreate.classList.add('header--hidden')
//headerProfile.classList.add('header--hidden')

// mainHome.classList.add('main--hidden')
// mainBookmark.classList.add('main--hidden')
// mainCreate.classList.add('main--hidden')
// mainProfile.classList.add('main--hidden')

// Main and Header Hidden

const mainHome = docTor('#home')
const mainBookmark = docTor('#bookmarks')
const mainCreate = docTor('#create')
const mainProfile = docTor('#profile')

const buttonHome = docTor('#buttonHome')
const buttonBookmarks = docTor('#buttonBookmarks')
const buttonCreate = docTor('#buttonCreate')
const buttonProfile = docTor('#buttonProfile')

const headerHome = docTor('#header--home')
const headerBookmarks = docTor('#header--bookmark')
const headerCreate = docTor('#header--create')
const headerProfile = docTor('#header--profile')

buttonHome.addEventListener('click', event => {
  hideAll()
  mainHome.classList.remove('main--hidden')
  headerHome.classList.remove('header--hidden')
})

buttonBookmarks.addEventListener('click', event => {
  hideAll()
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

// bookmark animation

// function bookmarkClicked() {
//   const bookmarkElArr = document.querySelectorAll('.bookmark')

//   bookmarkElArr.forEach((bookmarkEl, index) => {
//     bookmarkEl.classList.toggle('bookmark--red')
//   })
// }

const bookmarkClick = document.querySelector('#bookmark--red')
const bookmarkClick2 = document.querySelector('#bookmark--red2')
const bookmarkClick3 = document.querySelector('#bookmark--red3')
const bookmarkClick4 = document.querySelector('#bookmark--red4')

bookmarkClick.addEventListener('click', event => {
  bookmarkClick.classList.toggle('bookmark--active')
})

bookmarkClick2.addEventListener('click', event => {
  bookmarkClick2.classList.toggle('bookmark--active')
})

bookmarkClick3.addEventListener('click', event => {
  bookmarkClick3.classList.toggle('bookmark--active')
})

bookmarkClick4.addEventListener('click', event => {
  bookmarkClick4.classList.toggle('bookmark--active')
})

// Answer buttons
const showText1 = document.querySelector('#answer--text1')
const showButton1 = document.querySelector('#answer--button1')

const showText2 = document.querySelector('#answer--text2')
const showButton2 = document.querySelector('#answer--button2')

const showText3 = document.querySelector('#answer--text3')
const showButton3 = document.querySelector('#answer--button3')

const showText4 = document.querySelector('#answer--text4')
const showButton4 = document.querySelector('#answer--button4')

showButton1.addEventListener('click', event => {
  showText1.classList.toggle('card__hidden')
})

showButton2.addEventListener('click', event => {
  showText2.classList.toggle('card__hidden')
})

showButton3.addEventListener('click', event => {
  showText3.classList.toggle('card__hidden')
})

showButton4.addEventListener('click', event => {
  showText4.classList.toggle('card__hidden')
})

// Darkmode
// const buttonDark = document.querySelector('.button__dark')
// const headerDark = document.querySelectorAll('header__style')
// const mainDark = document.querySelectorAll('main__card--styling')
// const footerDark = document.querySelectorAll('footer__style')

function darkMode() {
  const headerDark = document.querySelectorAll('.header__style')

  headerDark.forEach((headerDarkEl, index) => {
    headerDarkEl.classList.toggle('header__dark')
  })

  const footerDark = document.querySelector('.footer__style')
  footerDark.classList.toggle('footer__dark')

  const bodyDark = document.querySelector('body')
  bodyDark.classList.toggle('body__dark')

  const mainDark = document.querySelectorAll('.main__card--styling')

  mainDark.forEach((mainDarkEle, index) => {
    mainDarkEle.classList.toggle('main__card--dark')
  })
}
