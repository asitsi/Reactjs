import React from "react";
import web from "../../image/nisha.jpg";
import web1 from "../../image/Pooja.jpg";
import web2 from "../../image/web2.jpg";
import { Link } from "react-router-dom";
import "../../styles.scss";
import ReactReadMoreReadLess from "react-read-more-read-less";

const Testimonial1 = () => {
  return (
    <div>
      <h1 className="blog_heading">Testimonials</h1>
      <div className="testimonial">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner container">
            <div className="carousel-item active">
              <div className="testimonial_content">
                <a href={web}>
                  <img src={web} className="Avtar_image  img-fluid" />
                </a>
                <h1>Nisha Sinha</h1>
                <p>
                  <sup>
                    <i
                      className="fa fa-quote-left mr-2"
                      style={{ fontSize: "14px", color: "#ffca08" }}
                      aria-hidden="true"
                    ></i>
                  </sup>
                  <ReactReadMoreReadLess
                    charLimit={300}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                    readMoreStyle={{ color: "#00ba74", fontSize: "15px" }}
                  >
                    It's a big thanks for helping me a lot in achieving my goal
                    of JRF. All the lectues were so helpful and i really learned
                    from basic to the top and my doubts got cleared whenever
                    needed and really all the faculties helped with quality
                    videos and lectures was amazing and exam focused and it
                    helped in clearing concepts more easily mam your lectures
                    werejust amazing especially of logical
                    reasoning,Statistics,,International Business, environment
                    and higher education that are current based as well as it
                    was guiding too for exam that what is more important and
                    need more focus so a big big thanks again for helping
                    motivating and guiding me in clearing my jrf.”
                  </ReactReadMoreReadLess>
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="testimonial_content">
                <a href={web1}>
                  <img src={web1} className="Avtar_image  img-fluid" />
                </a>
                <h1>Pooja Dhayal</h1>
                <p>
                  <sup>
                    <i
                      className="fa fa-quote-left mr-2"
                      style={{ fontSize: "14px", color: "#ffca08" }}
                      aria-hidden="true"
                    ></i>
                  </sup>
                  <ReactReadMoreReadLess
                    charLimit={300}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                    readMoreStyle={{ color: "#00ba74", fontSize: "15px" }}
                  >
                    Dive to learn helped me to achieve my goals.I cleared UGC
                    NET exam in December 2019. Earlier i was very confused about
                    how to start my preparation... But then I got to know about
                    this platform not only they provided me the content but a
                    pathway to move forword with my preparation with proper
                    guidance and assistance from all my teachers. But remember
                    if you have the will then you can achieve anything in life
                    provided you should carry that passion and consistency with
                    your preparation. S i big thank you to all my teachers who
                    motivated me. I am glad i came across this platform. ”
                  </ReactReadMoreReadLess>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial_content">
                <a href={web2}>
                  <img src={web2} className="Avtar_image  img-fluid" />
                </a>
                <h1>Parul</h1>
                <p>
                  <sup>
                    <i
                      className="fa fa-quote-left mr-2"
                      style={{ fontSize: "14px", color: "#ffca08" }}
                      aria-hidden="true"
                    ></i>
                  </sup>
                  <ReactReadMoreReadLess
                    charLimit={300}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                    readMoreStyle={{ color: "#00ba74", fontSize: "15px" }}
                  >
                    Hurreh!!!Finally, i got my JRF.Thank u so much Dive to learn
                    faculties.your video lecture helped me a lot in my self
                    study, especially ur series on entrepreneurship and
                    organisation behaviour which covers the current affairs of
                    related field. Really you are such an amazing teacher and
                    guide Once again heartiest thank u for providing such useful
                    lecture specially on management topics, Keep it up JRF
                    Management, December 2019.”
                  </ReactReadMoreReadLess>
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
          <div className="test_formorebtncontainer">
            <Link type="btn" to="/allTestimonials" className="test_ForMorebtn">
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial1;
