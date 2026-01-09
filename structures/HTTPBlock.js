/*
 * gin
 * Copyright (C) 2022 Logan Devine
 */

const Block = require('./Block');
const MapBlock = require('./MapBlock');
const ServerBlock = require('./ServerBlock');
const Statement = require('./Statement');
const makeStatementMethods = require('../makeStatementMethods');

/**
 * Represents the `http {}` block in the config file.
 */
module.exports = makeStatementMethods(class HTTPBlock extends Block {
    constructor() {
        super('http');
    }

    /**
     * Creates a `map $x $y` block with `$x` and `$y` being provided.
     * @param {string} x `$x`
     * @param {string} y `$y`
     * @param {(map: MapBlock) => MapBlock} cb The callback to call with the {@link MapBlock}.
     */
    map(x, y, cb) {
        return this.add(cb(new MapBlock(x, y)));
    }

    /**
     * Set the `server_tokens` rule.
     * @name serverTokens
     * @param {...string} value The value to set on the `server_tokens` rule
     * @returns {HTTPBlock} This {@link HTTPBlock}.
     */

    /**
     * Create a new `server {}` block.
     * @param {(server: ServerBlock) => ServerBlock} cb The callback to call with the {@link ServerBlock}.
     */
    server(cb) {
        return this.add(cb(new ServerBlock()));
    }
}, [
    ['serverTokens', 'server_tokens']
]);