import * as Yup from 'yup'

const CommentsValidator = {
  create: Yup.object().shape({
    comment: Yup.string().required('Você não informou o comentário!'),
    post_id: Yup.string().required('Você não informou o id da publicação!')
  })
}

export default CommentsValidator
