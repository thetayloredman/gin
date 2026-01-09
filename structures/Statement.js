/*
 * gin
 * Copyright (C) 2022 Logan Devine
 */

const Base = require('./Base');

/**
 * Represents a statement. That's it.
 */
module.exports = class Statement extends Base {
    /**
     * Creates a new statement.
     * @param {string} name The statement name.
     * @param {...string} args The arguments.
     */
    constructor(statement, ...args) {
        super();
        this.statement = statement;
        this.args = args;
    }

    /**
     * Add an argument.
     * @param {string} arg The argument to add.
     * @returns {Statement} This statement.
     */
    add(arg) {
        this.args.push(arg);
        return this;
    }

    /**
     * Stringify the statement.
     * @returns {string} The stringified version of this statement.
     */
    toString() {
        return `${this.statement}${this.args.length?' ':''}${this.args.join(' ')};`;
    }
}