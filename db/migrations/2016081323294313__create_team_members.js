'use strict';

const Nodal = require('nodal');

class CreateTeamMembers extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016081323294313;
  }

  up() {

    return [
      this.createTable("team_members", [{"name":"active","type":"boolean"},{"name":"name","type":"string"},{"name":"picture","type":"string"},{"name":"wiki","type":"string"},{"name":"web","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("team_members")
    ];

  }

}

module.exports = CreateTeamMembers;
