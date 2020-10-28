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
        url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost/logistic_dev',
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
        port: 5433,
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
        host: 'skore-db',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5lc3Rqcy9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5lc3Rqcy9jb21tb25cIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuZXN0anMvZ3JhcGhxbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuZXN0anMvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5lc3Rqcy90eXBlb3JtXCIiLCJ3ZWJwYWNrOi8vLy4vbGlicy9hdXRoL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWJzL2F1dGgvc3JjL2F1dGgubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2xpYnMvYXV0aC9zcmMvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2xpYnMvYXV0aC9zcmMvYXV0aC5yZXNvbHZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5c3RyaW5nXCIiLCJ3ZWJwYWNrOi8vLy4vbGlicy9hdXRoL3NyYy9kdG8vbG9naW5JbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9saWJzL2F1dGgvc3JjL2R0by9sb2dpbk91dHB1dC50cyIsIndlYnBhY2s6Ly8vLi9saWJzL2F1dGgvc3JjL2F1dGguZ3VhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vbGlicy9hdXRoL3NyYy9hdXRoLm1pZGRsZXdhcmUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1qd3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqd2tzLXJzYVwiIiwid2VicGFjazovLy8uL2xpYnMvYXV0aC9jb25maWcvYXV0aC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIvdXNlci5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIvdXNlci5yZXNvbHZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlci9jdXJyZW50VXNlci5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIvbW9kZWwvVXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9wcm9maWxlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9wcm9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2ZpbGUvcHJvZmlsZS5lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHlwZW9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdlb2pzb25cIiIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9wcm9maWxlLnJlc29sdmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9maWxlL2R0by9wcm9maWxlLmR0by50cyIsIndlYnBhY2s6Ly8vLi9saWJzL3Nrb3JlLWV4Y2VwdGlvbi9zcmMvZXhjZXB0aW9uLWxvZ2dlci5maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbGlicy9tYWlsZXIvc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL2xpYnMvbWFpbGVyL3NyYy9tYWlsZXIubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2xpYnMvbWFpbGVyL3NyYy9tYWlsZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlbWFpbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZW1haWxlci1tYWlsZ3VuLXRyYW5zcG9ydFwiIiwid2VicGFjazovLy8uL2NvbmZpZy9vcm0uY29uZmlnLnRzIiwid2VicGFjazovLy8uL2NvbmZpZy9hdXRoLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvbWFpbGVyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7O0FDbEZBLHNDQUEyQztBQUMzQyw0Q0FBeUM7QUFDekMsd0NBQXdDO0FBRXhDLEtBQUssVUFBVSxTQUFTO0lBQ3RCLE1BQU0sR0FBRyxHQUFHLE1BQU0sa0JBQVcsQ0FBQyxNQUFNLENBQUMsc0JBQVMsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixlQUFNLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUNELFNBQVMsRUFBRSxDQUFDOzs7Ozs7O0FDVFoseUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSx3Q0FBMkU7QUFDM0UsZ0RBQWlEO0FBQ2pELHlDQUFnRDtBQUNoRCw2Q0FBMkM7QUFDM0Msd0NBQTZEO0FBQzdELHlDQUFnRDtBQUNoRCxzQ0FBbUU7QUFDbkUsOENBQWdEO0FBQ2hELGlEQUF5RDtBQUN6RCx5Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDhDQUErQztBQUMvQyxnREFBbUQ7QUFTbkQsTUFBTSxTQUFTLEdBQUcsR0FBb0IsRUFBRTtJQUN0QyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtRQUNuQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDbkM7SUFDRCxPQUFPO1FBQ0wsa0JBQWtCLEVBQUU7WUFDbEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsVUFBVSxFQUFFLElBQUk7U0FDakI7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBZ0NGLElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7SUFDYixTQUFTLENBQUMsUUFBNEI7UUFDM0MsUUFBUTthQUNMLEtBQUssQ0FBQywrQkFBd0IsQ0FBQzthQUMvQixTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxzQkFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDeEQsUUFBUTthQUNMLEtBQUssQ0FBQywrQkFBd0IsQ0FBQzthQUMvQixTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxzQkFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNGO0FBVFksU0FBUztJQTlCckIsZUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ1AscUJBQVksQ0FBQyxVQUFVLENBQUMscUJBQVUsQ0FBQztZQUNuQyxxQkFBWSxDQUFDLFVBQVUsQ0FBQyxvQkFBUyxDQUFDO1lBQ2xDLHFCQUFZLENBQUMsVUFBVSxDQUFDLHVCQUFZLENBQUM7WUFDckMsdUJBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQ3pCLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7Z0JBQ3ZCLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBcUIsRUFBRSxFQUFFO29CQUMxQyx1Q0FDSyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUN6QixnQkFBZ0IsRUFBRSxJQUFJLElBQ3RCO2dCQUNKLENBQUM7Z0JBQ0QsTUFBTSxFQUFFLENBQUMsc0JBQWEsQ0FBQzthQUN4QixDQUFDO1lBQ0YsaUJBQVU7WUFDVix3QkFBVTtZQUNWLHVCQUFhLENBQUMsT0FBTyxpQkFDbkIsY0FBYyxFQUFFLFlBQVksRUFDNUIsT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO29CQUNuQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ2pCLENBQUMsSUFDRSxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsRUFDakM7WUFDRiw4QkFBYTtZQUNiLHFCQUFZO1NBQ2I7UUFDRCxXQUFXLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQzVCLFNBQVMsRUFBRSxDQUFDLHdCQUFVLEVBQUUsc0JBQWEsQ0FBQztLQUN2QyxDQUFDO0dBQ1csU0FBUyxDQVNyQjtBQVRZLDhCQUFTOzs7Ozs7O0FDL0R0QiwyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSx3Q0FBaUQ7QUFDakQsNkNBQTJDO0FBRzNDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFDeEIsWUFBNkIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7SUFHdkQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7QUFIQztJQURDLFlBQUcsRUFBRTs7Ozs2Q0FHTDtBQU5VLGFBQWE7SUFEekIsbUJBQVUsRUFBRTt5REFFOEIsd0JBQVUsb0JBQVYsd0JBQVU7R0FEeEMsYUFBYSxDQU96QjtBQVBZLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0oxQix3Q0FBNEM7QUFHNUMsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQUNyQixRQUFRO1FBQ04sT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztDQUNGO0FBSlksVUFBVTtJQUR0QixtQkFBVSxFQUFFO0dBQ0EsVUFBVSxDQUl0QjtBQUpZLGdDQUFVOzs7Ozs7O0FDSHZCLDRDOzs7Ozs7QUNBQSwyQzs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSwrQ0FBOEI7QUFDOUIsK0NBQStCO0FBQy9CLCtDQUE2QjtBQUM3QiwrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGxDLHdDQUF3QztBQUN4QywrQ0FBNkM7QUFDN0MsZ0RBQStDO0FBQy9DLHdDQUErQztBQU0vQyxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBQUc7QUFBYixVQUFVO0lBSnRCLGVBQU0sQ0FBQztRQUNOLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsNEJBQVksRUFBRSxzQkFBYSxDQUFDO1FBQ3JELE9BQU8sRUFBRSxDQUFDLDBCQUFXLENBQUM7S0FDdkIsQ0FBQztHQUNXLFVBQVUsQ0FBRztBQUFiLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1R2Qix3Q0FBNEM7QUFHNUMsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztDQUFHO0FBQWQsV0FBVztJQUR2QixtQkFBVSxFQUFFO0dBQ0EsV0FBVyxDQUFHO0FBQWQsa0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h4Qix3Q0FBMEI7QUFDMUIsOENBQXdDO0FBQ3hDLHlDQUFrRTtBQUNsRSx3Q0FBK0M7QUFDL0MsNkNBQThDO0FBQzlDLDhDQUFnRDtBQUdoRCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBQ3ZCLFlBQTZCLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUcsQ0FBQztJQUU3RCxLQUFLLENBQUMsS0FBSyxDQUFnQixNQUFrQjtRQUMzQyxNQUFNLGFBQWEsR0FBRyx1QkFBUyxDQUFDO1lBQzlCLFVBQVUsRUFBRSxrREFBa0Q7WUFDOUQsUUFBUSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUTtZQUNsRCxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSztTQUM1QyxDQUFDLENBQUM7UUFFSCxJQUFJO1lBQ0YsTUFBTSxhQUFhLEdBQUcsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUNwQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sYUFBYSxFQUNyRCxhQUFhLEVBQ2IsRUFBRSxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsbUNBQW1DLEVBQUUsRUFBRSxDQUNyRSxDQUFDO1lBRUYsT0FBTztnQkFDTCxNQUFNLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZO2dCQUN2QyxFQUFFLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRO2dCQUMvQixLQUFLLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUMvQixPQUFPLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVO2dCQUN0QyxJQUFJLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVO2FBQ3BDLENBQUM7U0FDSDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUM7U0FDYjtJQUNILENBQUM7SUFHRCxLQUFLO1FBQ0gsT0FBTztZQUNMLE1BQU0sRUFBRSxFQUFFO1lBQ1YsRUFBRSxFQUFFLEVBQUU7WUFDTixLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxDQUFDO1lBQ1YsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBdENDO0lBREMsa0JBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBVyxDQUFDO0lBQ2YseUJBQUksQ0FBQyxPQUFPLENBQUM7O3lEQUFTLHVCQUFVLG9CQUFWLHVCQUFVO3dEQUFHLE9BQU8sb0JBQVAsT0FBTzt5Q0EwQnREO0FBR0Q7SUFEQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQVcsQ0FBQzs7O3dEQUNoQix5QkFBVyxvQkFBWCx5QkFBVzt5Q0FRbkI7QUF4Q1UsWUFBWTtJQUR4QixrQkFBUSxFQUFFO3lEQUVtQyxzQkFBYSxvQkFBYixzQkFBYTtHQUQ5QyxZQUFZLENBeUN4QjtBQXpDWSxvQ0FBWTs7Ozs7OztBQ1J6QixrQzs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSx5Q0FBbUQ7QUFHbkQsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtDQUt0QjtBQUhDO0lBREMsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQzs7eUNBQ047QUFFZDtJQURDLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7OzRDQUNIO0FBSk4sVUFBVTtJQUR0QixtQkFBUyxFQUFFO0dBQ0MsVUFBVSxDQUt0QjtBQUxZLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h2Qix5Q0FBb0Q7QUFHcEQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztDQVd2QjtBQVRDO0lBREMsZUFBSyxFQUFFOzsyQ0FDTztBQUVmO0lBREMsZUFBSyxFQUFFOzt1Q0FDRztBQUVYO0lBREMsZUFBSyxFQUFFOzswQ0FDTTtBQUVkO0lBREMsZUFBSyxFQUFFOzs0Q0FDUTtBQUVoQjtJQURDLGVBQUssRUFBRTs7eUNBQ0s7QUFWRixXQUFXO0lBRHZCLG9CQUFVLEVBQUU7R0FDQSxXQUFXLENBV3ZCO0FBWFksa0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHhCLHdDQU13QjtBQUN4Qix5Q0FBc0Q7QUFHdEQsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztJQUNwQixXQUFXLENBQUMsT0FBeUI7UUFDbkMsTUFBTSxHQUFHLEdBQUcsNkJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsTUFBTSxJQUFJLHNCQUFhLENBQ3JCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLEVBQzlCLG1CQUFVLENBQUMsWUFBWSxDQUN4QixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBWlksU0FBUztJQURyQixtQkFBVSxFQUFFO0dBQ0EsU0FBUyxDQVlyQjtBQVpZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWdEIsd0NBQW9FO0FBQ3BFLG9DQUFtQztBQUNuQywyQ0FBNEM7QUFDNUMsOENBQStDO0FBQy9DLHdDQUE0QztBQUc1QyxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQUNuQyxZQUVtQixpQkFBZ0Q7UUFBaEQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUErQjtJQUNoRSxDQUFDO0lBRUosR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUNoQixNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDN0QsR0FBRyxDQUFDO1lBQ0YsTUFBTSxFQUFFLDJCQUFnQixDQUFDO2dCQUN2QixLQUFLLEVBQUUsS0FBSztnQkFDWixTQUFTLEVBQUUsSUFBSTtnQkFDZixxQkFBcUIsRUFBRSxDQUFDO2dCQUN4QixPQUFPO2FBQ1IsQ0FBQztZQUNGLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE1BQU07WUFDTixTQUFTLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7WUFDaEIsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXRCWSx3QkFBd0I7SUFEcEMsbUJBQVUsRUFBRTtJQUdSLDBCQUFNLENBQUMscUJBQVUsQ0FBQyxHQUFHLENBQUM7eURBQ2EsbUJBQVUsb0JBQVYsbUJBQVU7R0FIckMsd0JBQXdCLENBc0JwQztBQXRCWSw0REFBd0I7Ozs7Ozs7QUNQckMsd0M7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7QUNBQSx3Q0FBNEM7QUFTNUMsa0JBQWUsbUJBQVUsQ0FDdkIsTUFBTSxFQUNOLEdBQWUsRUFBRSxDQUFDLENBQUM7SUFDakIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCO0lBQ3JDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWU7SUFDbkMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCO0lBQ3hDLFlBQVksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQjtJQUNoRCxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjO0NBQ2xDLENBQUMsQ0FDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRix3Q0FBd0M7QUFDeEMsZ0RBQStDO0FBSy9DLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7Q0FBRztBQUFiLFVBQVU7SUFIdEIsZUFBTSxDQUFDO1FBQ04sU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csVUFBVSxDQUFHO0FBQWIsZ0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ052Qix3Q0FBMkM7QUFDM0MseUNBQWtEO0FBQ2xELHdEQUFzRDtBQUN0RCxzQ0FBd0M7QUFDeEMsdUNBQW9DO0FBSXBDLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFFdkIsS0FBSyxDQUFDLE9BQU8sQ0FBZ0IsSUFBVTtRQUNyQyxNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0Y7QUFKQztJQURDLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFJLENBQUM7SUFDSCw4Q0FBVyxFQUFFOzt5REFBTyxXQUFJLG9CQUFKLFdBQUk7d0RBQUcsT0FBTyxvQkFBUCxPQUFPOzJDQUdoRDtBQUxVLFlBQVk7SUFGeEIsa0JBQVMsQ0FBQyxnQkFBUyxDQUFDO0lBQ3BCLGtCQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBSSxDQUFDO0dBQ1IsWUFBWSxDQU14QjtBQU5ZLG9DQUFZOzs7Ozs7Ozs7OztBQ1J6Qix3Q0FBd0U7QUFDeEUseUNBQXNEO0FBRXpDLG1CQUFXLEdBQUcsNkJBQW9CLENBQzdDLENBQUMsSUFBYSxFQUFFLE9BQXlCLEVBQUUsRUFBRTtJQUMzQyxNQUFNLEdBQUcsR0FBRyw2QkFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsT0FBTyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUNuQyxDQUFDLENBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRix5Q0FBb0Q7QUFHcEQsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSTtJQXdDZixZQUFZLElBQVU7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3BDLENBQUM7Q0FDRjtBQXJEQztJQURDLGVBQUssRUFBRTs7bUNBQ007QUFHZDtJQURDLGVBQUssRUFBRTs7aUNBQ0k7QUFHWjtJQURDLGVBQUssRUFBRTs7NENBQ2lCO0FBR3pCO0lBREMsZUFBSyxFQUFFOztpQ0FDSTtBQUdaO0lBREMsZUFBSyxFQUFFOzt5Q0FDYztBQUd0QjtJQURDLGVBQUssRUFBRTs7d0NBQ2E7QUFHckI7SUFEQyxlQUFLLEVBQUU7O2lDQUNJO0FBR1o7SUFEQyxlQUFLLEVBQUU7O2lDQUNJO0FBR1o7SUFEQyxlQUFLLEVBQUU7O2tDQUNLO0FBR2I7SUFEQyxlQUFLLEVBQUU7O3NDQUNTO0FBR2pCO0lBREMsZUFBSyxFQUFFOztxQ0FDUTtBQUdoQjtJQURDLGVBQUssRUFBRTs7aUNBQ0k7QUFHWjtJQURDLGVBQUssRUFBRTs7d0NBQ2E7QUF0Q1YsSUFBSTtJQURoQixvQkFBVSxFQUFFO3FDQXlDTyxJQUFJO0dBeENYLElBQUksQ0F1RGhCO0FBdkRZLG9CQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hqQix3Q0FBd0M7QUFDeEMsa0RBQW1EO0FBQ25ELHlDQUFnRDtBQUNoRCxpREFBMkM7QUFDM0MsbURBQXFEO0FBTXJELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7Q0FBRztBQUFoQixhQUFhO0lBSnpCLGVBQU0sQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLHVCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsd0JBQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxrQ0FBZSxDQUFDO0tBQzdDLENBQUM7R0FDVyxhQUFhLENBQUc7QUFBaEIsc0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1YxQix3Q0FBdUU7QUFDdkUseUNBQW1EO0FBQ25ELGlEQUEyQztBQUMzQywwQ0FBcUM7QUFPckMsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUN6QixZQUVtQixpQkFBc0M7UUFBdEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtJQUN0RCxDQUFDO0lBRUosS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFVO1FBQ3pCLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUNqRCxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1lBQ3JCLElBQUksRUFBRSxDQUFDO1NBQ1IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtRQUNELE1BQU0sSUFBSSwwQkFBaUIsQ0FDekIsSUFBSSxLQUFLLENBQUMsc0NBQXNDLEVBQUUsRUFBRSxDQUFDLENBQ3RELENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FDakIsYUFBOEM7UUFFOUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhLENBQ2pCLGFBQWlDLEVBQ2pDLEVBQVU7UUFFVixNQUFNLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakQsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLGlCQUMzRCxFQUFFLEVBQUUsY0FBYyxDQUFDLEVBQUUsSUFDbEIsYUFBYSxFQUNoQixDQUFDO1FBQ0gsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEUsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBVTtRQUM1QixNQUFNLGdCQUFnQixHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsTUFBTSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUM1RCxnQkFBZ0IsQ0FDakIsQ0FBQztRQUNGLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQTlDWSxjQUFjO0lBRDFCLG1CQUFVLEVBQUU7SUFHUixxQ0FBZ0IsQ0FBQyx3QkFBTyxDQUFDO3lEQUNVLG9CQUFVLG9CQUFWLG9CQUFVO0dBSHJDLGNBQWMsQ0E4QzFCO0FBOUNZLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWM0IseUNBTXlCO0FBQ3pCLDBDQU9pQjtBQUNqQiwwQ0FBZ0M7QUFFaEMsSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ3JCLGtDQUFtQjtJQUNuQixnQ0FBaUI7SUFDakIsZ0NBQWlCO0FBQ25CLENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QjtBQUVELDBCQUFnQixDQUFDLFdBQVcsRUFBRTtJQUM1QixJQUFJLEVBQUUsYUFBYTtJQUNuQixXQUFXLEVBQUUsZUFBZTtDQUM3QixDQUFDLENBQUM7QUFHSCxJQUFhLFFBQVEsR0FBckIsTUFBYSxRQUFRO0NBTXBCO0FBSkM7SUFEQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDOztzQ0FDTjtBQUdkO0lBREMsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsZUFBSyxDQUFDLENBQUM7OzZDQUNDO0FBTFgsUUFBUTtJQURwQixvQkFBVSxFQUFFO0dBQ0EsUUFBUSxDQU1wQjtBQU5ZLDRCQUFRO0FBVXJCLElBQWEsT0FBTyxHQUFwQixNQUFhLE9BQU87SUFzRmxCLFlBQVksT0FBaUI7UUFDM0IsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDcEM7SUFDSCxDQUFDO0NBQ0Y7QUExR0M7SUFGQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBRSxDQUFDO0lBQ2YsZ0NBQXNCLEVBQUU7O21DQUNkO0FBSVg7SUFGQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ25CLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7O3VDQUNiO0FBSWY7SUFGQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ25CLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUM7OzBDQUNiO0FBSWxCO0lBRkMsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNuQixnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDOzt5Q0FDYjtBQUlqQjtJQUZDLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbkIsZ0JBQU0sRUFBRTs7c0NBQ0s7QUFJZDtJQUZDLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbkIsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsQ0FBQzs7NkNBQ2I7QUFJckI7SUFGQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ25CLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7O3lDQUNaO0FBSWpCO0lBRkMsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQztJQUN4QixnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDOzs0Q0FDUjtBQU96QjtJQUxDLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbkIsMEJBQWdCLENBQUM7UUFDaEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsSUFBSSxFQUFFLFlBQVk7S0FDbkIsQ0FBQzs7MENBQ2dCO0FBT2xCO0lBTEMsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNuQiwwQkFBZ0IsQ0FBQztRQUNoQixJQUFJLEVBQUUsYUFBYTtRQUNuQixJQUFJLEVBQUUsWUFBWTtLQUNuQixDQUFDOzswQ0FDZ0I7QUFPbEI7SUFMQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3ZDLDBCQUFnQixDQUFDO1FBQ2hCLElBQUksRUFBRSxhQUFhO1FBQ25CLElBQUksRUFBRSxZQUFZO0tBQ25CLENBQUM7OzBDQUNnQjtBQUlsQjtJQUZDLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbkIsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7cUNBQ1o7QUFJYjtJQUZDLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDdkMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQzs7d0NBQ1o7QUFJakI7SUFGQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ25CLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7O3FDQUNaO0FBSWI7SUFGQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ25CLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7O3NDQUNaO0FBSWQ7SUFGQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ25CLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUM7OzJDQUNiO0FBSW5CO0lBRkMsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNuQixnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDOzt3Q0FDYjtBQUloQjtJQUZDLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbkIsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7d0NBQ1o7QUFJaEI7SUFGQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQ3JCLGdCQUFNLENBQUMsVUFBVSxDQUFDO2tEQUNULGVBQUssb0JBQUwsZUFBSzt5Q0FBQztBQXBGTCxPQUFPO0lBRm5CLGdCQUFNLEVBQUU7SUFDUixvQkFBVSxFQUFFO3FDQXVGVyxPQUFPO0dBdEZsQixPQUFPLENBNkduQjtBQTdHWSwwQkFBTzs7Ozs7OztBQ3ZDcEIsb0M7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHlDQUFrRTtBQUNsRSxzQ0FBd0M7QUFDeEMsd0NBQStEO0FBQy9ELGlEQUEyQztBQUMzQyxrREFBbUQ7QUFDbkQsd0RBQTREO0FBQzVELHVDQUEwQztBQUMxQyw4Q0FBMkU7QUFDM0UsMERBQXVGO0FBSXZGLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsWUFBNkIsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQztJQUkvRCxLQUFLLENBQUMsVUFBVSxDQUFnQixJQUFVO1FBQ3hDLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN2QixDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUlELEtBQUssQ0FBQyxhQUFhLENBQ0EsTUFBMEIsRUFDNUIsSUFBVTtRQUV6QixJQUFJO1lBQ0YsTUFBTSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsaUNBQ3pELE1BQU0sS0FDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQzlCLENBQUM7WUFDSCxJQUFJLGNBQWMsRUFBRTtnQkFDbEIsT0FBTyxjQUFjLENBQUM7YUFDdkI7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsZUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixNQUFNLEtBQUssQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUlELEtBQUssQ0FBQyxhQUFhLENBQ0YsSUFBVSxFQUNSLE1BQTBCO1FBRTNDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUMvQyxNQUFNLEVBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3ZCLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBSUQsS0FBSyxDQUFDLGFBQWEsQ0FBZ0IsSUFBVTtRQUMzQyxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDdkIsQ0FBQztRQUNGLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQWhEQztJQUZDLGtCQUFTLENBQUMsZ0JBQVMsQ0FBQztJQUNwQixlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsd0JBQU8sQ0FBQztJQUNILDhDQUFXLEVBQUU7O3lEQUFPLFdBQUksb0JBQUosV0FBSTt3REFBRyxPQUFPLG9CQUFQLE9BQU87aURBS25EO0FBSUQ7SUFGQyxrQkFBUyxDQUFDLGdCQUFTLENBQUM7SUFDcEIsa0JBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBTyxDQUFDO0lBRXJCLHlCQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2YsOENBQVcsRUFBRTs7eURBRFcsZ0NBQWtCLG9CQUFsQixnQ0FBa0Isb0RBQ3RCLFdBQUksb0JBQUosV0FBSTt3REFDeEIsT0FBTyxvQkFBUCxPQUFPO29EQWFUO0FBSUQ7SUFGQyxrQkFBUyxDQUFDLGdCQUFTLENBQUM7SUFDcEIsa0JBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBTyxDQUFDO0lBRXJCLDhDQUFXLEVBQUU7SUFDYix5QkFBSSxDQUFDLFNBQVMsQ0FBQzs7eURBREssV0FBSSxvQkFBSixXQUFJLG9EQUNBLGdDQUFrQixvQkFBbEIsZ0NBQWtCO3dEQUMxQyxPQUFPLG9CQUFQLE9BQU87b0RBTVQ7QUFJRDtJQUZDLGtCQUFTLENBQUMsZ0JBQVMsQ0FBQztJQUNwQixrQkFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUFPLENBQUM7SUFDSCw4Q0FBVyxFQUFFOzt5REFBTyxXQUFJLG9CQUFKLFdBQUk7d0RBQUcsT0FBTyxvQkFBUCxPQUFPO29EQUt0RDtBQXBEVSxlQUFlO0lBRjNCLG1CQUFVLENBQUMsSUFBSSwrQ0FBcUIsRUFBRSxDQUFDO0lBQ3ZDLGtCQUFRLENBQUMsU0FBUyxDQUFDO3lEQUUyQixnQ0FBYyxvQkFBZCxnQ0FBYztHQURoRCxlQUFlLENBcUQzQjtBQXJEWSwwQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjVCLHlDQU95QjtBQUN6QixpREFBZ0Q7QUFDaEQsMENBQWdDO0FBR2hDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7Q0FNekI7QUFKQztJQURDLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7OzJDQUNOO0FBR2Q7SUFEQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxlQUFLLENBQUMsQ0FBQzs7a0RBQ0M7QUFMWCxhQUFhO0lBRHpCLG1CQUFTLEVBQUU7R0FDQyxhQUFhLENBTXpCO0FBTlksc0NBQWE7QUFTMUIsSUFBYSwrQkFBK0IsR0FBNUMsTUFBYSwrQkFBK0I7Q0E2QzNDO0FBM0NDO0lBREMsZUFBSyxFQUFFOztrRUFDVTtBQUdsQjtJQURDLGVBQUssRUFBRTs7K0RBQ087QUFHZjtJQURDLGVBQUssRUFBRTs7aUVBQ1M7QUFHakI7SUFEQyxlQUFLLEVBQUU7OzhEQUNNO0FBR2Q7SUFEQyxlQUFLLEVBQUU7O3FFQUNhO0FBR3JCO0lBREMsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLDRCQUFXLENBQUM7a0RBQ1osNEJBQVcsb0JBQVgsNEJBQVc7b0VBQUM7QUFHekI7SUFEQyxlQUFLLEVBQUU7O2lFQUNTO0FBR2pCO0lBREMsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQzs7NkRBQ1A7QUFHYjtJQURDLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O2dFQUN2QjtBQUdqQjtJQURDLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7OzZEQUNQO0FBR2I7SUFEQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDOzs4REFDTjtBQUdkO0lBREMsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQzs7bUVBQ0Q7QUFHbkI7SUFEQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDOztnRUFDSjtBQUdoQjtJQURDLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7O2dFQUNKO0FBR2hCO0lBREMsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztrREFDakIsZUFBSyxvQkFBTCxlQUFLO2lFQUFDO0FBNUNMLCtCQUErQjtJQUQzQyxtQkFBUyxFQUFFO0dBQ0MsK0JBQStCLENBNkMzQztBQTdDWSwwRUFBK0I7QUFnRDVDLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQW1CLFNBQVEsa0JBQVEsQ0FDOUMsK0JBQStCLEVBQy9CLENBQUMsUUFBUSxDQUFVLENBQ3BCO0NBQUc7QUFIUyxrQkFBa0I7SUFEOUIsbUJBQVMsRUFBRTtHQUNDLGtCQUFrQixDQUczQjtBQUhTLGdEQUFrQjtBQU0vQixJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLHFCQUFXLENBQUMsa0JBQWtCLENBQUM7Q0FBRztBQUE3RCxrQkFBa0I7SUFEOUIsbUJBQVMsRUFBRTtHQUNDLGtCQUFrQixDQUEyQztBQUE3RCxnREFBa0I7QUFHL0IsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFJOUIsWUFBWSxNQUFjO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjtBQUxDO0lBREMsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQzs7bURBQ2I7QUFGSSxtQkFBbUI7SUFEL0Isb0JBQVUsRUFBRTs7R0FDQSxtQkFBbUIsQ0FPL0I7QUFQWSxrREFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVoQyx3Q0FBNkU7QUFDN0UseUNBQXVFO0FBR3ZFLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBQ2hDLEtBQUssQ0FBQyxTQUF3QixFQUFFLElBQW1CO1FBQ2pELE1BQU0sT0FBTyxHQUFHLDBCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxlQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNGO0FBTFkscUJBQXFCO0lBRGpDLGNBQUssQ0FBQyxzQkFBYSxDQUFDO0dBQ1IscUJBQXFCLENBS2pDO0FBTFksc0RBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0psQywrQ0FBZ0M7QUFDaEMsK0NBQWlDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RqQyx3Q0FBd0M7QUFDeEMsaURBQWlEO0FBQ2pELHdDQUErQztBQU0vQyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0NBQUc7QUFBZixZQUFZO0lBSnhCLGVBQU0sQ0FBQztRQUNOLFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsc0JBQWEsQ0FBQztRQUN6QyxPQUFPLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO0tBQ3pCLENBQUM7R0FDVyxZQUFZLENBQUc7QUFBZixvQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnpCLHdDQUFvRDtBQUNwRCwyQ0FBeUM7QUFDekMsbUNBQW1EO0FBQ25ELHdDQUErQztBQWdCL0MsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUN4QixZQUE2QixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFHLENBQUM7SUFFN0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFvQjtRQUNqQyxNQUFNLFdBQVcsR0FBRztZQUNsQixJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztnQkFDaEQsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQzthQUNoRDtTQUNGLENBQUM7UUFFRixNQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRWxFLE1BQU0sY0FBYyxHQUFtQixNQUFNLGFBQWEsQ0FBQyxRQUFRLENBQ2pFLE9BQU8sQ0FDUixDQUFDO1FBQ0YsZUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDM0MsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztDQUNGO0FBbkJZLGFBQWE7SUFEekIsbUJBQVUsRUFBRTt5REFFaUMsc0JBQWEsb0JBQWIsc0JBQWE7R0FEOUMsYUFBYSxDQW1CekI7QUFuQlksc0NBQWE7Ozs7Ozs7QUNuQjFCLHVDOzs7Ozs7QUNBQSx5RDs7Ozs7Ozs7O0FDQ0Esd0NBQTRDO0FBTzVDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixNQUFNLFlBQVksR0FBRztJQUNuQixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsVUFBVTtRQUNoQixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksdURBQXVEO1FBQ3hGLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsR0FBRyxFQUFFO1lBQ0gsYUFBYSxFQUFFLGVBQWU7WUFDOUIsY0FBYyxFQUFFLGlCQUFpQjtTQUNsQztRQUNELEdBQUcsRUFBRSxJQUFJO0tBQ1Y7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsVUFBVTtRQUNoQixJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLENBQUMsMEJBQTBCLENBQUM7UUFDdEMsVUFBVSxFQUFFLENBQUMseUJBQXlCLENBQUM7UUFDdkMsV0FBVyxFQUFFLENBQUMsOEJBQThCLENBQUM7UUFDN0MsR0FBRyxFQUFFO1lBQ0gsYUFBYSxFQUFFLEdBQUcsU0FBUyxZQUFZO1lBQ3ZDLGNBQWMsRUFBRSxnQkFBZ0I7U0FDakM7S0FDRjtDQUNGLENBQUM7QUFFRixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO0lBQ3hCLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUM3QztLQUFNO0lBQ0wsTUFBTSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLElBQUk7UUFDVixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsSUFBSTtRQUNiLFVBQVUsRUFBRSxFQUFFO1FBQ2QsV0FBVyxFQUFFLENBQUMsMEJBQTBCLENBQUM7UUFDekMsR0FBRyxFQUFFO1lBQ0gsYUFBYSxFQUFFLGFBQWE7WUFDNUIsY0FBYyxFQUFFLGdCQUFnQjtTQUNqQztLQUNGLENBQUM7Q0FDSDtBQUVELGtCQUFlLG1CQUFVLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDN0RwRCx3Q0FBNEM7QUFTNUMsa0JBQWUsbUJBQVUsQ0FDdkIsTUFBTSxFQUNOLEdBQWUsRUFBRSxDQUFDLENBQUM7SUFDakIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCO0lBQ3JDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWU7SUFDbkMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCO0lBQ3hDLFlBQVksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQjtJQUNoRCxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjO0NBQ2xDLENBQUMsQ0FDSCxDQUFDOzs7Ozs7Ozs7O0FDbEJGLHdDQUE0QztBQU81QyxrQkFBZSxtQkFBVSxDQUN2QixRQUFRLEVBQ1IsR0FBaUIsRUFBRSxDQUFDLENBQUM7SUFDbkIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYztJQUNsQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjO0NBQ25DLENBQUMsQ0FDSCxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBOZXN0RmFjdG9yeSB9IGZyb20gJ0BuZXN0anMvY29yZSc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGNvbnN0IGFwcCA9IGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZShBcHBNb2R1bGUpO1xuICBhd2FpdCBhcHAubGlzdGVuKDMwMDApO1xuICBMb2dnZXIubG9nKCdBcHBsaWNhdGlvbiBzdGFydGVkIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xufVxuYm9vdHN0cmFwKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvcmVcIik7IiwiaW1wb3J0IHsgTW9kdWxlLCBNaWRkbGV3YXJlQ29uc3VtZXIsIFJlcXVlc3RNZXRob2QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSAnLi9hcHAuY29udHJvbGxlcic7XG5pbXBvcnQgeyBHcmFwaFFMTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9ncmFwaHFsJztcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuL2FwcC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IFR5cGVPcm1Nb2R1bGUgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSwgQXV0aGVudGljYXRpb25NaWRkbGV3YXJlIH0gZnJvbSAnQHNrb3JlL2F1dGgnO1xuaW1wb3J0IHsgVXNlck1vZHVsZSB9IGZyb20gJy4vdXNlci91c2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9maWxlTW9kdWxlIH0gZnJvbSAnLi9wcm9maWxlL3Byb2ZpbGUubW9kdWxlJztcbmltcG9ydCB7IE1haWxlck1vZHVsZSB9IGZyb20gJ0Bza29yZS9tYWlsZXInO1xuaW1wb3J0IG9ybUNvbmZpZyBmcm9tICcuLi9jb25maWcvb3JtLmNvbmZpZyc7XG5pbXBvcnQgYXV0aENvbmZpZyBmcm9tICcuLi9jb25maWcvYXV0aC5jb25maWcnO1xuaW1wb3J0IG1haWxlckNvbmZpZyBmcm9tICcuLi9jb25maWcvbWFpbGVyLmNvbmZpZyc7XG5cbmludGVyZmFjZSBhcHBDb25maWdSZXN1bHQge1xuICBhcG9sbG9TZXJ2ZXJDb25maWc6IHtcbiAgICBpbnRyb3NwZWN0aW9uPzogYm9vbGVhbjtcbiAgICBwbGF5Z3JvdW5kPzogYm9vbGVhbjtcbiAgfTtcbn1cblxuY29uc3QgYXBwQ29uZmlnID0gKCk6IGFwcENvbmZpZ1Jlc3VsdCA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSB7XG4gICAgcmV0dXJuIHsgYXBvbGxvU2VydmVyQ29uZmlnOiB7fSB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgYXBvbGxvU2VydmVyQ29uZmlnOiB7XG4gICAgICBpbnRyb3NwZWN0aW9uOiB0cnVlLFxuICAgICAgcGxheWdyb3VuZDogdHJ1ZSxcbiAgICB9LFxuICB9O1xufTtcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUuZm9yRmVhdHVyZShhdXRoQ29uZmlnKSxcbiAgICBDb25maWdNb2R1bGUuZm9yRmVhdHVyZShvcm1Db25maWcpLFxuICAgIENvbmZpZ01vZHVsZS5mb3JGZWF0dXJlKG1haWxlckNvbmZpZyksXG4gICAgVHlwZU9ybU1vZHVsZS5mb3JSb290QXN5bmMoe1xuICAgICAgaW1wb3J0czogW0NvbmZpZ01vZHVsZV0sXG4gICAgICB1c2VGYWN0b3J5OiBhc3luYyAoY29uZmlnOiBDb25maWdTZXJ2aWNlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uY29uZmlnLmdldCgnZGF0YWJhc2UnKSxcbiAgICAgICAgICBhdXRvTG9hZEVudGl0aWVzOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGluamVjdDogW0NvbmZpZ1NlcnZpY2VdLFxuICAgIH0pLFxuICAgIEF1dGhNb2R1bGUsXG4gICAgVXNlck1vZHVsZSxcbiAgICBHcmFwaFFMTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgYXV0b1NjaGVtYUZpbGU6ICdzY2hlbWEuZ3FsJyxcbiAgICAgIGNvbnRleHQ6ICh7IHJlcSB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7IHJlcSB9O1xuICAgICAgfSxcbiAgICAgIC4uLmFwcENvbmZpZygpLmFwb2xsb1NlcnZlckNvbmZpZyxcbiAgICB9KSxcbiAgICBQcm9maWxlTW9kdWxlLFxuICAgIE1haWxlck1vZHVsZSxcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtBcHBDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbQXBwU2VydmljZSwgQ29uZmlnU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG4gIHB1YmxpYyBjb25maWd1cmUoY29uc3VtZXI6IE1pZGRsZXdhcmVDb25zdW1lcik6IHZvaWQge1xuICAgIGNvbnN1bWVyXG4gICAgICAuYXBwbHkoQXV0aGVudGljYXRpb25NaWRkbGV3YXJlKVxuICAgICAgLmZvclJvdXRlcyh7IHBhdGg6ICcvJywgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlBPU1QgfSk7XG4gICAgY29uc3VtZXJcbiAgICAgIC5hcHBseShBdXRoZW50aWNhdGlvbk1pZGRsZXdhcmUpXG4gICAgICAuZm9yUm91dGVzKHsgcGF0aDogJy9ncmFwaHFsJywgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlBPU1QgfSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29tbW9uXCIpOyIsImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuL2FwcC5zZXJ2aWNlJztcblxuQENvbnRyb2xsZXIoKVxuZXhwb3J0IGNsYXNzIEFwcENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFwcFNlcnZpY2U6IEFwcFNlcnZpY2UpIHt9XG5cbiAgQEdldCgpXG4gIGdldEhlbGxvKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXBwU2VydmljZS5nZXRIZWxsbygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwU2VydmljZSB7XG4gIGdldEhlbGxvKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdIZWxsbyBXb3JsZCEnO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2dyYXBocWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy90eXBlb3JtXCIpOyIsImV4cG9ydCAqIGZyb20gJy4vYXV0aC5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoLmd1YXJkJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC5taWRkbGV3YXJlJztcbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFJlc29sdmVyIH0gZnJvbSAnLi9hdXRoLnJlc29sdmVyJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgQXV0aFJlc29sdmVyLCBDb25maWdTZXJ2aWNlXSxcbiAgZXhwb3J0czogW0F1dGhTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHt9XG4iLCJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAncXVlcnlzdHJpbmcnO1xuaW1wb3J0IHsgUmVzb2x2ZXIsIEFyZ3MsIE11dGF0aW9uLCBRdWVyeSB9IGZyb20gJ0BuZXN0anMvZ3JhcGhxbCc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgTG9naW5JbnB1dCB9IGZyb20gJy4vZHRvL2xvZ2luSW5wdXQnO1xuaW1wb3J0IHsgTG9naW5PdXRwdXQgfSBmcm9tICcuL2R0by9sb2dpbk91dHB1dCc7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgQXV0aFJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7fVxuICBATXV0YXRpb24oKCkgPT4gTG9naW5PdXRwdXQpXG4gIGFzeW5jIGxvZ2luKEBBcmdzKCdsb2dpbicpIHBhcmFtczogTG9naW5JbnB1dCk6IFByb21pc2U8TG9naW5PdXRwdXQ+IHtcbiAgICBjb25zdCBsb2dpbkZvcm1EYXRhID0gc3RyaW5naWZ5KHtcbiAgICAgIGdyYW50X3R5cGU6ICdodHRwOi8vYXV0aDAuY29tL29hdXRoL2dyYW50LXR5cGUvcGFzc3dvcmQtcmVhbG0nLFxuICAgICAgdXNlcm5hbWU6IHBhcmFtcy5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBwYXJhbXMucGFzc3dvcmQsXG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY29uZmlnU2VydmljZS5nZXQoJ2F1dGgnKS5jbGllbnRJZCxcbiAgICAgIHJlYWxtOiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0KCdhdXRoJykucmVhbG0sXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9naW5SZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoXG4gICAgICAgIGAke3RoaXMuY29uZmlnU2VydmljZS5nZXQoJ2F1dGgnKS5pc3N1ZXJ9b2F1dGgvdG9rZW5gLFxuICAgICAgICBsb2dpbkZvcm1EYXRhLFxuICAgICAgICB7IGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0gfSxcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjY2VzczogbG9naW5SZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbixcbiAgICAgICAgaWQ6IGxvZ2luUmVzcG9uc2UuZGF0YS5pZF90b2tlbixcbiAgICAgICAgc2NvcGU6IGxvZ2luUmVzcG9uc2UuZGF0YS5zY29wZSxcbiAgICAgICAgZXhwaXJlczogbG9naW5SZXNwb25zZS5kYXRhLmV4cGlyZXNfaW4sXG4gICAgICAgIHR5cGU6IGxvZ2luUmVzcG9uc2UuZGF0YS50b2tlbl90eXBlLFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgQFF1ZXJ5KCgpID0+IExvZ2luT3V0cHV0KVxuICBoZWxsbygpOiBMb2dpbk91dHB1dCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjY2VzczogJycsXG4gICAgICBpZDogJycsXG4gICAgICBzY29wZTogJycsXG4gICAgICBleHBpcmVzOiAxLFxuICAgICAgdHlwZTogJycsXG4gICAgfTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7IiwiaW1wb3J0IHsgRmllbGQsIElucHV0VHlwZSB9IGZyb20gJ0BuZXN0anMvZ3JhcGhxbCc7XG5cbkBJbnB1dFR5cGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luSW5wdXQge1xuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBlbWFpbDogc3RyaW5nO1xuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBwYXNzd29yZDogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgRmllbGQsIE9iamVjdFR5cGUgfSBmcm9tICdAbmVzdGpzL2dyYXBocWwnO1xuXG5AT2JqZWN0VHlwZSgpXG5leHBvcnQgY2xhc3MgTG9naW5PdXRwdXQge1xuICBARmllbGQoKVxuICBhY2Nlc3M6IHN0cmluZztcbiAgQEZpZWxkKClcbiAgaWQ6IHN0cmluZztcbiAgQEZpZWxkKClcbiAgc2NvcGU6IHN0cmluZztcbiAgQEZpZWxkKClcbiAgZXhwaXJlczogbnVtYmVyO1xuICBARmllbGQoKVxuICB0eXBlOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQge1xuICBDYW5BY3RpdmF0ZSxcbiAgRXhlY3V0aW9uQ29udGV4dCxcbiAgSHR0cEV4Y2VwdGlvbixcbiAgSHR0cFN0YXR1cyxcbiAgSW5qZWN0YWJsZSxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgR3FsRXhlY3V0aW9uQ29udGV4dCB9IGZyb20gJ0BuZXN0anMvZ3JhcGhxbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNhbkFjdGl2YXRlKGNvbnRleHQ6IEV4ZWN1dGlvbkNvbnRleHQpOiBib29sZWFuIHtcbiAgICBjb25zdCBjdHggPSBHcWxFeGVjdXRpb25Db250ZXh0LmNyZWF0ZShjb250ZXh0KTtcbiAgICBjb25zdCBncmFwaHFsQ29udGV4dCA9IGN0eC5nZXRDb250ZXh0KCk7XG4gICAgaWYgKCEhZ3JhcGhxbENvbnRleHQucmVxLnVzZXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbihcbiAgICAgIHsgbWVzc2FnZTogJ3VuYXV0aGVudGljYXRlZCcgfSxcbiAgICAgIEh0dHBTdGF0dXMuVU5BVVRIT1JJWkVELFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5lc3RNaWRkbGV3YXJlLCBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgKiBhcyBqd3QgZnJvbSAnZXhwcmVzcy1qd3QnO1xuaW1wb3J0IHsgZXhwcmVzc0p3dFNlY3JldCB9IGZyb20gJ2p3a3MtcnNhJztcbmltcG9ydCBhdXRoQ29uZmlnIGZyb20gJy4uL2NvbmZpZy9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBDb25maWdUeXBlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25NaWRkbGV3YXJlIGltcGxlbWVudHMgTmVzdE1pZGRsZXdhcmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KGF1dGhDb25maWcuS0VZKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aENvbmZpZ3VyYXRpb246IENvbmZpZ1R5cGU8dHlwZW9mIGF1dGhDb25maWc+LFxuICApIHt9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG4gIHVzZShyZXEsIHJlcywgbmV4dCkge1xuICAgIGNvbnN0IHsgY2xpZW50SWQsIGlzc3Vlciwgandrc1VyaSB9ID0gdGhpcy5hdXRoQ29uZmlndXJhdGlvbjtcbiAgICBqd3Qoe1xuICAgICAgc2VjcmV0OiBleHByZXNzSnd0U2VjcmV0KHtcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICByYXRlTGltaXQ6IHRydWUsXG4gICAgICAgIGp3a3NSZXF1ZXN0c1Blck1pbnV0ZTogNSxcbiAgICAgICAgandrc1VyaSxcbiAgICAgIH0pLFxuICAgICAgYXVkaWVuY2U6IGNsaWVudElkLFxuICAgICAgaXNzdWVyLFxuICAgICAgYWxnb3JpdGhtOiAnUlMyNTYnLFxuICAgIH0pKHJlcSwgcmVzLCAoKSA9PiB7XG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtand0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImp3a3MtcnNhXCIpOyIsImltcG9ydCB7IHJlZ2lzdGVyQXMgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbnRlcmZhY2UgQXV0aENvbmZpZyB7XG4gIGp3a3NVcmk6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIGNsaWVudElkOiBzdHJpbmc7XG4gIGNsaWVudFNlY3JldDogc3RyaW5nO1xuICByZWFsbTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckFzKFxuICAnYXV0aCcsXG4gICgpOiBBdXRoQ29uZmlnID0+ICh7XG4gICAgandrc1VyaTogcHJvY2Vzcy5lbnYuTE9HSVNUSUNfSldLU1VSSSxcbiAgICBpc3N1ZXI6IHByb2Nlc3MuZW52LkxPR0lTVElDX0lTU1VFUixcbiAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuTE9HSVNUSUNfQ0xJRU5UX0lELFxuICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuTE9HSVNUSUNfQ0xJRU5UX1NFQ1JFVCxcbiAgICByZWFsbTogcHJvY2Vzcy5lbnYuTE9HSVNUSUNfUkVBTE0sXG4gIH0pLFxuKTtcbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFVzZXJSZXNvbHZlciB9IGZyb20gJy4vdXNlci5yZXNvbHZlcic7XG5cbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtVc2VyUmVzb2x2ZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBVc2VHdWFyZHMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBRdWVyeSwgUmVzb2x2ZXIgfSBmcm9tICdAbmVzdGpzL2dyYXBocWwnO1xuaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tICcuL2N1cnJlbnRVc2VyLmRlY29yYXRvcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICdAc2tvcmUvYXV0aCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9tb2RlbC9Vc2VyJztcblxuQFVzZUd1YXJkcyhBdXRoR3VhcmQpXG5AUmVzb2x2ZXIoKCkgPT4gVXNlcilcbmV4cG9ydCBjbGFzcyBVc2VyUmVzb2x2ZXIge1xuICBAUXVlcnkoKCkgPT4gVXNlcilcbiAgYXN5bmMgZ2V0VXNlcihAQ3VycmVudFVzZXIoKSB1c2VyOiBVc2VyKTogUHJvbWlzZTxVc2VyPiB7XG4gICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHVzZXIpO1xuICAgIHJldHVybiBuZXdVc2VyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVQYXJhbURlY29yYXRvciwgRXhlY3V0aW9uQ29udGV4dCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEdxbEV4ZWN1dGlvbkNvbnRleHQgfSBmcm9tICdAbmVzdGpzL2dyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgQ3VycmVudFVzZXIgPSBjcmVhdGVQYXJhbURlY29yYXRvcihcbiAgKGRhdGE6IHVua25vd24sIGNvbnRleHQ6IEV4ZWN1dGlvbkNvbnRleHQpID0+IHtcbiAgICBjb25zdCBjdHggPSBHcWxFeGVjdXRpb25Db250ZXh0LmNyZWF0ZShjb250ZXh0KTtcbiAgICByZXR1cm4gY3R4LmdldENvbnRleHQoKS5yZXEudXNlcjtcbiAgfSxcbik7XG4iLCJpbXBvcnQgeyBGaWVsZCwgT2JqZWN0VHlwZSB9IGZyb20gJ0BuZXN0anMvZ3JhcGhxbCc7XG5cbkBPYmplY3RUeXBlKClcbmV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgQEZpZWxkKClcbiAgZW1haWw6IHN0cmluZztcblxuICBARmllbGQoKVxuICBhdWQ6IHN0cmluZztcblxuICBARmllbGQoKVxuICAnZW1haWxfdmVyaWZpZWQnOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgZXhwOiBudW1iZXI7XG5cbiAgQEZpZWxkKClcbiAgJ2ZhbWlseV9uYW1lJzogc3RyaW5nO1xuXG4gIEBGaWVsZCgpXG4gICdnaXZlbl9uYW1lJzogc3RyaW5nO1xuXG4gIEBGaWVsZCgpXG4gIGlhdDogbnVtYmVyO1xuXG4gIEBGaWVsZCgpXG4gIGlzczogc3RyaW5nO1xuXG4gIEBGaWVsZCgpXG4gIG5hbWU6IHN0cmluZztcblxuICBARmllbGQoKVxuICBuaWNrbmFtZTogc3RyaW5nO1xuXG4gIEBGaWVsZCgpXG4gIHBpY3R1cmU6IHN0cmluZztcblxuICBARmllbGQoKVxuICBzdWI6IHN0cmluZztcblxuICBARmllbGQoKVxuICAndXBkYXRlZF9hdCc6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih1c2VyOiBVc2VyKSB7XG4gICAgdGhpcy5lbWFpbCA9IHVzZXIuZW1haWw7XG4gICAgdGhpcy5hdWQgPSB1c2VyLmF1ZDtcbiAgICB0aGlzLmVtYWlsX3ZlcmlmaWVkID0gdXNlci5lbWFpbF92ZXJpZmllZDtcbiAgICB0aGlzLmV4cCA9IHVzZXIuZXhwO1xuICAgIHRoaXMuZmFtaWx5X25hbWUgPSB1c2VyLmZhbWlseV9uYW1lO1xuICAgIHRoaXMuZ2l2ZW5fbmFtZSA9IHVzZXIuZ2l2ZW5fbmFtZTtcbiAgICB0aGlzLmlhdCA9IHVzZXIuaWF0O1xuICAgIHRoaXMuaXNzID0gdXNlci5pc3M7XG4gICAgdGhpcy5uYW1lID0gdXNlci5uYW1lO1xuICAgIHRoaXMubmlja25hbWUgPSB1c2VyLm5pY2tuYW1lO1xuICAgIHRoaXMucGljdHVyZSA9IHVzZXIucGljdHVyZTtcbiAgICB0aGlzLnN1YiA9IHVzZXIuc3ViO1xuICAgIHRoaXMudXBkYXRlZF9hdCA9IHVzZXIudXBkYXRlZF9hdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBUeXBlT3JtTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuL3Byb2ZpbGUuZW50aXR5JztcbmltcG9ydCB7IFByb2ZpbGVSZXNvbHZlciB9IGZyb20gJy4vcHJvZmlsZS5yZXNvbHZlcic7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbVHlwZU9ybU1vZHVsZS5mb3JGZWF0dXJlKFtQcm9maWxlXSldLFxuICBwcm92aWRlcnM6IFtQcm9maWxlU2VydmljZSwgUHJvZmlsZVJlc29sdmVyXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTm90Rm91bmRFeGNlcHRpb24sIExvZ2dlciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdFJlcG9zaXRvcnkgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4vcHJvZmlsZS5lbnRpdHknO1xuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHtcbiAgQ3JlYXRlUHJvZmlsZUlucHV0UmVwb3NpdG9yeURUTyxcbiAgVXBkYXRlUHJvZmlsZUlucHV0LFxufSBmcm9tICcuL2R0by9wcm9maWxlLmR0byc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3RSZXBvc2l0b3J5KFByb2ZpbGUpXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9maWxlUmVvaXNpdG9yeTogUmVwb3NpdG9yeTxQcm9maWxlPixcbiAgKSB7fVxuXG4gIGFzeW5jIGdldFByb2ZpbGUoaWQ6IHN0cmluZyk6IFByb21pc2U8UHJvZmlsZT4ge1xuICAgIGNvbnN0IHByb2ZpbGVzID0gYXdhaXQgdGhpcy5wcm9maWxlUmVvaXNpdG9yeS5maW5kKHtcbiAgICAgIHdoZXJlOiB7IHVzZXJJZDogaWQgfSxcbiAgICAgIHRha2U6IDEsXG4gICAgfSk7XG4gICAgaWYgKHByb2ZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBwcm9maWxlc1swXTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IE5vdEZvdW5kRXhjZXB0aW9uKFxuICAgICAgbmV3IEVycm9yKGBwcm9maWxlIG5vdCBmb3VuZCBmb3IgdXNlciB3aXRoIGlkOiR7aWR9YCksXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVByb2ZpbGUoXG4gICAgcHJvZmlsZVBhcmFtczogQ3JlYXRlUHJvZmlsZUlucHV0UmVwb3NpdG9yeURUTyxcbiAgKTogUHJvbWlzZTxQcm9maWxlPiB7XG4gICAgY29uc3QgcHJvZmlsZSA9IHRoaXMucHJvZmlsZVJlb2lzaXRvcnkuY3JlYXRlKHByb2ZpbGVQYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLnByb2ZpbGVSZW9pc2l0b3J5LnNhdmUocHJvZmlsZSk7XG4gIH1cblxuICBhc3luYyB1cGRhdGVQcm9maWxlKFxuICAgIHByb2ZpbGVQYXJhbXM6IFVwZGF0ZVByb2ZpbGVJbnB1dCxcbiAgICBpZDogc3RyaW5nLFxuICApOiBQcm9taXNlPFByb2ZpbGU+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvZmlsZSA9IGF3YWl0IHRoaXMuZ2V0UHJvZmlsZShpZCk7XG4gICAgY29uc3QgcHJlbG9hZGVkUHJvZmlsZSA9IGF3YWl0IHRoaXMucHJvZmlsZVJlb2lzaXRvcnkucHJlbG9hZCh7XG4gICAgICBpZDogY3VycmVudFByb2ZpbGUuaWQsXG4gICAgICAuLi5wcm9maWxlUGFyYW1zLFxuICAgIH0pO1xuICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCB0aGlzLnByb2ZpbGVSZW9pc2l0b3J5LnNhdmUocHJlbG9hZGVkUHJvZmlsZSk7XG4gICAgcmV0dXJuIHByb2ZpbGU7XG4gIH1cblxuICBhc3luYyBkZWxldGVQcm9maWxlKGlkOiBzdHJpbmcpOiBQcm9taXNlPFByb2ZpbGU+IHtcbiAgICBjb25zdCBwcmVsb2FkZWRQcm9maWxlID0gYXdhaXQgdGhpcy5nZXRQcm9maWxlKGAke2lkfWApO1xuICAgIGNvbnN0IGRlbGV0ZWRQcm9maWxlID0gYXdhaXQgdGhpcy5wcm9maWxlUmVvaXNpdG9yeS5zb2Z0UmVtb3ZlKFxuICAgICAgcHJlbG9hZGVkUHJvZmlsZSxcbiAgICApO1xuICAgIHJldHVybiBkZWxldGVkUHJvZmlsZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRmllbGQsXG4gIElELFxuICBPYmplY3RUeXBlLFxuICByZWdpc3RlckVudW1UeXBlLFxuICBGbG9hdCxcbn0gZnJvbSAnQG5lc3Rqcy9ncmFwaHFsJztcbmltcG9ydCB7XG4gIENvbHVtbixcbiAgQ3JlYXRlRGF0ZUNvbHVtbixcbiAgRW50aXR5LFxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxuICBVcGRhdGVEYXRlQ29sdW1uLFxuICBEZWxldGVEYXRlQ29sdW1uLFxufSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnZ2VvanNvbic7XG5cbmV4cG9ydCBlbnVtIEFjY291bnRUeXBlIHtcbiAgU0hJUFBFUiA9ICdzaGlwcGVyJyxcbiAgQlJPS0VSID0gJ2Jyb2tlcicsXG4gIERSSVZFUiA9ICdkcml2ZXInLFxufVxuXG5yZWdpc3RlckVudW1UeXBlKEFjY291bnRUeXBlLCB7XG4gIG5hbWU6ICdBY2NvdW50VHlwZScsIC8vIHRoaXMgb25lIGlzIG1hbmRhdG9yeVxuICBkZXNjcmlwdGlvbjogJ0FjY291bnQgdHlwZXMnLCAvLyB0aGlzIG9uZSBpcyBvcHRpb25hbFxufSk7XG5cbkBPYmplY3RUeXBlKClcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbiB7XG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIHR5cGU6ICdwb2ludCc7XG5cbiAgQEZpZWxkKCgpID0+IFtGbG9hdF0pXG4gIGNvb3JkaW5hdGVzOiBudW1iZXJbXTtcbn1cblxuQEVudGl0eSgpXG5AT2JqZWN0VHlwZSgpXG5leHBvcnQgY2xhc3MgUHJvZmlsZSB7XG4gIEBGaWVsZCgoKSA9PiBJRClcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBDb2x1bW4oeyBuYW1lOiAndXNlcl9pZCcgfSlcbiAgdXNlcklkOiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQENvbHVtbih7IG5hbWU6ICdmaXJzdF9uYW1lJyB9KVxuICBmaXJzdE5hbWU6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAQ29sdW1uKHsgbmFtZTogJ2xhc3RfbmFtZScgfSlcbiAgbGFzdE5hbWU6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAQ29sdW1uKClcbiAgcGhvbmU6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAQ29sdW1uKHsgbmFtZTogJ2J1c2luZXNzX25hbWUnIH0pXG4gIGJ1c2luZXNzTmFtZTogc3RyaW5nO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBDb2x1bW4oeyBuYW1lOiAnaW5kdXN0cnknIH0pXG4gIGluZHVzdHJ5OiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IEFjY291bnRUeXBlKVxuICBAQ29sdW1uKHsgbmFtZTogJ2FjY291bnRfdHlwZScgfSlcbiAgYWNjb3VudFR5cGU6IEFjY291bnRUeXBlO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBDcmVhdGVEYXRlQ29sdW1uKHtcbiAgICB0eXBlOiAndGltZXN0YW1wdHonLFxuICAgIG5hbWU6ICdjcmVhdGVkX2F0JyxcbiAgfSlcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQFVwZGF0ZURhdGVDb2x1bW4oe1xuICAgIHR5cGU6ICd0aW1lc3RhbXB0eicsXG4gICAgbmFtZTogJ3VwZGF0ZWRfYXQnLFxuICB9KVxuICB1cGRhdGVkQXQ6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gU3RyaW5nLCB7IG51bGxhYmxlOiB0cnVlIH0pXG4gIEBEZWxldGVEYXRlQ29sdW1uKHtcbiAgICB0eXBlOiAndGltZXN0YW1wdHonLFxuICAgIG5hbWU6ICdkZWxldGVkX2F0JyxcbiAgfSlcbiAgZGVsZXRlZEF0OiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQENvbHVtbih7IG5hbWU6ICdsaW5lJyB9KVxuICBsaW5lOiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZywgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBAQ29sdW1uKHsgbmFtZTogJ2xpbmVfYWx0JyB9KVxuICBsaW5lQWx0Pzogc3RyaW5nO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBDb2x1bW4oeyBuYW1lOiAnY2l0eScgfSlcbiAgY2l0eTogc3RyaW5nO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBDb2x1bW4oeyBuYW1lOiAnc3RhdGUnIH0pXG4gIHN0YXRlOiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgQENvbHVtbih7IG5hbWU6ICdwb3N0YWxfY29kZScgfSlcbiAgcG9zdGFsQ29kZTogc3RyaW5nO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIEBDb2x1bW4oeyBuYW1lOiAncGxhY2VfaWQnIH0pXG4gIHBsYWNlSWQ6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBAQ29sdW1uKHsgbmFtZTogJ2NvdW50cnknIH0pXG4gIGNvdW50cnk6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gTG9jYXRpb24pXG4gIEBDb2x1bW4oJ2dlb21ldHJ5JylcbiAgbG9jYXRpb246IFBvaW50O1xuXG4gIGNvbnN0cnVjdG9yKHByb2ZpbGU/OiBQcm9maWxlKSB7XG4gICAgaWYgKHByb2ZpbGUpIHtcbiAgICAgIHRoaXMuaWQgPSBwcm9maWxlLmlkO1xuICAgICAgdGhpcy51c2VySWQgPSBwcm9maWxlLnVzZXJJZDtcbiAgICAgIHRoaXMuZmlyc3ROYW1lID0gcHJvZmlsZS5maXJzdE5hbWU7XG4gICAgICB0aGlzLmxhc3ROYW1lID0gcHJvZmlsZS5sYXN0TmFtZTtcbiAgICAgIHRoaXMucGhvbmUgPSBwcm9maWxlLnBob25lO1xuICAgICAgdGhpcy5idXNpbmVzc05hbWUgPSBwcm9maWxlLmJ1c2luZXNzTmFtZTtcbiAgICAgIHRoaXMuaW5kdXN0cnkgPSBwcm9maWxlLmluZHVzdHJ5O1xuICAgICAgdGhpcy5hY2NvdW50VHlwZSA9IHByb2ZpbGUuYWNjb3VudFR5cGU7XG4gICAgICB0aGlzLmxpbmUgPSBwcm9maWxlLmxpbmU7XG4gICAgICB0aGlzLmxpbmVBbHQgPSBwcm9maWxlLmxpbmVBbHQ7XG4gICAgICB0aGlzLmNpdHkgPSBwcm9maWxlLmNpdHk7XG4gICAgICB0aGlzLnN0YXRlID0gcHJvZmlsZS5zdGF0ZTtcbiAgICAgIHRoaXMucG9zdGFsQ29kZSA9IHByb2ZpbGUucG9zdGFsQ29kZTtcbiAgICAgIHRoaXMucGxhY2VJZCA9IHByb2ZpbGUucGxhY2VJZDtcbiAgICAgIHRoaXMuY291bnRyeSA9IHByb2ZpbGUuY291bnRyeTtcbiAgICAgIHRoaXMubG9jYXRpb24gPSBwcm9maWxlLmxvY2F0aW9uO1xuICAgICAgdGhpcy5jcmVhdGVkQXQgPSBwcm9maWxlLmNyZWF0ZWRBdDtcbiAgICAgIHRoaXMudXBkYXRlZEF0ID0gcHJvZmlsZS51cGRhdGVkQXQ7XG4gICAgICB0aGlzLmRlbGV0ZWRBdCA9IHByb2ZpbGUuZGVsZXRlZEF0O1xuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnZW9qc29uXCIpOyIsImltcG9ydCB7IFJlc29sdmVyLCBRdWVyeSwgQXJncywgTXV0YXRpb24gfSBmcm9tICdAbmVzdGpzL2dyYXBocWwnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnQHNrb3JlL2F1dGgnO1xuaW1wb3J0IHsgVXNlR3VhcmRzLCBMb2dnZXIsIFVzZUZpbHRlcnMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9wcm9maWxlLmVudGl0eSc7XG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4vcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vdXNlci9jdXJyZW50VXNlci5kZWNvcmF0b3InO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3VzZXIvbW9kZWwvVXNlcic7XG5pbXBvcnQgeyBDcmVhdGVQcm9maWxlSW5wdXQsIFVwZGF0ZVByb2ZpbGVJbnB1dCB9IGZyb20gJy4vZHRvL3Byb2ZpbGUuZHRvJztcbmltcG9ydCB7IEV4Y2VwdGlvbkxvZ2dlckZpbHRlciB9IGZyb20gJ0Bza29yZS9za29yZS1leGNlcHRpb24vZXhjZXB0aW9uLWxvZ2dlci5maWx0ZXInO1xuXG5AVXNlRmlsdGVycyhuZXcgRXhjZXB0aW9uTG9nZ2VyRmlsdGVyKCkpXG5AUmVzb2x2ZXIoJ1Byb2ZpbGUnKVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlKSB7fVxuXG4gIEBVc2VHdWFyZHMoQXV0aEd1YXJkKVxuICBAUXVlcnkoKCkgPT4gUHJvZmlsZSlcbiAgYXN5bmMgZ2V0UHJvZmlsZShAQ3VycmVudFVzZXIoKSB1c2VyOiBVc2VyKTogUHJvbWlzZTxQcm9maWxlPiB7XG4gICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IHRoaXMucHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZShcbiAgICAgIHVzZXIuc3ViLnNwbGl0KCd8JylbMV0sXG4gICAgKTtcbiAgICByZXR1cm4gcHJvZmlsZTtcbiAgfVxuXG4gIEBVc2VHdWFyZHMoQXV0aEd1YXJkKVxuICBATXV0YXRpb24oKCkgPT4gUHJvZmlsZSlcbiAgYXN5bmMgY3JlYXRlUHJvZmlsZShcbiAgICBAQXJncygncHJvZmlsZScpIHBhcmFtczogQ3JlYXRlUHJvZmlsZUlucHV0LFxuICAgIEBDdXJyZW50VXNlcigpIHVzZXI6IFVzZXIsXG4gICk6IFByb21pc2U8UHJvZmlsZT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjcmVhdGVkUHJvZmlsZSA9IGF3YWl0IHRoaXMucHJvZmlsZVNlcnZpY2UuY3JlYXRlUHJvZmlsZSh7XG4gICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgdXNlcklkOiB1c2VyLnN1Yi5zcGxpdCgnfCcpWzFdLFxuICAgICAgfSk7XG4gICAgICBpZiAoY3JlYXRlZFByb2ZpbGUpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZWRQcm9maWxlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBMb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgQFVzZUd1YXJkcyhBdXRoR3VhcmQpXG4gIEBNdXRhdGlvbigoKSA9PiBQcm9maWxlKVxuICBhc3luYyB1cGRhdGVQcm9maWxlKFxuICAgIEBDdXJyZW50VXNlcigpIHVzZXI6IFVzZXIsXG4gICAgQEFyZ3MoJ3Byb2ZpbGUnKSBwYXJhbXM6IFVwZGF0ZVByb2ZpbGVJbnB1dCxcbiAgKTogUHJvbWlzZTxQcm9maWxlPiB7XG4gICAgY29uc3QgcHJvZmlsZSA9IHRoaXMucHJvZmlsZVNlcnZpY2UudXBkYXRlUHJvZmlsZShcbiAgICAgIHBhcmFtcyxcbiAgICAgIHVzZXIuc3ViLnNwbGl0KCd8JylbMV0sXG4gICAgKTtcbiAgICByZXR1cm4gcHJvZmlsZTtcbiAgfVxuXG4gIEBVc2VHdWFyZHMoQXV0aEd1YXJkKVxuICBATXV0YXRpb24oKCkgPT4gUHJvZmlsZSlcbiAgYXN5bmMgZGVsZXRlUHJvZmlsZShAQ3VycmVudFVzZXIoKSB1c2VyOiBVc2VyKTogUHJvbWlzZTxQcm9maWxlPiB7XG4gICAgY29uc3QgZGVsZXRlUmVzdWx0ID0gYXdhaXQgdGhpcy5wcm9maWxlU2VydmljZS5kZWxldGVQcm9maWxlKFxuICAgICAgdXNlci5zdWIuc3BsaXQoJ3wnKVsxXSxcbiAgICApO1xuICAgIHJldHVybiBkZWxldGVSZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEZpZWxkLFxuICBJbnB1dFR5cGUsXG4gIEZsb2F0LFxuICBQYXJ0aWFsVHlwZSxcbiAgT21pdFR5cGUsXG4gIE9iamVjdFR5cGUsXG59IGZyb20gJ0BuZXN0anMvZ3JhcGhxbCc7XG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gJy4uL3Byb2ZpbGUuZW50aXR5JztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnZ2VvanNvbic7XG5cbkBJbnB1dFR5cGUoKVxuZXhwb3J0IGNsYXNzIExvY2F0aW9uSW5wdXQge1xuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICB0eXBlOiAncG9pbnQnO1xuXG4gIEBGaWVsZCgoKSA9PiBbRmxvYXRdKVxuICBjb29yZGluYXRlczogbnVtYmVyW107XG59XG5cbkBJbnB1dFR5cGUoKVxuZXhwb3J0IGNsYXNzIENyZWF0ZVByb2ZpbGVJbnB1dFJlcG9zaXRvcnlEVE8ge1xuICBARmllbGQoKVxuICBmaXJzdE5hbWU6IHN0cmluZztcblxuICBARmllbGQoKVxuICB1c2VySWQ6IHN0cmluZztcblxuICBARmllbGQoKVxuICBsYXN0TmFtZTogc3RyaW5nO1xuXG4gIEBGaWVsZCgpXG4gIHBob25lOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgYnVzaW5lc3NOYW1lOiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IEFjY291bnRUeXBlKVxuICBhY2NvdW50VHlwZTogQWNjb3VudFR5cGU7XG5cbiAgQEZpZWxkKClcbiAgaW5kdXN0cnk6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBsaW5lOiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZywgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBsaW5lQWx0Pzogc3RyaW5nO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIGNpdHk6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBzdGF0ZTogc3RyaW5nO1xuXG4gIEBGaWVsZCgoKSA9PiBTdHJpbmcpXG4gIHBvc3RhbENvZGU6IHN0cmluZztcblxuICBARmllbGQoKCkgPT4gU3RyaW5nKVxuICBwbGFjZUlkOiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgY291bnRyeTogc3RyaW5nO1xuXG4gIEBGaWVsZCgoKSA9PiBMb2NhdGlvbklucHV0KVxuICBsb2NhdGlvbjogUG9pbnQ7XG59XG5cbkBJbnB1dFR5cGUoKVxuZXhwb3J0IGNsYXNzIENyZWF0ZVByb2ZpbGVJbnB1dCBleHRlbmRzIE9taXRUeXBlKFxuICBDcmVhdGVQcm9maWxlSW5wdXRSZXBvc2l0b3J5RFRPLFxuICBbJ3VzZXJJZCddIGFzIGNvbnN0LFxuKSB7fVxuXG5ASW5wdXRUeXBlKClcbmV4cG9ydCBjbGFzcyBVcGRhdGVQcm9maWxlSW5wdXQgZXh0ZW5kcyBQYXJ0aWFsVHlwZShDcmVhdGVQcm9maWxlSW5wdXQpIHt9XG5cbkBPYmplY3RUeXBlKClcbmV4cG9ydCBjbGFzcyBEZWxldGVQcm9maWxlT3V0cHV0IHtcbiAgQEZpZWxkKCgpID0+IFN0cmluZylcbiAgcmVzdWx0O1xuXG4gIGNvbnN0cnVjdG9yKHJlc3VsdDogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFyZ3VtZW50c0hvc3QsIENhdGNoLCBIdHRwRXhjZXB0aW9uLCBMb2dnZXIgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBHcWxFeGNlcHRpb25GaWx0ZXIsIEdxbEFyZ3VtZW50c0hvc3QgfSBmcm9tICdAbmVzdGpzL2dyYXBocWwnO1xuXG5AQ2F0Y2goSHR0cEV4Y2VwdGlvbilcbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25Mb2dnZXJGaWx0ZXI8VD4gaW1wbGVtZW50cyBHcWxFeGNlcHRpb25GaWx0ZXIge1xuICBjYXRjaChleGNlcHRpb246IEh0dHBFeGNlcHRpb24sIGhvc3Q6IEFyZ3VtZW50c0hvc3QpOiB2b2lkIHtcbiAgICBjb25zdCBncWxIb3N0ID0gR3FsQXJndW1lbnRzSG9zdC5jcmVhdGUoaG9zdCk7XG4gICAgTG9nZ2VyLmVycm9yKGV4Y2VwdGlvbiwgZXhjZXB0aW9uLnN0YWNrKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9tYWlsZXIubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vbWFpbGVyLnNlcnZpY2UnO1xuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTWFpbGVyU2VydmljZSB9IGZyb20gJy4vbWFpbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuQE1vZHVsZSh7XG4gIHByb3ZpZGVyczogW01haWxlclNlcnZpY2UsIENvbmZpZ1NlcnZpY2VdLFxuICBleHBvcnRzOiBbTWFpbGVyU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1haWxlck1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTG9nZ2VyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0ICogYXMgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcbmltcG9ydCAqIGFzIG1nIGZyb20gJ25vZGVtYWlsZXItbWFpbGd1bi10cmFuc3BvcnQnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuaW50ZXJmYWNlIE1haWxPcHRpb25zIHtcbiAgdG86IHN0cmluZztcbiAgZnJvbTogc3RyaW5nO1xuICBzdWJqZWN0OiBzdHJpbmc7XG4gIGh0bWw6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE1haWxlclJlc3BvbnNlIHtcbiAgaWQ6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBtZXNzYWdlSWQ6IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1haWxlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHt9XG5cbiAgYXN5bmMgc2VuZE1haWwob3B0aW9uczogTWFpbE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IG1haWxndW5BdXRoID0ge1xuICAgICAgYXV0aDoge1xuICAgICAgICBhcGlfa2V5OiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0KCdtYWlsZXIuYXBpS2V5JyksXG4gICAgICAgIGRvbWFpbjogdGhpcy5jb25maWdTZXJ2aWNlLmdldCgnbWFpbGVyLmRvbWFpbicpLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3Qgc210cFRyYW5zcG9ydCA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KG1nKG1haWxndW5BdXRoKSk7XG5cbiAgICBjb25zdCBtYWlsZXJSZXNwb25zZTogTWFpbGVyUmVzcG9uc2UgPSBhd2FpdCBzbXRwVHJhbnNwb3J0LnNlbmRNYWlsKFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIExvZ2dlci5sb2cobWFpbGVyUmVzcG9uc2UsICdza29yZS5tYWlsZXInKTtcbiAgICByZXR1cm4gbWFpbGVyUmVzcG9uc2U7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGVtYWlsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlci1tYWlsZ3VuLXRyYW5zcG9ydFwiKTsiLCJpbXBvcnQgeyBUeXBlT3JtTW9kdWxlT3B0aW9ucyB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyByZWdpc3RlckFzIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5pbnRlcmZhY2Ugb3JtQ29uZmlnIHtcbiAgZW52aXJvbm1lbnQ6IHN0cmluZztcbiAgZGF0YWJhc2U6IFR5cGVPcm1Nb2R1bGVPcHRpb25zO1xufVxuXG5sZXQgY29uZmlnID0ge307XG5jb25zdCBlbnZpcm9ubWVudHMgPSB7XG4gIHByb2R1Y3Rpb246IHtcbiAgICB0eXBlOiAncG9zdGdyZXMnLFxuICAgIHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIHx8ICdwb3N0Z3Jlc3FsOi8vcG9zdGdyZXM6cG9zdGdyZXNAbG9jYWxob3N0L2xvZ2lzdGljX2RldicsXG4gICAgc3luY2hyb25pemU6IGZhbHNlLFxuICAgIGxvZ2dpbmc6IHRydWUsXG4gICAgY2xpOiB7XG4gICAgICBtaWdyYXRpb25zRGlyOiAnc3JjL21pZ3JhdGlvbicsXG4gICAgICBzdWJzY3JpYmVyc0RpcjogJ2Rpc3Qvc3Vic2NyaWJlcicsXG4gICAgfSxcbiAgICBzc2w6IHRydWUsXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICB0eXBlOiAncG9zdGdyZXMnLFxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgIHBvcnQ6IDU0MzMsXG4gICAgdXNlcm5hbWU6ICdwb3N0Z3JlcycsXG4gICAgcGFzc3dvcmQ6ICdwb3N0Z3JlcycsXG4gICAgZGF0YWJhc2U6ICdza29yZV90ZXN0JyxcbiAgICBzeW5jaHJvbml6ZTogZmFsc2UsXG4gICAgbG9nZ2luZzogZmFsc2UsXG4gICAgZW50aXRpZXM6IFtgc3JjLyoqLyouZW50aXR5ey50cywuanN9YF0sXG4gICAgbWlncmF0aW9uczogW2BtaWdyYXRpb24vKiovKnsudHMsLmpzfWBdLFxuICAgIHN1YnNjcmliZXJzOiBbYHNyYy9zdWJzY3JpYmVyLyoqLyp7LnRzLC5qc31gXSxcbiAgICBjbGk6IHtcbiAgICAgIG1pZ3JhdGlvbnNEaXI6IGAke19fZGlybmFtZX0vbWlncmF0aW9uYCxcbiAgICAgIHN1YnNjcmliZXJzRGlyOiAnc3JjL3N1YnNjcmliZXInLFxuICAgIH0sXG4gIH0sXG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgY29uZmlnID0gZW52aXJvbm1lbnRzW3Byb2Nlc3MuZW52Lk5PREVfRU5WXTtcbn0gZWxzZSB7XG4gIGNvbmZpZyA9IHtcbiAgICB0eXBlOiAncG9zdGdyZXMnLFxuICAgIGhvc3Q6ICdza29yZS1kYicsXG4gICAgcG9ydDogNTQzMixcbiAgICB1c2VybmFtZTogJ3Bvc3RncmVzJyxcbiAgICBwYXNzd29yZDogJ3Bvc3RncmVzJyxcbiAgICBkYXRhYmFzZTogJ3Nrb3JlX2RldicsXG4gICAgc3luY2hyb25pemU6IGZhbHNlLFxuICAgIGxvZ2dpbmc6IHRydWUsXG4gICAgbWlncmF0aW9uczogW10sXG4gICAgc3Vic2NyaWJlcnM6IFtgc3Vic2NyaWJlci8qKi8qey50cywuanN9YF0sXG4gICAgY2xpOiB7XG4gICAgICBtaWdyYXRpb25zRGlyOiBgLi9taWdyYXRpb25gLFxuICAgICAgc3Vic2NyaWJlcnNEaXI6ICdzcmMvc3Vic2NyaWJlcicsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJBcygnZGF0YWJhc2UnLCAoKSA9PiBjb25maWcpO1xuIiwiaW1wb3J0IHsgcmVnaXN0ZXJBcyB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmludGVyZmFjZSBBdXRoQ29uZmlnIHtcbiAgandrc1VyaTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgY2xpZW50SWQ6IHN0cmluZztcbiAgY2xpZW50U2VjcmV0OiBzdHJpbmc7XG4gIHJlYWxtOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQXMoXG4gICdhdXRoJyxcbiAgKCk6IEF1dGhDb25maWcgPT4gKHtcbiAgICBqd2tzVXJpOiBwcm9jZXNzLmVudi5MT0dJU1RJQ19KV0tTVVJJLFxuICAgIGlzc3VlcjogcHJvY2Vzcy5lbnYuTE9HSVNUSUNfSVNTVUVSLFxuICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5MT0dJU1RJQ19DTElFTlRfSUQsXG4gICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5MT0dJU1RJQ19DTElFTlRfU0VDUkVULFxuICAgIHJlYWxtOiBwcm9jZXNzLmVudi5MT0dJU1RJQ19SRUFMTSxcbiAgfSksXG4pO1xuIiwiaW1wb3J0IHsgcmVnaXN0ZXJBcyB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuaW50ZXJmYWNlIE1haWxlckNvbmZpZyB7XG4gIGFwaUtleTogc3RyaW5nO1xuICBkb21haW46IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJBcyhcbiAgJ21haWxlcicsXG4gICgpOiBNYWlsZXJDb25maWcgPT4gKHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk1BSUxHVU5fQVBJS0VZLFxuICAgIGRvbWFpbjogcHJvY2Vzcy5lbnYuTUFJTEdVTl9ET01BSU4sXG4gIH0pLFxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=