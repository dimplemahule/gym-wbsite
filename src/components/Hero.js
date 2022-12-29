import HeroImages from '../images/banner.png'

const Hero = () =>{
return (
    <section className="hero" style={{backgroundImage:`url(${HeroImages})`}}>
    <h1 className="hero-title">
      THE BEST FITNESS STUDIO <br />
      IN THE CITY
    </h1>

    <a href="#program" className="hero-btn-get-started">GET STARTED</a>
  </section>
)
}

export default Hero;