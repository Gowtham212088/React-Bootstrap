import React from "react";

export default function Contactus() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-8 my-auto">
              <h4>Contact Us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / About Us</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6> Contact Form </h6>
                  <hr />
                  <div className="form-group">
                    <label for=""> Full Name </label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="Enter Full Name"
                    />
                  </div>

                  <div className="form-group">
                    <label for=""> Phone Number </label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="Enter Full Name"
                    />
                  </div>

                  <div className="form-group">
                    <label for=""> Email </label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="Enter Full Name"
                    />
                  </div>

                  <div className="form-group">
                    <label for=""> Message </label>

                    <textarea
                      rows="3"
                      cols="4"
                      className="form-control"
                      placeholder="Type your message. . ."
                    ></textarea>
                  </div>

                  <div className="form-group" py-3>
                    <button
                      type="button"
                      className="btn btn-primary shadow w-100"
                    >
                      {" "}
                      Send Message{" "}
                    </button>
                  </div>
                </div>

                <div className="col-md-6 border-right-0">
                  <h5 className="main-heading"> Address Information </h5>

                  <div className="underline"></div>

                  <div>
                    <p className="text-while mb-1">
                      #64, Chennai Tamilnadu India.{" "}
                    </p>
                  </div>

                  <div>
                    <p className="text-while mb-1"> +91 9999xxxxx1 </p>{" "}
                  </div>
                  <div>
                    <p className="text-while mb-1"> +91 9987xxxxx2 </p>{" "}
                  </div>
                  <div>
                    <p className="text-while mb-1"> someone@gmail.com </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
