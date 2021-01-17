const Department = require('../department.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Department', () => {
  
  it('should throw an error if no "name" arg', () => {
    const dep = new Department({}); // create new Department, but don't set `name` attr value
    dep.validate(err => {
      expect(err.errors.name).to.exist;
    });
  });

  it('should throw an error if "name" is not a string', () => {
    const cases = [{}, []];
      for(let name of cases) {
        const dep = new Department({ name });
        dep.validate(err => {
          expect(err.errors.name).to.exist;
      });
    }
  });

  it('should throw an error if the length of "name" is too short or too long', () => {
    const cases = ['Lore', 'Lorem ipsum dolor sit amet'];
      for(let name of cases) {
        const dep = new Department({ name });
        dep.validate(err => {
          expect(err.errors.name).to.exist;
      });
    }
  })

  it('should add new Department when "name" is correct',() => {
    const cases = ['Lorem', 'Lorem ipsum dolor si', 'Lorem ipsum'];
    for(let name of cases) {
      const dep = new Department({ name });
      dep.validate(err => {
        expect(err).to.not.exist;
      });
    }
  });
});

after(() => {
  mongoose.models = {};
});
