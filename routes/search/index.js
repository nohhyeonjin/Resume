const express = require('express');
const searchRouter = express.Router();
const controller = require('./search.controller');

searchRouter.use(function(req, res, next){
    console.log('Time: ', Date.now());
    next();
});

searchRouter.get('/searchSoruce', controller.searchSoruce);
searchRouter.get('/GetResumeList', controller.GetResumeList);
searchRouter.get('/GetResumeList_Search', controller.GetResumeList_Search);
searchRouter.get('/GetSkillList', controller.GetSkillList);

module.exports = searchRouter;