const express = require("express");
const app = express();
const compression = require("compression")

const port = process.env.PORT || 3002;

app.set("view engine", "ejs");
app.set('view cache', true);

app.use(express.static("public"));
app.use(compression({ level: 9 }));

app.get('/', function(req, res) {
    res.render("index"), {
        title: "Dept® Case online"
    }

    app.get('/offline', function(req, res) {
        res.render("offline", {
            title: "Dept® Case - Offline"
        })
    })
});



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});