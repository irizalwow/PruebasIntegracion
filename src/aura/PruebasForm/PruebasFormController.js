({
    doInit : function(component, event, helper) {
        console.log('Campo del picklist');
        console.log(component.get('v.apiName'));
        var buffer = component.get('v.buffer');
        console.log('PRUEBAS FORM CONTROLLER - INICIO');
        switch(buffer.toUpperCase()) {
  		case 'ALL':
                console.log('ESCOGEMOS ALL');
            	helper.recuperarCampos(component);
    		break;
  		case 'REQUIRED':
                console.log('ESCOGEMOS REQUIRED');
            	helper.recuperarCamposRequeridos(component);
    		break;
  		default:
                    var arraybuffer = buffer.split(',');
            console.log('ESCOGEMOS CAMPOS');
            component.set('v.arrayBuffer',arraybuffer);
            helper.createComponents(component,arraybuffer);
		}
        
        
        /*if(buffer.toUpperCase() !=='ALL'){
            var arraybuffer = buffer.split(',');
            console.log('ESCOGEMOS CAMPOS');
            component.set('v.arrayBuffer',arraybuffer);
            helper.createComponents(component,arraybuffer);
        }else{
            console.log('ESCOGEMOS ALL')
            helper.recuperarCampos(component);
        }*/
/*
        for(var i = 0;i<arraybuffer.length;i++){
            console.log('NOMBRE DEL CAMPO:');
            console.log(arraybuffer[i]);
            $A.createComponent(
                "lightning:inputField",
                {
                    "fieldName": arraybuffer[i]
                },
                function(comp, status, errorMessage){
                    //Add the new button to the body array
                    if (status === "SUCCESS") {
                        var cajaComponentes=component.get('v.auraArray');
                        console.log('ESTE DEBERIA SER EL COMPONENTE:')
                        console.log(JSON.stringify(comp));
                        cajaComponentes.push(comp);
                        console.log(JSON.stringify(cajaComponentes));
                        component.set('v.auraArray',cajaComponentes);
                    }
                    else if (status === "INCOMPLETE") {
                        console.log("No response from server or client is offline.")
                        // Show offline error
                    }
                    else if (status === "ERROR") {
                        console.log("Error: " + errorMessage);
                        // Show error message
                    }
                }
            );

        }
        console.log(JSON.stringify(component.get('v.auraArray')));
			*/

    },



    bufferChange : function(component, event, helper){
        console.log('Esta pasando');
        var buffer = component.get('v.buffer');
        if(buffer){
            var arraybuffer = buffer.split(',');
            component.set('v.arrayBuffer',arraybuffer);
        }
    },

    handleOnSubmit : function(component, event, helper){
            console.log('SUBMIT BRO');
            event.preventDefault();       // stop the form from submitting
            var fields = event.getParam('fields');
            console.log(fields.Descripcion__c);
            console.log(fields.Cliente__c);
            console.log(fields.Id);
            
            component.find('myForm').submit();
           
    },

    handleOnError : function(component, event, helper){
        var error = event.getParam('errorCode');
        var message = event.getParam('message');

        console.log('PUES LA HEMOS CAGADO');

        console.log(error);
        console.log(message);
    }
})