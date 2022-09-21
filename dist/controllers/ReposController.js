"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const ConsumeController_1 = require("./ConsumeController");
//-------------------------
exports.default = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = req.params;
            axios_1.default
                .get(`${ConsumeController_1.url}/${user}/repos`)
                .then((response) => response.data)
                .then((data) => {
                const repos = data.map((repo) => {
                    return {
                        id: repo.id,
                        name: repo.name,
                        url: repo.url,
                        html_url: repo.html_url,
                        language: repo.language,
                    };
                });
                return res.json(repos);
            })
                .catch((error) => console.error(error));
        });
    },
};
