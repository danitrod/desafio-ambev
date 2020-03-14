const axios = require('axios');

module.exports = {
    index: async (req, res) => {
        const params = req.body;
        const result = await axios.post(
            'https://us-south.functions.cloud.ibm.com/api/v1/web/danitrod%40ibm.com_dev/brasa-hacks/productRecommendation.json',
            params
        );
        return res.json(result.data);
    }
};
