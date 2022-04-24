const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.PUBLIC_KEY,
  secretAccessKey: process.env.SECRET_KEY,
});

// Upload file to specified bucket.
const uploadAWS = async (name, image) => {
  const Key = name + '.' + image.mimetype.slice(-3);
  return new Promise((resolve, reject) => {
    const uploadParams = {
      Bucket: process.env.BUCKET_NAME,
      Body: image.buffer,
      Key,
      ContentType: image.mimetype,
      ACL: 'public-read',
    };
    s3.upload(uploadParams, (err, data) => {
      if (err) {
        reject(new Error(err));
      }
      const urlver = `https://${uploadParams.Bucket}.s3.amazonaws.com/${Key}`;
      resolve(urlver);
    });
  });
};

module.exports = uploadAWS;
