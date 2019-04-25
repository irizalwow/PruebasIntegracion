({
    doInit : function(component, event, helper) {
        
            var action = component.get("c.getPushTopics");
            component.set("v.auxiliar",true);
            action.setParams({ptype:''});
            action.setCallback(this, function(response) {
                var state = response.getState();
                    if (state === "SUCCESS") {
                        
                        component.set("v.listaTopics", response.getReturnValue());
                    }
                });
                $A.enqueueAction(action);
    }
})