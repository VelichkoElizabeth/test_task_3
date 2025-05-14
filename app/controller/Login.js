Ext.define('MyApp.controller.Login', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    onLoginClick: function() {
        console.log("Попытка входа");
        var form = this.lookupReference('form');
        if (!form) {
            console.error("Форма не найдена!");
            return;
        }
        var values = form.getValues();
        console.log("Введённые данные:", values);

        if (values.username === 'admin' && values.password === 'padmin') {
            console.log("Авторизация успешна");
            this.getView().destroy();
            Ext.create('MyApp.view.main.Main');
        } else {
            console.log("Ошибка авторизации");
            Ext.Msg.alert('Ошибка', 'Неверный логин или пароль');
        }
    }
});