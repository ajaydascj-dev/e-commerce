const nameFormater = (name) => {
  const shortName = name.split("");
  return shortName[0].toUpperCase();
};

export default nameFormater;
