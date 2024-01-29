const models = require('../models');
const { userSchema } = require('../validation/user_validation');
const { hashPass } = require('../bcrypt/user_pass');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function isEmailUnique(email) {
  try {
    const result = await models.Users.findOne({
      where: {
        email: email
      }
    });

    return result === null;
  } catch (error) {
    console.error(error);
    throw new Error("Error checking email uniqueness");
  }
}

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if email is unique
    const isUnique = await isEmailUnique(email);

    if (!isUnique) {
      return res.status(409).json({
        message: "Email must be unique",
      });
    }

    // Hash the password
    const hashedPassword = await hashPass(password);

    // Validasi data input
    const { err, value } = userSchema({
      username: username,
      email: email,
      password: hashedPassword,
    });

    if (err) {
      return res.status(400).json({
        message: "username must 3-30 character",
      });
    }

    // Data input valid, continue with the create operation
    await models.Users.create({
      username: username,
      email: email,
      password: hashedPassword,
      role: false,
    });

    return res.status(201).json({
      message: "Created new user"
    });
  } catch (e) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await models.Users.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "User not found or email is incorrect",
      });
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        const token = jwt.sign(
          {
            email: user.email,
            userId: user.id,
          },
          process.env.JWT_KEY
        );

        return res.status(200).json({
          message: "Authentication success",
          token: token,
        });
      } else {
        return res.status(401).json({
          message: "Authentication failed",
        });
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
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
  signUp,
  signIn,
  show_by_id,
  index,
  update,
  destroy,
};
