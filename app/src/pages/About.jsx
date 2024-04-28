import './About.css'

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h2>About us</h2>
      </div>
      <section className="container">
        <h3 className="flex-center primary-text">Who we are</h3>
        <div className="employee-container">
          <div className="employee-item">
            <div className="employee employee1 br-100"></div>
            <h4>Bill Evans</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eius
              repudiandae veniam laudantium repellat molestiae adipisci quo!
              Perspiciatis vel hic, autem, dolor optio explicabo nesciunt
              ratione aperiam, iste eveniet sed?
            </p>
          </div>
          <div className="employee-item">
            <div className="employee employee2 br-100"></div>
            <h4>Laura Matt</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eius
              repudiandae veniam laudantium repellat molestiae adipisci quo!
              Perspiciatis vel hic, autem, dolor optio explicabo nesciunt
              ratione aperiam, iste eveniet sed?
            </p>
          </div>
          <div className="employee-item">
            <div className="employee employee3 br-100"></div>
            <h4>Ram Kumar</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eius
              repudiandae veniam laudantium repellat molestiae adipisci quo!
              Perspiciatis vel hic, autem, dolor optio explicabo nesciunt
              ratione aperiam, iste eveniet sed?
            </p>
          </div>
        </div>
        <div className="employee-container flex-center">
          <div className="employee-item width-33">
            <div className="employee employee4 br-100"></div>
            <h4>Yuri Gargin</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eius
              repudiandae veniam laudantium repellat molestiae adipisci quo!
              Perspiciatis vel hic, autem, dolor optio explicabo nesciunt
              ratione aperiam, iste eveniet sed?
            </p>
          </div>
          <div className="employee-item width-33">
            <div className="employee employee5 br-100"></div>
            <h4>Asha Sing</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eius
              repudiandae veniam laudantium repellat molestiae adipisci quo!
              Perspiciatis vel hic, autem, dolor optio explicabo nesciunt
              ratione aperiam, iste eveniet sed?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;