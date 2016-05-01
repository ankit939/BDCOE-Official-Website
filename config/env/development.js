/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
  port: process.env.PORT,
  host: process.env.IP,
  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }
  models: {
    connection: 'myMongo'
  },
  fb: {
    appID: "237413036610565",
    appSecret: "745bb373863eac82e5caf1c24b385828",
    callbackURL: "http://www.bdcoe.co.in/auth/facebook/callback"
   }
};
