const uuid=require('uuid');
const httpRes=require('../utils/http');
const { prepareResponse } = require('../utils/response');


exports.generateMeetingId=async(req,res)=>{
    try {
        const meetingId=uuid.v4();
        res.status(httpRes.OK).json(prepareResponse('OK','meeting ID generated',{meetingId},null));
        
    } catch (error) {
        res.status(httpResponseCodes.SERVER_ERROR).json(prepareResponse('SERVER_ERROR', 'Internal Server Error', null, error));
    }
}