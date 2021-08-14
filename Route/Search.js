
// 직무 Meta Data List 전달 - 검색용
module.exports.GetCareerList = function (app) {
    app.get('/GetCareer', (req, res) => {

    })
}

// 사용 기술 Meta Data List 전달 - 검색용
module.exports.GetSkillSetList = function (app) {
    app.get('/GetSkill', (req, res) => {

    })
}

// 화면에 표시될 Resume List 전달
// Condition에 따라서 Query가 분기하도록 한다.
// req.query.order : 정렬 조건 (relation Table의 flag 값을 사용한다.)
// req.query.skill : skill ID를 사용한다.
// req.query.career : career ID를 사용한다.
// req.query.careerDuration : n 개월 로 데이터를 받는다.
module.exports.GetResumeList = function (app) {
    app.get('/GetList', (req, res) => {
        let query = req.query;
        
    })
}