var conn = require('../../config/mysql')

const GET_OCCUPATIONS = 'SELECT * FROM OCCUPATION';
const GET_STACKS = 'SELECT * FROM stack AS a, occupation AS b, skill AS c WHERE a.occupation_id = b.id AND c.skill_id = a.skill_id AND c.name_flag = 1';

exports.searchSoruce = function(req, res) {
    let careerInfo = {};
    let skillInfo = {};
    conn.query(GET_OCCUPATIONS, (err, result, field) => {
        if (err) {
            console.log(Date.now() + ' - ' + err);
            res.send('ERR');
        }
        careerInfo = result;
        conn.query(GET_STACKS, (err, result, field) => {
            if (err) {
                console.log(Date.now() + ' - ' + err);
                res.send('ERR');
            }
            skillInfo = result;
            res.json({ careerInfo, skillInfo });
        });
    });


}

const GetResumeListQuery = '\
SELECT f.*, e.* FROM career_has_skill AS e LEFT JOIN                                                                                                \
	(SELECT c.id, d.resume_id, c.occupation_id, c.start_date, CASE WHEN c.end_date = NULL THEN now() END AS end_date FROM career AS c LEFT JOIN     \
		( SELECT b.* FROM resume AS a LEFT JOIN career_info AS b ON a.id = b.resume_id WHERE b.is_delete = 0 ) AS d                                 \
		ON c.id = d.career_id) AS f                                                                                                                 \
	ON e.career_id = f.id                                                                                                                           '

exports.GetResumeList = function(req, res){
    let resumeList = {};
    conn.query(GetResumeListQuery, (err, result, field) => {
        if (err) {
            console.log(Date.now() + ' - ' + err);
            res.send('ERR');
        }
        resumeList = result;
        res.json(resumeList);
    }
    );
}

exports.GetResumeList_Search = async(req, res) => {
    let resumeList = {};
    let condition = '';
    if(req.body.condition !== undefined){
        condition += ' WHERE ';
        if(req.body.condition.skill !== undefined){
            condition += 'skill_id in (' + req.body.condition.skill.join(',') + ')';
        }
        if(req.body.condition.occupation !== undefined){
            condition += 'occupation_id in (' + req.body.condition.occupation.join(',') + ')';
        }
    }

    conn.promise().query(GetResumeListQuery + condition)
    .then(([rows, fields]) => {
        res.json(rows);
    })
    .catch(console.log)
    .then(() => conn.end);
    
}


const GetSkillInfoQuery = " SELECT skill_id , name FROM skill WHERE name_flag = 1 AND name like '%?%' "

exports.GetSkillList = function(req, res){
    let skillList = {};
    conn.query(GetSkillInfoQuery, [res.body.skillStr], (err, result, fiels) => {
        if(err){
            console.log(Date.now() + ' - ' + err);
            res.send('ERR');
        }
        
        skillList = result;
        res.json(skillList);
    });
}