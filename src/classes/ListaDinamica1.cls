global class ListaDinamica1 extends VisualEditor.DynamicPickList{
    
    global override VisualEditor.DataRow getDefaultValue(){
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('', '');
        return defaultValue;
    }
    global override VisualEditor.DynamicPickListRows getValues() {
      
        Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
        VisualEditor.DynamicPickListRows  myValues = new VisualEditor.DynamicPickListRows();
        for(Schema.SObjectType objectInstance : gd.values()){
            
            if(objectInstance.getDescribe().isCreateable() && objectInstance.getDescribe().isCreateable()
               && objectInstance.getDescribe().isAccessible() && !objectInstance.getDescribe().getRecordTypeInfosByDeveloperName().isEmpty() ){
            String	aux = objectInstance.getDescribe().getName();
                   if(aux=='Account'){
                       System.debug(objectInstance.getDescribe());
                   }
            VisualEditor.DataRow value = new VisualEditor.DataRow(aux, aux);
            myValues.addRow(value);
            }
        }
      	System.debug(myValues.size());
        return myValues;
    }
}