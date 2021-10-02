const connection = require("../../config/mysql");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => { //email , password, phoneNumber, nickName

    const PERSONAL_TYPE = 1;

    const date = new Date();
    
    const member = {
        email : req.body.email,
        pwd : bcrypt.hashSync(req.body.password, saltRounds),
        type : PERSONAL_TYPE,
        regist_date : date,
        pwd_update_date : date,
        last_login_date : date
    }

    const REGISTER_MEMBER = 'INSERT INTO member SET ?'
    const REGISTER_PERSONAL_MEMBER = 'INSERT INTO personal SET ?'

    connection.query(REGISTER_MEMBER, member, function (err, results, fields) {
        if (err) {
            console.log(Date.now() + ' - ' + err);
            res.send(err);
        } else {
            const personal = {
                member_memberId : results.insertId,
                phone_number : req.body.phoneNumber,
                nickname : req.body.nickName
            }
            connection.query(REGISTER_PERSONAL_MEMBER, personal, function (err, results, fields) {
                if (err){
                    console.log(Date.now() + ' - ' + err);
                    res.send(err);
                }
                else {
                    res.send(results);
                }
            });
        }
    });
}


exports.login = function (req, res) {
    passport.authenticate('local', {session: false}, (err, user) => {
        if (err) {
            console.log(Date.now() + ' - ' + err);
            res.send(err);
        } else if (!user) {
            const message = '사용자가 존재하지 않습니다';
            console.log(Date.now() + ' - ' + message);
            res.send({message:message});
        } else {
            req.login(user, {session: false}, (err) => {
                if (err) {
                    console.log(Date.now() + ' - ' + err);
                    res.send(err);
                }
                else {
                    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
                    res.json({ token });
                }
            });
        }
    })(req, res);
};
