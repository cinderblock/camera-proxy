const { MjpegProxy } = require('mjpeg-proxy');
const express = require('express');

const app = express();

const proxy = new MjpegProxy(process.env.TARGET);

app.get('/stream', proxy.proxyRequest);
app.get('/snapshot', proxy.snapshot);

app.listen(process.env.RUNTIME_DIRECTORY ? `${process.env.RUNTIME_DIRECTORY}/socket` : 3000);
