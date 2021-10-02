const connection = require('../config/mysql');
const bcrypt = require('bcrypt');

const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;

const FIND_MEMBER_BY_EMAIL = 'SELECT * FROM member WHERE email = ?';

module.exports = () => {
    passport.use(new LocalStrategy({
            usernameField:'email', 
            passwordField:'pwd'
        },
        (email, pwd, done) => {
            connection.query(FIND_MEMBER_BY_EMAIL, [email], (err, results, fields) => {
                if(!results) {
                    return done(null, false);
                } else {
                    const isMember = bcrypt.compareSync(pwd, results[0].pwd);
                    if(!isMember) {
                        return done(null, false);
                    } else {
                        return done(null, results[0]);
                    }
                }
            })
        }
    ))
  
    passport.use(new JWTStrategy({
            jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('Bearer'),
            secretOrKey   : process.env.JWT_SECRET
        },
        (jwtPayload, done) => {
            connection.query(FIND_MEMBER_BY_EMAIL, jwtPayload.email, function (err, results, fields) {
                if(!results) {
                    return done(null, false);
                } else {
                    return done(null, results);
                }
            })
        }
    ));
}