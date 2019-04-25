({
    recuperarCampos : function(component) {
        console.log('INICIAMOS RECUPERAR CAMPOS');
        var apiName = component.get('v.apiName');
        var action = component.get('c.prueba1');
        
        action.setParams({ apiName: apiName });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS" && response.getReturnValue().length>0) {
                component.set("v.arrayBuffer", response.getReturnValue());
                this.createComponents(component,response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
        
    },
    
    recuperarCamposRequeridos : function(component) {
        console.log('INICIAMOS RECUPERAR CAMPOS');
        var apiName = component.get('v.apiName');
        var action = component.get('c.prueba2');
        
        action.setParams({ apiName: apiName });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS" && response.getReturnValue().length>0) {
                component.set("v.arrayBuffer", response.getReturnValue());
                this.createComponents(component,response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
        
    },
    
    createComponents : function(component,array){
        var arraybuffer = array;
        console.log('ARRAY DE OBJETOS');
        console.log(arraybuffer)
        for(var i = 0;i<arraybuffer.length;i++){
            console.log('FOR');
            $A.createComponent(
                "lightning:inputField",
                {
                    "fieldName": arraybuffer[i]
                },
                function(comp, status, errorMessage){
                    //Add the new button to the body array
                    if (status === "SUCCESS") {
                        var cajaComponentes=component.get('v.auraArray');
                        cajaComponentes.push(comp);
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
        console.log('ANTES DE LLAMAR');
        console.log(JSON.stringify(component.get('v.auraArray')));
        var numListas = component.get('v.columnas');
        this.createComponentList(component,numListas);
    },


    createComponentList : function(component,numListas){

        switch(numListas) {
            case 1:
                    component.set('v.visible',true);
                    console.log(JSON.stringify(component.get('v.auraArray')));
              break;

            default:
            setTimeout (function() {
                    console.log('ENTRAMOS AL CASO 2')
                  var tam = 12/numListas;
                  component.set('v.tam',tam);
                  var auxLista = component.get('v.lista');
                  var tamList = Math.round((component.get('v.auraArray').length/numListas));
                  console.log('division: '+component.get('v.auraArray').length/numListas);
                  console.log('resto: '+component.get('v.auraArray').length%numListas);
                  console.log('tamaño de tamList : '+tamList);
                  var aux = new Array;
                  
                  var auxAura = component.get('v.auraArray');
                  console.log('tamaño de listaPreFormada : '+auxAura.length);
                  console.log('tamaño de la lista: '+tamList);
                  console.log(JSON.stringify(auxAura));
                  var indice = 0;
                  for(var i = 0;i<auxAura.length ;i++){
                        if(i<auxAura.length){
                            aux.push(auxAura[i]);
                            if(aux.length===tamList){
                                console.log('ANTES DE LLAMAR A LA FUNCION');
                             //   auxLista.push(aux);
                             switch(indice){
                                case 0:
                                    component.set('v.auraArray0',aux);
                                break;
                                case 1:
                                    component.set('v.auraArray1',aux);
                                break;
                                case 2:
                                    component.set('v.auraArray2',aux);
                                break;
                                case 3:
                                    component.set('v.auraArray3',aux);
                                break;
                                case 4:
                                    component.set('v.auraArray4',aux);
                                break;
                                case 5:
                                    component.set('v.auraArray5',aux);
                                break;
                            }
                                indice++;
                                aux = [];
                        }else{
                            if(i===auxAura.length-1){
                                switch(indice){
                                    case 0:
                                        component.set('v.auraArray0',aux);
                                    break;
                                    case 1:
                                        component.set('v.auraArray1',aux);
                                    break;
                                    case 2:
                                        component.set('v.auraArray2',aux);
                                    break;
                                    case 3:
                                        component.set('v.auraArray3',aux);
                                    break;
                                    case 4:
                                        component.set('v.auraArray4',aux);
                                    break;
                                    case 5:
                                        component.set('v.auraArray5',aux);
                                    break;
                            }
                        }
                    }
                        }else{
                            console.log('PUSH EN ELSE');
                            switch(indice){
                                case 0:
                                    component.set('v.auraArray0',aux);
                                break;
                                case 1:
                                    component.set('v.auraArray1',aux);
                                break;
                                case 2:
                                    component.set('v.auraArray2',aux);
                                break;
                                case 3:
                                    component.set('v.auraArray3',aux);
                                break;
                                case 4:
                                    component.set('v.auraArray4',aux);
                                break;
                                case 5:
                                    component.set('v.auraArray5',aux);
                                break;
                            }
                           // auxLista.push(aux);
                        }
                  }
                  component.set('v.lista',auxLista);
                  console.log('tamaño de lista : '+component.get('v.lista').length);
                  console.log('numero de columnas: '+component.get('v.columnas'));
                  console.log('estado de visibilidad: '+component.get('v.visible'));
                  component.set('v.visible',true);
                  console.log('estado de visibilidad: '+component.get('v.visible'));
                },1000);
              break;

          }

    },

    crearSubLista : function(component,indice,aux){
        console.log('ENTRAMOS AL PUSH FUNCTION');
        switch(indice){
            case 0:
                component.set('v.auraArray0',aux);
            break;
            case 1:
                component.set('v.auraArray1',aux);
            break;
            case 2:
                component.set('v.auraArray2',aux);
            break;
            case 3:
                component.set('v.auraArray3',aux);
            break;
            case 4:
                component.set('v.auraArray4',aux);
            break;
            case 5:
                component.set('v.auraArray5',aux);
            break;
        }
    }
})