const Cdd = require('../models/Cdd');
const calcDistance = require('../util/calcDistance');

module.exports = {
    search: async (req, res) => {
        const { coordinates } = req.body;
        if (!coordinates)
            return res.json({
                err: true,
                msg: 'Coordinates not found.'
            });
        const nearCdds = await Cdd.find({
            location: {
                $near: {
                    $geometry: { type: 'Point', coordinates }
                }
            }
        }).limit(5);

        let response;
        if (nearCdds.length > 0) {
            const cdds = nearCdds.map(cdd => {
                const dist = calcDistance(
                    coordinates[1],
                    coordinates[0],
                    cdd.location.coordinates[1],
                    cdd.location.coordinates[0]
                );
                return {
                    distance: dist,
                    cdd
                };
            });
            response = {
                err: false,
                cdds
            };
        } else {
            response = {
                err: true,
                msg:
                    'No CDD 20km near ' +
                    coordinates[1] +
                    ', ' +
                    coordinates[0] +
                    '.'
            };
        }
        return res.json(response);
    }
};
