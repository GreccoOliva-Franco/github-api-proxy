// External modules
import cors from 'cors';
import express, { Router } from 'express';


const app = Router();

// Load middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
