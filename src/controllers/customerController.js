import customerService from "../services/customerService.js";

export async function create(req, res) {
  const cliente = req.body;

  await customerService.create(cliente);
  res.sendStatus(201);
}
