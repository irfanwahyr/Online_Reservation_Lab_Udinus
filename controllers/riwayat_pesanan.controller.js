const models = require('../models');

async function create(req, res) {
    try {
        const {
            nama_keperluan,
            nama_lab,
            nama_acara,
            tanggal_mulai,
            tanggal_selesai,
            jam_mulai,
            jam_selesai,
            status,
            id_user
        } = req.body;

        await models.Data_Riwayat_User.create({
            nama_keperluan: nama_keperluan,
            nama_lab: nama_lab,
            nama_acara: nama_acara,
            tanggal_mulai: tanggal_mulai,
            tanggal_selesai: tanggal_selesai,
            jam_mulai: jam_mulai,
            jam_selesai: jam_selesai,
            status: status,
            id_user: id_user,
        });

        return res.status(201).json({
            message: "Created new Data Riwayat User"
          });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
}

// create function show_by_id_user

async function show_by_id(req, res) {
    try {
        const id_user = req.params.id;

        const result = await models.Data_Riwayat_User.findAll({
            where: {
                id_user: id_user
            }
        });

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(200).json({
                message: "No Data Riwayat User found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve Data Riwayat User. Something went wrong.",
        });
    }
}

module.exports = {
    create,
    show_by_id
}