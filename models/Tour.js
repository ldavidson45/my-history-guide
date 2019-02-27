const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const TourSchema = new Schema ({
    title: String,
    description: String,
    landmarks: [{type: Schema.ObjectId, ref: 'Landmark'}],
})


module.exports = mongoose.model("Tour", TourSchema);