public with sharing class PushTopicUtilities {

    public boolean createPushTopic(String name,String query,Decimal version,boolean notifyCreate,
                                    boolean notifyUpdate,boolean notifyUndelete,boolean notifyDelete,String notify){
PushTopic pushTopic = new PushTopic();
pushTopic.Name = name;
pushTopic.Query = query;
pushTopic.ApiVersion = version;
pushTopic.NotifyForOperationCreate = notifyCreate;
pushTopic.NotifyForOperationUpdate = notifyUpdate;
pushTopic.NotifyForOperationUndelete = notifyUndelete;
pushTopic.NotifyForOperationDelete = notifyDelete;
pushTopic.NotifyForFields = notify;
insert pushTopic; 
        return true;
    }
}