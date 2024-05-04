export const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export const dateStringFormat = (date) => {
  const selectedDate = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return selectedDate.toLocaleDateString('en-US', options);
};
