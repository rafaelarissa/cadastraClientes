import validaCpf from "../services/customerService.js";

export async function create(req, res) {
  const cliente = req.body;

  const cpf = await validaCpf(cliente.cpf);
  res.send(cpf);
}
