// Test Suites
import { getUsersTestSuite } from "./get-users";
import { getUserDetailsTestSuite } from "./get-user-details";
import { getUserRepositoriesTestSuite } from "./get-user-repositories";

describe("GET api/users", () => {
    getUsersTestSuite();
    getUserDetailsTestSuite();
    getUserRepositoriesTestSuite();
});
