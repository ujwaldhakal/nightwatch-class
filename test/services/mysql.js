import mysql from 'mysql';

class mysqlProvider {

   runQuery (sql, params = [], single = false) {
        const connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        })


        return new Promise((resolve, reject) => {
                connection.query(sql, params, (err, results) => {
                if(err) {
                    console.log(err);
                    console.log('something went wront');
                }
                let returnedResult = []
                            
                if (single) {
                    returnedResult = {}
                }

                if (results !== undefined && results.length) {
                    returnedResult = results
                    if (single) {
                        returnedResult = results[0]
                    }
                }
                resolve(returnedResult)
                // console.log(connection);
                connection.end();
                })

        })
    }

    async findReseller(email) {
        const sql = "select reseller_id from users where email = '"+ email +"'";
        return this.runQuery(sql,[], 1);
    }





    //     runQuery() {
    //         var connection =  mysql.createConnection({
    //         host: process.env.DB_HOST,
    //         user: process.env.DB_USERNAME,
    //         password: process.env.DB_PASSWORD,
    //         database: process.env.DB_DATABASE
    //         })
    //         connection.connect();
    //         console.log("Reseller id is ");
            
    //         let a = {};
    //         connection.query('select * from users',function (error, results, fields) {
    //                 a = results;
    //                 return a;
    //           })

    //             console.log(a);
    //         connection.end();        
    //         return a;
    // }
       
}
export default mysqlProvider
