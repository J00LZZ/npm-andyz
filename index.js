require("colors");
const { readFileSync } = require('fs');

const nodeJsErrorMessage = "echo \"Error: no test specified\" && exit 1";

console.log("Knock knock, Andy is here to test your tests!\n...".rainbow);

class ProductNotFinishedError extends Error {
    constructor(message) {
        super(message);
        this.name = "ProductNotFinishedError".rainbow;
    }
}

const notFinished = () => {
    throw new ProductNotFinishedError(`\nAndy Zaidman's voice echoed: "Testing is very important" Please specify a test file in package.json.\n`.rainbow);
}

const json = JSON.parse(readFileSync("package.json"));

if (json.scripts.test) {
    if (json.scripts.test == nodeJsErrorMessage) {
        notFinished();
    }
    console.log("Good job, you will not be fired from this course.".rainbow);
} else {
    notFinished();
}
