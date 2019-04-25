public with sharing class PruebasSelectApiNames {

    public void getApiNames(){
        Id rId = '0025800000q4RHK';
        
 
        Map<String, String> labelMap = new Map<String, String>();
        DescribeSObjectResult describeResult = rId.getSObjectType().getDescribe(); 
        system.debug(rId.getSobjectType());
        System.debug(describeResult);
        Map<String, Schema.SObjectField> fieldMap = describeResult.fields.getMap();
        
        
        /*
        for( String fieldName : fieldMap.keySet() ) {
    		Schema.SObjectField field = fieldMap.get( fieldName );
    		Schema.DescribeFieldResult fieldDescribe = field.getDescribe();
            System.debug(fieldDescribe);
    		labelMap.put(fieldDescribe.getLabel(), fieldDescribe.getName() );
		}
        
        
        System.debug(labelMap);
        
        System.debug(describeResult);
        System.debug(fieldMap);
        
        Map<String, Schema.FieldSet> FsMap = describeResult.fieldSets.getMap();
        
        System.debug(FsMap);
        

        
        List<DescribeFieldResult> listaCampos = new List<DescribeFieldResult>();
        
       // for()
        
       // DescribeFieldResult describeFieldResult = 
        
        
        
        // Get all of the fields on the object
        Set<String> fieldNames = fieldMap.keySet();
        
        
        
       	List<String> fieldnames2 = new List<String>();
        fieldnames2.addAll(fieldNames);
        
        System.debug(fieldNames);
        System.debug(describeResult.getName());
        // Build a Dynamic Query String.
        String soqlQuery = ' SELECT ' + String.join(fieldNames2, ',') + ' FROM ' + describeResult.getName() + ' Where Id =: rId';
        
        System.debug(soqlQuery);
        // Need to return a generic list of sObject because we don't necessarily know exactly what the object is.
       // List<sObject> record = Database.query(soqlQuery);
       // */
    }


}