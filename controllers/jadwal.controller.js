const models = require('../models');

async function create(req, res) {
    try {
        const { nama_jadwal, jam_mulai, jam_selesai, id_pesan } = req.body;

        // Data input valid, continue with the create operation
        await models.Jadwal.create({
            nama_jadwal: nama_jadwal,
            jam_mulai: jam_mulai,
            jam_selesai: jam_selesai,
            id_pesan: id_pesan
        });

        return res.status(201).json({
            message: "Created new Data jadwal"
          });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
}

async function index(_, res) {
    try {
        const results = await models.Jadwal.findAll();

        if (results && results.length > 0) {
            const jadwals = results.map(({ nama_jadwal, jam_mulai, jam_selesai, id_pesan }) => ({
                nama_jadwal,
                jam_mulai,
                jam_selesai,
                id_pesan
            }));

            res.status(200).json(jadwals);
        } else {
            res.status(200).json({
                message: "No jadwal found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve jadwal data. Something went wrong.",
        });
    }
}

async function update(req, res) {
    try {
      const id = req.params.id;
      const { nama_jadwal, jam_mulai, jam_selesai, id_pesan } = req.body;

      const [updatedRowsCount] = await models.Jadwal.update(
        { nama_jadwal, jam_mulai, jam_selesai, id_pesan },
        { where: { id: id } }
      );

      if (updatedRowsCount > 0) {
        res.status(200).json({
          message: "jadwal updated successfully",
        });
      } else {
        res.status(404).json({
          status: res.status,
          message: "jadwal not found",
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

        const deletedRowsCount = await models.Jadwal.destroy({
            where: { id: id }
        });

        if (deletedRowsCount > 0) {
            res.status(200).json({
                status: res.status,
                message: "jadwal deleted successfully",
            });
        } else {
            res.status(404).json({
                status: res.status,
                message: "jadwal not found",
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

        const result = await models.Jadwal.findByPk(id);

        if (result) {
            const { nama_jadwal, jam_mulai, jam_selesai, id_pesan } = result;
            res.status(200).json({
                nama_jadwal,
                jam_mulai,
                jam_selesai,
                id_pesan
            });
        } else {
            res.status(404).json({
                message: "jadwal not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "jadwal Error",
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