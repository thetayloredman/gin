/*
 * gin
 * Copyright (C) 2022 Logan Devine
 */

const Base = require('./Base');
const EventsBlock = require('./EventsBlock')
const HTTPBlock = require('./HTTPBlock')

/**
 * Represents a nginx config file.
 */
module.exports = class File extends Base {
    /**
     * Create a new nginx config file.
     */
    constructor() {
        super();
        this.blocks = {
            events: new EventsBlock(),
            http: new HTTPBlock()
        }
    }

    /**
     * Build the events block.
     * @param {(events: EventsBlock) => EventsBlock} cb The callback to call with the {@link EventsBlock}.
     * @returns {File} This {@link File}.
     */
    events(cb) {
        this.blocks.events = cb(this.blocks.events)
        return this;
    }

    /**
     * Build the http block.
     * @param {(http: HTTPBlock) => HTTPBlock} cb The callback to call with the {@link HTTPBlock}.
     * @returns {File} This {@link File}.
     */
    http(cb) {
        this.blocks.http = cb(this.blocks.http)
        return this;
    }

    /**
     * Stringify the File.
     * @returns {string} The stringified version of this config file.
     */
    toString() {
        return `${this.blocks.events}\n\n${this.blocks.http}`;
    }
}