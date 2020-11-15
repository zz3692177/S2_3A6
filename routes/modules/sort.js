const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')


router.get('/A-Z', (req, res) => {
  console.log(req.body)
  Restaurant.find()
    .lean()
    .sort({ name: 'asc' })
    .then(restaurants => {
      res.render('index', { restaurants })
    })
    .catch(error => console.log(error))
})

router.get('/Z-A', (req, res) => {
  console.log(req.body)
  Restaurant.find()
    .lean()
    .sort({ name: 'desc' })
    .then(restaurants => {
      res.render('index', { restaurants })
    })
    .catch(error => console.log(error))
})

router.get('/category', (req, res) => {
  console.log(req.body)
  Restaurant.find()
    .lean()
    .sort({ category: 'asc' })
    .then(restaurants => {
      res.render('index', { restaurants })
    })
    .catch(error => console.log(error))
})
router.get('/location', (req, res) => {
  console.log(req.body)
  Restaurant.find()
    .lean()
    .sort({ location: 'asc' })
    .then(restaurants => {
      res.render('index', { restaurants })
    })
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router