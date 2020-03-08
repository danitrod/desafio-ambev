const brews = [
    {
        dueDate: Date('2020-04-02'),
        type: 'Blue Moon',
        brew: { name: 'Blue Moon', quantity: 600, imageURL: '' },
        distance: 54
    },
    {
        dueDate: Date('2020-04-03'),
        type: 'Cacildis',
        brew: { name: 'Cacildis', quantity: 700, imageURL: '' },
        distance: 54
    },
    {
        dueDate: Date('2020-04-04'),
        type: 'Ditriguis',
        brew: { name: 'Ditriguis', quantity: 700, imageURL: '' },
        distance: 54
    }
];

const name = 'Ditriguis';

console.log(name in brews.map(brew => brew.type));