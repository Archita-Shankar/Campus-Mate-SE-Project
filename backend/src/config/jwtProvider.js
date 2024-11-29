const jwt=require("jsonwebtoken")

const SECRET_KEY="jsdcjhfnjsdncjsnvjnsjvnjsannjsvshdvahjvshjvdcvjdlj"

const generateToken=(userId)=>{
    const token=jwt.sign({userId}, SECRET_KEY, {expiresIn:"48h"})
    return token;
}

// const getUserFromToken=(token)=>{
//     const decodedToken=jwt.verify(token, SECRET_KEY)
//     return decodedToken.userId;
// }

const getUserFromToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, SECRET_KEY);
        return decodedToken.userId;
    } catch (error) {
        throw new Error("Invalid or expired token1");
    }
};


module.exports={generateToken, getUserFromToken}

