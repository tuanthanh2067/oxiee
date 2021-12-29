const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  companyId: {
    type: String,
    unique: true,
  },
  owners: {
    type: [String],
  },
  branches: {
    type: [String],
  },
  companyName: {
    type: String,
  },
  address: {
    type: String,
  },
});

const companyBranchSchema = new Schema({
  companyId: {
    type: String,
  },
  branchId: {
    type: String,
    unique: true,
  },
  employees: {
    type: [String],
  },
  address: {
    type: String,
  },
});

module.exports = {
  Company: mongoose.model("Company", companySchema),
  CompanyBranch: mongoose.model("CompanyBranch", companyBranchSchema),
};
