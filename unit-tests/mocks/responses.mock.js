module.exports = {
    mystatus: 200,
    status: function(data) { this.mystatus = data; return this },
    json: function(data) { return this }
};