const chokidar = require('chokidar');
const swagger_merger = require('swagger-merger');

const root_file = 'index.yaml';
const merged_file = 'merged.yaml';

chokidar.watch('.', {ignored: merged_file}).on('all', (event, path) => {
    console.log(event, path);

    swagger_merger({input: root_file, output: merged_file}).catch(err => {
        console.error(err);
    });
});
