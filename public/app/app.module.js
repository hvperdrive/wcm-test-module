"use strict";

angular.module("test_0.0.1.directives", []);
angular.module("test_0.0.1.factories", []);
angular.module("test_0.0.1.services", ["test_0.0.1.factories"]);
angular.module("test_0.0.1.controllers", ["test_0.0.1.services"]);

angular.module("test_0.0.1", [

    "pelorus.services",

    "test_0.0.1.directives",
    "test_0.0.1.factories",
    "test_0.0.1.services",
    "test_0.0.1.controllers"

])
.run([function() {
    console.log("Test module is available!"); // eslint-disable-line no-console
}]);
