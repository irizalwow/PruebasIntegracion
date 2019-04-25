({
    Search : function(component, event, helper) {
        component.set("v.auxiliar",true);
            var action = component.get("c.getPushTopics");
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