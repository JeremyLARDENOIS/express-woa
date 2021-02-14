const cookie = require('cookie');
const logaction = require('./logaction');

function isAuthorized(req, res, next) {
  const cookies = cookie.parse(req.headers.cookie || '');
  if (cookies !== undefined) {
    if (cookies.value === "h4ppy v4l3nt1n3'5 d4y") {
      // authorized
      next();
    } else res.status(401).render('error', { logaction: logaction(cookies), message: 'You are not allowed too reached this page', error: { status: 'Error 401', stack: '' } });
  } else res.status(401).render('error', { logaction: logaction(cookies), message: 'You are not allowed too reached this page', error: { status: 'Error 401', stack: '' } });
}

module.exports = isAuthorized;
