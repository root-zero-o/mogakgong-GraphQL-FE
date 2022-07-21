import { makeVar } from "@apollo/client";

const userInfo = makeVar({});
const userValidation = makeVar(false);

export const addUser = ({
  input,
  isValid,
}: {
  input: string | number;
  isValid: boolean;
}) => {
  const valiadtionCheck = userValidation(isValid);
};

export default userInfo;
