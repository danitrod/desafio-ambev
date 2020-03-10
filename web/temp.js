const temp = [
    {
        name: 'Test1',
        price: 1
    },
    {
        name: 'Test2',
        price: 2
    },
    {
        name: 'Test3',
        price: 3
    },
    {
        name: 'Test4',
        price: 4
    }
];

const t2 = {
    name: 'Test3'
};

const [obj] = temp.filter(t => t.name === t2.name);

console.log(obj.price);
