import users from '../../models/name';

const createUser = async (req, res) => {
  try {
    const { fullName } = req.body;

    const findName = await users.findOne({fullName});

    if(findName) {
      return res.status(409).json({
        status: 'error',
        message: 'User already exists. Try another name'
      })
    };

    const newUser = await users.create({
      fullName
    })

    res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      user: newUser
    })
  } catch (e) {
    res.json({
      message: e
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await users.find({})

    return res.status(200).json({
      status: 'success',
      data: allUsers
    })
  } catch (e) {
    req.json({
      message: e
    })
  }
};

module.exports = {
  createUser,
  getAllUsers
};