import md5 from 'md5';

class Role {
  constructor(name, role, runID) {
    this.id = md5(name + runID);
    this.name = name;
    this.role = role; //Might want to use an integer and switch statement
    this.runID = runID;
  }

}

module.exports = Role;