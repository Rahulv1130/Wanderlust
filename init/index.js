const mongoose=require("mongoose");
const Listing= require("../models/listing.js");
const initData=require("./data.js");

main()
    .then( ()=>     { console.log("Connected to DB")})
    .catch( (err) => { console.log(err)} );

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async ()=>{
    await Listing.deleteMany({});

    initData.data = initData.data.map( (obj) => ( {...obj , owner: "65ef0397692a6842e67be8eb"} ) );
    await Listing.insertMany(initData.data);

    console.log("Data is Initialized");
};

initDB();