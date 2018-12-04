import mysql from 'mysql';

class mysqlProvider {
        async findResellerId(){
            var connection = await mysql.createConnection({
                   host: 'mysql2018.pagevamp.com',
                   user: 'kusum42384',
                   password: 'P72D#!NKknE^PILggUw5',
                   database: 'v3pagevamp'
            })
               connection.connect();
               console.log("Reseller id");
               connection.query({
                       sql: 'SELECT reseller_id FROM `users` WHERE `email` = "ksm_tg27@yahoo.com"',
                       timeout: 40000, // 40s
               }, function (error, results, fields) {
                       console.log(results);
               })
               connection.end();
           }
}

export default mysqlProvider
