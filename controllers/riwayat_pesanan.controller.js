const models = require('../models');

async function create(req, res) {
    try {
        const {
            nama_acara,
            nama_lab,
            tanggal_mulai,
            tanggal_selesai,
            jam_mulai,
            jam_selesai,
            status,
            alasan,
            id_user,
            id_jadwal,
            flag
        } = req.body;

        await models.Data_Riwayat_User.create({
            nama_lab: nama_lab,
            nama_acara: nama_acara,
            tanggal_mulai: tanggal_mulai,
            tanggal_selesai: tanggal_selesai,
            jam_mulai: jam_mulai,
            jam_selesai: jam_selesai,
            status: status,
            alasan: alasan,
            id_user: id_user,
            id_jadwal: id_jadwal,
            flag: flag
        });

        return res.status(201).json({
            message: "Created new Data Riwayat User"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong Riwayat User",
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

async function update(req, res){
    try {
        const id = req.params.id;
        const [updatedRowsCount] = await models.Data_Riwayat_User.update(
        { flag: true },
        { where: { id: id } }
        );
    
        if (updatedRowsCount > 0) {
        res.status(200).json({
            status: res.status,
            message: "Flag updated successfully",
        });
        } else {
        res.status(404).json({
            status: res.status,
            message: "Riwayat User not found",
        });
        }
    } catch (error) {
        res.status(500).json({
        status: res.status,
        message: "Internal Server Error",
        });
    }
}

async function index(_, res) {
    try {
        const results = await models.Data_Riwayat_User.findAll();
        if (results && results.length > 0) {
            const riwayat_pesanan = results.map(({ id, nama_acara, nama_lab, tanggal_mulai, tanggal_selesai, jam_mulai, jam_selesai, status, alasan, id_user, id_jadwal, flag }) => ({
                id,
                nama_acara,
                nama_lab,
                tanggal_mulai,
                tanggal_selesai,
                jam_mulai,
                jam_selesai,
                status,
                alasan,
                id_user,
                id_jadwal,
                flag
            }));

            res.status(200).json(riwayat_pesanan);
        } else {
            res.status(200).json({
                message: "No Data Riwayat found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve Data Riwayat User. Something went wrong.",
        });
    }
}

module.exports = {
    index,
    create,
    show_by_id,
    update
}