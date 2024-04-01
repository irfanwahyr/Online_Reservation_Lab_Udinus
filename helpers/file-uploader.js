const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/acara_organisasi');
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

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024*1024*2
    },
    // fileFilter: fileFilter
});

const multiUpload = upload.fields(
    [
        {name: 'proposal_acara'},
        {name: 'surat_peminjaman'},

    ]
)


module.exports = {
    multiUpload,
}