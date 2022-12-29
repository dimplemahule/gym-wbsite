

const Subscription = () => {
return (
    <section className="container newsletter">
        <div className="newsletter-card">
          <h3 className="newsletter-title">Subscribe</h3>
          <p className="newsletter-subtitle">Get the latest information</p>
          <form action="">
            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email address"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
)
}

export default Subscription;