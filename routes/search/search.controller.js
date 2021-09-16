var conn = require('../../config/mysql')



exports.searchSoruce = function(req, res){
    let careerInfo = {};
    let skillInfo = {};
    const GET_OCCUPATIONS = 'SELECT * FROM OCCUPATION';
    const GET_STACKS = 'SELECT * FROM stack AS a, occupation AS b, skill AS c WHERE a.occupation_id = b.id AND c.skill_id = a.skill_id AND c.name_flag = 1';
    conn.query( 'SELECT * FROM OCCUPATION', (err, result, field)=>{
            if(err){
                console.log(Date.now() + ' - ' + err);
                res.send('ERR');
            }
            careerInfo = result;
            conn.query( GET_STACKS, (err, result, field)=>{
                if(err){
                    console.log(Date.now() + ' - ' + err);
                    res.send('ERR');
                }
                skillInfo = result;
                res.json({careerInfo, skillInfo});
            }
        );
        }
    );


}