import {describe, expect} from "@jest/globals";

const request = require("supertest");
const app = require("../src/server/server");

describe("root path", () => {
    test("response the get method", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.status).toBe(200);
                done();
            });
    });
});

