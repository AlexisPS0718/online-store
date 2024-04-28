import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <h2>Contact us</h2>
      <form>
        <fieldset>
          <legend>Personal information</legend>
          <div>
            <label>Name: </label>
            <input type="text" id="txtName" placeholder="Name" />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" id="txtEmail" placeholder="Email" />
          </div>
          <div>
            <label>Phone number: </label>
            <input type="tel" id="txtPhone" placeholder="Phone number" />
          </div>
          <div>
            <label>Message: </label>
            <textarea cols="30" rows="3" placeholder="Message"></textarea>
          </div>
        </fieldset>
        <fieldset>
          <legend>Product information</legend>
          <div>
            <label>Type: </label>
            <select id="ctrlType">
              <option value="option1">--- Option 1 ---</option>
              <option value="option2">--- Option 2 ---</option>
              <option value="option3">--- Option 3 ---</option>
            </select>
          </div>
          <div>
            <label>Number: </label>
            <input type="number" id="txtNumber" placeholder="Number" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Contact information</legend>
          <div>
            <div>
              <label>Date: </label>
              <input type="date" id="txtDate" />
            </div>
            <div>
              <label>Hour: </label>
              <input type="time" id="txtTime" />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Contact;