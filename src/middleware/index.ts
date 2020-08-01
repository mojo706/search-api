import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
} from "./common";

import { handleAPIDocs } from "./apiDocs";

export default [
  handleAPIDocs,
  handleBodyRequestParsing,
  handleCompression,
  handleCors,
];
