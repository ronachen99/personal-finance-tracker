const dayjs = require('dayjs');

module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },

    format_month: (date) => {
        return dayjs(date).format('MMMM');
    }
  };