const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024*1024*2
    },
});

const multiUpload = (req, res, next) => {
    upload.fields([
        {name: 'proposal_acara'},
        {name: 'surat_peminjaman'},
    ])(req, res, (err) => {
        if (err) {
            return next(err);
        }

        if (req.files['proposal_acara']) {
            const filePath = req.files['proposal_acara'][0].path;
            convertToPDF(filePath);
        }

        if (req.files['surat_peminjaman']) {
            const filePath = req.files['surat_peminjaman'][0].path;
            convertToPDF(filePath);
        }

        next();
    });
};

const convertToPDF = (filePath) => {
    const pdfPath = filePath.replace(path.extname(filePath), '.pdf');

    exec(`convert ${filePath} ${pdfPath}`, (error, stdout, stderr) => {
        if (error) {
            return;
        }
        if (stderr) {
            return;
        }
    });
};

module.exports = {
    multiUpload,
};
