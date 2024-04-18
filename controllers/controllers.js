import fs from "fs";
import axios from "axios";
//API RandomUser
const apiRandom= async (req,res)=>{
    const {data}=await axios.get("https://randomuser.me/api");
    console.log(data)
    res.json(data)
}

const capturarRommies= async (req,res)=>{
    
}

const verRoomie = (req, res) => {
    const rommies= JSON.parse(
      fs.readFileSync("./data/roommates.json", "utf-8")
    );
    res.send(rommies);
  };

  export { apiRandom }