/*
 * gin
 * Copyright (C) 2022 Logan Devine
 */

/**
 * Base class for all blocks/statements in Gin.
 */
module.exports = class Base {
    constructor() {}

    /**
     * Run a "plugin" on this element -- a "plugin" is a function that takes this element as an argument and returns it back to us.
     * @param {(element: Base) => Base} plugin The plugin to run.
     * @returns {Base} This element.
     */
    use(plugin) {
        return plugin(this);
    }
}