function docTor(selector) {
  const el = document.querySelector(selector)
  return el
}

function hideAll() {
  headerHome.classList.add('header--hidden')
  headerBookmarks.classList.add('header--hidden')
  headerCreate.classList.add('header--hidden')
  headerProfile.classList.add('header--hidden')

  mainHome.classList.add('main--hidden')
  mainBookmark.classList.add('main--hidden')
  mainCreate.classList.add('main--hidden')
  mainProfile.classList.add('main--hidden')
}

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
  mainHome.classList.remove('main--hidden')
  mainBookmark.classList.add('main--hidden')
  mainCreate.classList.add('main--hidden')
  mainProfile.classList.add('main--hidden')

  headerHome.classList.remove('header--hidden')
  headerBookmarks.classList.add('header--hidden')
  headerCreate.classList.add('header--hidden')
  headerProfile.classList.add('header--hidden')
})

buttonBookmarks.addEventListener('click', event => {
  mainHome.classList.add('main--hidden')
  mainBookmark.classList.remove('main--hidden')
  mainCreate.classList.add('main--hidden')
  mainProfile.classList.add('main--hidden')

  headerHome.classList.add('header--hidden')
  headerBookmarks.classList.remove('header--hidden')
  headerCreate.classList.add('header--hidden')
  headerProfile.classList.add('header--hidden')
})

buttonCreate.addEventListener('click', event => {
  mainHome.classList.add('main--hidden')
  mainBookmark.classList.add('main--hidden')
  mainCreate.classList.remove('main--hidden')
  mainProfile.classList.add('main--hidden')

  headerHome.classList.add('header--hidden')
  headerBookmarks.classList.add('header--hidden')
  headerCreate.classList.remove('header--hidden')
  headerProfile.classList.add('header--hidden')
})

buttonProfile.addEventListener('click', event => {
  mainHome.classList.add('main--hidden')
  mainBookmark.classList.add('main--hidden')
  mainCreate.classList.add('main--hidden')
  mainProfile.classList.remove('main--hidden')

  headerHome.classList.add('header--hidden')
  headerBookmarks.classList.add('header--hidden')
  headerCreate.classList.add('header--hidden')
  headerProfile.classList.remove('header--hidden')
})

// bookmark animation
const bookmarkClick = document.querySelector('#bookmark--red1')
const bookmarkClick2 = document.querySelector('#bookmark--red2')
const bookmarkClick3 = document.querySelector('#bookmark--red3')
const bookmarkClick4 = document.querySelector('#bookmark--red4')

bookmarkClick.addEventListener('click', event => {
  bookmarkClick.classList.toggle('bookmark--red')
})

bookmarkClick2.addEventListener('click', event => {
  bookmarkClick2.classList.toggle('bookmark--red')
})

bookmarkClick3.addEventListener('click', event => {
  bookmarkClick3.classList.toggle('bookmark--red')
})

bookmarkClick4.addEventListener('click', event => {
  bookmarkClick4.classList.toggle('bookmark--red')
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
