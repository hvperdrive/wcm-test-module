"use strict";

angular.module("test_0.0.1.factories")
    .factory("testFactory", [

        "$resource",
        "configuration",

        function testFactory($resource, configuration) {

            var api = configuration.serverPath + configuration.apiPrefix + configuration.apiLevel;
            var factory = {};

            factory = $resource(api + "test/:listController:id/:docController", {
                id: "@uuid",
                listController: "@listController",
                docController: "@docController"
            }, {
                update: {
                    method: "PUT"
                },
                read: {
                    method: "GET",
                    params: {
                        listController: "users"
                    }
                }
            });

            return factory;
        }
    ]);
