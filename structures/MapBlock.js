/*
 * gin
 * Copyright (C) 2022 Logan Devine
 */

const Block = require('./Block');
const Statement = require('./Statement');

/**
 * Represents the `map {}` block in the config file.
 */
module.exports = class MapBlock extends Block {
    /**
     * Creates a new `map $x $y` block.
     * @param {string} x The `$x` variable.
     * @param {string} y The `$y` variable.
     */
    constructor(x, y) {
        super(`map ${x} ${y}`);
    }

    /**
     * Create a mapping.
     * @param {string} from The `from` value.
     * @param {string} to The `to` value.
     * @returns {MapBlock} This {@link MapBlock}.
     */
    mapping(from, to) {
        this.add(new Statement(`${from} ${to}`));
        return this;
    }
}
