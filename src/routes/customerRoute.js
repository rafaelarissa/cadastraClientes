import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import customerSchema from "../schemas/customerSchema.js";
import { create } from "../controllers/customerController.js";

const customerRouter = Router();

customerRouter.post(
  "/clientes",
  validateSchemaMiddleware(customerSchema),
  create
);
customerRouter.get("/clientes/:cpf");
customerRouter.get("/clientes");

export default customerRouter;
