var pool = require('./config').config

module.exports = {
    getUsers: function(req, res) {
        pool.getConnection(function(err, connection) {
            connection.query('SELECT * from Users', function(err, rows, fields) {
                connection.release();
                if (!err)
                    res.json(rows);
                else
                    console.log('Error while performing Query.', err);
            });
        });
    },
    addUser: function(req, res) {
        var name = req.body.name;
        var studentId = req.body.studentId;
        var major = req.body.major;
        var query = 'Insert into Users (Name, StudentId, Major) values ("'+name+'",'+studentId+',"'+major+'")';
        console.log(query);
        pool.getConnection(function(err, connection) {
            connection.query(query, function(err, rows, fields) {
                connection.release();
                if (!err)
                    res.json(rows);
                else
                    console.log('Error while performing Query.', err);
            });
        });
    },
    updateUser: function(req, res) {
        var name = req.body.name;
        var studentId = req.body.studentId;
        var major = req.body.major;
        var query = 'Update Users SET Name = "'+name+'", StudentId = '+studentId+' , Major = "'+major+'" where ID = '+req.params.id+'';
        pool.getConnection(function(err, connection) {
            connection.query(query, function(err, rows, fields) {
                connection.release();
                if (!err)
                    res.json(rows);
                else
                    console.log('Error while performing Query.', err);
            });
        });
    },
    deleteUser: function(req, res) {
        var query = 'Delete from Users where ID = '+req.params.id+'';
        pool.getConnection(function(err, connection) {
            connection.query(query, function(err, rows, fields) {
                connection.release();
                if (!err)
                    res.json(rows);
                else
                    console.log('Error while performing Query.', err);
            });
        });
    }
}