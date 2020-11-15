const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')


router.get('/', (req, res) => {
  const { type } = req.query
  switch (type) {
    case "A-Z":
      Restaurant.find()
        .lean()
        .sort({ name: 'asc' })
        .then(restaurants => {
          res.render('index', { restaurants })
        })
        .catch(error => console.log(error))
      break
    case "Z-A":
      Restaurant.find()
        .lean()
        .sort({ name: 'desc' })
        .then(restaurants => {
          res.render('index', { restaurants })
        })
        .catch(error => console.log(error))
      break
    case "category":
      Restaurant.find()
        .lean()
        .sort({ category: 'asc' })
        .then(restaurants => {
          res.render('index', { restaurants })
        })
        .catch(error => console.log(error))
      break
    case "location":
      Restaurant.find()
        .lean()
        .sort({ location: 'asc' })
        .then(restaurants => {
          res.render('index', { restaurants })
        })
        .catch(error => console.log(error))
      break
    default:
      break
  }


})


// 匯出路由模組
module.exports = router