import { validateFields } from "../common/validator.js";
import { getLoginFields, getRegisterFields } from "../helpers/auth.helper.js";
import { checkUserDb, loginUserDb, registerUserDb } from "../modal/user.modal.js";

export const login = async (request, response) => {
  const { email, password } = request.body;

  const { required, optional } = getLoginFields();
  let invalidFieldsMessage = validateFields({ email, password }, required, optional);
  if (invalidFieldsMessage) {
    return response.status(400).json({ code:'ERROR', message: 'Invalid email or password' });
  }

  const userResponse = await loginUserDb({ email, password });

  if (!userResponse.length)
    return response.status(400).json({ code:'ERROR', message: 'Invalid email or password' });

  return response.status(200).json({ code:'SUCCESS', message: 'Login successful', data: userResponse[0] });
}

export const register = async (request, response) => {
  const { email, password, name } = request.body;

  const { required, optional } = getRegisterFields();
  let invalidFieldsMessage = validateFields({ email, password, name }, required, optional);
  if (invalidFieldsMessage) {
    return response.status(400).json({ code:'ERROR', message: invalidFieldsMessage });
  }

  if (await checkUserDb({ email }))
    return response.status(400).json({ code:'ERROR', message: 'Email already exists' });

  await registerUserDb({ email, password, name });
  return response.status(200).json({ code:'SUCCESS', message: 'Registration successful' });
}