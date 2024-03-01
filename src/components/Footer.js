import React from "react";
import ReactDOM from "react-dom";

export const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white mt-auto" style={{ backgroundColor: "#1c2331" }}>
      <section className="d-flex justify-content-between p-4" style={{ backgroundColor: "#dc405c" }}>
      <div className="me-5">
          <span>Get connected with us on social networks:</span>
      </div>
      {/* <div>
          <a href="" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="text-white me-4">
              <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="text-white me-4">
              <i class="fab fa-google"></i>
          </a>
          <a href="" class="text-white me-4">
              <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="text-white me-4">
              <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="text-white me-4">
              <i class="fab fa-github"></i>
          </a>
      </div> */}
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Lifte</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, height: 2, backgroundColor: "#7c4dff" }} />
              <p>
                Enhance your weightlifting routine with a versatile
                calculator designed for effective strength training
                and performance tracking.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Products Used</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, height: 2, backgroundColor: "#7c4dff" }} />
              <p>
                <a href="https://www.backendform.com/" rel="noopener noreferrer" target="_blank" className="text-white">backendform</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: "#7c4dff" }} />
              <p><i className="fas fa-home mr-3"></i> Honolulu, HI</p>
              <p><i className="fas fa-envelope mr-3"></i> 808jalen@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
