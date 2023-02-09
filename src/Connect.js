const mongoose = require('mongoose')
mongoose.set("strictQuery",true)
const url =`mongodb+srv://sania:ptlsamosa@cluster0.6k1mdoo.mongodb.net/Data?retryWrites=true&w=majority`;
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

    // Mountain model
const users = mongoose.model('user', {

    username: { type: String },
    passwd: { type: String } 

});


users.find( function (err, docs) {
    if (err){
        console.log(err);
        mongoose.disconnect();
    }
    else{
        console.log("result : ", docs); 
        mongoose.disconnect();
    }
});                                                                                                                                  