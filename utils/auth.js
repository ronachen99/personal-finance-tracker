// Define a middleware function named 'withAuth'
// It is used check if the 'logged_in' property exists in the session object
const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
