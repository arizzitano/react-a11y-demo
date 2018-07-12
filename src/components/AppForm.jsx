import React from 'react';

const AppForm = () => (
  <div id="appForm">

    <div className="heading">Apply Now!</div>
      <p className="required reqExample">(required fields are in blue)</p>

    <form action="#" method="post">

      <div id="error"></div>

      <div className="required">
        Name:
        <input type="text" name="name"/>
      </div>

      <div className="required">
        Email:
        <input type="text" name="email"/>
      </div>

      <div>
        City:
        <input type="text" name="city"/>
      </div>

      <div>
        State/Province:
        <input type="text" name="state"/>
      </div>

      <div>
        Zip/Postal Code:
        <input type="text" name="zip"/>
      </div>

      <div>
        Country:
        <input type="text" name="country"/>
      </div>

      <div><b>Desired major(s):</b></div>

      <div id="majors">
        <div className="major">Computer Science <input type="checkbox" name="major_cs"/></div>
        <div className="major">Engineering <input type="checkbox" name="major_eng"/></div>
        <div className="major">Economics <input type="checkbox" name="major_econ"/></div>
        <div className="major">Physics <input type="checkbox" name="major_phy"/></div>
        <div className="major">Psychology <input type="checkbox" name="major_psy"/></div>
        <div className="major">Spanish <input type="checkbox" name="major_sp"/></div>
      </div>

      <div id="captcha">
        <b>Security Test</b>
        <p>Please enter the two words you see below, separated by a space</p>
        <input type="text" name="captcha"/>
        <img src="captcha.png"/>
      </div>

      <div>
        <input id="submit" type="submit" name="submit" value="Submit" />
      </div>

    </form>

  </div>
);

export default AppForm;
