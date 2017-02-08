const emailRexgExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const digitsRegExp = /^\d+$/;

export default {
  required: value => {
    return !!value;
  },
  minLength: (value, length) => {
    return !!value && value.length >= length;
  },
  digits: value => {
    return digitsRegExp.test(value);
  },
  email: value => {
    return emailRexgExp.test(value);
  }
};
