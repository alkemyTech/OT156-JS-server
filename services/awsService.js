const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.PUBLIC_KEY,
  secretAccessKey: process.env.SECRET_KEY,
});

const uploadParams = {
  Bucket: process.env.BUCKET_NAME,
  Body: '',
  Key: '',
};

// Upload file to specified bucket.
const uploadAWS = (name, file) => {
  uploadParams.Key = name;
  uploadParams.Body = file;
  const result = s3.upload(uploadParams, (err, data) => {
    if (err) {
      throw new Error(err);
    }
    console.log({ DATA: data });
    if (data) {
      return data.Location;
    }
  });
  console.log(result);
  return result;
};

module.exports = uploadAWS;
