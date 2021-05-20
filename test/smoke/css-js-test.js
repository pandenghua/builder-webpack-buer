const glob = require('glob');

describe('Checking generated css js files', () => {
  it('should generate css js files', (done) => {
    glob('./dist/@(index_*|search_*).css', (err, files) => {
      if (err) {
        console.log(err);
      }
      if (files.length > 0) {
        console.log(files.length);
        done();
      } else {
        throw new Error('no css js files generated.');
      }
    });

    // [
    //   './dist/index_*.js',
    //   './dist/index_*.css',
    //   './dist/search_*.js',
    //   './dist/search_*.css',
    // ];
  });
});
