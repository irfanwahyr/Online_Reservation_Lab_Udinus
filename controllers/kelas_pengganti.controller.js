const models = require('../models');

async function create(req, res) {
    try {
        const {
            nama_dosen,
            mata_kuliah,
            kelompok,
            no_whatsapp,
            nama_lab,
            tanggal_mulai,
            jam_mulai,
            jam_selesai,
            keterangan,
            id_user,
            id_jadwal,
        } = req.body;

        await models.Data_Kelas_Pengganti.create({
            nama_dosen: nama_dosen,
            mata_kuliah: mata_kuliah,
            kelompok: kelompok,
            no_whatsapp: no_whatsapp,
            nama_lab: nama_lab,
            tanggal_mulai: tanggal_mulai,
            jam_mulai: jam_mulai,
            jam_selesai: jam_selesai,
            keterangan: keterangan,
            id_user: id_user,
            id_jadwal: id_jadwal
        });

        return res.status(201).json({
            message: "Created new Data Kelas Pengganti"
          });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
}

async function index(_, res) {
    try {
        const results = await models.Data_Kelas_Pengganti.findAll();

        if (results && results.length > 0) {
            const kelas_pengganti = results.map(({ id, nama_dosen, mata_kuliah, kelompok, no_whatsapp, nama_lab, tanggal_mulai, jam_mulai, jam_selesai, keterangan, id_jadwal, id_user }) => ({
                id,
                nama_dosen,
                mata_kuliah,
                kelompok,
                no_whatsapp,
                nama_lab,
                tanggal_mulai,
                jam_mulai,
                jam_selesai,
                keterangan,
                id_jadwal,
                id_user
            }));

            res.status(200).json(kelas_pengganti);
        } else {
            res.status(200).json({
                message: "No Data Kelas Pengganti found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve Kelas Pengganti data. Something went wrong.",
        });
    }
}

async function show_by_id(req, res) {
    try {
        const id_user = req.params.id;

        const result = await models.Data_Kelas_Pengganti.findAll({
            where: {
                id_user: id_user
            }
        });

        if (result && result.length > 0) {
            const hasil = result.map(({ id, nama_dosen, mata_kuliah, kelompok, no_whatsapp, nama_lab, tanggal_mulai, jam_mulai, jam_selesai, keterangan, id_matakuliah, id_jadwal }) => ({
                id,
                nama_dosen,
                mata_kuliah,
                kelompok,
                no_whatsapp,
                nama_lab,
                tanggal_mulai,
                jam_mulai,
                jam_selesai,
                keterangan,
                id_matakuliah,
                id_jadwal
            }));
            res.status(200).json(hasil);
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

async function update(req, res) {
    try {
      const id = req.params.id;
      const {
        nama_dosen,
        mata_kuliah,
        kelompok,
        no_whatsapp,
        nama_lab,
        tanggal_mulai,
        jam_mulai,
        jam_selesai,
        keterangan,
        id_jadwal
    } = req.body;

      const [updatedRowsCount] = await models.Data_Kelas_Pengganti.update(
        {
            nama_dosen,
            mata_kuliah,
            kelompok,
            no_whatsapp,
            nama_lab,
            tanggal_mulai,
            jam_mulai,
            jam_selesai,
            keterangan,
            id_jadwal
        },
        { where: { id: id } }
      );

      if (updatedRowsCount > 0) {
        res.status(200).json({
          message: "Data Kelas Pengganti updated successfully",
        });
      } else {
        res.status(404).json({
          status: res.status,
          message: "Data Kelas Pengganti not found",
        });
      }
    } catch (error) {
    //   console.error(error);
      res.status(500).json({
        status: res.status,
        message: "Internal Server Error",
      });
    }
  }

async function destroy(req, res) {
    try {
        const id = req.params.id;

        const deletedRowsCount = await models.Data_Kelas_Pengganti.destroy({
            where: { id: id }
        });

        if (deletedRowsCount > 0) {
            res.status(200).json({
                status: res.status,
                message: "Data Kelas Pengganti deleted successfully",
            });
        } else {
            res.status(404).json({
                status: res.status,
                message: "Data Kelas Pengganti not found",
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
    show_by_id
}