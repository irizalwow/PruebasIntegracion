({
    doInit : function(component, event, helper) {
            console.log('HEMOS EMPEZADO AL MENOS');
            var holi = component.get('v.auraArray2');
            var holi1 = component.get('v.auraArray');
            holi.push = holi1[0];
            console.log(holi1[0]);
            console.log('METEMOS COMPONENTE 0');
            console.log(JSON.stringify(holi[0]));
            holi.push = holi1[1];
            console.log('METEMOS COMPONENTE 1');
            console.log(holi[1]);
            holi.push = holi1[2];
            console.log('METEMOS COMPONENTE 2');
            console.log(holi[2]);
            component.set('v.auraArray2',holi);
    }
})