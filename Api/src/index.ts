/* eslint-disable prettier/prettier */
import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import { json } from 'express';
import { AppDataSource } from './data-source';
import apiRoutes from './routes/api.routes';
import { globalErrorHandler } from './middlewares/global-error.middleware';
import cors from 'cors';



const app = express();
const port = parseInt(process.env.PORT ?? '3000', 10);
const fullBaseUrl = process.env.BASE_URL ?? 'http://localhost:8000/svf/api/v2';
const basePath = new URL(fullBaseUrl).pathname;

// Middleware
app.use(json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, SV-Key, SV-Label');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

const path = require('path');

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// Base API  and Route entry
app.use(basePath, apiRoutes);
app.use(globalErrorHandler);

app.use(basePath + '/media', express.static(path.join(process.cwd(), 'Media')));


// Connect to DB and start server
AppDataSource.initialize()
  .then(() => {
    console.log('📦 Database connected');
    app.listen(port, () => {
      console.log(`🚀 API running on ${fullBaseUrl}`);
    });
  })
  .catch((err: any) => {
    console.error('❌ DB connection error:', err);
  });
