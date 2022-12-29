import ProgramImage from '../images/offer.png'
import ProgramImage1 from '../images/program1.jpg'
import ProgramImage2 from '../images/yoga.jpg'

const Program = () => {
    return (
        <section className="program container" id="program">
            <h3 className="section-title">OUR PROGRAM</h3>
            <span className="section-subtitle">Unlimited home workout with calorie tracking</span>
            <div className="row program-row">
                <div className="col program-card">
                    <img
                        className="program-card-image"
                        src={ProgramImage}
                        alt=""
                    />
                    <h4 className="card-title">Cardio & Strength</h4>
                    <p className="card-description">
                        Cardio exercises such as dancing and jogging improve your endurance. Strength workouts like Pilates and weightlifting improve strength and balance. Together, both types of exercise can help prevent injury and improve your overall fitness.
                    </p>
                </div>
                <div className="col program-card">
                    <img
                        className="program-card-image"
                        src={ProgramImage1}
                        alt=""
                    />
                    <h4 className="card-title">Muscle Building</h4>
                    <p className="card-description">
                        “Protein is the most important and essential component of nutrition and
                        the foundation of muscle gain,” he says.
                    </p>
                </div>
                <div className="col program-card">
                    <img
                        className="program-card-image"
                        src={ProgramImage2}
                        alt=""
                    />
                    <h4 className="card-title">Stretch & Yoga</h4>
                    <p className="card-description">
                        Yoga and stretching can look and feel similar but they are two very different practices.
                        Stretching exercises are only focused on increasing flexibility. While yoga does
                        involve holding static stretches, this is only one component of the practice.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Program;