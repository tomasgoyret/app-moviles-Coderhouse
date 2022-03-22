import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('tasks.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY NOT NULL
          )`,
          [],
          () => { resolve() },
          (_, err) => { reject(err) },
        )
      });
    })
  
    return promise;
  }