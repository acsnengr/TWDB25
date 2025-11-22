const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  console.log(`Salt is: ${salt}`);
  console.log(`Hashed Password is: ${hash}`);
};

const quickHashPassword = async (password) => {
  const hash1 = await bcrypt.hash(password, 12);
  console.log(`Hashed Password is: ${hash1}`);
};

const login = async (password, hashedPassword) => {
  const result = await bcrypt.compare(password, hashedPassword);
  if (result) {
    console.log("Logged you in");
  } else {
    console.log("Incorrect password");
  }
};

login(
  "mysecret",
  "$2b$10$uIc2htFbt7A4/hzPR4lVXupYWBomPcAwJRxg43VcEZhnBQOT2TzuS"
);
hashPassword("mysecret");
quickHashPassword("mysecret");
