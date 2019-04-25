public class PruebasApiName {
    public void obtainApiName(){
    Schema.DescribeSObjectResult r = Account.sObjectType.getDescribe();
	List<String>apiNames =  new list<String>();
	for(string apiName : r.fields.getMap().keySet()){
   		apiNames.add(apiName);
			}
		System.debug(apiNames);
    }

}