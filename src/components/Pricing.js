import ProgramImage from '../images/program1.jpg'
import style from './Pricing.module.css'


const Pricing = () => {
  return (
    <section className="membership container" id="pricing">
      <h3 className="section-title">Meet with our profesional Trainer</h3>
      <div className={style.container}>
        <img
          className={style.imageContainer}
          src={ProgramImage}
          alt="true" />
        

      </div>
      <br />
      <span className="section-subtitle"
      >
       <b>Choose your best Pricing!!!!!!!!!</b> 
      </span>
      <div className="row membership">
        <div className="col membership-card">
          <div>
            <span className="membership-plan">Basic Plan</span>
            <h4 className="card-title membership-title">$30</h4>
            <p className="card-description membership-description">per month</p>
          </div>
          <ul className="membership-feature">
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Unlimited gym access
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              1 Training program
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Free fitness consultation
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Free wifi
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              50% off drinks
            </li>
          </ul>
          <a href="#get-started" className="membership-btn">GET STARTED</a>
        </div>
        <div className="col membership-card active">
          <div>
            <span className="membership-plan">Medium Plan</span>
            <h4 className="card-title membership-title">$60</h4>
            <p className="card-description membership-description">per month</p>
          </div>
          <ul className="membership-feature">
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Unlimited gym access
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              2 Training program
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Free fitness consultation
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Personal Trainer
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Free wifi
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              50% off drinks
            </li>
          </ul>
          <a href="#get-started" className="membership-btn">GET STARTED</a>
        </div>
        <div className="col membership-card">
          <div>
            <span className="membership-plan">Premiere Plan</span>
            <h4 className="card-title membership-title">$90</h4>
            <p className="card-description membership-description">per month</p>
          </div>
          <ul className="membership-feature">
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Unlimited gym access
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              All Training program
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Free fitness consultation
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Personal Trainers
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Free clothes & equipments
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Free wifi
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              50% off drinks
            </li>
          </ul>
          <a href="#get-started" className="membership-btn">GET STARTED</a>
        </div>
      </div>
    </section>
  )
}

export default Pricing;