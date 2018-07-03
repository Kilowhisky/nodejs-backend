import Post from '../models/post.model';


function load(req, rsp) {
  return Post.get(req.params.postId).then(x => rsp.json(x));
}

function get(req, res) {
  return res.json(req.postId);
}

function create(req, rsp) {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  return post.save().then(created => {
    return rsp.json({
      id: created.id,
      title: created.title,
      content: created.content,
      createdAt: created.createdAt
    });
  })
}

function update(params) {
  return load(params).then(post => {
    post.title = params.body.title;
    post.content = params.body.content;
    return post.save()
  });
}

function list(params, rsp) {
  const { limit = 50, skip = 0 } = params;
  return Post.list({ limit, skip }).then(x => rsp.json(x));
}

function remove(params) {
  return load(params).then(post => post.remove());
}

export default { load, get, create, update, list, remove };
