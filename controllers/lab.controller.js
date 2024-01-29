const models = require('../models');

async function create(req, res) {
    try {
        const { id_software ,nama, jml_PC, jenis_lab } = req.body;

        // Data input valid, continue with the create operation
        await models.Laboratorium.create({
            id_software: id_software,
            nama: nama,
            jml_PC: jml_PC,
            jenis_lab: jenis_lab,
        });

        return res.status(201).json({
            message: "Created new Laboratorium"
          });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
}

async function index(_, res) {
    try {
        const results = await models.Laboratorium.findAll();

        if (results && results.length > 0) {
            const labsData = results.map(({ id_software, nama, jml_PC, jenis_lab }) => ({
                id_software,
                nama,
                jml_PC,
                jenis_lab
            }));

            res.status(200).json(labsData);
        } else {
            res.status(200).json({
                message: "No Labs found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve labs data. Something went wrong.",
        });
    }
}

async function update(req, res) {
    try {
      const id = req.params.id;
      const { id_software, nama, jml_PC, jenis_lab } = req.body;

      const [updatedRowsCount] = await models.Laboratorium.update(
        { id_software ,nama, jml_PC, jenis_lab },
        { where: { id: id } }
      );

      if (updatedRowsCount > 0) {
        res.status(200).json({
          status: res.status,
          message: "Labs updated successfully",
        });
      } else {
        res.status(404).json({
          status: res.status,
          message: "Labs not found",
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

        const deletedRowsCount = await models.Laboratorium.destroy({
            where: { id: id }
        });

        if (deletedRowsCount > 0) {
            res.status(200).json({
                status: res.status,
                message: "User deleted successfully",
            });
        } else {
            res.status(404).json({
                status: res.status,
                message: "User not found",
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

module.exports = {
    create,
    index,
    update,
    destroy,
  };