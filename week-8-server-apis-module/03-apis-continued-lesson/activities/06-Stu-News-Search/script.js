let searchBtn = document.querySelector("#run-search")
let searchTerm = document.querySelector("#search-term")
let articleCount = document.querySelector("#article-count")
let startYear = document.querySelector("#start-year")
let endYear = document.querySelector("#end-year")
let articleSection = document.querySelector("#article-section")

searchBtn.addEventListener("click", function (event){
   event.preventDefault();
let query = searchTerm.value
   console.log(articleCount.value)
   console.log(startYear.value)
   console.log(endYear.value)

let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M&q=${query}`   

fetch (queryURL)
.then (response => response.json())
.then (results => {
   
let articles = results.response.docs
// for loop to search through queryURL
for (let i = 0; i < articles.length; i++) {
   const article = articles[i];
   
// creates Div element for each articles
let articleDiv = document.createElement("div")

articleDiv.classList.add("card")

let bodyDiv = document.createElement("div")

bodyDiv.classList.add("card-body")

let headline = document.createElement("h5")

headline.classList.add("card-title")

headline.textContent = article.headline.main

let subheading = document.createElement("h6")

subheading.setAttribute("class", "card-subtitle mb-2 text-muted")

subheading.textContent = article.byline.original

let newsLink = document.createElement("a")

newsLink.classList.add("card-link")
newsLink.setAttribute("href", article.web_url)
newsLink.textContent = "Link to Article"

bodyDiv.append(headline, subheading, newsLink)
articleDiv.append(bodyDiv)
articleSection.append(articleDiv)

}
})


// look in search parameters, no of records, and term
// if statements for start year and end year
// using the results, form query url for news api
// then attach those into query url then make query



})