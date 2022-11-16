const express = require("express");
const bodyParser = require("body-parser");
const app = express(); 
const port = 5000 ;


 app.use(bodyParser.json()); 

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");
//   res.setHeader(
//     "Access-Control-Allow-Headers , Origin ,X-Requested-Width , Content-Type , Accept , Authorization  "
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET ,POST , PATCH , DELETE");
//   next();
// });

 
app.get("/" , (req , res , next)=>{ 
    res.send("running")
})

app.get("/getValues" , (req , res , next)=>{ 
       console.log("success !!!!")
}) 

app.post("/postValues" , (req , res , next)=>{ 
    console.log("success post !!!")
})

app.listen(port , ()=>{ 
    console.log("listening on : " +port)
})
