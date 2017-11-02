"use strict";

angular.module("test_1.0.0")
    .provider("testConfig", [
        function testConfig() {

            this.API = {
                name: "test",
                version: "1.0.0",
                basePath: "app/modules/"
            };

            this.API.modulePath = this.API.basePath + this.API.name + "_" + this.API.version + "/";

            this.$get = function get() {
                return this.API;
            };
        }
    ]);
