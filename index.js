const express = require("express")
const axios = require("axios")
const cheerio = require("cheerio")
const PORT = 8000
const app = express()

const url = 'https://techcrunch.com/'

axios(url)
    .then(response => {
        const html = response.data
        console.log(html)
        const $  = cheerio.load(html)
        const articles = []
         $('.wp-block-heading', html).each(function() { 
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({ 
                title,
                url
            })
          })
     })

app.listen(PORT,() => console.log(`Server is running on port ${PORT}`))