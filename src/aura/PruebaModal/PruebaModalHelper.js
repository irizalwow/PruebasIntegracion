({
    onInit : function(component,recordId){
    var action = component.get("c.getAlerts")
        action.setParams({ record: recordId })
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS" && response.getReturnValue().length>0) {
                console.log('doInit - action - success');
                component.set("v.alertas", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
                component.set("v.alertas",null);
            }
        });
        $A.enqueueAction(action);
    }
})