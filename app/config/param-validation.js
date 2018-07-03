import Joi from 'joi';

/**
 * Validation using the Joi library
 * (taken from the MEAN intro project)
 * @type {Object}
 */
export default {
  // POST /api/posts
  createPost: {
    body: {
      title: Joi.string().required(),
    }
  },

  // UPDATE /api/posts/:postId
  updatePost: {
    body: {
      title: Joi.string().required(),
    },
    params: {
      postId: Joi.string().hex().required()
    }
  }
};
