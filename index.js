import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/review', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});
