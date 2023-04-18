import fs from 'fs';

export const loginUserDb = async (values) => {
  let users = fs.readFileSync('db.json', 'utf8');

  try {
    users = JSON.parse(users);
  } catch (error) {
    // ignore
  }
  return users.find(user => user.email === values.email && user.password === values.password);
}

export const registerUserDb = async (values) => {
  let users = fs.readFileSync('db.json', 'utf8');

  try {
    users = JSON.parse(users);
  } catch (error) {
    // ignore
  }

  users.push(values);
  fs.writeFileSync('db.json', JSON.stringify(users));
  return ;
}

export const checkUserDb = async (values) => {
  let users = fs.readFileSync('db.json', 'utf8');

  try {
    users = JSON.parse(users);
  } catch (error) {
    // ignore
  }
  return (users.find(user => user.email === values.email).length > 0);
}