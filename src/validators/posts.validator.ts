import * as Yup from 'yup'

const PostsValidator = {
  create: Yup.object().shape({
    description: Yup.string().default('')
  })
}

export default PostsValidator
