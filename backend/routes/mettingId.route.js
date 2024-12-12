const { generateMeetingId } = require('../controller/meetingId.controller');
const { asyncHandler } = require('../middleware/asyncHandler');


const router=require('express').Router();


router.route('/meetingId').get(asyncHandler('',generateMeetingId))


module.exports=router;