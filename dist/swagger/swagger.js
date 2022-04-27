"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "42-jiphyoenjeon backend 튜토리얼",
            version: "0.1.0",
            description: "42-jiphyeonjeon web service, 튜토리얼",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "seongyle",
                url: "https://github.com/yeonseong-lee/",
                email: "yeonseong.dev@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000/",
            },
        ],
    },
    apis: ["./src/**/*.routes.ts"],
};
exports.default = swaggerOptions;
