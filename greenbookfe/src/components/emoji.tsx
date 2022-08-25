import React, { memo } from "react";
import Twemoji from "react-twemoji";

const Emoji = ({ emoji }: { emoji: string }) => (
  <Twemoji
    options={{
      className: "twemoji",
      folder: "svg",
      ext: ".svg",
    }}
  >
    {emoji}
  </Twemoji>
);

export default memo(Emoji);
