// External modules
import cors from 'cors';
import express, { Router } from 'express';

// Routers
import apiRoutes from './app.routes';

const app = Router();

// Load middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load api routes
app.use('/', apiRoutes);

export default app;
