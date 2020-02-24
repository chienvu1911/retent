import React from "react";

export default function SubscribeNewsletter() {
  return (
    <div className="site-section subscribe bg-retent text-color-white">
      <div className="container">
        <form action="#" className="row align-items-center">
          <div className="col-md-5 mr-auto">
            <h2>Newsletter Subcribe</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis aspernatur ut at quae omnis pariatur obcaecati
              possimus nisi ea iste!
            </p>
          </div>
          <div className="col-md-6 ml-auto">
            <div className="d-flex">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button type="submit" className="btn btn-secondary">
                <i className="fab fa-telegram-plane"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
