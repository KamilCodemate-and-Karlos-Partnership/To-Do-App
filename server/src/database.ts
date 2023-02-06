import mysql from 'mysql';

const connection = mysql.createPool({
  host: 'localhost',
  database: 'todoapp',
  user: 'root',
  password: '',
});

const databaseDataPost = (query: string): Promise<any> => {
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
