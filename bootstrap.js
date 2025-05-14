console.log("4. Bootstrap запущен");
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'MyApp': 'app'
    }
});
Ext.require([
    'MyApp.app',
    'MyApp.view.login.Login'
], function() {
    console.log("5. Все зависимости загружены");
    Ext.onReady(function() {
        console.log("6. ExtJS готов к работе");
        Ext.create('MyApp.app');
    });
});