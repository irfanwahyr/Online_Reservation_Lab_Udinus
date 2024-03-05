const models = require('../models');

async function create(req, res) {
    try {
        const { kelompok, mata_kuliah, jam_mulai, jam_selesai } = req.body;

        // Data input valid, continue with the create operation
        await models.Jadwal.create({
            kelompok: kelompok,
            mata_kuliah: mata_kuliah,
            jam_mulai: jam_mulai,
            jam_selesai: jam_selesai,
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
      const { kelompok, mata_kuliah, jam_mulai, jam_selesai } = req.body;

      const [updatedRowsCount] = await models.Jadwal.update(
        { kelompok, mata_kuliah, jam_mulai, jam_selesai },
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

function getLabRange(lab) {
    let labStartRange, labEndRange;

    switch (lab) {
        case '1':
            labStartRange = 1;
            labEndRange = 90;
            break;
        case '2':
            labStartRange = 91;
            labEndRange = 180;
            break;
        case '3':
            labStartRange = 181;
            labEndRange = 270;
            break;
        case '4':
            labStartRange = 271;
            labEndRange = 360;
            break;
        case '5':
            labStartRange = 361;
            labEndRange = 450;
            break;
        case '7':
            labStartRange = 451;
            labEndRange = 540;
            break;
        case '8':
            labStartRange = 541;
            labEndRange = 630;
            break;
        case '9':
            labStartRange = 631;
            labEndRange = 720;
            break;
        case '10':
            labStartRange = 721;
            labEndRange = 810;
            break;
        case '11':
            labStartRange = 811;
            labEndRange = 900;
            break;
        case '12':
            labStartRange = 901;
            labEndRange = 990;
            break;
        case '13':
            labStartRange = 991;
            labEndRange = 1080;
            break;
        case '14':
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
                id_hari: id_hari,
            },
            limit: itemsPerPage,
            offset: 0,
        });

        if (results && results.length > 0) {
            const jadwal = results.map(({ id, id_hari, kelompok, mata_kuliah, jam_mulai, jam_selesai }) => ({
                id,
                id_hari,
                kelompok,
                mata_kuliah,
                jam_mulai,
                jam_selesai,
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
    show_by_lab_hari
  };