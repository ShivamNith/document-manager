const mongoose = require('mongoose');
const { Schema } = mongoose;
const { User } = require("../models/user")
const { Role } = require("../models/role")

const userRoleSchema = new Schema({
  userId : { type: String, required: true },  
  user: { type: User.schema, required: true },
  role: { type: Role.schema, required: true }
}, { _id: false });

const UserRole = mongoose.model('UserRole',userRoleSchema);

const documentSchema = new Schema({  
  title: { type: String, required: true },
  content: { type: String, required: true },
  userRoles: [{ type: UserRole.schema, required: true }]
});

const Document = mongoose.model('Document', documentSchema);

module.exports = { UserRole, Document }