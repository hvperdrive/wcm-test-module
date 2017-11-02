"use strict";

angular.module("test_1.0.0.directives", []);
angular.module("test_1.0.0.factories", []);
angular.module("test_1.0.0.services", ["test_1.0.0.factories"]);
angular.module("test_1.0.0.controllers", ["test_1.0.0.services"]);

angular.module("test_1.0.0", [

    "pelorus.services",

    "test_1.0.0.directives",
    "test_1.0.0.factories",
    "test_1.0.0.services",
    "test_1.0.0.controllers"

])
.run([function() {
    console.log("Test module is available!"); // eslint-disable-line no-console
}]);
