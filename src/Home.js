import "./Home.css";

function Home() {
    return (
      <>
      <div className="home-page">
        <section className="home" id="home">
          <h1>Azal International</h1>
          <p>Crafting Premium Handmade Carpets for the World</p>
        </section>
  
        <section className="about">
          <h2>Our Commitment to Quality</h2>
          <ul>
            <li>Handcrafted carpets by skilled artisans</li>
            <li>Premium quality yarn & natural dyes</li>
            <li>Custom designs as per client requirements</li>
            <li>Trusted by buyers across the globe</li>
          </ul>
        </section>
  
        <section className="stats">
  <div className="stat-box">
    <span className="stat-number">25+</span>
    <span className="stat-text">Years of Expertise</span>
  </div>

  <div className="stat-box">
    <span className="stat-number">40+</span>
    <span className="stat-text">Countries Served</span>
  </div>

  <div className="stat-box">
    <span className="stat-number">500+</span>
    <span className="stat-text">Custom Projects</span>
  </div>
</section>

        <section className="expertise">
          <h2>Our Expertise</h2>
          <p>
            We specialize in handmade wool, silk, and blended carpets crafted
            for durability, beauty, and global standards.
          </p>
        </section>

        </div>
      </>
    );
  }
  
  export default Home;
  
