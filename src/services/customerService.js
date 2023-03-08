import customerRepository from "../repositories/customerRepository";

async function create(cliente) {
  // await validaCpf(cliente.cpf);

  await customerRepository.insert({
    ...cliente,
  });
}

// async function validaCpf(cpf) {
//   const cpfSeparado = cpf.split();
//   console.log(cpfSeparado);
// }

export default { create };
