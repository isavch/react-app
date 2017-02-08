import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const disabled = '#ccc';

export const primary = '#2580d6';

export const warning = '#ff3d00';

export const success = '#00C853';

export const muiTheme = getMuiTheme({
  datePicker: {
    selectColor: primary
  },
  flatButton: {
    primaryTextColor: primary
  }
});
