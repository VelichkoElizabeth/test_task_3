Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',
    name: 'MyApp',
    requires: [
        'MyApp.view.login.Login'
    ],
    controllers: [
        'Login'
    ],
    launch: function() {
        console.log("Приложение запущено");
        if (!Ext.get('theme-stylesheet')) {
            console.error("Тема не загрузилась!");
            Ext.Msg.alert('Ошибка', 'Не удалось загрузить стили темы');
            return;
        }
        var loginWindow = Ext.create('MyApp.view.login.Login', {
            renderTo: Ext.getBody()
        });
        loginWindow.on('afterrender', function() {
            console.log("Окно входа отрисовано");
        });
    }
});

Ext.application('MyApp.Application');