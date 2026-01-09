/*
 * gin
 * Copyright (C) 2022 Logan Devine
 */

const Block = require('./Block');

/**
 * Represents the `events {}` block in the config file.
 */
module.exports = class EventsBlock extends Block {
    constructor() {
        super('events');
    }
}