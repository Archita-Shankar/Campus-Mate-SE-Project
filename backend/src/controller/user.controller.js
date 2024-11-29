const userService= require("../services/user.service.js")


// const getUserProfile = async (req, res) => {
//     try {
//         console.log("Authorization Header:", req.headers.authorization); // Debug log
//         const jwt = req.headers.authorization?.split(" ")[1];


//         // const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzMwNGFjMGMwNWM4ZDYxNGZmMjM0ODQiLCJpYXQiOjE3MzEyMTgxMTIsImV4cCI6MTczMTM5MDkxMn0.CkbhIqqkOZ6AghYZR2cYRz9W7SLQIr2WhWobK_lMRcs"; // Hardcoded for testing

//         if (!jwt) {
//             return res.status(404).send({ error: "token not found" });
//         }

//         const user = await userService.getUserProfileByToken(jwt);
//         return res.status(200).send(user);
//     } catch (error) {
//         return res.status(500).send({ error: error.message });
//     }
// };

const getUserProfile = async (req, res) => {
    const jwt = req.headers.authorization?.split(" ")[1];
    console.log("req", jwt)
    try {
        if (!jwt) {
            return res.status(404).send({ error: "token not found" })
        }
        const user = await userService.getUserProfileByToken(jwt)
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const getAllUsers=async(req,res)=>{
    try {
        const  users=await userService.getAllUsers();
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}


module.exports={getUserProfile, getAllUsers}