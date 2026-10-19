import React from "react";

const CDN = "https://images.squarespace-cdn.com/content/v1/6ac66f425a10514943362cdf";
const img = (path) => `${CDN}/${path}?format=1000w`;

const STV_SITE = "https://www.seedthevote.org/";
const STV_HALLOWEEN = "https://www.instagram.com/p/DA8yNePOc4T/";
const STV_OCTOBER = "https://www.instagram.com/p/DBKTGHtzG94/";

const comicCover = img(
  "7453cef0-6cb9-416b-86a7-d58021d0aeac/CF8B1609-BBEC-47F5-8A36-54AA22C4B5D3_1_105_c.jpeg"
);
const stvFeature = img("c2e0961c-fbd6-4b18-848a-f5f5c72d7cf8/imgg-nu3-8ui8geck.png");

// Order follows the original page: the Halloween series, then the October series.
const series = [
  { src: img("2e96edb2-2f0b-4164-8373-109929e95fe8/STV_Halloween_1.png"), link: STV_HALLOWEEN },
  { src: img("7ad9dc36-54b3-4081-93a7-dffd3e292bc4/STV_Halloween_2.png"), link: STV_HALLOWEEN },
  { src: img("e248efc7-a86b-4629-8197-3723a03dbcc0/STV_Halloween_3.png"), link: STV_HALLOWEEN },
  { src: img("9914d07f-21dd-4540-97e0-2a0b3ddc8152/STV_Halloween_4.jpeg"), link: STV_HALLOWEEN },
  { src: img("72f26f8b-0706-4d96-8270-610af82bba41/STV_Halloween_5.jpeg"), link: STV_HALLOWEEN },
  { src: img("7b553cee-91a1-4d42-a491-8299a3ff1c65/Seed+the+Vote_October_1.jpeg"), link: STV_OCTOBER },
  { src: img("8b626643-0abc-41ae-801f-b3c62a7d2f3e/Seed+the+Vote_October_2.jpeg"), link: STV_OCTOBER },
  { src: img("89a9bed4-f0eb-45b8-82de-32fe664949ec/IMG_2176.jpeg"), link: STV_OCTOBER },
  { src: img("a2e017ab-b7fe-4726-a14b-6533bec359dc/Seed+the+Vote_October_4.jpeg"), link: STV_OCTOBER },
];

function Illustration() {
  return (
    <section className="illustration">
      <div className="project">
        <img src={comicCover} alt="Cover of My Life Is Anti-Strategic" className="project-image" />
        <div className="project-text">
          <h4>My Life Is Anti-Strategic</h4>
          <p>
            I self-published this comic book in 2024. It is a 48-page
            compilation of my drawings from 2020-2024.
          </p>
          <p>48 pages, black and white.</p>
          <p className="label">Reviews:</p>
          <p>
            <a href="https://www.tcj.com/arrivals-and-departures-april-2026/" target="_blank" rel="noreferrer">
              Arrivals and Departures — April 2026
            </a>
            , <em>The Comics Journal</em>
          </p>
          <p>
            <a href="https://dominobooks.org/mylifeisanti.html" target="_blank" rel="noreferrer">
              Domino Books
            </a>
          </p>
          <a
            className="button"
            href="https://dominobooks.org/mylifeisanti.html"
            target="_blank"
            rel="noreferrer"
          >
            Available for purchase
          </a>
        </div>
      </div>

      <div className="project">
        <a href={STV_SITE} target="_blank" rel="noreferrer" className="project-image">
          <img src={stvFeature} alt="Seed the Vote illustration" />
        </a>
        <div className="project-text">
          <h4>Seed the Vote, Resident Cartoonist</h4>
          <p>
            For the 2024 election cycle, I was the Resident Cartoonist for
            Seed the Vote, a nonprofit dedicated to winning elections in swing
            states through neighborhood canvassing. Below is a series I created
            for a Halloween-themed call to canvass.
          </p>
        </div>
      </div>

      <div className="grid">
        {series.map((w, i) => (
          <figure key={i}>
            <a href={w.link} target="_blank" rel="noreferrer">
              <img src={w.src} alt={`Seed the Vote cartoon ${i + 1}`} loading="lazy" />
            </a>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Illustration;
