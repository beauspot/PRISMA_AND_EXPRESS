"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const http_status_codes_1 = require("http-status-codes");
dotenv_1.default.config();
const Port = process.env.PORT || 4040;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).json({ message: "Welcome to the user Service" });
});
const StartServer = async () => {
    app.listen(Port, () => console.log(`Server listening on http:\//localhost:${Port}`));
};
StartServer();
