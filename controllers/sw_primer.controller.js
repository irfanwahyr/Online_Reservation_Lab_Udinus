const models = require('../models');

async function create(req, res) {
    try {
        const { nama, versi, lab_pakai } = req.body;

        // Data input valid, continue with the create operation
        await models.Software.create({
            nama: nama,
            versi: versi,
            lab_pakai: lab_pakai,
        });

        return res.status(201).json({
            message: "Created new Data Software Primer"
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
            const labsData = results.map(({ id_software, nama, jml_PC, jenis_lab, deskripsi }) => ({
                id_software,
                nama,
                jml_PC,
                jenis_lab,
                deskripsi
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
      const { id_software, nama, jml_PC, jenis_lab, deskripsi } = req.body;

      const [updatedRowsCount] = await models.Laboratorium.update(
        { id_software ,nama, jml_PC, jenis_lab, deskripsi },
        { where: { id: id } }
      );

      if (updatedRowsCount > 0) {
        res.status(200).json({
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
                message: "labs deleted successfully",
            });
        } else {
            res.status(404).json({
                status: res.status,
                message: "labs not found",
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

        const result = await models.Laboratorium.findByPk(id);

        if (result) {
            const {id_software, nama, jml_PC, jenis_lab, deskripsi } = result;
            res.status(200).json({
                id_software,
                nama,
                jml_PC,
                jenis_lab,
                deskripsi
            });
        } else {
            res.status(404).json({
                message: "Labs not found",
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
    update,
    destroy,
    show_by_id
  };