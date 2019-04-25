({
doInit : function(component, event, helper) {
    // helper.onInit(component);
    console.log('ON INIT');
    var utilityAPI = component.find("utilitybar");
    utilityAPI.minimizeUtility();
    console.log('QUI NO PACHA NA');


    var workspaceAPI = component.find("workspace"); 
    workspaceAPI.getFocusedTabInfo().then(function(response) {
        console.log(JSON.stringify(response));
    if(response.isSubtab === true){
        component.set("v.tabPadreActual",response.parentTabId); 
        var arrayaux=response.pageReference.state.ws.split('/');
        component.set('v.recordIdPadreActual',arrayaux[4]);
        if(arrayaux[3]=='Case'){
            helper.onInit(component,arrayaux[4]);
        }
        
}else{
                component.set('v.tabPadreActual',response.tabId);
                component.set('v.recordIdPadreActual',response.pageReference.attributes.recordId);
                if(response.pageReference.attributes.objectApiName=='Case'){
                    var recordId = response.pageReference.attributes.recordId;
                    //SE ENVIARA PARA CRIBAR ALERTAS AL METODO DEL HELPER
                    helper.onInit(component,recordId);
                }
            }
            console.log('ESTE ES EL API NAME');
            console.log(response.pageReference.attributes.objectApiName);
            if(response.pageReference.attributes.objectApiName === 'Alerta__c'){
                helper.doUpdateVistas(component,response.pageReference.attributes.recordId);
            }
            }).catch(function(error) {
                console.log(error);
            });

        
},

setUtilityHighlighted : function(component, event, helper) {
    var utilityAPI = component.find("utilitybar");
    utilityAPI.setUtilityHighlighted({
        highlighted: true
    });
},

onTabFocused : function(component, event, helper){
    console.log('ON TAB FOCUSED');
    var utilityAPI = component.find("utilitybar");
    var workspaceAPI = component.find("workspace");
    var aux = event.getParam('currentTabId');
    console.log(aux);
    workspaceAPI.getTabInfo({tabId: aux}).then(function(response) {
        //OJO AQUI QUE HAY QUE CAMBIAR ESTO EN BANKIA

                        if(response.isSubtab === true){
                            var arrayaux=response.pageReference.state.ws.split('/');
                            if(arrayaux[3]=='Case'){
                                component.set("v.tabPadreActual",response.parentTabId);
                                if(component.get('v.recordIdPadreActual')===arrayaux[4]){
                                            //DO NOTHING
                                    console.log('DO NOTHING');
                                }else{
                                    console.log('DO SOMETHING');
                                    console.log(component.get('v.recordIdPadreActual'));
                                    console.log(arrayaux[4]);
                                component.set('v.recordIdPadreActual',arrayaux[4]);
                                helper.onInit(component,arrayaux[4]);
                                

                                }
                            }else{
                                component.set('v.recordIdPadreActual',arrayaux[4]);
                                component.set("v.alertas",null);
                                utilityAPI.setUtilityHighlighted({
                                highlighted: false
                                });
                                utilityAPI.minimizeUtility();
                            }
                            
                }else{
                        component.set('v.tabPadreActual',response.tabId);
                        console.log('EL TAB DEL PADRE ACTUAL ES: '+response.tabId);
                        component.set('v.recordIdPadreActual',response.pageReference.attributes.recordId);
                        if(response.pageReference.attributes.objectApiName==='Case'){

                            var recordId = response.pageReference.attributes.recordId;
                            //SE ENVIARA PARA CRIBAR ALERTAS AL METODO DEL HELPER
                            console.log(recordId);
                            helper.onInit(component,recordId);
                        }else{
                            
                            component.set("v.alertas",null);
                            utilityAPI.setUtilityHighlighted({
                                highlighted: false
                            });
                            utilityAPI.minimizeUtility();
                            
                        }
                    }
                    console.log('ESTE ES EL API NAME');
                    console.log(response.pageReference.attributes.objectApiName);
                    console.log('ESTE ES EL RECORD ID');
                    console.log(response.pageReference.attributes.recordId);

                    if(response.pageReference.attributes.objectApiName === 'Alerta__c'){
                        console.log('llamamos a doUpdateVistas');
                        helper.doUpdateVistas(component,response.pageReference.attributes.recordId);
                        console.log('HEMOS LLAMADO');
                    }

                    }).catch(function(error) {
                        component.set("v.alertas",null);
                        utilityAPI.setUtilityHighlighted({
                            highlighted: false
                        });
                    });
},

updateVistas : function(component,event,helper){
    var id = event.getParam('alertId');
    console.log('EL EVENTO AL MENOS SE LANZA')
    console.log(id);
    helper.doUpdateVistas(component,id);
}

})