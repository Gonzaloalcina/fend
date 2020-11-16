// Import the js file to test
import { updateUI } from "../src/client/js/formHandler";

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

 
describe("Testing the submit functionality", () => {
    test("testing the updating of the UI", () => {
        const dom = new JSDOM(`<div id="UI"></div>`);
        const content = { 
            data.score_tag: "P",
        };
        const element = dom.window.document.getElementById("UI");

        updateUI(element,content);
        expect(element.innerHTML).toBe(`Polarity: P`);
    });
});