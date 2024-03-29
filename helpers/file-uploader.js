const multer = require('multer')
const path = require('path')

const storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/acara_organisasi');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/surat_peminjamanan/acara_organisasi');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Unsupported file type'), false);
    }
}

const upload1 = multer({
    storage: storage1,
    limits: {
        fileSize: 1024*1024*2
    },
    fileFilter: fileFilter
});

const upload2 = multer({
    storage: storage2,
    limits: {
        fileSize: 1024*1024*2
    },
    fileFilter: fileFilter
});

module.exports = {
    upload1,
    upload2
}