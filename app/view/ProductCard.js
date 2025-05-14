Ext.define('MyApp.view.ProductCard', {
    extend: 'Ext.window.Window',
    xtype: 'productcard',
    width: 400,
    modal: true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        bodyPadding: 10,
        defaults: {
            anchor: '100%'
        },
        items: [{
            xtype: 'displayfield',
            fieldLabel: 'ID',
            name: 'id'
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Наименование',
            name: 'name'
        }, {
            xtype: 'textareafield',
            fieldLabel: 'Описание',
            name: 'description',
            height: 100
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Цена',
            name: 'price',
            minValue: 0,
            decimalPrecision: 2
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Кол-во',
            name: 'quantity',
            minValue: 0,
            allowDecimals: false
        }],
        buttons: [{
            text: 'Отмена',
            handler: function() {
                this.up('window').close();
            }
        }, {
            text: 'Сохранить',
            handler: function() {
                var win = this.up('window');
                var form = win.down('form');
                var record = win.record;

                record.set(form.getValues());
                win.close();
            }
        }]
    }],
    initComponent: function() {
        this.callParent();
        if (this.record) {
            this.down('form').loadRecord(this.record);
        }
    }
});