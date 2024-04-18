const models = require('../models');

async function create(req, res) {
    try {
        const { nama_lab, jumlah_pc, jenis_lab } = req.body;

        await models.Laboratorium.create({
            nama_lab: nama_lab,
            jumlah_pc: jumlah_pc,
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
        const results = await models.Laboratorium.findAll({
            include: [{
                model: models.Software,
                as: 'software',
                attributes: [ 'id', 'software_1', 'software_2', 'software_3', 'software_4', 'software_5', 'id_lab']
            },
            {
                model: models.hardware,
                as: 'hardware',
                attributes: [ 'id', 'processor', 'ram', 'gpu', 'monitor', 'storage', 'id_lab']
            },
        ]
        });

        if (results && results.length > 0) {
            const labsData = results.map(({ id, nama_lab, jumlah_pc, jenis_lab, software , hardware }) => ({
                id,
                nama_lab,
                jumlah_pc,
                jenis_lab,
                software,
                hardware,
            }));

            res.status(200).json(labsData);
        } else {
            res.status(200).json({
                message: "No Labs found",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Unable to retrieve labs data. Something went wrong.",
        });
    }
}


async function update(req, res) {
    try {
      const id = req.params.id;
      const { nama_lab, jumlah_pc, jenis_lab } = req.body;

      const [updatedRowsCount] = await models.Laboratorium.update(
        { nama_lab, jumlah_pc, jenis_lab },
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

        const result = await models.Laboratorium.findByPk(id, {
            include: [
            {
                model: models.Software,
                as: 'software',
                attributes: [ 'id', 'software_1', 'software_2', 'software_3', 'software_4', 'software_5']
            },
            {
                model: models.hardware,
                as: 'hardware',
                attributes: [ 'id', 'processor', 'ram', 'gpu', 'monitor', 'storage']
            },
        ]
        });

        if (result) {
            const {id, nama_lab, jumlah_pc, jenis_lab, software, hardware} = result;
            res.status(200).json({
                id,
                nama_lab,
                jumlah_pc,
                jenis_lab,
                software,
                hardware
            });
        } else {
            res.status(404).json({
                message: "Labs not found",
            });
        }
    } catch (error) {
        console.log(error);
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