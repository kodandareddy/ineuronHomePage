import React from "react";

const footer = () => {
  return (
    <div class=" pt-5">
      <footer class="text-center text-lg-start text-white">
        <section class="d-flex justify-content-between p-4 networks">
          <div class="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
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
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 d-flex items-center align-items-center flex-column">
                <h6 class="text-uppercase ">Company name</h6>
                <hr class="mb-4 mt-0 d-inline-block mx-auto " />
                <img
                  className="footer_logo mb-3"
                  src="https://ineuron.ai/images/ineuron-logo-white.png"
                />
                <img src="	https://ineuron.ai/images/iso-9001-2015.svg" />
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase ">Products</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  //style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <a href="#!" class="text-white">
                    Job Portal
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    Internship portal
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    Hall of fame
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    InBlog
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase ">Useful links</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  //style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <a href="#!" class="text-white">
                    Contact us
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    FAQs
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    Job assistance
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    Terms and conditions
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase ">Contact</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  //style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <i class="fas fa-home mr-3"></i> Bengaluru, Karnataka 562129
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i> contact@ineuron.ai
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default footer;
