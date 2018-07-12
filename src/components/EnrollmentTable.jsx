import React from 'react';

const EnrollmentTable = () => (
  <table id="enrollment">
    <tr>
      <td style={{width:'6em'}}>&nbsp;</td>
      <td colSpan="6" style={{textAlign:'center'}}><b>2007-08</b></td>
      <td colSpan="6" style={{textAlign:'center'}}><b>2008-09</b></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><b>CS</b></td>
      <td><b>Eng</b></td>
      <td><b>Eco</b></td>
      <td><b>Phy</b></td>
      <td><b>Psy</b></td>
      <td><b>Spa</b></td>
      <td><b>CS</b></td>
      <td><b>Eng</b></td>
      <td><b>Eco</b></td>
      <td><b>Phy</b></td>
      <td><b>Psy</b></td>
      <td><b>Spa</b></td>
    </tr>
    <tr>
      <td><b>Total</b></td>
      <td>84</td>
      <td>126</td>
      <td>43</td>
      <td>32</td>
      <td>112</td>
      <td>59</td>
      <td>82</td>
      <td>140</td>
      <td>45</td>
      <td>34</td>
      <td>101</td>
      <td>64</td>
    </tr>
    <tr>
      <td>% Male</td>
      <td>89</td>
      <td>84</td>
      <td>73</td>
      <td>69</td>
      <td>20</td>
      <td>47</td>
      <td>87</td>
      <td>80</td>
      <td>69</td>
      <td>69</td>
      <td>22</td>
      <td>48</td>
    </tr>
    <tr>
      <td>% Female</td>
      <td>11</td>
      <td>16</td>
      <td>27</td>
      <td>31</td>
      <td>80</td>
      <td>53</td>
      <td>13</td>
      <td>20</td>
      <td>31</td>
      <td>31</td>
      <td>78</td>
      <td>52</td>
    </tr>
  </table>
);

export default EnrollmentTable;
