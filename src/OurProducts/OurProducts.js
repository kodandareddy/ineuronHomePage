import React from "react";

const OurProducts = () => {
  return (
    <section className=" our_products">
      <div class="header">
        <h1>Our Products</h1>
      </div>
      <div class="row1-container">
        <div class="box box-down cyan">
          <h2>Job Portal</h2>
          <p>iNeuron's self-paced internship portal prioritises hands-on training with 570+ internship projects.</p>
          <img
            src="https://ineuron.ai/images/landing-page/products/jobPortal-icon.svg"
            alt=""
          />
        </div>

        <div class="box red">
          <h2>internship</h2>
          <p>
            Scans our talent network to create the optimal team for your project
          </p>
          <img
            src="https://ineuron.ai/images/landing-page/products/Internship-icon.svg"
            alt=""
          />
        </div>

        <div class="box box-down blue">
          <h2>Hall of Fame</h2>
          <p>
          Our student placements and 10+ career transitions speak volumes about our courses.
          </p>
          <img
            src="https://ineuron.ai/images/landing-page/products/halloffame-icon.svg"
            alt=""
            className="hall_of_fame"
          />
        </div>
      </div>
      <div class="row2-container">
        <div class="box orange">
          <h2>InBlog</h2>
          <p>Explore all you want about your favourite courses.</p>
          <img className="in_blog" src="https://ineuron.ai/images/landing-page/products/blog-icon.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
