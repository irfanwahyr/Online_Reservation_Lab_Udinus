const models = require('../models');

async function show_by_id(req, res) {
    try {
        const id = req.params.id;

        const result = await models.Hari.findByPk(id);

        if (result) {
            const { nama_hari, id_jadwal } = result;
            res.status(200).json({
                nama_hari,
                id_jadwal
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
    show_by_id
}