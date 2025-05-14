Ext.define('MyApp.view.ProductGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'productgrid',

    store: {
        model: 'MyApp.model.Product',
        data: [
            {id: 1, name: 'Notebook Lenovo', description: 'Ноутбук ThinkPad T460', price: 1000, quantity: 5},
            {id: 2, name: 'Keyboard OKLICK', description: 'Клавиатура OKLICK 140M', price: 50, quantity: 0},
            {id: 3, name: 'Mouse Logitech', description: 'Мышь Logitech M185', price: 25, quantity: 10}
        ]
    },

    columns: [
        {text: 'ID', dataIndex: 'id', width: 50},
        {
            text: 'Имя',
            dataIndex: 'name',
            flex: 1,
            renderer: function(value) {
                return '<span style="color:blue;cursor:pointer;">' + value + '</span>';
            }
        },
        {text: 'Описание', dataIndex: 'description', flex: 2},
        {text: 'Цена', dataIndex: 'price', width: 80},
        {
            text: 'Кол-во',
            dataIndex: 'quantity',
            width: 80,
            renderer: function(value, meta) {
                if (parseInt(value) === 0) {
                    meta.tdCls = 'zero-quantity';
                }
                return value;
            }
        }
    ],

    tbar: [{
        xtype: 'textfield',
        emptyText: 'Фильтр по ID',
        listeners: {
            specialkey: function(field, e) {
                if (e.getKey() === e.ENTER) {
                    var grid = field.up('grid');
                    var value = field.getValue();

                    grid.getStore().clearFilter();
                    if (value) {
                        grid.getStore().filter('id', value);
                    }
                }
            }
        }
    }, {
        xtype: 'textfield',
        emptyText: 'Фильтр по описанию',
        listeners: {
            specialkey: function(field, e) {
                if (e.getKey() === e.ENTER) {
                    var grid = field.up('grid');
                    var value = field.getValue();

                    grid.getStore().clearFilter();
                    if (value) {
                        grid.getStore().filter('description', value);
                    }
                }
            }
        }
    }],

    listeners: {
        cellclick: function(grid, td, cellIndex, record) {
            if (cellIndex === 1) {
                Ext.create('Ext.window.Window', {
                    title: 'Карточка товара: ' + record.get('name'),
                    width: 400,
                    modal: true,
                    layout: 'fit',
                    items: [{
                        xtype: 'form',
                        reference: 'productForm',
                        bodyPadding: 10,
                        items: [{
                            xtype: 'displayfield',
                            name: 'id',
                            fieldLabel: 'ID'
                        }, {
                            xtype: 'displayfield',
                            name: 'name',
                            fieldLabel: 'Наименование'
                        }, {
                            xtype: 'textareafield',
                            name: 'description',
                            fieldLabel: 'Описание',
                            height: 100
                        }, {
                            xtype: 'numberfield',
                            name: 'price',
                            fieldLabel: 'Цена',
                            minValue: 0,
                            decimalPrecision: 2
                        }, {
                            xtype: 'numberfield',
                            name: 'quantity',
                            fieldLabel: 'Кол-во',
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
                                var form = win.down('form').getForm();

                                if (form.isValid()) {
                                    record.set(form.getValues());
                                    record.commit();
                                    win.close();
                                    Ext.toast('Изменения сохранены');
                                }
                            }
                        }]
                    }],
                    listeners: {
                        afterrender: function() {
                            this.down('form').loadRecord(record);
                        }
                    }
                }).show();
            }
        }
    }
});