import React, { useEffect, useRef, useState } from "react";

const PHOTO =
  "https://images.squarespace-cdn.com/content/v1/6ac66f425a10514943362cdf/01607f7c-f6d6-4437-aed8-69d82fbd4d17/B5F43872-8FB5-49C7-9526-89546E0C7947_1_102_a.jpeg";

function About() {
  const textRef = useRef(null);
  const [photoHeight, setPhotoHeight] = useState(null);

  // Make the photo exactly as tall as the text beside it. Only the height is
  // set; width stays "auto", so the photo keeps its original proportions.
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const sync = () => {
      const sideBySide = window.matchMedia("(min-width: 721px)").matches;
      setPhotoHeight(sideBySide ? el.offsetHeight : null);
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    window.addEventListener("resize", sync);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <section className="about">
      <img
        src={PHOTO}
        alt="Audrey Deng"
        className="about-photo"
        style={photoHeight ? { height: photoHeight } : undefined}
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
