const models = require('../models');

async function index(_, res) {
    try {
        const results = await models.Hari.findAll();

        if (results && results.length > 0) {
            const haris = results.map(({ nama_hari }) => ({
                nama_hari,
            }));

            res.status(200).json(haris);
        } else {
            res.status(200).json({
                message: "No hari found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve hari data. Something went wrong.",
        });
    }
}

async function show_by_id(req, res) {
    try {
        const id = req.params.id;

        const result = await models.Hari.findByPk(id);

        if (result) {
            const { nama_hari } = result;
            res.status(200).json({
                nama_hari,
            });
        } else {
            res.status(404).json({
                message: "hari not found",
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