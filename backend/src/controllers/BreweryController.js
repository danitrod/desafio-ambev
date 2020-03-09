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
                    dueDate: new Date('2020-04-02T04:32:00'),
                    brew: { name: 'Skol 1L', quantity: 600, imageURL: '' },
                    distance: 54
                },
                {
                    dueDate: new Date('2020-04-03T08:32:00'),
                    brew: {
                        name: 'Budweiser 300ml',
                        quantity: 700,
                        imageURL: ''
                    },
                    distance: 54
                },
                {
                    dueDate: new Date('2020-04-04T12:32:00'),
                    brew: { name: 'Brahma 300ml', quantity: 700, imageURL: '' },
                    distance: 54
                },
                {
                    dueDate: new Date('2020-04-04T23:32:00'),
                    brew: {
                        name: 'Bohemia 300ml',
                        quantity: 700,
                        imageURL: ''
                    },
                    distance: 54
                }
            ]
        };
        // }
        return res.json(response);
    }
};
