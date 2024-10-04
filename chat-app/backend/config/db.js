const mongoose = require("mongoose")

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            // useNewUrlParser:true,
            // useUnifiedTopology:true,
            // // useFindAndModify:true,
        });

        console.log(`Db Connectd :${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDB;