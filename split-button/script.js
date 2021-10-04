import $ from "blingblingjs";

import { rovingIndex } from "roving-ux";

const popupButton = $(".split-popup");

feather.replace();

popupButton.forEach((element) => {
  rovingIndex({
    element,
    target: "button",
  });
});
