module.exports = function(viewEngine, config) {
    var engines = config.engines;

    for (var engineModuleName in engines) {
        if (engines.hasOwnProperty(engineModuleName)) {
            var engineConfig = engines[engineModuleName];

            var extensions = engineConfig.extensions;
            delete engineConfig.extensions;

            var engine = require(engineModuleName)(engineConfig);
            if (!extensions) {
                extensions = engine.extensions;
            }

            for (var i=0; i<extensions.length; i++) {
                viewEngine.engine(extensions[i], engine);
            }
        }
    }
};