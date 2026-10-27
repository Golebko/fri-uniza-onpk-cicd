const getBuildInfo = async (req, res) => {
  return res.status(200).send({
    'BuildVersion': process.env.BUILD_VERSION || 'Undefined',
    'BuildTime': process.env.BUILD_TIME || 'Undefined',
  });
};

module.exports = {
  getBuildInfo,
};
