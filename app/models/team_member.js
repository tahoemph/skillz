'use strict';

const Nodal = require('nodal');

class TeamMember extends Nodal.Model {}

TeamMember.setDatabase(Nodal.require('db/main.js'));
TeamMember.setSchema(Nodal.my.Schema.models.TeamMember);

module.exports = TeamMember;
