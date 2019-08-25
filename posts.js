// ARTICLE CODE ======================================================


const articleContainer = document.getElementById('articles-container')

fetch(API_URL + '/articles')
  .then(res => res.json())
  .then(posts => {
    console.log(posts)
    posts.reverse().forEach(post => {
      const article = createArticle({
        title: post.title,
        author: post.author,
        date: post.updated_at,
        contents: snarkdown(post.content),
        tagName: post.type
      })

      articleContainer.appendChild(article)
    })
  })

  function createArticle({ title, author, date, contents, tagName }) {
    const article = document.createElement('article')
    article.className = 'message'
  
    const header = document.createElement('div')
    header.className = 'message-header'
  
    const titleElem = document.createElement('p')
    titleElem.innerText = title
    titleElem.className = 'has-text-black'
  
    const tag = document.createElement('span')
  
    let tagType = ''
    if (tagName === 'announcement') {
      tagType = 'danger'
    } else if (tagName === 'news') {
      tagType = 'link'
    } else {
      tagType = 'success'
    }
    tag.className = `tag is-${tagType}`
    tag.innerText = tagName
  
  
    header.appendChild(titleElem)
    header.appendChild(tag)
    article.appendChild(header)
  
  
    const articleText = document.createElement('div')
    articleText.className = 'message-body content'
  
    const announcement = document.createElement('em')
    const strong = document.createElement('strong')
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  
    const dateObj = new Date(date)
    let hours = dateObj.getHours()
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12
    hours = hours < 10 ? '0' + hours : hours
    let minutes = dateObj.getMinutes()
    minutes = minutes < 10 ? '0' + minutes : minutes
    const dateString = `${days[dateObj.getDay()]}, ${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()} at ${hours}:${minutes} ${ampm}`
  
    // const dateString = newdate // Thursday, July 18 2019, 12:26 AM
    strong.innerText = `Announced by ${author} on ${dateString}`
    announcement.appendChild(strong)
  
    articleText.appendChild(announcement)
    articleText.appendChild(document.createElement('br'))
    // articleText.appendChild(document.createTextNode(summary))
    articleText.innerHTML += contents
    article.appendChild(articleText)
  
    return article
  }
  
  
  // IMAGES CODE ========================================================
  
  function shuffle(arr) {
    let i = arr.length
  
    while (0 !== i) {
      const randomIdx = Math.floor(Math.random() * i);
      i -= 1;
  
      const temp = arr[i];
      arr[i] = arr[randomIdx];
      arr[randomIdx] = temp;
    }
  
    return arr
  }
  
  
  const NUM_IMAGES = 4
  
  fetch(API_URL + '/images')
    .then(res => res.json())
    .then(images => {
      const shuffled = shuffle(images).slice(0, NUM_IMAGES)
      const gallery = document.getElementById('gallery')
  
      shuffled.forEach(img => {
        const image = createImage(img.photo, img.description)
        console.log(image);
        gallery.appendChild(image)
      })
    })
  
  function createImage(src, desc) {
    const box = document.createElement('div')
    box.className = 'box card'
    box.onclick = function() {
           modalGallery(src, desc);
       };
  
    const figure = document.createElement('figure')
    figure.className = 'image'
  
    const p = document.createElement('p')
    p.className = 'has-text-centered has-text-weight-normal'
    p.innerText = desc
  
    const image = document.createElement('img')
    image.src = src
    image.className = 'is-smooth'
  
    figure.appendChild(image)
    box.appendChild(figure)
    box.appendChild(p)
  
  
    return box
  }