const mongoose = require("mongoose")

// const mondbUrl="mongodb+srv://architashankartech:BW8E1Dov4q4qpSeb@cluster0.wju3b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const mondbUrl="mongodb+srv://architashankartech:BW8E1Dov4q4qpSeb@cluster0.ggsvr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const mondbUrl="mongodb+srv://architashankartech:abcd@cluster0.wju3b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const mondbUrl="mongodb+srv://architashankartech:abcd@cluster0.wju3b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mondbUrl="mongodb+srv://archita_1:1234@cluster0.wju3b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const mondbUrl="mongodb+srv://architashankartech:abcd@cluster0.wju3b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"




const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}