import "./About.css";

function About() {
  return (
    <section className="about-page" id="about">
      <h1>About Azal International</h1>

      <p className="intro">
        Azal International is a trusted name in the handmade carpet industry,
        delivering premium-quality carpets to global markets with a strong
        focus on craftsmanship, design, and durability.
      </p>

      <div className="about-content">
      <div className="about-box">
  <h2>Company Overview</h2>
  <p>
    We are a carpet manufacturing and exporting company specializing in
    handmade wool, silk, and blended carpets. Our products reflect
    traditional artistry combined with modern design aesthetics.
  </p>
</div>


        <div className="about-box">
          <h2>Our Craftsmanship</h2>
          <p>
            Each carpet is carefully handcrafted by skilled artisans using
            premium yarns and natural dyes. We ensure every piece meets
            international quality standards before reaching our clients.
          </p>
        </div>

        <div className="about-box">
          <h2>Global Presence</h2>
          <p>
            With years of experience in exports, we proudly serve buyers across
            multiple countries, delivering customized carpet solutions tailored
            to diverse market needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
