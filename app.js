const express = require('express');
let app = express();
app.listen(3000, () => {
    console.log('App is listening 3000')
});

app.get('/', (req, res) =>{
    res.send('jellou! c:');
})