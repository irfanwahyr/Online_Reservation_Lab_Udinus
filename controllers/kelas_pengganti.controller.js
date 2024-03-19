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
            id_user: id_user
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

module.exports = {
    create
}