// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"

 
describe("Testing the submit functionality", () => {
    test("testing succes", () => {
        const input = "www.google.com";
        expect(handleSubmit).toBe(true);
    });
    test("testing error", () => {
        const input = "h o l a";
        expect(handleSubmit).toBe(false);
    });
});