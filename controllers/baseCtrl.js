class BaseController {
  constructor(salt) {
    this.salt = salt;
  }

  // eslint-disable-next-line class-methods-use-this
  errorHandler = (err, res) => {
    console.log('\x1b[36m%s\x1b[0m', 'Error bro');
    console.error('\x1b[31m%s\x1b[0m', err);
    res.send(err);
  };
}

module.exports = BaseController;
