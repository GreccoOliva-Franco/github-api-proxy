// Test Suites
import { getUsersTestSuite } from "./get-users";
import { getUserDetailsTestSuite } from "./get-user-details";

describe("GET api/users", () => {
    getUsersTestSuite();
    getUserDetailsTestSuite();
});
