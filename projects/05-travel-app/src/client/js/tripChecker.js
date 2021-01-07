// checker function
function theTripChecker(cityFrom, cityTo, dateDep) {
    if (cityFrom == "" || cityTo == "" || dateDep == "") {
        return false;
    } else {
        return true;
    }
};

export {theTripChecker};