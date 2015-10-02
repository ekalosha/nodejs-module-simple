
// Using STRICT mode for ES6 features
"use strict";


/**
 * Requiring Core Library
 */
var DioscouriCore = module.parent.require('dioscouri-core');

var async = require('async');

/**
 *  Index controller
 *
 *  @author Eugene A. Kalosha <ekalosha@dioscouri.com>
 */
class Examples extends DioscouriCore.Controller {

    /**
     * Controller constructor
     */
    constructor (request, response) {
        // We must call super() in child class to have access to 'this' in a constructor
        super(request, response);
    }

    /**
     * Initializing controller
     *
     * @param callback
     */
    init (callback) {
        // Registering actions
        this.registerAction('get-info', 'getInfo');

        // Initialize user model
        // this.userModel = require('../models/user.js')

        callback();
    }

    /**
     * Load view file
     *
     * @param dataReadyCallback
     */
    load (dataReadyCallback) {

        // Set page data
        this.data.header = "Module Example Web";

        /**
         * Set output view object
         */
        this.view(DioscouriCore.ModuleView.htmlView(__dirname + '/../../app/views/module-example.swig'));

        // Send DATA_READY event
        dataReadyCallback(null);
    }

    /**
     * Load view file
     *
     * @param dataReadyCallback
     */
    getInfo (dataReadyCallback) {
        this.userModel.getAll(function(err, items){
            // Set page data
            this.data.header = "It works!";
            this.data.users = items;

            /**
             * Set output view object
             */
            this.view(DioscouriCore.ModuleView.htmlView(__dirname + '/../../app/views/module-example.swig'));

            // Send DATA_READY event
            dataReadyCallback(err);
        }.bind(this));
    }

};

/**
 * Exporting Controller
 *
 * @type {Function}
 */
exports = module.exports = function(request, response) {
    var controller = new Examples(request, response);
    controller.run();
};
