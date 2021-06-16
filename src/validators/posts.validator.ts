import * as Yup from 'yup'

const PostsValidator = {
  create: Yup.object().shape({
    description: Yup.string().required('Você não informou o seu nome!')
  })
}

export default PostsValidator
