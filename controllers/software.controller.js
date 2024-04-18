const models = require('../models');

async function create(req, res) {
    try {
        const { software_1, software_2, software_3, software_4, software_5, id_lab } = req.body;

        await models.Software.create({
            software_1: software_1,
            software_2: software_2,
            software_3: software_3,
            software_4: software_4,
            software_5: software_5,
            id_lab: id_lab,
        });

        return res.status(201).json({
            message: "Created new Data Software"
          });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
}

async function index(_, res) {
    try {
        const results = await models.Software.findAll();

        if (results && results.length > 0) {
            const software = results.map(({ software_1, software_2, software_3, software_4, software_5, id_lab }) => ({
                software_1,
                software_2,
                software_3,
                software_4,
                software_5,
                id_lab
            }));

            res.status(200).json(software);
        } else {
            res.status(200).json({
                message: "No Software found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve software data. Something went wrong.",
        });
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const { software_1, software_2, software_3, software_4, software_5, id_lab } = req.body;

        const [updatedRowsCount] = await models.Software.update(
        { software_1, software_2, software_3, software_4, software_5, id_lab },
        { where: { id: id }}
        );

        if (updatedRowsCount > 0) {
        res.status(200).json({
            message: "Software updated successfully",
        });
        } else {
        res.status(404).json({
            status: res.status,
            message: "Software not found",
        });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
        status: res.status,
        message: "Internal Server Error",
        });
    }
}

async function show_by_id(req, res) {
    try {
        const id = req.params.id;

        const result = await models.Software.findByPk(id);

        if (result) {
            const { software_1, software_2, software_3, software_4, software_5, id_lab } = result;
            res.status(200).json({
                software_1, 
                software_2, 
                software_3, 
                software_4, 
                software_5,
                id_lab
            });
        } else {
            res.status(404).json({
                message: "software not found",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "software Error",
        });
    }
}

module.exports = {
    create,
    index,
    update,
    show_by_id
  };