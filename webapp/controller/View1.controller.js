sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], (Controller, MessageBox, MessageToast) => {
    "use strict";

    return Controller.extend("org.indexit.demo1.controller.View1", {
        onInit() {
            console.log('here i am')
        },
        onClick(){
            console.log('button is clicked')
            var inputValue1 = this.getView().byId('inputId1').getValue();
            var inputValue2 = this.getView().byId('inputId2').getValue();
            // var buttonText = this.getView().byId('idBtn').getText();

            // this.getView().byId('idBtn').setText('submitted');
            // this.getView().byId('idBtn').setType('Accept')
            
            var mesageText = inputValue1 + " " + inputValue2;

            MessageBox.success(
                `Your full name is ${mesageText}`, {
                    // icon: MessageBox.Icon.INFORMATION,
                    title: `Hi ${mesageText}` ,
                    details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    actions: [MessageBox.Action.OK, MessageBox.Action.NO],
                    emphasizedAction: MessageBox.Action.YES,
                    contentWidth: '50%',
                    onClose: (oAction) => { 
                        this.getView().byId('inputId1').setValue('');
                        this.getView().byId('inputId2').setValue('');
                     }
                }
            );

           

            console.log('mesageText', mesageText);
        },
        onCalculate:function(oEvent) {
            let input1 = parseInt(this.getView().byId('num1').getValue());
            let input2 = parseInt(this.getView().byId('num2').getValue());
            
            // let buttonId = oEvent.getSource().getId().split("--")[2];

            let buttonId = oEvent.oSource.getProperty("text");

            console.log('source', buttonId);

            let result;

            const sOptions = {
                duration: 3000,                  // default
                width: "30rem",                   // default
                my: "center top",             // default
                at: "center top",             // default
                of: window,                      // default
                offset: "0 0",                   // default
                collision: "fit fit",            // default
                onClose: null,                   // default
                autoClose: true,                 // default
                animationTimingFunction: "ease", // default
                animationDuration: 1000,         // default
                closeOnBrowserNavigation: true   // default
            }

            switch(buttonId){
                case "Addition" : 
                    result = input1 + input2;
                    MessageToast.show(`The addition of two number is ${result} `, sOptions);
                    break;
                case "Substraction" :
                    result = input1 - input2;
                    MessageToast.show(`The substraction of two number is ${result} `, sOptions);
                    break;
                case "Multiplication" : 
                    result = input1 * input2;
                    MessageToast.show(`The multiplication of two number is ${result} `, sOptions);
                    break;
                case "/ Division" : 
                    result = input1 / input2;
                    MessageToast.show(`The division of two number is ${result} `, sOptions);
                    break;

            }
 
            
        },
        // onChange(){
        //     var inputValue = this.getView().byId('inputId').getValue();
            
        //      console.log(inputValue);
        // },
        // onSubmit(){
        //     var buttonSet = this.getView().byId('idBtn').setText('submitted successfully!');
        //     var inputSet = this.getView().byId('inputId').setValue('');
        // }
    });
});