const jf = require("jscodeshift");

const value = `
import React from 'react';
import { Button } from 'antd';
`;

const root = jf(value);
root
  .find(jf.ImportDeclaration, { source: { value: "antd" } })
  .forEach((path) => {
    console.log(path.node.source.value);
  });
console.log(root.toSource())