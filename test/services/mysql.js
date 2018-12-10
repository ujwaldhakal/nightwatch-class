import mysql from 'mysql';

class mysqlProvider {
        runQuery() {
            var connection =  mysql.createConnection({
                host: 'mysql',
                user: 'root',
                password: 'root',
                database: 'pagevamp'
            })
            connection.connect();
            console.log("Reseller id is ");
            
            connection.query({
                sql: 'SELECT `reseller_id` FROM `users` WHERE `email` = "ksm_tg7@yahoo.com"',
                timeout: 40000, // 40s
            },function (error, results, fields) {
                       console.log(results);
              })
            connection.end();        
    }

       
}
export default mysqlProvider
