export const convertStatuses = (selectedStatus = {}) => {
  return Object.keys(selectedStatus).reduce((result, item) => {
    if (selectedStatus[item]) {
      result += `selectedStatus=${item}&`;
    }

    return result;
  }, '');
};

export const setParams = (queryParams, config) => {
  const options = {};

  queryParams.forEach(param => {
    if (config.hasOwnProperty(param) && config[param] !== '') {
      options[param] = config[param];
    }
  });

  return options;
};
