Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    onProductsClick: function() {
        var tabPanel = this.lookupReference('mainTabs');
        tabPanel.add({
            xtype: 'productgrid',
            title: 'Товары',
            closable: true
        });
    },
    onLogoutClick: function() {
        Ext.Msg.confirm('Выход', 'Вы уверены?', function(choice) {
            if (choice === 'yes') {
                window.location.reload();
            }
        });
    }
});