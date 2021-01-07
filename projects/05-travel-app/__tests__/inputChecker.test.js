import {theTripChecker} from "../src/client/js/tripChecker";

describe("3 required files are not empty", ()=> {
    
    test("with two entries return falase", ()=> {
        let cityFrom = 'Madrid';
        let cityTo = 'Barcelona';
        let dateDep = '';
        expect(theTripChecker(cityFrom, cityTo, dateDep)).toBe(false);
    });

    test("with three entries return true", ()=> {
        let cityFrom = 'Madrid';
        let cityTo = 'Barcelona';
        let dateDep = '28/01/2021';
        expect(theTripChecker(cityFrom, cityTo, dateDep)).toBe(true);
    });
});

