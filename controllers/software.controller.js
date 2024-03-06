const models = require('../models');

async function create(req, res) {
    try {
        const { nama_software, versi, id_lab } = req.body;

        await models.Software.create({
            nama_software: nama_software,
            versi: versi,
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
            const software = results.map(({ nama_software, versi, id_lab }) => ({
                nama_software,
                versi,
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
      const { nama_software, versi, id_lab } = req.body;

      const [updatedRowsCount] = await models.Software.update(
        { nama_software, versi, id_lab },
        { where: { id: id } }
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

async function destroy(req, res) {
    try {
        const id = req.params.id;

        const deletedRowsCount = await models.Software.destroy({
            where: { id: id }
        });

        if (deletedRowsCount > 0) {
            res.status(200).json({
                status: res.status,
                message: "Software deleted successfully",
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
            const { nama_software, versi, id_lab } = result;
            res.status(200).json({
                nama_software,
                versi,
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
    destroy,
    show_by_id
  };