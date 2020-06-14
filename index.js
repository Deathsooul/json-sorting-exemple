const list = [
    {
        name: 'Geladeira Panasonic',
        value: 999.00,
        size: 0.751
    },
    {
        name: 'Iphone 6',
        value: 2911.12,
        size: 0.0000899
    },
    {
        name: 'TV 55',
        value: 4346.99,
        size: 0.400
    },
    {
        name: 'TV 50',
        value: 3999.90,
        size: 0.290
    },
    {
        name: 'TV 42',
        value: 2999.00,
        size: 0.200
    },
    {
        name: 'Notebook Dell',
        value: 2499.90,
        size: 0.0035
    },
    {
        name: 'Ventilador Panasonic',
        value: 199.90,
        size: 0.496
    },
    {
        name: 'Microondas Electrolux',
        value: 308.66,
        size: 0.0424
    },
    {
        name: 'Microondas LG',
        value: 429.90,
        size: 0.0544
    },
    {
        name: 'Microondas Panasonic',
        value: 299.90,
        size: 0.0319
    },
    {
        name: 'Geladeira Brastemp',
        value: 849.00,
        size: 0.635
    },
    {
        name: 'Geladeira Consul',
        value: 1199.89,
        size: 0.870
    },
    {
        name: 'Notebook Lenovo',
        value: 1999.90,
        size: 0.498
    },
    {
        name: 'Notebook Asus',
        value: 3999.00,
        size: 0.527
    },
];

const newList = [];
const maxSize = 3;
let total = 0;

function calculateValue(item) {
    return (item.value / item.size)
};

list.sort((a, b) => calculateValue(a) > calculateValue(b) ? -1 : 1).forEach(item => {
    let tmpTotalSize = total + item.size;
    if (tmpTotalSize >= maxSize) return;
    total = tmpTotalSize;
    newList.push(item);
});

console.log(newList)
console.log(total)