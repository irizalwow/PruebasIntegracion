({
    onChangeSelection : function(component, event, helper) {
        //component.set("v.opcionSeleccionada",true);
        var option = document.getElementById('selection');
        var valor = option.options[option.selectedIndex].value;
    
        //component.set("v.tipo",valor);
        if(valor!==''){
            component.set("v.opcionSeleccionada",true);
            component.set("v.tipo",valor);
        }else{
            component.set("v.opcionSeleccionada",false);
            component.set("v.tipo",'');
        }

    }
})