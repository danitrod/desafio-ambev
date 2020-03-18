const axios = require('axios');

module.exports = {
    index: async (req, res) => {
        const params = req.body;
        let pg;
        switch (params.Perfil) {
            case 'Baixo':
                pg = 1;
                break;
            case 'Médio':
                pg = 2;
                break;
            case 'Alto':
                pg = 3;
                break;
            default:
                pg = 2;
                break;
        }
        let caixas;
        switch (params.Tamanho) {
            case 'Muito pequeno':
                caixas = 100;
                break;
            case 'Pequeno':
                caixas = 250;
                break;

            case 'Médio':
                caixas = 500;
                break;
            case 'Grande':
                caixas = 800;
                break;
            case 'Muito grande':
                caixas = 1050;
                break;
            default:
                caixas = 500;
                break;
        }
        const input = {
            idh: 0.87,
            m2r: 10000,
            pg,
            caixas,
            stock: params.stock
        };
        console.log(input);
        const result = await axios.post(
            'https://us-south.functions.cloud.ibm.com/api/v1/web/danitrod%40ibm.com_dev/brasa-hacks/productRecommendation.json',
            input
        );
        console.log(result.data);
        return res.json(result.data);
    }
};
