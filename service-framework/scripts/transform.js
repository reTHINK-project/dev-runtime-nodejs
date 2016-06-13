"use strict";

var fs = require("fs");
var recast = require("recast");
var types = recast.types;

var code = fs.readFileSync(__dirname + "/../src/address-factory/url.js", { encoding: "utf8" });
var ast = recast.parse(code);

function replaceP(body) {
  types.visit(body, {
    visitFunction: function visitFunction(path) {
      if (path.node.id && path.node.id.name === "p") {
        path.replace();
        return false;
      }

      this.traverse(path);
    },

    visitCallExpression: function visitCallExpression(path) {
      if (path.node.callee.name === "p") {
        var codePoint = path.node.arguments[0].value.codePointAt(0);
        path.replace(types.builders.literal(codePoint));
      }

      this.traverse(path);
    }
  });
}

replaceP(ast.program.body);

var output = recast.print(ast).code;
fs.writeFileSync(__dirname + "/../lib/url.js", output);