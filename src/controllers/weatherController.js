let axios = require("axios")



let weatherController = async function (req, res) {

    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []

        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=792498609ade6e83725f33dd766a8132`
            }
            let result = await axios(options);

            obj.temp = result.data.main.temp
            cityObjArray.push(obj)

        }
        let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })
        res.status(200).send({ data: sorted })
    }




    catch (err) {

    res.status(500).send({ msg: err.message })
}
}


module.exports.weatherController = weatherController

