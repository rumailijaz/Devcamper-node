const Bootcamp = require ('../model/bootcamp')
const ErrorResponse = require('../utilis/errorResponse')


// @desc    Get all bootcamps
// @Routes  Get /api/v1/bootcamps
// @acess   Public

exports.getAllBootcamps = async (req, res, next) => {
    try
    {
    const bootcamps = await Bootcamp.find()
        res.status(200).json({ success: true, data: bootcamps })
    }
    catch (error)
    {
        res.status(400).json({ success: false })
 
    }
 
    // res.status(200).json({ sucess: true, msg: "Show all bootcamps" })
}



// @desc    Get Single bootcamps
// @Routes  Get /api/v1/bootcamps/:id
// @acess   Public
exports.getBootcamp = async (req, res, next) => {
    const _id = req.params.id
     

        const bootcamp = await Bootcamp.findById(_id)
        console.log(bootcamp, 'bootcamp')
        if (!bootcamp)

        {
            console.log('not found boot')
            res.status(400).json({ sucess: "ddd" })
        // next(error)
            // next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 400))
 
        }
        res.status(200).json({ success: true, data: bootcamp })
        next()
 }
 























// @desc    Create new bootcamp
// @Routes  post /api/v1/bootcamps
// @acess   Private
exports.createBootcamp = async (req, res, next) => {
    console.log(req.body)
    try
    {

        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({ success: true, data: bootcamp });
    }
    catch (err)
    {
 
        res.status(400).json({ success: false  })
    }
 

}

// @desc    Update bootcamp
// @Routes  put /api/v1/bootcamps/:id
// @acess   Private

exports.updateBootcamp = async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runvalidator: true
    });
    if (!bootcamp)
    {
        return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: bootcamp });
 
    // res.status(200).json({ sucess: true, msg: `update bootcamp ${req.params.id}` })
}

// @desc    Delete bootcamp
// @Routes  Delete /api/v1/bootcamps/:id
// @acess   Private

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}` })
}
 
 
 
  