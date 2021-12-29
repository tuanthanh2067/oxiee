const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  employeeId: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

const employeeInfoSchema = new Schema({
  employeeId: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  dob: {
    type: Date,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  checkInId: {
    type: String,
  },
  image: {
    type: String,
  },
  socialNumber: {
    type: String,
    unique: true,
  },
});

const employeeBankingInfoSchema = new Schema({
  institutionName: {
    type: String,
  },
  branchNumber: {
    type: String,
  },
  institutionNumber: {
    type: String,
  },
  accountNumber: {
    type: String,
  },
  accountType: {
    type: String,
  },
});

const employeeStatusAtCompanySchema = new Schema({
  employeeId: {
    type: String,
  },
  companyBranchId: {
    type: String,
  },
  dateOfHire: {
    type: Date,
  },
  positionName: {
    type: String,
  },
  salary: {
    type: String,
  },
  frequency: {
    type: String,
  },
  vacationPay: {
    type: Number,
  },
});

module.exports = {
  Employee: mongoose.model("Employee", employeeSchema),
  EmployeeInfo: mongoose.model("EmployeeInfo", employeeInfoSchema),
  EmployeeBankingInfo: mongoose.model(
    "EmployeeBankingInfo",
    employeeBankingInfoSchema
  ),
  EmployeeStatusAtCompany: mongoose.model(
    "EmployeeStatusAtCompany",
    employeeStatusAtCompanySchema
  ),
};
