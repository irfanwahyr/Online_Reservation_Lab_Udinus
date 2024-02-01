const models = require('../models');

async function index(_, res) {
    try {
        const results = await models.Keperluan.findAll();

        if (results && results.length > 0) {
            const keperluan = results.map(({ kode_keperluan }) => ({
                kode_keperluan,
            }));

            res.status(200).json(keperluan);
        } else {
            res.status(200).json({
                message: "No keperluan found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve keperluan data. Something went wrong.",
        });
    }
}

async function show_by_id(req, res) {
    try {
        const id = req.params.id;

        const result = await models.Keperluan.findByPk(id);

        if (result) {
            const { kode_keperluan } = result;
            res.status(200).json({
                kode_keperluan,
            });
        } else {
            res.status(404).json({
                message: "keperluan not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

module.exports = {
    index,
    show_by_id
}