"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Main(d) {
    if (!d.hasUsage())
        return d.error("Invalid usage of Function!");
    const NaNumbers = d.unpack(d.unpacked).splits;
    const Result = NaNumbers.reduce((acc, str) => {
        return acc + Number(str);
    }, Number(NaNumbers.shift()));
    if (isNaN(Result))
        return d.error('Unexpected NaN from Result!');
    return Result;
}
exports.default = Main;
//# sourceMappingURL=sum.js.map