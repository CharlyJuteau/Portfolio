const AbstractManager = require("./AbstractManager");

class messageManager extends AbstractManager {
  constructor() {
    super({ table: "message" });
  }

  insert(message) {
    return this.connection.query(
      `insert into ${this.table} (name, email, message) values (?,?,?)`,
      [message.name, message.email, message.message]
    );
  }

  update(message) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [message.title, message.id]
    );
  }
}

module.exports = messageManager;
