import AboutImages from '../images/about.png'


const About = () => {
  return (
    <section className="about container" id="about">
      <div className="about-wrapper">
        <img className="about-image" src={AboutImages} alt="" />
        <div className="about-data">
          <h3 className="about-title">ABOUT US</h3>
          <p className="about-description">
            Regular physical activity can improve your muscle strength and boost your endurance.
            Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular
            system work more efficiently. And when your heart and lung health improve,
            you have more energy to tackle daily chores.
          </p>
          <a href="#read-more" className="about-btn">READ MORE</a>
        </div>
      </div>
    </section>
  )
}

export default About;