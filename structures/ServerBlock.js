/*
 * gin
 * Copyright (C) 2022 Logan Devine
 */

const Block = require('./Block');
const Statement = require('./Statement')
const LocationBlock = require('./LocationBlock');
const makeStatementMethods = require('../makeStatementMethods');

/**
 * Represents the `server {}` block in the config file.
 */
module.exports = makeStatementMethods(class ServerBlock extends Block {
    constructor() {
        super('server');
    }

    /**
     * Set the `listen` rule.
     * @name listen
     * @param {...string} args The args to the `listen` rule
     * @returns {ServerBlock} This {@link ServerBlock}.
     */

    /**
     * Set the `server_name` rule.
     * @name serverName
     * @param {string} name The value to set on the `server_name` rule
     * @returns {ServerBlock} This {@link ServerBlock}.
     */
    serverName(name) {
        return this.add(new Statement('server_name', name));
    }

    /**
     * Set the `ssl_certificate` rule.
     * @name sslCertificate
     * @param {string} path The path to the certificate
     * @returns {ServerBlock} This {@link ServerBlock}.
     */

    /**
     * Set the `ssl_certificate_key` rule.
     * @name sslCertificateKey
     * @param {string} path The path to the certificate key
     * @returns {ServerBlock} This {@link ServerBlock}.
     */

    /**
     * Set the `ssl_trusted_certificate` rule.
     * @name sslTrustedCertificate
     * @param {string} path The path to the trusted certificate
     * @returns {ServerBlock} This {@link ServerBlock}.
     */

    /**
     * Add a new `location PATH {}` block.
     * @param {string} path The path to the location
     * @param {(location: LocationBlock) => LocationBlock} cb The callback to call with the {@link LocationBlock}.
     * @returns {ServerBlock} This {@link ServerBlock}.
     */
    location(path, cb) {
        return this.add(cb(new LocationBlock(path)));
    }

    /**
     * Add a new `location = PATH {}` block.
     * @param {string} path The path to the location
     * @param {(location: LocationBlock) => LocationBlock} cb The callback to call with the {@link LocationBlock}.
     * @returns {ServerBlock} This {@link ServerBlock}.
     */
    locationStrict(path, cb) {
        return this.add(cb(new LocationBlock(`= ${path}`)));
    }

    /**
     * Set the `error_page` rule.
     * @param {string} code The error code to set the page for
     * @param {string} path The path to the page
     * @returns {ServerBlock} This {@link ServerBlock}.
     */
    errorPage(code, path) {
        return this.add(new Statement('error_page', code, path));
    }
},
[
    ['listen', 'listen'],
    ['serverName', 'server_name'],
    ['sslCertificate', 'ssl_certificate'],
    ['sslCertificateKey', 'ssl_certificate_key'],
    ['sslTrustedCertificate', 'ssl_trusted_certificate'],
])