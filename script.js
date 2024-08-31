function isDate(input) {
  // If the input is already a Date object, return true
  if (input instanceof Date) {
    return true;
  }

  // If the input is a string, try to parse it into a Date object
  if (typeof input === 'string') {
    const date = new Date(input);
    return !isNaN(date.getTime());
  }

  // If the input is a number, assume it's a timestamp and try to create a Date object from it
  if (typeof input === 'number') {
    const date = new Date(input);
    return !isNaN(date.getTime());
  }

  // If the input is of any other type, return false
  return false;
}