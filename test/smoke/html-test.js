const glob = require('glob');

describe('Checking generated html files', () => {
  it('should generate html files', (done) => {
    glob('./dist/@(index|search).html', (err, files) => {
      if (err) {
        console.log(err);
      }
      if (files.length > 0) {
        console.log(files.length);
        done();
      } else {
        throw new Error('no html files generated.');
      }
    });
    // [
    //   './dist/index.html',
    //   './dist/search.html',
    // ]
  });
});
