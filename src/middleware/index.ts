import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
} from "./common";

import { handleAPIDocs } from "./apiDocs";

export default [
  handleAPIDocs,
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
];
