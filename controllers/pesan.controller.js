const models = require('../models');

async function create(req, res) {
    try {
        const { status } = req.body;

        await models.Pesan.create({
            status: status,
        });

        return res.status(201).json({
            message: "Created new Data pesan"
          });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
}

async function index(_, res) {
    try {
        const results = await models.Pesan.findAll();

        if (results && results.length > 0) {
            const pesans = results.map(({ status }) => ({
                status
            }));

            res.status(200).json(pesans);
        } else {
            res.status(200).json({
                message: "No pesan found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve pesan data. Something went wrong.",
        });
    }
}

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
    create,
    index,
    show_by_id
  };