
// Using STRICT mode for ES6 features
"use strict";

/**
 * Requiring Core Library
 */
var DioscouriCore = require('dioscouri-core');

/**
 *  User model
 *
 *  @author Eugene A. Kalosha <ekalosha@dioscouri.com>
 */
class EnormousEntity extends DioscouriCore.MongooseModel {
    /**
     * Model constructor
     */
    constructor (listName) {
        // We must call super() in child class to have access to 'this' in a constructor
        super(listName);
    }

    /**
     * Define Schema
     *
     * @override
     */
    defineSchema() {

        var Types = this.mongoose.Schema.Types;

        // EnormousEntity Schema Object
        var schemaObject = {
            name: {type: String, unique: true, required: true},
            isEnabled: Boolean,
            additional: String,
            createdAt : {type: Date, 'default': Date.now},
            modifiedAt : {type: Date, 'default': Date.now},
            description: String
        };

        /**
         * Creating DBO Schema
         */
        var EnormousEntityDBOSchema = this.createSchema(schemaObject);

        /**
         * Pre-save Hook for EnormousEntity entity
         */
        EnormousEntityDBOSchema.pre('save', function (next) {
            this.modifiedAt = new Date();

            next();
        });

        // Registering schema and initializing model
        this.registerSchema(EnormousEntityDBOSchema);
    }
}

/**
 * Exporting Model
 *
 * @type {Function}
 */
exports = module.exports = new EnormousEntity('enormousentity');
