import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('tareas.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS tareas (
            id INTEGER PRIMARY KEY NOT NULL,
            description TEXT NOT NULL
          )`,
          [],
          () => { resolve()},
          (_, err) => { reject(err) },
        )
      });
    })
  
    return promise;
  }

  export const insertTask = (description) => {
    const promise = new Promise ((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO tareas (description) VALUES (?);',
          [description],
          (_,result) => {resolve(result)},
          (_, err) => {reject (err)}
        )
      })
    }) 
    return promise;
  }

  export const getTask = () => {
    const promise = new Promise ((resolve,reject)=>{
      db.transaction((tx) =>{
        tx.executeSql(
          'SELECT * FROM tareas;',
          [],
          (_, result) => resolve(result)
        )
      })
    })
    return promise
  }