const models = require('../models');

async function create(req, res) {
    try {
        const {
            nama_organisasi,
            penanggung_jawab,
            no_whatsapp,
            nama_acara,
            nama_lab,
            tanggal_mulai,
            jam_mulai,
            jam_selesai,
            keterangan,
            id_user,
        } = req.body;

        if(req.proposal_acara){
            await models.Data_Acara_Organisasi.create({
                nama_organisasi: nama_organisasi,
                penanggung_jawab: penanggung_jawab,
                no_whatssapp: no_whatsapp,
                nama_acara: nama_acara,
                nama_lab: nama_lab,
                tanggal_mulai: tanggal_mulai,
                jam_mulai: jam_mulai,
                jam_selesai: jam_selesai,
                keterangan: keterangan,
                id_user: id_user,
                proposal_acara: req.proposal_acara.filename,
                surat_peminjaman: req.surat_peminjaman.filename
            });

            return res.status(201).json({
                message: "Created new Data Acara Organisasi"
            });
        } else {
            return res.status(400).json({
                message: "No files were uploaded"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
}

async function index(_, res) {
    try {
        const results = await models.Data_Acara_Organisasi.findAll();

        if (results && results.length > 0) {
            const acara_organisasi = results.map(({
                id,
                nama_organisasi,
                penanggung_jawab,
                no_whatsapp,
                nama_acara,
                nama_lab,
                tanggal_mulai,
                jam_mulai,
                jam_selesai,
                keterangan,
                id_user,
            }) => ({
                id,
                nama_organisasi,
                penanggung_jawab,
                no_whatsapp,
                nama_acara,
                nama_lab,
                tanggal_mulai,
                jam_mulai,
                jam_selesai,
                keterangan,
                id_user,
            }));

            res.status(200).json(acara_organisasi);
        } else {
            res.status(200).json({
                message: "No Data acara organisasi found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve acara organisasi data. Something went wrong.",
        });
    }
}

async function update(req, res) {
    try {
      const id = req.params.id;
      const { nama_dosen, mata_kuliah, kelompok, no_whatsapp, nama_lab, tanggal_mulai, jam_mulai, jam_selesai, keterangan } = req.body;

      const [updatedRowsCount] = await models.Data_Acara_Organisasi.update(
        { nama_dosen, mata_kuliah, kelompok, no_whatsapp, nama_lab, tanggal_mulai, jam_mulai, jam_selesai, keterangan },
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

        const deletedRowsCount = await models.Data_Acara_Organisasi.destroy({
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
    destroy
}