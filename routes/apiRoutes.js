
const Workout = require("../models/workOut");

module.exports = function (app) {

    app.get("/api/workout", function(req, res){
        Workout.find().then(data =>{
            console.log("linija 8 data", data)
            res.json(data);
        })
        .catch(err =>{
            res.json(err);
        });
    });

    app.post("/api/workout", function(req, res){
        Workout.create({}).then(data => {
            console.log("linija 18 data", data)
            res.json(data)
        })
        .catch(err =>{
            res.json(err)
        })
    });

    app.put("/api/workout/:id", ({body, params}, res) =>{
        Workout.findByIdAndUpdate(
            params.id,
            {$push: {exercises: body}},
            {new: true, runValidators: true}
        )
        .then(data =>{
            console.log("linija 33 data", data)
            res.json(data)
        })
        .catch(err => {
            res.json(err);
        })
    })
};