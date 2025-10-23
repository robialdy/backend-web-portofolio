import { getUserData } from "../utils/jwt.js";

export default (req, res, next) => {
  const authorization = req.headers?.authorization;

  if (!authorization) {
    return res.status(404).json({
      meta: {
        status: 403,
        message: "",
      },
      data: null,
    });
  }

  const [prefix, token] = authorization.split(" ");

  if (!(prefix === "Bearer" && token)) {
    return res.status(404).json({
      meta: {
        status: 403,
        message: "",
      },
      data: null,
    });
  }

  const user = getUserData(token);

  if (!user) {
    return res.status(404).json({
      meta: {
        status: 403,
        message: "",
      },
      data: null,
    });
  }

  req.user = user;

  next();
};
