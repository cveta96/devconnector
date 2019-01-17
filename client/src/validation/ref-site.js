const refSite = value => {
  if ("h" === value[0]) {
    return value;
  } else {
    return "http://" + value;
  }
};
export default refSite;
