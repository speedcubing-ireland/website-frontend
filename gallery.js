fetch(API_URL + '/images')
  .then(res => res.json())
  .then(images => {
    const gallery = document.getElementById('gallery')
    images.reverse().slice(0,12).forEach(img => {
      const image = createImage(img.photo, img.description)
      gallery.appendChild(image)
    })
})

var startpage = 0
var finishpage = 12

document.getElementById("seeMore").onclick = addMore;
function addMore(){
  fetch(API_URL + '/images')
  .then(res => res.json())
  .then(images => {
    const gallery = document.getElementById('gallery')
    startpage = startpage + 12
    finishpage = finishpage + 12
    images.reverse().slice(startpage,finishpage).forEach(img => {
      const image = createImage(img.photo, img.description)
      gallery.appendChild(image)
    })
})
}

function createImage(src, desc) {

  const column = document.createElement('div')
  column.className = 'column is-one-quarter-desktop is-half-tablet'


  const card = document.createElement('div')
  card.className = 'card'
  card.onclick = function() {
         modalGallery(src, desc);
         console.log();
     };

  const cardimage = document.createElement('div')
  cardimage.className = 'card-image'

  const figure = document.createElement('figure')
  figure.className = 'image is-square'

  const image = document.createElement('img')
  image.src = src
  image.class = 'photo is-smooth'



  const p = document.createElement('p')
  p.className = 'has-text-centered has-text-weight-bold gallery-im-caption'
  p.innerText = desc

  const hr = document.createElement('hr')


  figure.appendChild(image)
  cardimage.appendChild(figure)
  card.appendChild(cardimage)
  card.appendChild(hr)
  card.appendChild(p)
  column.appendChild(card)


  return column
}


function modalGallery(src, desc) {
  document.getElementById("galleryModal").className += " is-active";
  document.getElementById('titlebar').innerHTML = "";
  document.getElementById('titlebar').innerHTML = desc;
  document.getElementById('modalImage').innerHTML = "";
  const modal = document.getElementById('modalImage')
  const figure = document.createElement('figure')
  figure.className = 'image'

  const image = document.createElement('img')
  image.src = src
  image.class = 'photo modal-image'
  figure.appendChild(image)
  modal.appendChild(figure)

}

function closeGallery() {
  document.getElementById("galleryModal").className += "modal";
}
