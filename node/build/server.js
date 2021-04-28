"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _wt = require("./wt");

var _templateObject;

var Koa = require('koa');

var _require = require('apollo-server-koa'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql;

(0, _wt.wt)();

function startApolloServer() {
  return _startApolloServer.apply(this, arguments);
}

function _startApolloServer() {
  _startApolloServer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var typeDefs, resolvers, server, app;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Construct a schema, using GraphQL schema language
            typeDefs = gql(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    type Query {\n      hello: String,\n      hello2: Int\n    }\n  "]))); // Provide resolver functions for your schema fields

            resolvers = {
              Query: {
                hello: function hello() {
                  return 'Hello world!';
                },
                hello2: function hello2() {
                  return 31;
                }
              }
            };
            server = new ApolloServer({
              typeDefs: typeDefs,
              resolvers: resolvers
            });
            _context.next = 5;
            return server.start();

          case 5:
            app = new Koa();
            server.applyMiddleware({
              app: app
            }); // alternatively you can get a composed middleware from the apollo server
            // app.use(server.getMiddleware());

            _context.next = 9;
            return new Promise(function (resolve) {
              return app.listen({
                port: 4000
              }, resolve);
            });

          case 9:
            console.log("\uD83D\uDE80 Server ready at http://localhost:4000".concat(server.graphqlPath));
            return _context.abrupt("return", {
              server: server,
              app: app
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _startApolloServer.apply(this, arguments);
}

startApolloServer();