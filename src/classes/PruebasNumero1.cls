public class PruebasNumero1 {
    @auraenabled
    public static List<String> prueba1(String apiName){
        
        List<String> lista = new List<String>();
        Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
        for(Schema.SObjectType objectInstance : gd.values()){
            system.debug(objectInstance.getDescribe());
            if(objectInstance.getDescribe().getName() == apiName){
                
                DescribeSObjectResult results = objectInstance.getDescribe(); 
                Map<String, Schema.SObjectField> fieldMap = results.fields.getMap();
                for( SObjectField field : fieldMap.values() ) {
                   
                    String aux = field.getDescribe().getName();
                    Schema.SoapType st = field.getDescribe().getSOAPType();
                    if(aux != 'IsDeleted' && aux != 'CreatedDate' && aux != 'CreatedById' && aux != 'LastModifiedDate'
                       	&& aux != 'LastModifiedById' && aux != 'SystemModStamp' && aux != 'LastViewedDate' 
              	        && aux != 'LastReferencedDate' && aux != 'Id' && st != Schema.SoapType.ADDRESS 
                          && field.getDescribe().isAccessible()==true && field.getDescribe().isCreateable()
                           && field.getDescribe().isAutoNumber()==false){
                           lista.add(field.getDescribe().getName());
                       }    
                }
            }
        }
       
        return lista;
    }
    
    
    @auraenabled
    public static List<String> prueba2(String apiName){
        
        List<String> lista = new List<String>();
        Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
        for(Schema.SObjectType objectInstance : gd.values()){
            if(objectInstance.getDescribe().getName() == apiName){
                DescribeSObjectResult results = objectInstance.getDescribe(); 
                Map<String, Schema.SObjectField> fieldMap = results.fields.getMap();
                for( SObjectField field : fieldMap.values() ) {
                    //System.debug(field.getDescribe());
                    String aux = field.getDescribe().getName();
                    System.debug(field.getDescribe().isNillable());
                    if(field.getDescribe().isNillable() == false && field.getDescribe().isAutoNumber()==false 
                       && field.getDescribe().isAccessible()==true && field.getDescribe().isCreateable()){
                           lista.add(field.getDescribe().getName());
                       }    
                }
            }
        }
        System.debug(lista);
        return lista;
    }
}