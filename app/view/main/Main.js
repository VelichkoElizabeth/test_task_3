Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    requires: [
        'MyApp.view.ProductGrid'
    ],
    layout: 'border',
    items: [{
        region: 'north',
        xtype: 'toolbar',
        items: [{
            text: 'Товары',
            handler: function() {
                this.up('app-main').add({
                    xtype: 'productgrid',
                    title: 'Товары',
                    closable: true
                });
            }
        }, {
            text: 'Выход',
            handler: function() {
                Ext.Msg.confirm('Выход', 'Вы уверены?', function(choice) {
                    if (choice === 'yes') {
                        window.location.reload();
                    }
                });
            }
        }]
    }, {
        region: 'center',
        xtype: 'tabpanel',
        items: []
    }]
});