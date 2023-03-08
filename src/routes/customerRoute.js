import { Router } from "express";

const customerRouter = Router();

customerRouter.post("/clientes");
customerRouter.get("/clientes/:cpf");
customerRouter.get("/clientes");

export default customerRouter;
