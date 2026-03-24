const express = required('express')
const app = express();
required('dotenv').config();

const bodyParser = required('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})