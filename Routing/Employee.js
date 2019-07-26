const express = require("express");
const router = express.Router();
const Emp = require("../Model/model_emp");
const controller = require('../Controller/emp');
// Make Router For Emp
// Get All Employee
router.get("/", controller.getAllEmp)
// Get One Emp ById
router.get("/:id", controller.getEmpById)
// Send a Data
router.post("/", controller.pushEmp)
// Put Data
router.put("/:id",controller.putEmp)
// Delete Data
router.delete("/:id", controller.deleteEmp)
module.exports = router;
