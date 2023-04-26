import * as mysql from 'promise-mysql';
import key from './keys';

const pool= mysql.createPool(key.database);

pool.getConnection().then ( connection1 =>{
    pool.releaseConnection(connection1);
    console.log("Base de datos conectada");
});
export default pool;
