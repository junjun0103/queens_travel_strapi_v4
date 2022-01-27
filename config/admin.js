module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cc939f3b8bdcee40994149b40d523d53'),
  },
});
