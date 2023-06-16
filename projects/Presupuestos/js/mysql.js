import mysql from 'mysql2';

const pool = mysql.createPool(
    {
        host: 'containers-us-west-160.railway.app',
        user: 'root',
        port: '6764',
        password: 'kscXyKZkduQKKDNJItz1',
        database: 'railway'
    }
).promise()


// Mostrar productos que pertenecen a cierta categoria
async function obtenerDatos(sql){
    const [rows] = await pool.query(sql);
    return rows;
}

//obtenerDatos(sql);

export {obtenerDatos};