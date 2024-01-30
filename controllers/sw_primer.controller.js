const models = require('../models');

async function create(req, res) {
    try {
        const { nama, versi, lab_pakai } = req.body;

        // Data input valid, continue with the create operation
        await models.Software_Primer.create({
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
        const results = await models.Software_Primer.findAll();

        if (results && results.length > 0) {
            const sw_primer = results.map(({ nama, versi, lab_pakai }) => ({
                nama,
                versi,
                lab_pakai
            }));

            res.status(200).json(sw_primer);
        } else {
            res.status(200).json({
                message: "No Software_primer found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve software_primer data. Something went wrong.",
        });
    }
}

async function update(req, res) {
    try {
      const id = req.params.id;
      const { nama, versi, lab_pakai } = req.body;

      const [updatedRowsCount] = await models.Software_Primer.update(
        { nama, versi, lab_pakai },
        { where: { id: id } }
      );

      if (updatedRowsCount > 0) {
        res.status(200).json({
          message: "Software_primer updated successfully",
        });
      } else {
        res.status(404).json({
          status: res.status,
          message: "Software_primer not found",
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

        const deletedRowsCount = await models.Software_Primer.destroy({
            where: { id: id }
        });

        if (deletedRowsCount > 0) {
            res.status(200).json({
                status: res.status,
                message: "Software_primer deleted successfully",
            });
        } else {
            res.status(404).json({
                status: res.status,
                message: "Software_primer not found",
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

        const result = await models.Software_Primer.findByPk(id);

        if (result) {
            const { nama, versi, lab_pakai } = result;
            res.status(200).json({
                nama,
                versi,
                lab_pakai
            });
        } else {
            res.status(404).json({
                message: "software_primer not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "software_primer Error",
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