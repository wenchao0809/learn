"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _koa = _interopRequireDefault(require("koa"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _apolloServerKoa = require("apollo-server-koa");

var _graphql = require("graphql");

// koa@2
var schema = (0, _graphql.buildSchema)("\ntype Query {\n  hello: String\n}\n");
var app = new _koa["default"]();
var router = new _koaRouter["default"]();
var PORT = 3000; // koaBody is needed just for POST.

app.use((0, _koaBodyparser["default"])());
router.post('/graphql', (0, _apolloServerKoa.graphqlKoa)({
  schema: schema
}));
router.get('/graphql', (0, _apolloServerKoa.graphqlKoa)({
  schema: schema
}));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);