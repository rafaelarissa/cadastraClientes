import Joi from "joi";

const customerSchema = Joi.object({
  nome: Joi.string().required(),
  cpf: Joi.string().required(),
  nascimento: Joi.string(),
});

export default customerSchema;
