const models = require('../models');

async function create(req, res) {
    try {
        const {
            fakultas,
            penanggung_jawab,
            no_whatsapp,
            nama_acara,
            nama_lab,
            tanggal_mulai,
            tanggal_selesai,
            jam_mulai,
            jam_selesai,
            keterangan,
            id_user,
        } = req.body;

        const proposal_acara = req.files.proposal_acara[0].filename;
        const surat_peminjaman = req.files.surat_peminjaman[0].filename;

        if(req.files){
            await models.Data_Acara_Kampus.create({
                fakultas: fakultas,
                penanggung_jawab: penanggung_jawab,
                no_whatsapp: no_whatsapp,
                nama_acara: nama_acara,
                nama_lab: nama_lab,
                tanggal_mulai: tanggal_mulai,
                tanggal_selesai: tanggal_selesai,
                jam_mulai: jam_mulai,
                jam_selesai: jam_selesai,
                keterangan: keterangan,
                id_user: id_user,
                proposal_acara: proposal_acara,
                surat_peminjaman: surat_peminjaman
            });

            return res.status(201).json({
                message: "Created new Data Acara Kampus"
            });
        } else {
            return res.status(400).json({
                message: "Please upload both propoal acara and surat peminjaman files"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
}

async function show_by_id(req, res) {
    try {
        const id_user = req.params.id;

        const result = await models.Data_Acara_Kampus.findAll({
            where: {
                id_user: id_user
            }
        });

        if (result && result.length > 0) {
            const acara_kampus = result.map(({
                id,
                fakultas,
                penanggung_jawab,
                no_whatsapp,
                nama_acara,
                nama_lab,
                tanggal_mulai,
                tanggal_selesai,
                jam_mulai,
                jam_selesai,
                keterangan,
                id_user,
            }) => ({
                id,
                fakultas,
                penanggung_jawab,
                no_whatsapp,
                nama_acara,
                nama_lab,
                tanggal_mulai,
                tanggal_selesai,
                jam_mulai,
                jam_selesai,
                keterangan,
                id_user,
            }));

            res.status(200).json(acara_kampus);
        } else {
            res.status(404).json({
                message: "acara kampus not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

async function index(_, res) {
    try {
        const results = await models.Data_Acara_Kampus.findAll();

        if (results && results.length > 0) {
            const acara_kampus = results.map(({
                id,
                fakultas,
                penanggung_jawab,
                no_whatsapp,
                nama_acara,
                nama_lab,
                tanggal_mulai,
                tanggal_selesai,
                jam_mulai,
                jam_selesai,
                keterangan,
                id_user,
                proposal_acara,
                surat_peminjaman
            }) => ({
                id,
                fakultas,
                penanggung_jawab,
                no_whatsapp,
                nama_acara,
                nama_lab,
                tanggal_mulai,
                tanggal_selesai,
                jam_mulai,
                jam_selesai,
                keterangan,
                id_user,
                proposal_acara,
                surat_peminjaman
            }));

            res.status(200).json(acara_kampus);
        } else {
            res.status(200).json({
                message: "No Data acara kampus found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve acara organisasi data. Something went wrong.",
        });
    }
}

module.exports = {
    create,
    index,
    show_by_id
}