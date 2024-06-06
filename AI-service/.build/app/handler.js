"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const hello = (event) => {
    console.log(event);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            message: "Response from AI service",
            data: {},
        }),
    };
};
exports.hello = hello;
//# sourceMappingURL=handler.js.map