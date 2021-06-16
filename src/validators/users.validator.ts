import * as Yup from 'yup'

const UsersValidator = {
  create: Yup.object().shape({
    full_name: Yup.string()
      .required('Você não informou o seu nome!')
      .min(1, 'O nome é muito curto!'),
    email: Yup.string()
      .email('E-mail inválido!')
      .required('O e-mail é obrigatório!'),
    username: Yup.string()
      .required('Você não informou o seu nome de usuário!')
      .min(1, 'O nome de usuário é muito curto!'),
    password: Yup.string()
      .required('A senha é obrigatória!')
      .min(8, 'A senha deve conter no mínimo 8 caracteres!')
  }),

  login: Yup.object().shape({
    username: Yup.string()
      .required('Você não informou o seu nome de usuário!')
      .min(1, 'O nome de usuário é muito curto!'),
    password: Yup.string().required('A senha é obrigatória!')
  }),

  update: Yup.object().shape({
    full_name: Yup.string().optional().min(1, 'O nome é muito curto!'),
    email: Yup.string().email('E-mail inválido!'),
    username: Yup.string().min(1, 'O nome de usuário é muito curto!'),
    password: Yup.string().min(8, 'A senha deve conter no mínimo 8 caracteres!')
  })
}

export default UsersValidator
