const axios = require('axios');

module.exports = {
    index: async (req, res) => {
        const params = req.body;
        const result = await axios.post(
            'https://us-south.functions.cloud.ibm.com/api/v1/web/danitrod%40ibm.com_dev/brasa-hacks/productRecommendation',
            params
        );
        console.log(result.data);
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
