import React from 'react';

const Modal = () => (
  <div>
    <div id="modalMask"></div>
    <div id="modalContent">
      <div className="modalHeading">Eighteen Accessibility Issues</div>
      <button type="button" id="modalXButton">x</button>
      <ol>
        <li>No headings</li>
        <li>No alternate text on informative images</li>
        <li>Missing or excessive alternate text on decorative images</li>
        <li>Insufficient color contrast</li>
        <li>Inaccessible dropdown menu</li>
        <li>Insufficient visual cues</li>
        <li>Redundant, uninformative link text</li>
        <li>Color used to communicate information</li>
        <li>Language not specified</li>
        <li>Missing accessible form markup</li>
        <li>Inaccessible CAPTCHA</li>
        <li>Inaccessible validation</li>
        <li>Missing ARIA landmark roles</li>
        <li>Inaccessible modal window</li>
        <li>Inaccessible carousel</li>
        <li>Missing accessible table markup</li>
        <li>Missing abbreviation tags</li>
        <li>HTML fails validation</li>
      </ol>
      <button type="button" id="modalOkButton">OK</button>
    </div>
  </div>
);

export default Modal;
