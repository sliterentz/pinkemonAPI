/* eslint-disable require-jsdoc */

/**
 * Backend common error messages
 */
 class Message {
    /**
     * New message
     * @param {*} key
     * @param {*} value
     * @param {*} language
     * @param {*} code
     * @param {*} status
     */
    constructor(key, value, language, code, status) {
      this._key = key;
      this._value = value;
      this._language = language;
      this._code = code;
      this._status = status;
    }
  
    get key() {
      return this._key;
    }
    set key(key) {
      this._key = key;
    }
    get value() {
      return this._value;
    }
    set value(value) {
      this._value = value;
    }
    get language() {
      return this._language;
    }
    set language(language) {
      this._language = language;
    }
    get code() {
      return this._code;
    }
    set code(code) {
      this._code = code;
    }
    get status() {
      return this._status;
    }
    set status(status) {
      this._status = status;
    }
  
    toString() {
      return `(
        key : ${this._key}, 
        value : ${this._value} , 
        language : ${this._language},
        code: ${this._code},
        status : ${this._status}
      )`;
    }
  }
  
  export default Message;