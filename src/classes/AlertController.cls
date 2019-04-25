public with sharing class AlertController {

    @AuraEnabled
public static List<Alerta__c> getAlerts(Id record){




    return [SELECT Id, Name, Descripcion__c,Fecha_fin_de_reporte__c , Cliente__c FROM Alerta__c WHERE Cliente__c IN
     (SELECT AccountId FROM Case WHERE Id = :record) AND Fecha_fin_de_reporte__c > :date.today()];
}
}