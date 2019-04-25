public with sharing class PruebasConTopics {

            @AuraEnabled
    	  public static List<PushTopic> getPushTopics(String ptype){
        if(ptype=='All' || ptype==''){
                return [SELECT Id,Name FROM PushTopic];
        }else{
                return [SELECT Id,Name FROM PushTopic WHERE Name = 'Channel'];
        }
    }
}