import React from "react";
import { Container } from "reactstrap";

const SlideShow = () => {
  return (
    <section className="slide-show text-center">
      <h3 className="py-2">With Great Outcomes.</h3>
      <p>Our customers have gotten offers from awesome companies.</p>
      <div className="logo-slider py-5">
        <div>
          <img src="https://cdn.worldvectorlogo.com/logos/amazon-icon.svg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" />
          <img src="https://www.clipartmax.com/png/middle/260-2604069_file-logo-arvarto-svg-software-company-banner.png" />
          <img src="https://w7.pngwing.com/pngs/758/385/png-transparent-salesforce-com-business-siebel-systems-microsoft-dynamics-crm-oracle-crm-business-love-blue-text-thumbnail.png" />
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-OwXIcfeHAF8hjytBvE2dxC2RY0wJYUUw55NgoEUx5yA3I9Wg1iNf-zjLYA2G46nezQ&usqp=CAU"/>
            <img src="https://w7.pngwing.com/pngs/437/639/png-transparent-syslog-ng-computer-servers-logfile-balabit-software-company-blue-text-logo.png"/>
        </div>
        <div>
          <img src="https://w7.pngwing.com/pngs/265/381/png-transparent-xero-accounting-software-accountant-bookkeeping-business-blue-text-people-thumbnail.png" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Classy_%28crowdfunding_software_company%29.svg/1200px-Classy_%28crowdfunding_software_company%29.svg.png" />
          <img src="https://www.loftware.com/siteassets/customer-logos/abb_logo.svg.png" />
          <img src="https://www.promptsoftech.com/img/blog-list-5.png" />
          <img src="https://res.cloudinary.com/zoominfo-com/image/upload/w_70,h_70,c_fit/metro-markets.de"/>
          <img src="https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt601c406b0b5af740/620577381692951393fdf8d6/elastic-logo-cluster.svg"/>
        </div>
        
      </div>
    </section>
  );
};

export default SlideShow;
