export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }

    if (typeof students !== 'object') {
      throw new TypeError('Students must be an array of strings');
    }
    if (typeof students === 'object') {
      for (const i in students) {
        if (typeof i !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      }
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // _name
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // _legth
  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  // _students
  get students() {
    return this._students;
  }

  set students(value) {
    /*eslint-disable */

        if (typeof value !== 'object') {
            throw new TypeError('Students must be an array of strings');
        } else {
            for (const i in value) {
                if (typeof i !== 'string') {
                    throw new TypeError('Students must be an array of strings');
                }
                this._students = value;
            }
        }
    }
}