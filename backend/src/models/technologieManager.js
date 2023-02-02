const AbstractManager = require("./AbstractManager");

class technologieManager extends AbstractManager {
  constructor() {
    super({ table: "technologie" });
  }

  insert(technologie) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [technologie.title]
    );
  }

  update(technologie) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [technologie.title, technologie.id]
    );
  }
}

module.exports = technologieManager;
