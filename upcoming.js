

// Making Cards ======================================================
const compContainer = document.getElementById('competition-container')
fetch(API_URL + '/competitions')
  .then(res => res.json())
  .then(comps => {
    console.log(comps)
    comps.slice(0,4).forEach(comp => {
      const competition = createCompetition({
        title: comp.title,
        start: comp.startdate,
        end: comp.enddate,
        link: comp.wcalink,
        tag: comp.registrationopen,
        image: comp.image.url
      })

      compContainer.appendChild(competition)
    })
  })

function createCompetition({ title, start, end, link, tag, image }) {
  const competition = document.createElement('a')
  competition.className = 'cardlink column is-half-tablet is-half-desktop is-one-quarter-widescreen is-one-quarter-fullhd'
  competition.setAttribute('href', link)

  const column = document.createElement('div')
  column.className = ''

  const card = document.createElement('div')
  card.className = 'card'

  const titlep = document.createElement('p')
  titlep.className = 'compName has-text-black'
  titlep.innerText = title

  // Dealing With Dates
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
  const startObj = new Date(start)
  const endObj = new Date(end)
  const dateString = `${months[startObj.getMonth()]} ${startObj.getDate()} - ${months[endObj.getMonth()]} ${endObj.getDate()}`

  const date = document.createElement('p')
  date.className = 'has-text-weight-bold is-capitalized has-text-black'
  date.innerText = dateString

  const comptag = document.createElement('div')
  comptag.className = 'compTag'

  if (!!tag) {
    const span = document.createElement('span')
    span.className = 'tag is-success tagpad'

    const tagtxt = document.createElement('p')
    tagtxt.className = 'has-text-weight-bold'
    tagtxt.innerText = 'Registration is Open'

    span.appendChild(tagtxt)
    comptag.appendChild(span)
  }

  const hr = document.createElement('hr')

  const imgdiv = document.createElement('div')
  imgdiv.className = 'cardimage'

  const figure = document.createElement('figure')
  figure.className = 'image is-square is-1by1 is-fullwidth'

  const img = document.createElement('img')
  img.className = 'imgsquare'
  img.setAttribute('src', API_URL + image)
  console.log(API_URL + image);


  figure.appendChild(img)
  imgdiv.appendChild(figure)
  card.appendChild(titlep)
  card.appendChild(date)

  card.appendChild(comptag)
  card.appendChild(hr)
  card.appendChild(imgdiv)
  column.appendChild(card)
  competition.appendChild(column)

  return competition
}
