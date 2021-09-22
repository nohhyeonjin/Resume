var conn = require('../../config/mysql')



exports.searchSoruce = function (req, res) {
    let careerInfo = {};
    let skillInfo = {};
    const GET_OCCUPATIONS = 'SELECT * FROM OCCUPATION';
    const GET_STACKS = 'SELECT * FROM stack AS a, occupation AS b, skill AS c WHERE a.occupation_id = b.id AND c.skill_id = a.skill_id AND c.name_flag = 1';
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
        }
        );
    }
    );
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

