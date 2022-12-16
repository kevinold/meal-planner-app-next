import fs from "fs";
import { times } from "lodash/fp";
import { customAlphabet } from "nanoid";
import path from "path";
const nanoid = customAlphabet("1234567890abcdef", 10);

type User = {
  username: string;
  email: string;
};

const baseEmailUser = "kevinold";
const baseEmailDomain = "gmail.com";
const generateEmail = (slug?: string) =>
  `${baseEmailUser}+${slug}${nanoid(5)}@${baseEmailDomain}`;

export const createUser = (slug?: string): User => {
  const email = generateEmail(slug);

  return {
    username: email,
    email,
  };
};

// const createPrimaryUsers = () => times(() => createUser("primary"), 2);
// const createSecondaryUsers = () => times(() => createUser("secondary"), 2);
const createSignupUsers = () => times(() => createUser("signup"), 2);

const testSeed: User[] = createSignupUsers();

const fileData = JSON.stringify(testSeed, null, 2);

fs.writeFile(
  path.join(process.cwd(), "cypress/fixtures", "seedUsers.json"),
  fileData,
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("seed users generated");
  }
);
