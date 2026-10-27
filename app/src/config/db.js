const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT
} = process.env;
 
module.exports = {
  url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/`,
  database: "bezkoder_files_db",
  imgBucket: "photos",
};
