const Brewery = require('../models/Brewery');

module.exports = {
    index: async (req, res) => {
        const { breweryName } = req.params;
        const brewery = await Brewery.findOne({ name: breweryName });
        let response;
        if (brewery) {
            response = {
                err: false,
                brewery
            };
        } else {
            response = {
                err: true,
                msg: 'Brewery ' + breweryName + ' does not exist.'
            };
        }
        return res.json(response);
    },
    find: async (req, res) => {
        const { cddName } = req.body;
        const brewery = await Brewery.find({
            brewing: { $elemMatch: { to: cddName } }
        });
        let response;
        // if (brewery) {
        //     response = {
        //         err: false,
        //         brewery
        //     };
        // } else {
        // response = {
        //     err: true,
        //     msg: 'Brewery that delivers to ' + cddName + ' does not exist.'
        // };
        response = {
            err: false,
            brews: [
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
                },
                {
                    dueDate: Date('2020-04-04'),
                    type: 'Bohemia',
                    brew: { name: 'Ditriguis', quantity: 700, imageURL: '' },
                    distance: 54
                }
            ]
        };
        // }
        return res.json(response);
    }
};
