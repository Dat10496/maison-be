function checkAuthentication(data) {
  if (data !== "truongtritin") throw new Error("invalid password");
}

module.exports = checkAuthentication;
