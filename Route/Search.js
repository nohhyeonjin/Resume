
// 직무 Meta Data List 전달 - 검색용
module.exports.GetCareerList = function (app) {
    app.get('/', (req, res) => {

    })
}

// 사용 기술 Meta Data List 전달 - 검색용
module.exports.GetSkillSetList = function (app) {
    app.get('/', (req, res) => {

    })
}

// 화면에 표시될 Resume List 전달
// Condition에 따라서 Query가 분기하도록 한다.
module.exports.GetResumeList = function (app) {
    app.get('/', (req, res) => {
        if(req.query.sort == undefined){

        }
        
    })
}

module.exports.GetResumeListByCareer = function (app) {
    app.get('/', (req, res) => {

    })
}

module.exports.GetResumeListBySkill = function (app) {
    app.get('/', (req, res) => {

    })
}