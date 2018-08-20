import * as express from 'express';
import open = require('open');
import * as path from 'path';
import * as webpack from 'webpack';
import config from '../webpack.config.debug';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output && config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, (err: any) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});