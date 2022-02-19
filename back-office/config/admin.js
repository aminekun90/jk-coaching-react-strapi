module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f654357ee1287c35d1d6b48193689014'),
  },
});
