import { prisma } from "../config/db.js";

async function insert(nome, cpf, nascimento) {
  return prisma.clientes.create({
    data: nome,
    cpf,
    nascimento,
  });
}

async function getById(id) {
  return prisma.clientes.findUnique({ where: { id } });
}

async function findMany() {
  return prisma.clientes.findMany();
}

async function getByCpf(cpf) {
  return prisma.clientes.findFirst({ where: { cpf } });
}

export default {
  insert,
  getById,
  getByCpf,
  findMany,
};
