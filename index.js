console.log("Knock knock, Andy is here to test your tests!\n...")
const loadJsonFile = require('load-json-file');

class ProductNotFinishedError extends Error {
    constructor(message) {
        super(message);
        this.name = "ProductNotFinishedError";
    }
}

function notFinished() {
    throw new ProductNotFinishedError(`\nAndy Zaidman's voice echoed: "Testing is very important" Please specify a test file in package.json.\n`);
}

loadJsonFile('package.json').then(json => {
    if (json.scripts.test) {
        if (json.scripts.test == "echo \"Error: no test specified\" && exit 1") {
            notFinished()
        }
        console.log("Good job, you will not be fired from this course.")
    } else {
        notFinished()
    }
});