class DBConnection{
    static connection: string;

    private constructor(value : string) {
        DBConnection.connection=value;
    }

    static getConnection(){
        if (!DBConnection.connection){
            new DBConnection('testConnection')
        }
        return DBConnection.connection;
    }
}

let connection:string = DBConnection.getConnection();
console.log('Connection : ',connection);
