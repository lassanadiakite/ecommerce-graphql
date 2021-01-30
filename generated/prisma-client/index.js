"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "Image",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Card",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["URL_DB_PRISMA"]}`
});
exports.prisma = new exports.Prisma();
