/*
 * gin
 * Copyright (C) 2022 Logan Devine
 */

const File = require('./structures/File.js');

/**
 * Create a new nginx config file.
 * @param {(file: File) => File} cb The callback to call with the {@link File}.
 * @returns {File} The {@link File} that you can .toString() once completed.
 */
module.exports = function createFile(cb) {
    return cb(new File());
}
