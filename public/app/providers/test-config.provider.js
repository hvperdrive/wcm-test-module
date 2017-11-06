"use strict";

angular.module("wcm-test_0.0.1")
    .provider("testConfig", [
        function testConfig() {

            this.API = {
                name: "test",
                version: "0.0.1",
                basePath: "app/modules/"
            };

            this.API.modulePath = this.API.basePath + this.API.name + "_" + this.API.version + "/";

            this.$get = function get() {
                return this.API;
            };
        }
    ]);
