# Resume



###FunctionList
|Function ID|Function Owner|Function Name|Input|Output|Desc|
|---|---|---|---|---|---|
|A0001|hjnoh|회원가입|e-mail, PWD, PhoneNum, NickName||
|A0002|hjnoh|로그인|e-mail, PWD||
|A0003|hjnoh|이력서 등록|경력정보 - 회사명, 직무, 사용기술, Start Date, End Date(Opt)|프로젝트 정보 - 프로젝트 명, 스택, Start Date, End Date(Opt), URL(Opt)||
|A0004|hjnoh|이력서 수정|추가시|경력정보 - 회사명, 직무, 사용기술, Start Date, End Date(Opt), 추가/삭제/수정 여부(Opt), 경력ID(Opt)|프로젝트 정보 - 프로젝트 명, 스택, Start Date, End Date(Opt), URL(Opt), 추가/삭제/수정 여부(Opt), 프로젝트ID(Opt)||
|A0005|Bo-kang|이력서 조회|이력서 ID|경력정보, 프로젝트 정보|Relation Flag 구분해서 데이터 전달|조회수 증가 동작 필요
|A0006|Bo-kang|이력서 삭제|이력서 ID|||A0007|Bo-kang|이력서 목록 조회 - Flag 기반|조회수 / 제안횟수 / 추천수|이력서 ID, Relation Flag 구분해서 전달, 경력 / 프로젝트 간략한 정보|
|A0008|Bo-kang|Category 전달 - 직무||현재 DB에 저장된 직무 Tree 정보|
|A0009|Bo-kang|이력서 목록 조회 - 직무 기반|직무 ID|직무 경력이 있는 이력서 List|
|A0010|Bo-kang|이력서 목록 조회 - 기술 기반|Skill 명|Skill 경력 / 경험이 있는 이력서 List|
