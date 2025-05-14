Ext.define('MyApp.store.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.products',
    fields: ['id', 'name', 'description', 'price', 'quantity'],
    data: [
        { id: 1, name: 'Notebook Lenovo', description: 'Ноутбук ThinkPad T460', price: 1000, quantity: 5 },
        { id: 2, name: 'Keyboard OKLICK', description: 'Клавиатура OKLICK 140M', price: 50, quantity: 0 },
        { id: 3, name: 'Mouse Logitech', description: 'Мышь Logitech M185', price: 25, quantity: 10 }
    ]
});