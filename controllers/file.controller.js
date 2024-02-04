const models = require('../models');

async function upload(req, res) {
    try {
        const is_proposal = Boolean(req.body.is_proposal);

        if (req.file) {
            const newFile = await models.PDF_filename.create({
                nama: req.file.filename,
                is_proposal: is_proposal
            });

            res.status(200).json({
                message: "File uploaded successfully",
                url: req.file.filename,
                databaseEntry: newFile,
            });
        } else {
            res.status(500).json({
                message: "Something went wrong",
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
    upload
};
