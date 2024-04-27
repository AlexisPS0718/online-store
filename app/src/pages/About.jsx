import './About.css'

function About() {
  return (
    <div className="about">
      <div class="about-title">
        <h2>About us</h2>
      </div>
      <section class="container">
        <h3 class="flex-center primary-text">Who we are</h3>
        <div class="employee-container">
          <div class="employee-item">
            <div class="employee employee1 br-100"></div>
            <h4>Bill Evans</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eius
              repudiandae veniam laudantium repellat molestiae adipisci quo!
              Perspiciatis vel hic, autem, dolor optio explicabo nesciunt
              ratione aperiam, iste eveniet sed?
            </p>
          </div>
          <div class="employee-item">
            <div class="employee employee2 br-100"></div>
            <h4>Laura Matt</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eius
              repudiandae veniam laudantium repellat molestiae adipisci quo!
              Perspiciatis vel hic, autem, dolor optio explicabo nesciunt
              ratione aperiam, iste eveniet sed?
            </p>
          </div>
          <div class="employee-item">
            <div class="employee employee3 br-100"></div>
            <h4>Ram Kumar</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eius
              repudiandae veniam laudantium repellat molestiae adipisci quo!
              Perspiciatis vel hic, autem, dolor optio explicabo nesciunt
              ratione aperiam, iste eveniet sed?
            </p>
          </div>
        </div>
        <div class="employee-container flex-center">
          <div class="employee-item width-33">
            <div class="employee employee4 br-100"></div>
            <h4>Yuri Gargin</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eius
              repudiandae veniam laudantium repellat molestiae adipisci quo!
              Perspiciatis vel hic, autem, dolor optio explicabo nesciunt
              ratione aperiam, iste eveniet sed?
            </p>
          </div>
          <div class="employee-item width-33">
            <div class="employee employee5 br-100"></div>
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