"use strict";

angular.module("wcm-test_0.0.1")
    .provider("testConfig", [
        function testConfig() {

            this.API = {
                name: "test-module",
                version: "0-0-1",
                basePath: "niv_modules/"
            };

            this.API.modulePath = this.API.basePath + this.API.name + "_" + this.API.version + "/public/app/";

            this.$get = function get() {
                return this.API;
            };
        }
    ]);
