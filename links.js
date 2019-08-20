// ARTICLE CODE ======================================================


const articleContainer = document.getElementById('articles-container')

fetch(API_URL + '/links')
  .then(res => res.json())
  .then(posts => {
    console.log(posts)
    posts.reverse().forEach(post => {
      const article = createArticle({
        contents: snarkdown(post.post)
      })

      articleContainer.appendChild(article)
    })
  })

function createArticle({ contents }) {
  const article = document.createElement('div')
  article.className = ''

  article.innerHTML += contents
  

  return article
}


