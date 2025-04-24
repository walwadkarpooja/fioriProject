sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("org.indexit.demo1.controller.View1", {
        onInit() {
            console.log('here i am')
        },
        onClick(){
            console.log('button is clicked')
        }
    });
});