({
        doInit    : function(component, event, helper){
                console.log('INTENTAMOS RECUPERAR EL RECORD ID');
                var recordid = component.get("v.recordId");
                console.log('recordid');
                helper.onInit(component,recordid);

        },


        showModal : function(component, event, helper) {
            document.getElementById("backdrop").style.display = "block";
            document.getElementById("ModalId").style.display = "block";
            
        },
        
        closeModal : function(component,event, helper){
            console.log('INTENTANDO CERRAR');
           document.getElementById("ModalId").style.display = "none" ;
           document.getElementById("backdrop").style.display = "none";
       }
})