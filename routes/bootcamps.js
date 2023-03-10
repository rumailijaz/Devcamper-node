const express = require('express')

const {getAllBootcamps, createBootcamp, getBootcamp, getBootcampInRadius, deleteBootcamp, updateBootcamp, bootcampPhotoUpload}=require('../controllers/bootcamps')
const {getAllCourses, addCourse}=require('../controllers/courses')

// Model
const Bootcamp= require('../model/bootcamp')

// Middlewear
const advancedResults= require('../middlewear/advancedResults')


const router = express.Router()

// post
router.post("/", createBootcamp ); // create bootcamp
router.post("/:bootcampId/courses", addCourse ); // Add courses of specific Bootcamp

// Read
router.get("/", advancedResults(Bootcamp, 'courses'), getAllBootcamps ); // Get all Bootcamps at once
router.get("/:bootcampId/courses", getAllCourses ); // Get courses of single Bootcamp
router.get("/:id", getBootcamp ); // Get one Bootcamp
router.get('/radius/:zipcode/:distance', getBootcampInRadius)

// delete
router.delete("/:id", deleteBootcamp ); // delete one Bootcamp

// update
router.put('/:id', updateBootcamp)
router.put('/:id/photo', bootcampPhotoUpload)

module.exports=router