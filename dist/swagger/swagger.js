"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUiSetup = exports.swaggerUiServe = exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const options = {
    definition: { openapi: '3.0.0', info: { title: 'Marketplace API', version: '1.0.0' }, servers: [{ url: 'http://localhost:3000' }] },
    apis: ['./src/routes/*.ts', './src/controllers/*.ts']
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.swaggerUiServe = swagger_ui_express_1.default.serve;
exports.swaggerUiSetup = swagger_ui_express_1.default.setup(exports.swaggerSpec);
