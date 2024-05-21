const { UserRole , Document } = require('../models/document');

exports.createDocument = async (req, res) => {
  try {
    const { title, content, userRoles } = req.body;
    const document = new Document({ title, content, userRoles });
    await document.save();
    res.status(201).send(document);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.addUserRoleToDocument = async (req, res) => {
  try {
    const {documentId,userRoleObj} = req.body;
    const userRole = new UserRole(userRoleObj)
    await Document.findByIdAndUpdate(
      documentId,
      { $push: { userRoles: userRole }},
      { new: true, useFindAndModify: false }
    );
    res.status(201).send(userRole);
  } catch (err) {
    res.status(400).send(err.message);
  }
};