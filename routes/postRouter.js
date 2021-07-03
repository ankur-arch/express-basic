const postRouter = require("express").Router();

const idCheckerMiddleware = (req, res, next) => {
  let id = req.params.id;
  if (id > 20) {
    return next();
  }
  return res.send("Your id is not okay so your not welcome");
};

const postController = (req, res) => {
  let id = req.params.id;
  return res.send(`You've reached the posts page => ${id}`);
};

// Routers

postRouter.get("/$", (req, res) => {
  res.send("Posts Home page");
});

postRouter.get("/:id", idCheckerMiddleware, postController);

// export it
module.exports = postRouter;
