const models = require('../models');
const { userSchema } = require('../validation/user_validation');

const create = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validasi data input
    const { error, value } = userSchema({
      username: username,
      email: email,
      password: password,
    });

    if (error) {
      return res.status(400).json({
        message: "Invalid input data",
      });
    }

    // Data input valid, lanjutkan dengan operasi create
    const newUser = await models.Users.create({
      username: username,
      email: email,
      password: password,
      role: false,
    });

    res.status(201).json({
      message: "Created new user"
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};


async function show_by_id(req, res) {
  try {
    const id = req.params.id;

    const result = await models.Users.findByPk(id);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

async function index(_, res) {
  try {
    const result = await models.Users.findAll();

    if (result && result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(200).json({
        message: "No users found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Unable to retrieve user data. Something went wrong.",
    });
  }
}


async function update(req, res) {
  try {
    const id = req.params.id;
    const { username, email, password } = req.body;

    // Validasi data input
    const { error, value } = userSchema({
      username: username,
      email: email,
      password: password,
    });

    if (error) {
      return res.status(400).json({
        message: "Invalid input data",
      });
    }

    const [updatedRowsCount] = await models.Users.update(
      { username, email, password },
      { where: { id: id } }
    );

    if (updatedRowsCount > 0) {
      res.status(200).json({
        status: res.status,
        message: "User updated successfully",
      });
    } else {
      res.status(404).json({
        status: res.status,
        message: "User not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: res.status,
      message: "Internal Server Error",
    });
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id;

    const deletedRowsCount = await models.Users.destroy({
      where: { id: id }
    });

    if (deletedRowsCount > 0) {
      res.status(200).json({
        status: res.status,
        message: "User deleted successfully",
      });
    } else {
      res.status(404).json({
        status: res.status,
        message: "User not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: res.status,
      message: "Internal Server Error",
    });
  }
}


module.exports = {
  create,
  show_by_id,
  index,
  update,
  destroy,
};
