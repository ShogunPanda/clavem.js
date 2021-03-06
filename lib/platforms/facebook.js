/*
 * This file is part of the clavem.js npm package. Copyright (C) 2016 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/mit.
 */

const OAuth2Platform = require("./oauth2");

/**
 * Facebook's oAuth 2 authentication platform.
 *
 * @memberOf clavem.platforms
 */
class FacebookPlatform extends OAuth2Platform{
  /**
   * Creates a new platform.
   *
   * @param {Clavem} client The Clavem client.
   */
  constructor(client){
    super(client);

    /**
     * The HTTP method to use to get the access token.
     *
     * @type {string}
     */
    this.accessTokenMethod = "get";

    /**
     * The Authorization URL.
     *
     * @type {string}
     */
    this.authorizeUrl = "https://www.facebook.com/dialog/oauth";

    /**
     * The Access Token URL.
     *
     * @type {string}
     */
    this.accessTokenUrl = "https://graph.facebook.com/oauth/access_token";

    /**
     * The Refresh Token URL.
     *
     * @type {string}
     */
    this.refreshTokenUrl = "https://graph.facebook.com/oauth/access_token";
  }

  /**
   * @param {string} code @nodoc
   * @returns {object} @nodoc
   * @private
   */
  _exchangeCodePayload(code){
    return {client_id: this.clientId, client_secret: this.clientSecret, redirect_uri: `${this.callbackUrl()}/`, code}; // eslint-disable-line camelcase
  }

  /**
   * @param {string} token @nodoc
   * @returns {object} @nodoc
   * @private
   */
  _refreshTokenPayload(token){
    return {client_id: this.clientId, client_secret: this.clientSecret, grant_type: "fb_exchange_token", fb_exchange_token: token}; // eslint-disable-line camelcase
  }
}

module.exports = FacebookPlatform;
