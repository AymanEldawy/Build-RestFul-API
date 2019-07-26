const mongoose = require("mongoose");
const Emp = require("../Model/model_emp");

module.exports = {
  getAllEmp: async (req, res, next) => {
    try {
      let result = await Emp.find();
      res.json({
        result: result.map(results => {
          return {
            name: results.name,
            salary: results.salary,
            url: "http://localhost:3000/emp/" + results._id
            // image:'http://localhost:3000/' + result.image
          };
        })
      });
    } catch (err) {
      res.json(err);
    }
  },
  getEmpById: async (req, res) => {
    const id = req.params.id;
    try {
      let result = await Emp.findById(id);
      res.json({
        result: result
      });
    } catch (err) {
      res.json(err);
    }
  },
  pushEmp: async (req, res, next) => {
    try {
      new Emp({
        name: req.body.name,
        salary: req.body.salary
        // image : req.file.path// Upload Image
      }).save();
      res.json({
        name: result.name,
        salary: result.salary,
        image: result.image // Upload Image
      });
    } catch (err) {
      res.json(err);
    }
  },
  putEmp: async (req, res) => {
    try {
      let result = await Emp.updateOne(
        {
          _id: req.params.id
        },
        {
          name: req.body.name
        }
      );
      res.json({
        result: result
      });
    } catch (err) {
      res.json(err);
    }
  },
  deleteEmp: async (req, res) => {
    try {
      let result = await Emp.deleteOne({
        _id: req.params.id
      });
      res.json({
        result: result
      });
    } catch (err) {
      res.json(err);
    }
  }
};
