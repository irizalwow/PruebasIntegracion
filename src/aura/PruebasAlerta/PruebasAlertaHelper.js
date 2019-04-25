({
    onInit : function(component,recordId){
        console.log('-----------VAMOS A ACTUALIZAR LA LISTA------------');
    var action = component.get("c.getAlerts")
        action.setParams({ record: recordId })
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log(response.getReturnValue());
            if (state === "SUCCESS" && response.getReturnValue().length>0) {
                console.log('doInit - action - success');
                component.set("v.alertas", response.getReturnValue());
               // var holi = response.getReturnValue().every(nueva);
                var existen = this.nueva2(response.getReturnValue(),component.get('v.alertaVista'));
                var utilityAPI = component.find("utilitybar");
                console.log('SALGO DE LA FUNCION');
                console.log(existen);
                if(!existen){
                    console.log('ESTOY ENTRANDO EN EL HIGHLIGHT');
                utilityAPI.setUtilityHighlighted({
                    highlighted: true
                });
                if(component.get('v.firstTime')){
                    utilityAPI.openUtility();
                    component.set('v.firstTime',false);
                }
                
            }
            

            }
            else {
                console.log("Failed with state: " + state);
                console.log('doInit - action - failed');
                component.set("v.alertas",null);
            }
        });
        $A.enqueueAction(action);
    },

    nueva : function(value){
            console.log('ENTRAMOS EN LA COMPROBACION');

            return value.Id == 'ihsvskdja99018';
    },

    nueva2 : function(alertas,ids){
            console.log('ENTRAMOS EN LA FUNCION');
            var existen=true;
            for(var i = 0;i <alertas.length;i++ ){
                    console.log('ITERAMOS');
                    console.log(alertas[i].Id);
                    existen = ids.includes(alertas[i].Id);
                    console.log('AQUI VAN LOS IDS');
                    console.log(ids);
                    console.log('AQUI VAN LAS ALERTAS');
                    console.log(JSON.stringify(alertas));
                    console.log(existen);
                    if(existen===false){
                        console.log('Entro al return');
                        return existen};
            }
            return existen;
    },

    doUpdateVistas : function(component,id){
        console.log('OYE QUE PASA AQUI');
    var arrayid = component.get('v.alertaVista');
        console.log('OYE QUE PASA AQUI TRAS PILLAR EL ARRAY');
    if(!arrayid.includes(id)){
        arrayid.push(id);
        console.log('VEAMOS EL ARRAY DE ID');
        console.log(arrayid);
        component.set('v.alertaVista',arrayid);
    }
    console.log('OYE QUE PASA AQUI TRAS COMPROBAR QUE NO ESTA INCLUIDO EL ID');

    if(this.nueva2(component.get('v.alertas'),arrayid)){
        var utilityAPI = component.find("utilitybar");
        utilityAPI.setUtilityHighlighted({
            highlighted: false
        });
    }
    console.log('OYE QUE PASA AQUI TRAS FINALIZAR EL PROCESO');
    }
})