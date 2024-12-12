const validatorHandler = (req, res, next, schema) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ status: "error", error: error.message });
  }
  next();
};

const attributeHandler = (req, res, next, schema) => {
  return res.status(400).json({
    status: "error",
    error: "This is some coonection issue with the database",
  });
};

module.exports = {
  validatorHandler,
  attributeHandler,
};
