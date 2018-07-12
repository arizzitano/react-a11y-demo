import React from 'react';

const Menu = () => (
  <ul id="menu">
    <li><a href="#">About</a>
      <ul>
        <li><a href="somepage.html?ref=News">News</a></li>
        <li><a href="somepage.html?ref=Governance">Governance</a></li>
        <li><a href="somepage.html?ref=Diversity">Diversity</a></li>
        <li><a href="somepage.html?ref=Contact%20Us">Contact Us</a></li>
      </ul>
    </li>
    <li><a href="#">Academics</a>
      <ul>
        <li><a href="somepage.html?ref=Degree%20Programs">Degree Programs</a></li>
        <li><a href="somepage.html?ref=AU%20Faculty">AU Faculty</a></li>
        <li><a href="somepage.html?ref=Distance%20Learning">Distance Learning</a></li>
        <li><a href="somepage.html?ref=Libraries">Libraries</a></li>
      </ul>
    </li>
    <li><a href="#">Admissions</a>
      <ul>
        <li><a href="somepage.html?ref=Undergraduate">Undergraduate</a></li>
        <li><a href="somepage.html?ref=Graduate">Graduate</a></li>
        <li><a href="somepage.html?ref=Tuition">Tuition</a></li>
        <li><a href="somepage.html?ref=Financial%20Aid">Financial Aid</a></li>
      </ul>
    </li>
    <li><a href="#">Visitors</a>
      <ul>
        <li><a href="somepage.html?ref=Events">Events</a></li>
        <li><a href="somepage.html?ref=Campus_Map">Campus Map</a></li>
        <li><a href="somepage.html?ref=Parking">Parking</a></li>
      </ul>
    </li>
  </ul>
);

export default Menu;