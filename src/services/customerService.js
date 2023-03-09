import customerRepository from "../repositories/customerRepository.js";

async function create(cliente) {
  // await validaCpf(cliente.cpf);
  console.log(cliente);
  await customerRepository.insert({
    ...cliente,
  });
}

async function get() {
  return await customerRepository.get();
}

// async function validaCpf(cpf) {
//   const cpfSeparado = cpf.split();
//   console.log(cpfSeparado);
// }

const customerService = { create, get };
export default customerService;
