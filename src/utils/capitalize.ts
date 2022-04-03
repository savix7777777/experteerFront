const capitalize = (string: string) => {
  const separateString = string.toLowerCase().split(' ');

  for (let i = 0; i < separateString.length; i += 1) {
    separateString[i] =
      separateString[i].charAt(0).toUpperCase() +
      separateString[i].substring(1);
  }

  return separateString.join(' ');
};

export default capitalize;
