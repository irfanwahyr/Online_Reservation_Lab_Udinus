const models = require('../models');

async function show_by_id(req, res) {
    try {
        const id = req.params.id;

        const result = await models.Pesan.findByPk(id);

        if (result) {
            const { status } = result;
            res.status(200).json({
                status
            });
        } else {
            res.status(404).json({
                message: "pesan not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "something Error",
        });
    }
}

module.exports = {
    show_by_id
  };