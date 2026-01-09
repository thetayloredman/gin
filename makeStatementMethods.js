/*
 * gin
 * Copyright (C) 2022 Logan Devine
 */

const Statement = require('./structures/Statement')

/**
 * Apply statement generating methods to a class.
 * @param {Object} object The class to add the Statement generating methods to.
 * @param {[string, string][]} methods An array of tuples, where the first element is the method name and the second element is the statement name. 
 */
module.exports = function makeStatementMethods(object, methods) {
    for (const [methodName, statementName] of methods) {
        object.prototype[methodName] = function(...args) {
            return this.add(new Statement(statementName, ...args));
        }
    }
    return object;
}
