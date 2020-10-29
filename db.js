const mongoose = require('mongoose')

mongoose.connect('mongodb://Yuwetha_Nesan:YoonaKishore@yuthiesaari-shard-00-00.llqku.mongodb.net:27017,yuthiesaari-shard-00-01.llqku.mongodb.net:27017,yuthiesaari-shard-00-02.llqku.mongodb.net:27017/Todo?ssl=true&replicaSet=atlas-wypjlv-shard-0&authSource=admin&retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })


// const mongoose = require("mongoose");

// const connectDb = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex: true,
//     });
//     console.log("mongodb connected");
    
//   } catch (error) {
//     console.log(`Error${error.message}`);
//     process.exit(1);
//   }
// };

// module.exports = connectDb;
