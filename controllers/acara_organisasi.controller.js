const models = require('../models');

async function create(req, res) {
    try {
        const {
            nama_organisasi,
            penanggung_jawab,
            no_whatssapp,
            nama_acara,
            nama_lab,
            tanggal_mulai,
            tanggal_selesai,
            jam_mulai,
            jam_selesai,
            keterangan,
            id_user,
            id_jadwal
        } = req.body;

        const proposal_acara = req.files.proposal_acara[0].filename;
        const surat_peminjaman = req.files.surat_peminjaman[0].filename;

        if(req.files){
            await models.Data_Acara_Organisasi.create({
                nama_organisasi: nama_organisasi,
                penanggung_jawab: penanggung_jawab,
                no_whatssapp: no_whatssapp,
                nama_acara: nama_acara,
                nama_lab: nama_lab,
                tanggal_mulai: tanggal_mulai,
                tanggal_selesai: tanggal_selesai,
                jam_mulai: jam_mulai,
                jam_selesai: jam_selesai,
                keterangan: keterangan,
                id_user: id_user,
                id_jadwal: id_jadwal,
                proposal_acara: proposal_acara,
                surat_peminjaman: surat_peminjaman
            });

            return res.status(201).json({
                message: "Created new Data Acara Organisasi"
            });
        } else {
            return res.status(400).json({
                message: "Please upload both proposal and permission letter files"
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

        const result = await models.Data_Acara_Organisasi.findAll({
            where: {
                id_user: id_user
            }
        });

        if (result && result.length > 0) {
            const acara_organisasi = result.map(({
                id,
                nama_organisasi,
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
                id_jadwal
            }) => ({
                id,
                nama_organisasi,
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
                id_jadwal
            }));

            res.status(200).json(acara_organisasi);
        } else {
            res.status(404).json({
                message: "acara organisasi not found",
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
        const results = await models.Data_Acara_Organisasi.findAll();

        if (results && results.length > 0) {
            const acara_organisasi = results.map(({
                id,
                nama_organisasi,
                penanggung_jawab,
                no_whatssapp,
                nama_acara,
                nama_lab,
                tanggal_mulai,
                tanggal_selesai,
                jam_mulai,
                jam_selesai,
                keterangan,
                id_user,
                id_jadwal,
                proposal_acara,
                surat_peminjaman
            }) => ({
                id,
                nama_organisasi,
                penanggung_jawab,
                no_whatssapp,
                nama_acara,
                nama_lab,
                tanggal_mulai,
                tanggal_selesai,
                jam_mulai,
                jam_selesai,
                keterangan,
                id_user,
                id_jadwal,
                proposal_acara,
                surat_peminjaman
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
      const { nama_dosen, mata_kuliah, kelompok, no_whatsapp, nama_lab, tanggal_mulai, tanggal_selesai, jam_mulai, jam_selesai, id_jadwal, keterangan } = req.body;

      const [updatedRowsCount] = await models.Data_Acara_Organisasi.update(
        { nama_dosen, mata_kuliah, kelompok, no_whatsapp, nama_lab, tanggal_mulai, tanggal_selesai, jam_mulai, jam_selesai, id_jadwal, keterangan },
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
    destroy,
    show_by_id
}