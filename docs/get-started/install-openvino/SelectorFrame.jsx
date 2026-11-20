import React, { useEffect, useRef } from "react";

// Hosts the Selector Tool iframe and resizes it to its content. The tool posts
// `{type: "size", height}` messages from inside the iframe. The listener is
// registered here (React effect) instead of in a <script> tag inside the page,
// because scripts in MDX content are not executed on client-side navigation
// and may register too late on a first load; both left the iframe squashed
// until a reload.
export default function SelectorFrame({ src, title }) {
  const frameRef = useRef(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return undefined;

    const setHeight = (height) => {
      if (height) frame.style.height = `${height}px`;
    };
    const onMessage = (event) => {
      if (event.source !== frame.contentWindow) return;
      if (event.data?.type === "size") setHeight(event.data.height);
    };
    window.addEventListener("message", onMessage);

    // The iframe may have posted its size before this listener existed.
    const readHeight = () => setHeight(frame.contentDocument?.body?.offsetHeight);
    readHeight();
    frame.addEventListener("load", readHeight);

    return () => {
      window.removeEventListener("message", onMessage);
      frame.removeEventListener("load", readHeight);
    };
  }, []);

  return (
    <iframe
      id="selector"
      ref={frameRef}
      src={src}
      title={title}
      style={{ width: "100%", border: "none" }}
    />
  );
}
