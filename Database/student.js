const pool = require('pg').Pool;

db_pool = new pool({
    host: '35.187.248.198',
    port: 5432,
    user:'postgres',
    password:'d3v3l0p8015',
    database:'Trial_Week1_Michael',
    max:20,
    idleTimeoutMillis:10000,
    connectionTimeoutMilles:5000
});

db_pool.on('connect',()=>{
    console.log('CONNECTED TO DB');
})


exports.pool = db_pool
