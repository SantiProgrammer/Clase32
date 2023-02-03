const express = require('express')

const app = express()
const PORT = 8080

app.use(express.json())

function random() {
    let i = 0
    let aux = []
    while (i < 10000) {
        let rand = Math.round(Math.random() * 9)
        aux.push(rand)
        i++
    }
    return aux
}

// artillery quick --count 50 -n 50 http://localhost:8080/randoms-nodebug > result-nodebug.txt
app.get("/randoms-nodebug", (req, res) => {
    res.json({ randoms: random() })
})


// artillery quick --count 50 -n 50 http://localhost:8080/randoms-nodebug > result-nodebug.txt
app.get("/randoms-debug", (req, res) => {
    console.log(random())
    res.json({ randoms: random() })
})

app.listen(PORT)

/* 
* correr servidor como 
* node --prof --inspect index.js 
*
*/