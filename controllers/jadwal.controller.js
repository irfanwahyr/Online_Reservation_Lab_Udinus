const models = require('../models');
const jadwal = require('../models/jadwal');

async function create(req, res) {
    try {
        const { kelompok, mata_kuliah, jam_mulai, jam_selesai, id_pesan } = req.body;

        // Data input valid, continue with the create operation
        await models.Jadwal.create({
            kelompok: kelompok,
            mata_kuliah: mata_kuliah,
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

async function update(req, res) {
    try {
        const id = req.params.id;
        const { kelompok, mata_kuliah, jam_mulai, jam_selesai, id_hari, id_pesan } = req.body;

        const [updatedRowsCount] = await models.Jadwal.update(
            { kelompok, mata_kuliah, jam_mulai, jam_selesai, id_hari, id_pesan },
            { where: { id: id } }
        );

        if (updatedRowsCount > 0) {
            res.status(200).json({
                message: "jadwal updated successfully",
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "jadwal not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
        });
    }
}

async function update_telah_pinjam(req, res) {
    try {
        const id = req.params.id;
        const { kelompok, mata_kuliah, id_pesan  } = req.body;

        const [updatedRowsCount] = await models.Jadwal.update(
            { kelompok, mata_kuliah, id_pesan },
            { where: { id: id } }
        );

        if (updatedRowsCount > 0) {
            res.status(200).json({
                message: "jadwal updated successfully",
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "jadwal not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
        });
    }
}

async function reset_jadwal(req, res) {
    try {
        const id = req.params.id;
        const { kelompok, mata_kuliah, id_pesan } = req.body;

        const [updatedRowsCount] = await models.Jadwal.update(
            { kelompok, mata_kuliah, id_pesan },
            { where: { id: id } }
        );

        if (updatedRowsCount > 0) {
            res.status(200).json({
                message: "jadwal updated successfully",
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "jadwal not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
        });
    }
}

async function konfirmasi_admin(req, res) {
    try {
        const id = req.params.id;
        const { id_pesan } = req.body;

        const [updatedRowsCount] = await models.Jadwal.update(
            { id_pesan },
            { where: { id: id } }
        );

        if (updatedRowsCount > 0) {
            res.status(200).json({
                message: "jadwal updated successfully",
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "jadwal not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
        });
    }
}

function getLabRange(lab) {
    let labStartRange, labEndRange;

    switch (lab) {
        case 'A':
            labStartRange = 1;
            labEndRange = 90;
            break;
        case 'B':
            labStartRange = 91;
            labEndRange = 180;
            break;
        case 'C':
            labStartRange = 181;
            labEndRange = 270;
            break;
        case 'D':
            labStartRange = 271;
            labEndRange = 360;
            break;
        case 'E':
            labStartRange = 361;
            labEndRange = 450;
            break;
        case 'G':
            labStartRange = 451;
            labEndRange = 540;
            break;
        case 'H':
            labStartRange = 541;
            labEndRange = 630;
            break;
        case 'I':
            labStartRange = 631;
            labEndRange = 720;
            break;
        case 'J':
            labStartRange = 721;
            labEndRange = 810;
            break;
        case 'K':
            labStartRange = 811;
            labEndRange = 900;
            break;
        case 'L':
            labStartRange = 901;
            labEndRange = 990;
            break;
        case 'M':
            labStartRange = 991;
            labEndRange = 1080;
            break;
        case 'N':
            labStartRange = 1081;
            labEndRange = 1170;
            break;
        default:
            throw new Error("Invalid lab parameter");
    }

    return { labStartRange, labEndRange };
}

async function show_by_lab_hari(req, res) {
    try {
        const lab = req.params.lab;
        const id_hari = req.params.hari;
        const itemsPerPage = 90;
        let labRanges;

        try {
            labRanges = getLabRange(lab);
        } catch (error) {
            return res.status(400).json({
                message: error.message,
            });
        }

        const results = await models.Jadwal.findAll({
            where: {
                id: {
                    [
                        models.Sequelize.Op.between
                    ]: [
                        labRanges.labStartRange,
                        labRanges.labEndRange
                    ],
                },
                id_hari: id_hari
            },
            limit: itemsPerPage,
            offset: 0,
        });

        console.log(labRanges.labEndRange);

        if (results && results.length > 0) {
            const jadwal = results.map(({ id, kelompok, mata_kuliah, jam_mulai, jam_selesai, id_hari, id_pesan }) => ({
                id,
                kelompok,
                mata_kuliah,
                jam_mulai,
                jam_selesai,
                id_hari,
                id_pesan,
            }));

            res.status(200).json(jadwal);
        } else {
            res.status(200).json({
                message: "No jadwal found",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "jadwal Error",
        });
    }
}


module.exports = {
    create,
    update,
    show_by_lab_hari,
    update_telah_pinjam,
    reset_jadwal,
    konfirmasi_admin
  };