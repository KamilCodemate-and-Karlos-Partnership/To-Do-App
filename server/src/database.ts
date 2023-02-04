import mysql from 'mysql';

const connection = mysql.createPool({
  host: 'localhost',
  database: 'todoapp',
  user: 'root',
  password: '',
});

const databaseDataGet = (query: string): Promise<Object> => {
  return new Promise((resolve, reject) => {
    resolve({});
  });
};
const databaseDataPost = (query: string): Promise<Object> => {
  return new Promise((resolve, reject) => {
    try {
      connection.query(query, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    } catch (err) {
      reject(err);
    }
  });
};
export { databaseDataPost };
