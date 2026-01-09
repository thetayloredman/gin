/*
 * gin
 * Copyright (C) 2022 Logan Devine
 */

const Base = require('./Base');

/**
 * Represents any ol' block.
 */
module.exports = class Block extends Base {
    /**
     * Create a new block.
     * @param {string} name The "name" (e.g. "http", "events", "map $x $y", etc.)
     */
    constructor(name) {
        super();
        this.name = name;
        this.members = [];
    }

    /**
     * Add a member to this block.
     * @param {Block | Statement} member The member to add.
     * @returns {Block} This block.
     */
    add(member) {
        this.members.push(member);
        return this;
    }

    /**
     * Stringify the Block.
     * @returns {string} The stringified version of this block.
     */
    toString() {
        return [
            `${this.name} {`,
            ...this.members.map(m => m.toString().split('\n').map(l => `    ${l}`).join('\n')),
            `}`
        ].join('\n');
    }
}