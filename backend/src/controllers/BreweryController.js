const Brewery = require('../models/Brewery');

module.exports = {
    find: async (req, res) => {
        const { cddName } = req.body;
        const breweries = await Brewery.find({
            deliveries: { $elemMatch: { to: cddName } }
        });
        let response;
        if (breweries.length > 0) {
            // Filter only delieveries to CDD name
            const [filteredDeliveries] = breweries.map(brewery => {
                const filtered = brewery.deliveries.filter(
                    delivery => delivery.to === cddName
                );
                const deliveries = filtered.map(delivery => {
                    return {
                        from: brewery.name,
                        dueDate: delivery.dueDate,
                        product: delivery.brew
                    };
                });
                return deliveries;
            });
            response = {
                err: false,
                deliveries: filteredDeliveries
            };
        } else {
            response = {
                err: true,
                msg: 'Brewery that delivers to ' + cddName + ' does not exist.'
            };
        }
        return res.json(response);
    }
};
