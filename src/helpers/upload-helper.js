const multer = require("multer");

class UploadHelper {
    uploadSingle(directory, fieldName) {
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, `public/${directory}`);
            },
            filename: function (req, file, cb) {
                const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
                cb(null, `${uniqueSuffix}-${file.originalname}`);
            },
        });

        const upload = multer({ storage: storage });
        return upload.single(fieldName);
    }

    uploadMultiple(directory, fieldName, maxCountFile) {
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, `public/${directory}`);
            },
            filename: function (req, file, cb) {
                const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
                cb(null, `${uniqueSuffix}-${file.originalname}`);
            },
        });

        const upload = multer({ storage: storage });
        return upload.array(fieldName, maxCountFile);
    }

    uploadSingleToMemory(fieldName) {
        const storage = multer.memoryStorage();
        const upload = multer({ storage: storage });
        return upload.single(fieldName);
    }

    uploadMultipleToMemory(fieldName, maxCountFile){
        const storage = multer.memoryStorage();
        const upload = multer({ storage: storage });
        return upload.array(fieldName, maxCountFile);
    }
}

module.exports = new UploadHelper();
