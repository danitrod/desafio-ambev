module.exports = {
    index: async (req, res) => {
        // const vars = req.body();
        // return res.json(vars);
        return res.json({
            err: false,
            mixes: [
                {
                    cdd: 'Osasco',
                    products: [
                        {
                            name: 'Skol 1L',
                            quantity: 6000
                        },
                        {
                            name: 'Skol 300ml',
                            quantity: 300
                        },
                        {
                            name: 'Original 600ml',
                            quantity: 250
                        }
                    ]
                },
                {
                    cdd: 'Santo Amaro',
                    products: [
                        {
                            name: 'Brahma 1L',
                            quantity: 5000
                        },
                        {
                            name: 'Bohemia 300ml',
                            quantity: 300
                        },
                        {
                            name: 'Budweiser 300ml',
                            quantity: 250
                        }
                    ]
                }
            ]
        });
    }
};
