const QUERY_GET_RESUME_ID_BY_RELATION = '      SELECT   RESUME_ID , COUNT(*)    \
                                                FROM   relation                \
                                                WHERE   flag = ?                \
                                                GROUP BY   resume_id            \
                                                ORDER BY   count(*) desc        '

const QUERY_GET_USING_SKILL_ID = '   SELECT  a.career_id as careerId, b.project_id as projectId   \
                                       FROM    career_has_skill as a, project_has_skill as b\
                                      WHERE   a.skill_id = ?1 and b.skill_id = ?2';

const QUERY_GET_CAREERs_ID = '  SELECT  id as careerId \
                                  FROM  career \
                                 WHERE  occupation_id = ?';

const QUERY_GET_CAREER_ID_DURATION = '  SELECT  id as careerId, \
                                                TIMESTAMPDIFF(MONTH, start_date, IFNULL(end_data, now())) as DateDiff \
                                          FROM  career ';

/**
 * Query를 생성한다. 
 * 검색 Condition / 검색 시 확인이 필요한 Table을 지정
 */
module.exports.CreateSQLQuery = function (paramQuery){
    if(paramQuery.order != undefined){
        
    }

    if(paramQuery.skill != undefined){

    }

    if(paramQuery.career != undefined){

    }

    if(paramQuery.careerDuration != undefined){

    }

};