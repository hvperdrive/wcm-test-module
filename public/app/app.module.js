"use strict";

angular.module("wcm-test_0.0.1.directives", []);
angular.module("wcm-test_0.0.1.factories", []);
angular.module("wcm-test_0.0.1.services", ["wcm-test_0.0.1.factories"]);
angular.module("wcm-test_0.0.1.controllers", ["wcm-test_0.0.1.services"]);

angular.module("wcm-test_0.0.1", [

    "pelorus.services",

    "wcm-test_0.0.1.directives",
    "wcm-test_0.0.1.factories",
    "wcm-test_0.0.1.services",
    "wcm-test_0.0.1.controllers"

])
.run([function() {
    console.log("Test module is available!"); // eslint-disable-line no-console
}]);
