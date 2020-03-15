const axios = require('axios');

module.exports = {
    index: async (req, res) => {
        const params = req.body;
        const input = {
            idh: 0.87,
            m2r: 10000,
            pg: params.Perfil,
            caixas: 300,
            cdd: 1
        };
        const result = await axios.post(
            'https://us-south.functions.cloud.ibm.com/api/v1/web/danitrod%40ibm.com_dev/brasa-hacks/productRecommendation.json',
            input
        );
        return res.json(result.data);
    }
};
