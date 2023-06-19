module.exports = {
  format_date: (date) => {
    // Return the formatted date string in the format "month/day/year"
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  }
};
