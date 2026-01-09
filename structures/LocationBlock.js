/*
 * gin
 * Copyright (C) 2022 Logan Devine
 */

const Block = require('./Block');
const Statement = require('./Statement');
const makeStatementMethods = require('../makeStatementMethods');

/**
 * Represents the `location PATH {}` block in the config file.
 */
module.exports = makeStatementMethods(class LocationBlock extends Block {
    /**
     * @param {string} path The location's path
     */
    constructor(path) {
        super('location ' + path);
    }

    /**
     * Set the `proxy_pass` rule.
     * @name proxyPass
     * @param {string} url The URL to proxy to
     * @returns {LocationBlock} This {@link LocationBlock}.
     */

    /**
     * Set the `proxy_set_header` rule.
     * @param {string} header The header to set
     * @param {string} value The value to set the header to
     * @returns {LocationBlock} This {@link LocationBlock}.
     */
    proxySetHeader(header, value) {
        return this.add(new Statement('proxy_set_header', header, value));
    }

    /**
     * Make this location internal.
     * @returns {LocationBlock} This {@link LocationBlock}.
     */
    internal() {
        return this.add(new Statement('internal'));
    }

    /**
     * Set the `alias` rule.
     * @name alias
     * @param {string} path The path to alias
     * @returns {LocationBlock} This {@link LocationBlock}.
     */

    /**
     * Set the `root` rule.
     * @name root
     * @param {string} path The path to set as the root
     * @returns {LocationBlock} This {@link LocationBlock}.
     */

    /**
     * Set the `return` rule.
     * @name return
     * @param {number} code The status code to return
     * @returns {LocationBlock} This {@link LocationBlock}.
     */
},
[
    ['alias', 'alias'],
    ['root', 'root'],
    ['return', 'return'],
    ['proxyPass', 'proxy_pass']
])