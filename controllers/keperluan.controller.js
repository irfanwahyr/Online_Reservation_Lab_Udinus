const models = require('../models');

async function index(_, res) {
    try {
        const results = await models.Keperluan.findAll({
            include: [
                {
                    model: models.Kelas_Pengganti,
                    as: 'kelas_pengganti',
                    attributes: [ 'id', 'id_keperluan', 'id_jadwal'],
                    include: [
                        {
                            model: models.Jadwal,
                            as: 'jadwal',
                            attributes: [ 'id', 'mata_kuliah', 'jam_mulai', 'jam_selesai'],
                            include: [
                                {
                                    model: models.Hari,
                                    as: 'hari',
                                    attributes: ['id', 'nama_hari']
                                },
                            ],
                        },
                    ],
                },
            ],
        });

        if (results && results.length > 0) {
            const keperluan = results.map(({ id, nama_keperluan, kelas_pengganti }) => ({
                keterangan: "informasi keperluan",
                data: {
                    id,
                    nama_keperluan,
                    kelas_pengganti: {
                        jadwal: kelas_pengganti.jadwal
                    },
                }
            }));

            res.status(200).json(keperluan);
        } else {
            res.status(200).json({
                message: "No keperluan found",
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Unable to retrieve keperluan data. Something went wrong.",
        });
    }
}

async function show_by_id(req, res) {
    try {
        const id = req.params.id;

        const result = await models.Keperluan.findByPk(id, {
            include: [
                {
                    model: models.Kelas_Pengganti,
                    as: 'kelas_pengganti',
                    attributes: ['id_keperluan', 'id_jadwal']
                },
            ]
        });

        if (result) {
            const { id, kelas_pengganti } = result;
            res.status(200).json({
                id,
                kelas_pengganti
            });
        } else {
            res.status(404).json({
                message: "keperluan not found",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

module.exports = {
    index,
    show_by_id
}