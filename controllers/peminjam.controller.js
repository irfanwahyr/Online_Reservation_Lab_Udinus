const models = require('../models');

async function create(req, res) {
    try {
        const { id_user, id_lab, id_keperluan } = req.body;

        await models.Peminjaman.create({
            id_user: id_user,
            id_lab: id_lab,
            id_keperluan: id_keperluan
        });

        return res.status(201).json({
            message: "Created new peminjaman"
          });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
}

async function index(_, res) {
    try {
        const results = await models.Peminjaman.findAll({});

        if (results && results.length > 0) {
            const peminjams = results.map(({ id_user, id_lab, id_keperluan }) => ({
                id_user,
                id_lab,
                id_keperluan
            }));

            res.status(200).json(peminjams);
        } else {
            res.status(200).json({
                message: "No peminjaman found",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Unable to retrieve peminjaman data. Something went wrong.",
        });
    }
}

async function show_by_id(req, res) {
    try {
        const id = req.params.id;
        const id_user = 2;

        const result = await models.Peminjaman.findOne({
            where: {
                id: id,
                id_user: id_user
            }
        });

        if (result) {
            const { id_user, id_lab, id_keperluan } = result;
            res.status(200).json({
                id_user,
                id_lab,
                id_keperluan
            });
        } else {
            res.status(404).json({
                message: "peminjaman not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

module.exports = {
    create,
    index,
    show_by_id
  };