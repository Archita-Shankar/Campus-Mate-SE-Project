const jwtProvider = require("../config/jwtProvider.js");
const userService = require("../services/user.service.js");

const authenticate = async (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1];  //ensure to set auth in postman to -> Bearer Token
    //manual method:
    // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmJlNjBhMDM2MzU1ODJmNzg1YjE0MGIiLCJpYXQiOjE3MjM4MjkwOTAsImV4cCI6MTcyNDAwMTg5MH0.HPBqhV_AudZNNDHkOOv1WNKY4ZLXLPppY6BQNDCKVeE"

    
    // If no token is provided, return an error
    if (!token) {
      return res.status(404).send({ error: "token not found" });
    }

    // Extract the user ID from the token
    const userId = jwtProvider.getUserFromToken(token);
    
    // Find the user by their ID and assign it to req.user
    const user = await userService.findUserById(userId);  //await added
    
    // If no user is found, return an error
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    
    // Attach the user to the request object
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle errors by sending a 500 response
    return res.status(500).send({ error: error.message });
  }
};

module.exports = authenticate;



// const jwtProvider = require("../config/jwtProvider.js");
// const userService = require("../services/user.service.js");

// const authenticate = async (req, res, next) => {
//   //Bearer Token...
//   try {
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) {
//       return res.status(404).send({ error: "token not found" });
//     }

//     const userId = jwtProvider.getUserFromToken(token);
//     const user = userService.findUserById(userId);
//     req.user = user;
//   } catch (error) {
//     return res.status(500).send({ error: error.message });
//   }
//   next();
// };

// module.exports = authenticate;
