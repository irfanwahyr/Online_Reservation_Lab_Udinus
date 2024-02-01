const models = require('../models');

async function index(_, res) {
    try {
        const results = await models.Kelas_Pengganti.findAll();

        if (results && results.length > 0) {
            const kp = results.map(({ kode_keperluan, id_jadwal }) => ({
                kode_keperluan,
                id_jadwal
            }));

            res.status(200).json(kp);
        } else {
            res.status(200).json({
                message: "No kelas pengganti found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve kelas pengganti data. Something went wrong.",
        });
    }
}

async function show_by_id(req, res) {
    try {
        const id = req.params.id;

        const result = await models.Kelas_Pengganti.findByPk(id);

        if (result) {
            const { kode_keperluan, id_jadwal } = result;
            res.status(200).json({
                kode_keperluan,
                id_jadwal
            });
        } else {
            res.status(404).json({
                message: "kelas pengganti not found",
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