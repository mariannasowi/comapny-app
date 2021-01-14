const Employee = require('../employee.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Employee', () => {
  
  it('should throw an error if no args', () => {
    const emp = new Employee({});
    emp.validate(err => {
      expect(err.errors.firstName).to.exist;
      expect(err.errors.lastName).to.exist;
      expect(err.errors.department).to.exist;
    });
  });

  it('should throw an error if no "fistName" arg', () => {
    const emp = new Employee(
      {
        lastName: 'Lorem ipsum',
        department: '123456789',
      }
    );
    emp.validate(err => {
      expect(err.errors.firstName).to.exist;
    });
  });

  it('should throw an error if no "lastName" arg', () => {
    const emp = new Employee(
      {
        firstName: 'Lorem ipsum',
        department: '123456789',
      }
    );
    emp.validate(err => {
      expect(err.errors.lastName).to.exist;
    });
  });

  it('should throw an error if no "department" arg', () => {
    const emp = new Employee(
      {
        firstName: 'Lorem ipsum',
        lastName: 'Lorem ipsum',
      }
    );
    emp.validate(err => {
      expect(err.errors.department).to.exist;
    });
  });

  it('should not throw an error if all args are correct', () => {
    const emp = new Employee(
      {
        firstName: 'Lorem ipsum',
        lastName: 'Lorem ipsum',
        department: '123456789',
      }
    );
    emp.validate(err => {
      expect(err).to.not.exist;
    });
  });
});

after(() => {
  mongoose.models = {};
}); 
