var DBConnection = /** @class */ (function () {
    function DBConnection(value) {
        DBConnection.connection = value;
    }
    DBConnection.getConnection = function () {
        if (!DBConnection.connection) {
            new DBConnection('testConnection');
        }
        return DBConnection.connection;
    };
    return DBConnection;
}());
var connection = DBConnection.getConnection();
console.log('Connection : ', connection);
