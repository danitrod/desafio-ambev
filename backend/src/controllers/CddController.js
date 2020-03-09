const Cdd = require('../models/Cdd');

module.exports = {
    search: async (req, res) => {
        const { lat, lng } = req.body;
        const nearCdds = await Cdd.find({
            location: {
                $near: { $geometry: { type: 'Point', coordinates: [lng, lat] } }
            }
        });
        let response;
        if (nearCdds) {
            response = {
                err: false,
                nearCdds: [
                    {
                        name: 'Osasco',
                        distance: 5,
                        brews: [
                            { name: 'Skol 1L', quantity: 1320, imageURL: '' }
                        ]
                    },
                    {
                        name: 'Santo Amaro',
                        distance: 13,
                        brews: [
                            {
                                name: 'Bohemia 300ml',
                                quantity: 600,
                                imageURL: ''
                            },
                            {
                                name: 'Budweiser 300ml',
                                quantity: 300,
                                imageURL: ''
                            }
                        ]
                    },
                    {
                        name: 'Parelheiros',
                        distance: 15,
                        brews: [
                            { name: 'Brahma 300ml', quantity: 120, imageURL: '' },
                            { name: 'Skol 1L', quantity: 1320, imageURL: '' }
                        ]
                    },
                    {
                        name: 'Cantinho',
                        distance: 25,
                        brews: [
                            {
                                name: 'Budweiser 300ml',
                                quantity: 300,
                                imageURL: ''
                            },
                            { name: 'Skol 1L', quantity: 1320, imageURL: '' }
                        ]
                    },
                    {
                        name: 'Azerbaijao',
                        distance: 5000,
                        brews: [
                            {
                                name: 'Original 600ml',
                                quantity: 500,
                                imageURL: ''
                            },
                            { name: 'Skol 300ml', quantity: 1320, imageURL: '' }
                        ]
                    }
                ]
            };
            // response = {
            //     err: false,
            //     nearCdds
            // };
        } else {
            response = {
                err: true,
                msg: 'nearCdds ' + nearCdds + ' does not exist.'
            };
        }
        return res.json(response);
    }
};
