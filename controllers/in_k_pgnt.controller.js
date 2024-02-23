const models = require('../models');

async function create(req, res) {
    try {

        const {
            nm_dosen,
            mt_kuliah,
            kd_mk,
            no_wa,
            ruangan,
            tgl,
            jam_mulai,
            jam_selesai,
            ket
        } = req.body;

        // parse tgl to type date
        const parsedTgl = new Date(tgl);

        await models.input_KP.create({
            nm_dosen: nm_dosen,
            mt_Kuliah: mt_kuliah,
            kd_mk: kd_mk,
            no_wa: no_wa,
            ruangan: ruangan,
            tgl: parsedTgl,
            jam_mulai: jam_mulai,
            jam_selesai: jam_selesai,
            ket: ket
        });

        return res.status(201).json({
            message: "Created new request reservation kelas pengganti"
          });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
}

async function index(_, res) {
    try {
        const results = await models.input_KP.findAll();

        if (results && results.length > 0) {
            const input_kp = results.map((
                {
                    id,
                    nm_dosen,
                    mt_kuliah,
                    kd_mk,
                    no_wa,
                    ruangan,
                    tgl,
                    jam_mulai,
                    jam_selesai,
                    ket

                }) => ({
                    keterangan: "data input kelas pengganti",
                    data: {
                        id,
                        nm_dosen,
                        mt_kuliah,
                        kd_mk,
                        no_wa,
                        ruangan,
                        tgl,
                        jam_mulai,
                        jam_selesai,
                        ket
                    }
            }));

            res.status(200).json(input_kp);
        } else {
            res.status(200).json({
                message: "No input data kelas pengganti found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve kelas pengganti data. Something went wrong.",
        });
    }
}


async function update(req, res) {
    try {
      const id = req.params.id;
      const {
        nm_dosen,
        mt_kuliah,
        kd_mk,
        no_wa,
        ruangan,
        tgl,
        jam_mulai,
        jam_selesai,
        ket
      } = req.body;

      // parse tgl to type date
      const parsedTgl = new Date(tgl);

      const [updatedRowsCount] = await models.input_KP.update(
        {
            nm_dosen,
            mt_kuliah,
            kd_mk,
            no_wa,
            ruangan,
            tgl,
            jam_mulai,
            jam_selesai,
            ket
        },
        { where: { id: id } }
      );

      if (updatedRowsCount > 0) {
        res.status(200).json({
          message: "input kelas pengganti updated successfully",
        });
      } else {
        res.status(404).json({
          message: "kelas pengganti data not found",
        });
      }
    } catch (error) {
        console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

async function destroy(req, res) {
    try {
        const id = req.params.id;

        const deletedRowsCount = await models.input_KP.destroy({
            where: { id: id }
        });

        if (deletedRowsCount > 0) {
            res.status(200).json({
                message: "kelas pengganti data deleted successfully",
            });
        } else {
            res.status(404).json({
                message: "kelas pengganti data not found",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

async function show_by_id(req, res) {
    try {
        const id = req.params.id;

        const result = await models.input_KP.findByPk(id);

        if (result) {
            const {
                nm_dosen,
                mt_kuliah,
                kd_mk,
                no_wa,
                ruangan,
                tgl,
                jam_mulai,
                jam_selesai,
                ket
            } = result;
            res.status(200).json({
                id,
                nm_dosen,
                mt_kuliah,
                kd_mk,
                no_wa,
                ruangan,
                tgl,
                jam_mulai,
                jam_selesai,
                ket
            });
        } else {
            res.status(404).json({
                message: "data kelas pengganti not found",
            });
        }
    } catch (error) {
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