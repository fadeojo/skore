/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const common_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
    common_1.Logger.log('Application started at http://localhost:3000');
}
bootstrap();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const app_controller_1 = __webpack_require__(4);
const graphql_1 = __webpack_require__(6);
const app_service_1 = __webpack_require__(5);
const config_1 = __webpack_require__(7);
const typeorm_1 = __webpack_require__(8);
const auth_1 = __webpack_require__(9);
const user_module_1 = __webpack_require__(22);
const profile_module_1 = __webpack_require__(26);
const mailer_1 = __webpack_require__(34);
const orm_config_1 = __webpack_require__(39);
const auth_config_1 = __webpack_require__(40);
const mailer_config_1 = __webpack_require__(41);
const appConfig = () => {
    if (process.env.NODE_ENV === 'test') {
        return { apolloServerConfig: {} };
    }
    return {
        apolloServerConfig: {
            introspection: true,
            playground: true,
        },
    };
};
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_1.AuthenticationMiddleware)
            .forRoutes({ path: '/', method: common_1.RequestMethod.POST });
        consumer
            .apply(auth_1.AuthenticationMiddleware)
            .forRoutes({ path: '/graphql', method: common_1.RequestMethod.POST });
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forFeature(auth_config_1.default),
            config_1.ConfigModule.forFeature(orm_config_1.default),
            config_1.ConfigModule.forFeature(mailer_config_1.default),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (config) => {
                    return Object.assign(Object.assign({}, config.get('database')), { autoLoadEntities: true });
                },
                inject: [config_1.ConfigService],
            }),
            auth_1.AuthModule,
            user_module_1.UserModule,
            graphql_1.GraphQLModule.forRoot(Object.assign({ autoSchemaFile: 'schema.gql', context: ({ req }) => {
                    return { req };
                } }, appConfig().apolloServerConfig)),
            profile_module_1.ProfileModule,
            mailer_1.MailerModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, config_1.ConfigService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(5);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = __webpack_require__(3);
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(18), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(11);
const auth_resolver_1 = __webpack_require__(12);
const config_1 = __webpack_require__(7);
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        providers: [auth_service_1.AuthService, auth_resolver_1.AuthResolver, config_1.ConfigService],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = __webpack_require__(3);
let AuthService = class AuthService {
};
AuthService = __decorate([
    common_1.Injectable()
], AuthService);
exports.AuthService = AuthService;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const axios_1 = __webpack_require__(13);
const querystring_1 = __webpack_require__(14);
const graphql_1 = __webpack_require__(6);
const config_1 = __webpack_require__(7);
const loginInput_1 = __webpack_require__(15);
const loginOutput_1 = __webpack_require__(16);
let AuthResolver = class AuthResolver {
    constructor(configService) {
        this.configService = configService;
    }
    async login(params) {
        const loginFormData = querystring_1.stringify({
            grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
            username: params.email,
            password: params.password,
            client_id: this.configService.get('auth').clientId,
            realm: this.configService.get('auth').realm,
        });
        try {
            const loginResponse = await axios_1.default.post(`${this.configService.get('auth').issuer}oauth/token`, loginFormData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
            return {
                access: loginResponse.data.access_token,
                id: loginResponse.data.id_token,
                scope: loginResponse.data.scope,
                expires: loginResponse.data.expires_in,
                type: loginResponse.data.token_type,
            };
        }
        catch (error) {
            throw error;
        }
    }
    hello() {
        return {
            access: '',
            id: '',
            scope: '',
            expires: 1,
            type: '',
        };
    }
};
__decorate([
    graphql_1.Mutation(() => loginOutput_1.LoginOutput),
    __param(0, graphql_1.Args('login')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof loginInput_1.LoginInput !== "undefined" && loginInput_1.LoginInput) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AuthResolver.prototype, "login", null);
__decorate([
    graphql_1.Query(() => loginOutput_1.LoginOutput),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_c = typeof loginOutput_1.LoginOutput !== "undefined" && loginOutput_1.LoginOutput) === "function" ? _c : Object)
], AuthResolver.prototype, "hello", null);
AuthResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [typeof (_d = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _d : Object])
], AuthResolver);
exports.AuthResolver = AuthResolver;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginInput = void 0;
const graphql_1 = __webpack_require__(6);
let LoginInput = class LoginInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], LoginInput.prototype, "email", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], LoginInput.prototype, "password", void 0);
LoginInput = __decorate([
    graphql_1.InputType()
], LoginInput);
exports.LoginInput = LoginInput;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginOutput = void 0;
const graphql_1 = __webpack_require__(6);
let LoginOutput = class LoginOutput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], LoginOutput.prototype, "access", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], LoginOutput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], LoginOutput.prototype, "scope", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], LoginOutput.prototype, "expires", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], LoginOutput.prototype, "type", void 0);
LoginOutput = __decorate([
    graphql_1.ObjectType()
], LoginOutput);
exports.LoginOutput = LoginOutput;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(6);
let AuthGuard = class AuthGuard {
    canActivate(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const graphqlContext = ctx.getContext();
        if (!!graphqlContext.req.user) {
            return true;
        }
        throw new common_1.HttpException({ message: 'unauthenticated' }, common_1.HttpStatus.UNAUTHORIZED);
    }
};
AuthGuard = __decorate([
    common_1.Injectable()
], AuthGuard);
exports.AuthGuard = AuthGuard;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationMiddleware = void 0;
const common_1 = __webpack_require__(3);
const jwt = __webpack_require__(19);
const jwks_rsa_1 = __webpack_require__(20);
const auth_config_1 = __webpack_require__(21);
const config_1 = __webpack_require__(7);
let AuthenticationMiddleware = class AuthenticationMiddleware {
    constructor(authConfiguration) {
        this.authConfiguration = authConfiguration;
    }
    use(req, res, next) {
        const { clientId, issuer, jwksUri } = this.authConfiguration;
        jwt({
            secret: jwks_rsa_1.expressJwtSecret({
                cache: false,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri,
            }),
            audience: clientId,
            issuer,
            algorithm: 'RS256',
        })(req, res, () => {
            next();
        });
    }
};
AuthenticationMiddleware = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(auth_config_1.default.KEY)),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigType !== "undefined" && config_1.ConfigType) === "function" ? _a : Object])
], AuthenticationMiddleware);
exports.AuthenticationMiddleware = AuthenticationMiddleware;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("jwks-rsa");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(7);
exports.default = config_1.registerAs('auth', () => ({
    jwksUri: process.env.LOGISTIC_JWKSURI,
    issuer: process.env.LOGISTIC_ISSUER,
    clientId: process.env.LOGISTIC_CLIENT_ID,
    clientSecret: process.env.LOGISTIC_CLIENT_SECRET,
    realm: process.env.LOGISTIC_REALM,
}));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = __webpack_require__(3);
const user_resolver_1 = __webpack_require__(23);
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        providers: [user_resolver_1.UserResolver],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const common_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(6);
const currentUser_decorator_1 = __webpack_require__(24);
const auth_1 = __webpack_require__(9);
const User_1 = __webpack_require__(25);
let UserResolver = class UserResolver {
    async getUser(user) {
        const newUser = new User_1.User(user);
        return newUser;
    }
};
__decorate([
    graphql_1.Query(() => User_1.User),
    __param(0, currentUser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UserResolver.prototype, "getUser", null);
UserResolver = __decorate([
    common_1.UseGuards(auth_1.AuthGuard),
    graphql_1.Resolver(() => User_1.User)
], UserResolver);
exports.UserResolver = UserResolver;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(6);
exports.CurrentUser = common_1.createParamDecorator((data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const graphql_1 = __webpack_require__(6);
let User = class User {
    constructor(user) {
        this.email = user.email;
        this.aud = user.aud;
        this.email_verified = user.email_verified;
        this.exp = user.exp;
        this.family_name = user.family_name;
        this.given_name = user.given_name;
        this.iat = user.iat;
        this.iss = user.iss;
        this.name = user.name;
        this.nickname = user.nickname;
        this.picture = user.picture;
        this.sub = user.sub;
        this.updated_at = user.updated_at;
    }
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "aud", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "email_verified", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], User.prototype, "exp", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "family_name", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "given_name", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], User.prototype, "iat", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "iss", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "nickname", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "picture", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "sub", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "updated_at", void 0);
User = __decorate([
    graphql_1.ObjectType(),
    __metadata("design:paramtypes", [User])
], User);
exports.User = User;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileModule = void 0;
const common_1 = __webpack_require__(3);
const profile_service_1 = __webpack_require__(27);
const typeorm_1 = __webpack_require__(8);
const profile_entity_1 = __webpack_require__(28);
const profile_resolver_1 = __webpack_require__(31);
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([profile_entity_1.Profile])],
        providers: [profile_service_1.ProfileService, profile_resolver_1.ProfileResolver],
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(8);
const profile_entity_1 = __webpack_require__(28);
const typeorm_2 = __webpack_require__(29);
let ProfileService = class ProfileService {
    constructor(profileReoisitory) {
        this.profileReoisitory = profileReoisitory;
    }
    async getProfile(id) {
        const profiles = await this.profileReoisitory.find({
            where: { userId: id },
            take: 1,
        });
        if (profiles.length > 0) {
            return profiles[0];
        }
        throw new common_1.NotFoundException(new Error(`profile not found for user with id:${id}`));
    }
    async createProfile(profileParams) {
        const profile = this.profileReoisitory.create(profileParams);
        return this.profileReoisitory.save(profile);
    }
    async updateProfile(profileParams, id) {
        const currentProfile = await this.getProfile(id);
        const preloadedProfile = await this.profileReoisitory.preload(Object.assign({ id: currentProfile.id }, profileParams));
        const profile = await this.profileReoisitory.save(preloadedProfile);
        return profile;
    }
    async deleteProfile(id) {
        const preloadedProfile = await this.getProfile(`${id}`);
        const deletedProfile = await this.profileReoisitory.softRemove(preloadedProfile);
        return deletedProfile;
    }
};
ProfileService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(profile_entity_1.Profile)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ProfileService);
exports.ProfileService = ProfileService;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = exports.Location = exports.AccountType = void 0;
const graphql_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(29);
const geojson_1 = __webpack_require__(30);
var AccountType;
(function (AccountType) {
    AccountType["SHIPPER"] = "shipper";
    AccountType["BROKER"] = "broker";
    AccountType["DRIVER"] = "driver";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
graphql_1.registerEnumType(AccountType, {
    name: 'AccountType',
    description: 'Account types',
});
let Location = class Location {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Location.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => [graphql_1.Float]),
    __metadata("design:type", Array)
], Location.prototype, "coordinates", void 0);
Location = __decorate([
    graphql_1.ObjectType()
], Location);
exports.Location = Location;
let Profile = class Profile {
    constructor(profile) {
        if (profile) {
            this.id = profile.id;
            this.userId = profile.userId;
            this.firstName = profile.firstName;
            this.lastName = profile.lastName;
            this.phone = profile.phone;
            this.businessName = profile.businessName;
            this.industry = profile.industry;
            this.accountType = profile.accountType;
            this.line = profile.line;
            this.lineAlt = profile.lineAlt;
            this.city = profile.city;
            this.state = profile.state;
            this.postalCode = profile.postalCode;
            this.placeId = profile.placeId;
            this.country = profile.country;
            this.location = profile.location;
            this.createdAt = profile.createdAt;
            this.updatedAt = profile.updatedAt;
            this.deletedAt = profile.deletedAt;
        }
    }
};
__decorate([
    graphql_1.Field(() => graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column({ name: 'user_id' }),
    __metadata("design:type", String)
], Profile.prototype, "userId", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column({ name: 'first_name' }),
    __metadata("design:type", String)
], Profile.prototype, "firstName", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column({ name: 'last_name' }),
    __metadata("design:type", String)
], Profile.prototype, "lastName", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Profile.prototype, "phone", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column({ name: 'business_name' }),
    __metadata("design:type", String)
], Profile.prototype, "businessName", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column({ name: 'industry' }),
    __metadata("design:type", String)
], Profile.prototype, "industry", void 0);
__decorate([
    graphql_1.Field(() => AccountType),
    typeorm_1.Column({ name: 'account_type' }),
    __metadata("design:type", String)
], Profile.prototype, "accountType", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.CreateDateColumn({
        type: 'timestamptz',
        name: 'created_at',
    }),
    __metadata("design:type", String)
], Profile.prototype, "createdAt", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz',
        name: 'updated_at',
    }),
    __metadata("design:type", String)
], Profile.prototype, "updatedAt", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    typeorm_1.DeleteDateColumn({
        type: 'timestamptz',
        name: 'deleted_at',
    }),
    __metadata("design:type", String)
], Profile.prototype, "deletedAt", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column({ name: 'line' }),
    __metadata("design:type", String)
], Profile.prototype, "line", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    typeorm_1.Column({ name: 'line_alt' }),
    __metadata("design:type", String)
], Profile.prototype, "lineAlt", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column({ name: 'city' }),
    __metadata("design:type", String)
], Profile.prototype, "city", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column({ name: 'state' }),
    __metadata("design:type", String)
], Profile.prototype, "state", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column({ name: 'postal_code' }),
    __metadata("design:type", String)
], Profile.prototype, "postalCode", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column({ name: 'place_id' }),
    __metadata("design:type", String)
], Profile.prototype, "placeId", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column({ name: 'country' }),
    __metadata("design:type", String)
], Profile.prototype, "country", void 0);
__decorate([
    graphql_1.Field(() => Location),
    typeorm_1.Column('geometry'),
    __metadata("design:type", typeof (_a = typeof geojson_1.Point !== "undefined" && geojson_1.Point) === "function" ? _a : Object)
], Profile.prototype, "location", void 0);
Profile = __decorate([
    typeorm_1.Entity(),
    graphql_1.ObjectType(),
    __metadata("design:paramtypes", [Profile])
], Profile);
exports.Profile = Profile;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("geojson");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileResolver = void 0;
const graphql_1 = __webpack_require__(6);
const auth_1 = __webpack_require__(9);
const common_1 = __webpack_require__(3);
const profile_entity_1 = __webpack_require__(28);
const profile_service_1 = __webpack_require__(27);
const currentUser_decorator_1 = __webpack_require__(24);
const User_1 = __webpack_require__(25);
const profile_dto_1 = __webpack_require__(32);
const exception_logger_filter_1 = __webpack_require__(33);
let ProfileResolver = class ProfileResolver {
    constructor(profileService) {
        this.profileService = profileService;
    }
    async getProfile(user) {
        const profile = await this.profileService.getProfile(user.sub.split('|')[1]);
        return profile;
    }
    async createProfile(params, user) {
        try {
            const createdProfile = await this.profileService.createProfile(Object.assign(Object.assign({}, params), { userId: user.sub.split('|')[1] }));
            if (createdProfile) {
                return createdProfile;
            }
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async updateProfile(user, params) {
        const profile = this.profileService.updateProfile(params, user.sub.split('|')[1]);
        return profile;
    }
    async deleteProfile(user) {
        const deleteResult = await this.profileService.deleteProfile(user.sub.split('|')[1]);
        return deleteResult;
    }
};
__decorate([
    common_1.UseGuards(auth_1.AuthGuard),
    graphql_1.Query(() => profile_entity_1.Profile),
    __param(0, currentUser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ProfileResolver.prototype, "getProfile", null);
__decorate([
    common_1.UseGuards(auth_1.AuthGuard),
    graphql_1.Mutation(() => profile_entity_1.Profile),
    __param(0, graphql_1.Args('profile')),
    __param(1, currentUser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof profile_dto_1.CreateProfileInput !== "undefined" && profile_dto_1.CreateProfileInput) === "function" ? _c : Object, typeof (_d = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ProfileResolver.prototype, "createProfile", null);
__decorate([
    common_1.UseGuards(auth_1.AuthGuard),
    graphql_1.Mutation(() => profile_entity_1.Profile),
    __param(0, currentUser_decorator_1.CurrentUser()),
    __param(1, graphql_1.Args('profile')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _f : Object, typeof (_g = typeof profile_dto_1.UpdateProfileInput !== "undefined" && profile_dto_1.UpdateProfileInput) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ProfileResolver.prototype, "updateProfile", null);
__decorate([
    common_1.UseGuards(auth_1.AuthGuard),
    graphql_1.Mutation(() => profile_entity_1.Profile),
    __param(0, currentUser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], ProfileResolver.prototype, "deleteProfile", null);
ProfileResolver = __decorate([
    common_1.UseFilters(new exception_logger_filter_1.ExceptionLoggerFilter()),
    graphql_1.Resolver('Profile'),
    __metadata("design:paramtypes", [typeof (_l = typeof profile_service_1.ProfileService !== "undefined" && profile_service_1.ProfileService) === "function" ? _l : Object])
], ProfileResolver);
exports.ProfileResolver = ProfileResolver;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProfileOutput = exports.UpdateProfileInput = exports.CreateProfileInput = exports.CreateProfileInputRepositoryDTO = exports.LocationInput = void 0;
const graphql_1 = __webpack_require__(6);
const profile_entity_1 = __webpack_require__(28);
const geojson_1 = __webpack_require__(30);
let LocationInput = class LocationInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], LocationInput.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => [graphql_1.Float]),
    __metadata("design:type", Array)
], LocationInput.prototype, "coordinates", void 0);
LocationInput = __decorate([
    graphql_1.InputType()
], LocationInput);
exports.LocationInput = LocationInput;
let CreateProfileInputRepositoryDTO = class CreateProfileInputRepositoryDTO {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateProfileInputRepositoryDTO.prototype, "firstName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateProfileInputRepositoryDTO.prototype, "userId", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateProfileInputRepositoryDTO.prototype, "lastName", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateProfileInputRepositoryDTO.prototype, "phone", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateProfileInputRepositoryDTO.prototype, "businessName", void 0);
__decorate([
    graphql_1.Field(() => profile_entity_1.AccountType),
    __metadata("design:type", typeof (_a = typeof profile_entity_1.AccountType !== "undefined" && profile_entity_1.AccountType) === "function" ? _a : Object)
], CreateProfileInputRepositoryDTO.prototype, "accountType", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateProfileInputRepositoryDTO.prototype, "industry", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateProfileInputRepositoryDTO.prototype, "line", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateProfileInputRepositoryDTO.prototype, "lineAlt", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateProfileInputRepositoryDTO.prototype, "city", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateProfileInputRepositoryDTO.prototype, "state", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateProfileInputRepositoryDTO.prototype, "postalCode", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateProfileInputRepositoryDTO.prototype, "placeId", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateProfileInputRepositoryDTO.prototype, "country", void 0);
__decorate([
    graphql_1.Field(() => LocationInput),
    __metadata("design:type", typeof (_b = typeof geojson_1.Point !== "undefined" && geojson_1.Point) === "function" ? _b : Object)
], CreateProfileInputRepositoryDTO.prototype, "location", void 0);
CreateProfileInputRepositoryDTO = __decorate([
    graphql_1.InputType()
], CreateProfileInputRepositoryDTO);
exports.CreateProfileInputRepositoryDTO = CreateProfileInputRepositoryDTO;
let CreateProfileInput = class CreateProfileInput extends graphql_1.OmitType(CreateProfileInputRepositoryDTO, ['userId']) {
};
CreateProfileInput = __decorate([
    graphql_1.InputType()
], CreateProfileInput);
exports.CreateProfileInput = CreateProfileInput;
let UpdateProfileInput = class UpdateProfileInput extends graphql_1.PartialType(CreateProfileInput) {
};
UpdateProfileInput = __decorate([
    graphql_1.InputType()
], UpdateProfileInput);
exports.UpdateProfileInput = UpdateProfileInput;
let DeleteProfileOutput = class DeleteProfileOutput {
    constructor(result) {
        this.result = result;
    }
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], DeleteProfileOutput.prototype, "result", void 0);
DeleteProfileOutput = __decorate([
    graphql_1.ObjectType(),
    __metadata("design:paramtypes", [String])
], DeleteProfileOutput);
exports.DeleteProfileOutput = DeleteProfileOutput;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionLoggerFilter = void 0;
const common_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(6);
let ExceptionLoggerFilter = class ExceptionLoggerFilter {
    catch(exception, host) {
        const gqlHost = graphql_1.GqlArgumentsHost.create(host);
        common_1.Logger.error(exception, exception.stack);
    }
};
ExceptionLoggerFilter = __decorate([
    common_1.Catch(common_1.HttpException)
], ExceptionLoggerFilter);
exports.ExceptionLoggerFilter = ExceptionLoggerFilter;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerModule = void 0;
const common_1 = __webpack_require__(3);
const mailer_service_1 = __webpack_require__(36);
const config_1 = __webpack_require__(7);
let MailerModule = class MailerModule {
};
MailerModule = __decorate([
    common_1.Module({
        providers: [mailer_service_1.MailerService, config_1.ConfigService],
        exports: [mailer_service_1.MailerService],
    })
], MailerModule);
exports.MailerModule = MailerModule;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerService = void 0;
const common_1 = __webpack_require__(3);
const nodemailer = __webpack_require__(37);
const mg = __webpack_require__(38);
const config_1 = __webpack_require__(7);
let MailerService = class MailerService {
    constructor(configService) {
        this.configService = configService;
    }
    async sendMail(options) {
        const mailgunAuth = {
            auth: {
                api_key: this.configService.get('mailer.apiKey'),
                domain: this.configService.get('mailer.domain'),
            },
        };
        const smtpTransport = nodemailer.createTransport(mg(mailgunAuth));
        const mailerResponse = await smtpTransport.sendMail(options);
        common_1.Logger.log(mailerResponse, 'skore.mailer');
        return mailerResponse;
    }
};
MailerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], MailerService);
exports.MailerService = MailerService;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("nodemailer-mailgun-transport");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(7);
let config = {};
const environments = {
    production: {
        type: 'postgres',
        url: process.env.DATABASE_URL || 5432,
        synchronize: false,
        logging: true,
        cli: {
            migrationsDir: 'src/migration',
            subscribersDir: 'dist/subscriber',
        },
        ssl: true,
    },
    test: {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'skore_test',
        synchronize: false,
        logging: false,
        entities: [`src/**/*.entity{.ts,.js}`],
        migrations: [`migration/**/*{.ts,.js}`],
        subscribers: [`src/subscriber/**/*{.ts,.js}`],
        cli: {
            migrationsDir: `${__dirname}/migration`,
            subscribersDir: 'src/subscriber',
        },
    },
};
if (process.env.NODE_ENV) {
    config = environments[process.env.NODE_ENV];
}
else {
    config = {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'skore_dev',
        synchronize: false,
        logging: true,
        migrations: [],
        subscribers: [`subscriber/**/*{.ts,.js}`],
        cli: {
            migrationsDir: `./migration`,
            subscribersDir: 'src/subscriber',
        },
    };
}
exports.default = config_1.registerAs('database', () => config);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(7);
exports.default = config_1.registerAs('auth', () => ({
    jwksUri: process.env.LOGISTIC_JWKSURI,
    issuer: process.env.LOGISTIC_ISSUER,
    clientId: process.env.LOGISTIC_CLIENT_ID,
    clientSecret: process.env.LOGISTIC_CLIENT_SECRET,
    realm: process.env.LOGISTIC_REALM,
}));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(7);
exports.default = config_1.registerAs('mailer', () => ({
    apiKey: process.env.MAILGUN_APIKEY,
    domain: process.env.MAILGUN_DOMAIN,
}));


/***/ })
/******/ ]);