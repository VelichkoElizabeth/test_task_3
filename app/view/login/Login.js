Ext.define('MyApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    title: 'Авторизация',
    width: 400,
    height: 250,
    closable: false,
    modal: true,
    floating: true,
    autoShow: true,
    bodyPadding: 20,
    layout: 'fit',
    items: [{
        xtype: 'form',
        defaults: {
            anchor: '100%',
            allowBlank: false,
            labelWidth: 80
        },
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Логин',
            value: 'admin'
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            value: 'padmin'
        }],
        buttons: [{
            text: 'Войти',
            formBind: true,
            handler: function() {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    if (form.getValues().username === 'admin' &&
                        form.getValues().password === 'padmin') {
                        this.up('window').destroy();
                        Ext.create('Ext.container.Viewport', {
                            layout: 'border',
                            items: [{
                                region: 'north',
                                xtype: 'toolbar',
                                items: [{
                                    text: 'Товары',
                                    handler: function() {
                                        // Добавляем вкладку с товарами
                                        var tabPanel = this.up('viewport').down('tabpanel');
                                        tabPanel.add({
                                            xtype: 'productgrid',
                                            title: 'Товары',
                                            closable: true
                                        });
                                    }
                                }, {
                                    text: 'Выход',
                                    handler: function() {
                                        window.location.reload();
                                    }
                                }]
                            }, {
                                region: 'center',
                                xtype: 'tabpanel',
                                items: []
                            }]
                        });
                    } else {
                        Ext.Msg.alert('Ошибка', 'Неверный логин или пароль');
                    }
                }
            }
        }]
    }]
});