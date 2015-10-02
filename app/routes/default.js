
// Using STRICT mode for ES6 features
"use strict";

module.exports = function () {
    var routes = {
        'get,post|/nms/examples': 'examples.js',
        'get,post|/nms/examples/:action': 'examples.js'
    };

    return routes;
};
