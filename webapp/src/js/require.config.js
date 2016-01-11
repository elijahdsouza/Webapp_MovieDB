requirejs.config({
    baseUrl: './src/js',
    paths: {
        jquery: './../../bower_components/jQuery/dist/jQuery',
        backbone: './../../bower_components/backbone/backbone',
        underscore: './../../bower_components/underscore/underscore',
        bootstrapSelect: './../../bower_components/bootstrap-select/dist/js/bootstrap-select',
        bootstrap: './../../bower_components/bootstrap/dist/js/bootstrap'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'underscore': {
            exports: '_'
        },
        'bootstrapSelect': {
            deps: ['jquery']
        },
        'jquery': {
            exports: '$'
        }
    }
});

require(['main']);