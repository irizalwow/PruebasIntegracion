({
    setUtilityHighlighted : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        var idaux;
        console.log('ENTRO');
        var iDs = utilityAPI.getAllUtilityInfo().then(function(response){

            var utility=response[1];
            var aux=utility.id;
            console.log('LA ID ES:');
            console.log(aux);
            component.set("v.aux",aux);
            setTimeout(()=>utilityAPI.setUtilityHighlighted({utilityId: aux,highlighted: true}),1000);
            setTimeout(()=>utilityAPI.setUtilityHighlighted({utilityId: aux,highlighted: false}),2000);
            setTimeout(()=>utilityAPI.setUtilityHighlighted({utilityId: aux,highlighted: true}),3000);
            setTimeout(()=>utilityAPI.setUtilityHighlighted({utilityId: aux,highlighted: false}),4000);
            setTimeout(()=>utilityAPI.setUtilityHighlighted({utilityId: aux,highlighted: true}),5000);
            setTimeout(()=>utilityAPI.setUtilityHighlighted({utilityId: aux,highlighted: false}),6000);
           // window.setTimeout(utilityAPI.setUtilityHighlighted({utilityId: aux,highlighted: true}), 1000);
           // window.setTimeout(utilityAPI.setUtilityHighlighted({utilityId: aux,highlighted: false}), 2000);
           /* utilityAPI.setUtilityHighlighted({
                utilityId: aux,
                highlighted: true
            })*/
        
        });
        console.log(component.get("v.aux"));
        console.log(iDs);
        console.log('PASO 1');
        var iD = iDs[1].id;
        console.log(iD);
      /*  utilityAPI.getAllUtilityInfo().then(function(response) {
            var myUtilityInfo = response[1];
            console.log(myUtilityInfo.id);
            console.log('ESTA ERA LA ID');
       }).catch(function(error) {
            console.log(error);
        });*/
      
      
      
      
      
      
      
      /*  utilityAPI.setUtilityHighlighted({
            utilityId: iD,
            highlighted: true
           
        })  .catch(function(error) {
            console.log(error);
        });*/
    }
})