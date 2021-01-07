// import the js file to test
import { checkForUrl } from "../src/client/js/urlChecker"
require("babel-core/register");
require("babel-polyfill");

// the test with http/https protocol in the URL
describe("testing the UI with and url protocol", () => {
    test("with https, everything ok", () => {
        const input = "https://www.lagloriavegana.com";
        expect(checkForUrl(input)).toBe(true);
    });
    test("with http, everything ok", () => {
        const input = "http://www.lagloriavegana.com";
        expect(checkForUrl(input)).toBe(true);
    });
});

// the test without http/https protocol in the URL
describe("testing without http protocol", () => {
    test("with only www, everything ok", () => {
        const input = "www.lagloriavegana.com";
        expect(checkForUrl(input)).toBe(true);
    });
    test("just adress.com, everything ok", () => {
        const input = "lagloriavegana.com";
        expect(checkForUrl(input)).toBe(true);
    });
    test("bad typing, error", () => {
        const input = "la gloria vegana . com";
        expect(checkForUrl(input)).toBe(false);
    });
});
