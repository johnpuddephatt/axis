import { domReady } from "@roots/sage/client";
import { registerBlockStyle, unregisterBlockStyle } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

/**
 * editor.main
 */
const main = (err) => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  window._wpLoadBlockEditor.then(() => {
    unregisterBlockStyle("core/image", ["rounded"]);

    // Register blocks in App/block_styles as CSS can be autoloaded from there.
  });
};

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main);
import.meta.webpackHot?.accept(main);
