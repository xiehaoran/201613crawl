var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/201613crawl');
var MovieSchema = new mongoose.Schema({
    name:String,
    url:String
});
exports.Movie = mongoose.model('Movie',MovieSchema);