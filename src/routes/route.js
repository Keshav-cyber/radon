const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/movies', function (req, res) {
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
});

router.get('/movies/:indexNumber', function (req, res) {
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    const indexNumber = req.params.indexNumber
    if (indexNumber < movies.length && indexNumber >= 0) {
        res.send(movies[indexNumber])
    }
    else { res.send('not available') }

});

router.get('/films', function (req, res) {
    const array = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    res.send(array)
})

router.get('/films/:filmId', function (req, res) {
    const array = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    const filmId = req.params.filmId

    if(filmId<array.length && filmId>=0){
       res.send (array.find(x=>x=x.id=filmId))
    }
    else{
        res.send('No movie exists with this id')
    }
    
})


module.exports = router;
// adding this comment for no reason