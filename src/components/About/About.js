import React, { useCallback, useLayoutEffect, useRef, useState } from "react";

const PHOTO =
  "https://images.squarespace-cdn.com/content/v1/6ac66f425a10514943362cdf/01607f7c-f6d6-4437-aed8-69d82fbd4d17/B5F43872-8FB5-49C7-9526-89546E0C7947_1_102_a.jpeg";

function About() {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const [textHeight, setTextHeight] = useState(0);
  const [ratio, setRatio] = useState(null); // photo width / height, from the file itself
  const [sideBySide, setSideBySide] = useState(true);

  const measure = useCallback(() => {
    const el = textRef.current;
    if (!el) return;
    setSideBySide(window.matchMedia("(min-width: 1181px)").matches);
    setTextHeight(el.offsetHeight);
  }, []);

  const readRatio = useCallback(() => {
    const img = imgRef.current;
    if (img && img.naturalWidth && img.naturalHeight) {
      setRatio(img.naturalWidth / img.naturalHeight);
    }
  }, []);

  // Re-measure whenever anything that can change the text's height changes:
  // first render, resizes, web fonts finishing loading, and the full page load.
  useLayoutEffect(() => {
    measure();
    readRatio(); // photo may already be cached/complete
    const el = textRef.current;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, [measure, readRatio]);

  // Side by side: give the photo an explicit height (= text height) and the
  // matching width (height x the photo's own aspect ratio), so it is never
  // cropped or stretched. Hidden until both values are known to avoid a jump.
  const ready = sideBySide && textHeight > 0 && ratio;
  const photoStyle = sideBySide
    ? ready
      ? { height: textHeight, width: textHeight * ratio }
      : { height: 0, width: 0, opacity: 0 }
    : undefined;

  return (
    <section className="about">
      <img
        ref={imgRef}
        src={PHOTO}
        alt="Audrey Deng"
        className="about-photo"
        style={photoStyle}
        onLoad={readRatio}
      />
      <div className="about-text" ref={textRef}>
        <p>I am a Texas-born writer and illustrator based in New York.</p>
        <p>
          My writing and drawings have appeared in <em>Columbia Journal</em>,{" "}
          <em>Publishers Weekly</em>, <em>Recliner Magazine</em>,{" "}
          <em>Mr. Beller’s Neighborhood</em>, the American Academy of Poets,{" "}
          <em>Almanaq</em>, <em>The Rational Creature</em>, Seed the Vote, and
          elsewhere. Alongside my creative work, I also manage projects, edit,
          ghostwrite, and conduct research.
        </p>
        <p>
          I received my MFA in Nonfiction Writing from Columbia University and
          my BA in Comparative Literature from NYU.
        </p>
        <p>
          Email: <a href="mailto:audreydeng@gmail.com">audreydeng@gmail.com</a>
        </p>
        <p>
          Instagram:{" "}
          <a href="https://www.instagram.com/audrey_storagesolutions" target="_blank" rel="noreferrer">
            @audrey_storagesolutions
          </a>
        </p>
        <p>
          Substack:{" "}
          <a href="https://substack.com/@blogdrey" target="_blank" rel="noreferrer">
            @blogdrey
          </a>
        </p>
        <p className="label">Selected Awards:</p>
        <p>Tofte Lake Center Emerging Artist Fellowship, 2025</p>
        <p>Periplus Nonfiction Prize finalist</p>
      </div>
    </section>
  );
}

export default About;
