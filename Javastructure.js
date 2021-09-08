const cardData = [
  {
    question: 'Warum sind Eichhörnchen eigentlich gar nicht so süß?',
    answer:
      'Eichhörnchen sind in Wirklichkeit keine süßen kleinen Nussknacker, sondern Raubtiere und Nesträuber, die sich hauptsächlich von Eiern und kleinen Vögeln ernähren.',
    isBookmarked: true,
    showAnswer: false,
    tags: ['fun Fact', 'Natur', 'Grausam'],
  },
  {
    question: 'Wo kommen die Babys her?',
    answer:
      'Die Anwort kommt geschwind, die bringt der Storch, getragen vom Wind',
    isBookmarked: true,
    showAnswer: false,
    tags: ['NSFW', 'Labor', 'Vögeln'],
  },
  {
    question: 'Ist BEM verwandt mit BamBam?',
    answer:
      'Nein, BEM ist eine einfache Struktur-Methode für die Klassen von HTML Elementen. Die Feuersteins haben damit herzlich wenig zu tun.',
    isBookmarked: true,
    showAnswer: false,
    tags: ['Cartoon', 'Logik', 'HTML'],
  },
  {
    question:
      'Wenn man ein Nutellebrot auf den Rücken einer Katze klebt, landet sie dann noch auf den Beinen?',
    answer:
      'Nein, das physikalische Gesetz: Nutellabrote landen immer mit der bestrichenen Seite auf dem Boden, sorgt dafür, dass auch der geliebte Vierebeiner, im freien Fall auf der Nutellaseite des Lebens landet – der Rücken.',
    isBookmarked: true,
    showAnswer: false,
    tags: ['Süß', 'Fakt', 'Lecker'],
  },
]

{
  /* <section class="card main__card--styling" >
        <button id="bookmark--red" type="submit" class="bookmark" alt="bookmark"></button>
        <h2 class="card__question">
          Warum sind Eichhörnchen eigentlich gar nicht so süß?
        </h2>
        <button id="answer--button1" type="submit" class="card__button">Show answer</button>
        <p id="answer--text1" class="card__answer card__hidden">
          Eichhörnchen sind in Wirklichkeit keine süßen kleinen Nussknacker, sondern Raubtiere und Nesträuber, die sich hauptsächlich von Eiern und kleinen Vögeln ernähren.
        </p>
        <ul class="tags">
          <li class="tags__item">Fun Fact</li>
          <li class="tags__item">Natur</li>
          <li class="tags__item">Grausam</li>
        </ul>
      </section> */
}

const main = document.querySelector('#home')

function renderCard(cardData) {
  const cardSection = document.createElement('section')
  cardSection.classList.add('card')
  cardSection.classList.add('main__card--styling')
  main.appendChild(cardSection)

  const cardBookmark = document.createElement('button')
  cardBookmark.classList.add('bookmark')
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

renderCard(cardData[0])
renderCard(cardData[1])
renderCard(cardData[2])
renderCard(cardData[3])
