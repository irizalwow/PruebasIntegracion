({
    init: function (cmp, event, helper) {
        cmp.set('v.columns', [
            {label: 'Descripcion', fieldName: 'Descripcion__c', type: 'text'},
            {label: 'Cliente', fieldName: 'Cliente__c', type: 'text'},
            {label: 'Fecha Fin', fieldName: 'Fecha_fin_de_reporte__c', type: 'date'},
            {label: 'Detalles', type: 'button', initialWidth: 135, typeAttributes: { label: 'Details', name: 'view_details', title: 'Pincha para ver Detalles'}},
        ]);
    },

    
    rowAction: function (component, event, helper) {
        var action = event.getParam('action');
        var row = event.getParam('row');
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getFocusedTabInfo().then(function(response) {
                        var focusedTabId = response.tabId;
                        workspaceAPI.openSubtab({
                            parentTabId: focusedTabId,
                            recordId: row.Id,
                            focus: true 
                        }).then(function(response) {
                            //AQUI LANZAREMOS EL EVENTO DE CIERRE PARA EL MODAL
                            var CloseModalEvent = component.getEvent("closeModal");
                            CloseModalEvent.fire();

                            }).then(function(tabInfo) {
                            console.log('SUCCESS');
                            });
                        })
                        .catch(function(error) {
                               console.log(error);
                        });
                 
            
        
    }



})