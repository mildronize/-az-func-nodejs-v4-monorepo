import { hello } from "./functions/hello";
import { copyBlob } from "./functions/copy-blob";

// Centralize imports for bundling
export default {
  hello,
  copyBlob,
};
