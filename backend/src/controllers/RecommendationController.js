module.exports = {
    index: async (req, res) => {
        const vars = req.body();
        return res.json(vars);
    }
};
