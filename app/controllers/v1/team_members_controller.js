'use strict';

const Nodal = require('nodal');
const TeamMember = Nodal.require('app/models/team_member.js');

class V1TeamMembersController extends Nodal.Controller {

  index() {

    TeamMember.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    TeamMember.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    TeamMember.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    TeamMember.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    TeamMember.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1TeamMembersController;
