import React from 'react';

import Menu from './Menu';
import Carousel from './Carousel';
import EnrollmentTable from './EnrollmentTable';
import AppForm from './AppForm';
import Modal from './Modal';

const Home = () => (
  <div>
  <div id="content">

    <div id="banner">
      <img id="logo" src="au123456789.gif" width="441" height="90"/>
    </div>

    <Menu />

    <div id="main">

      <Carousel />

      <div className="heading">Welcome!</div>
      <p>Accessible University (AU) is a fictional university, and this is its
        fictional home page. This page is designed to demonstrate a variety of
        common web design problems that result in visitors with disabilities
        being unable to access the content or features of a web page.
        Although the heading at the top of this section of the page
        suggests that AU may be a welcoming institution,
        the inaccessible design of this page sends the opposite message.
      </p>

      <img className="hr" src="line_gradient.gif" alt="horizontal line graphic"/>

      <div className="heading">Bienvenido!</div>
      <p>Accesible Universidad (UA) es una universidad ficticia, y esta es su
        página de ficción. Esta página está diseñada para demostrar una variedad de
        común de diseño web que se traducen en problemas de los visitantes con discapacidad
        no poder acceder al contenido o las características de una página web.
        Aunque el título en la parte superior de esta sección de la página
        sugiere que AU puede ser una institución de bienvenida,
        el diseño inaccesible de esta página envía el mensaje opuesto.
      </p>

      <img className="hr" src="line_gradient.gif" alt="horizontal line graphic"/>

      <div className="heading">Can you spot the barriers?</div>
      <p>There are at least 18 accessibility issues on this page.
        To see a list of all known issues, <a href="https://www.washington.edu/accesscomputing/AU/issues.html">click here</a>.
        For a cheat sheet of accessibility issues, <a href="cheatsheet.html">click here</a>.
      </p>

      <img className="hr" src="line_gradient.gif" alt="horizontal line graphic"/>

      <div className="heading">AU Enrollment Trends</div>

      <EnrollmentTable />

    </div>

    <AppForm />

    <div id="footer">
      <div id="ccLogo">
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
      </div>
      Accessible University by <a href="http://washington.edu/accesscomputing/AU">University of Washington</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
      <p>This product was originally developed with support from the National Institute on Disability and Rehabilitation Research of the U.S. Department of Education (grant #H133D010306), and has been subsequently updated and maintained with support from the National Science Foundation (grant #CNS-054061S). The contents do not necessarily represent the policies of the U.S. federal government, and you should not assume their endorsement.</p>
    </div>

  </div>

  <Modal />
  </div>
);

export default Home;