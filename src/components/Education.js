import React from 'react';

const Education = () => {
  return (
    <Education>
       <h3>Education:</h3>
       <p>I am currently pursuing a Bachelors Degree in IT Engineering from <i><a href="https://vesit.ves.ac.in/">Vivekanand Education Society's Institute of technology,Chembur</a></i>(<abbr>VESIT</abbr>).</p>
        <li>These are my qualifications so far:</li>
        <details>
            <summary>View Details</summary>
            <table border="1px">
                <thead>
                    <tr>
                        <th colspan="3">My Education</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Grade</b></td>
                        <td><b>Marks</b></td>
                        <td><b>Place</b></td>
                    </tr>
                    <tr>
                        <td>SSC</td>
                        <td>90.60%</td>
                        <td>St.Xavier's High School, Nerul</td>
                    </tr>
                    <tr>
                        <td>HSC</td>
                        <td>97%</td>
                        <td>K.J. Somaiya Jr College of Science, Vidyavihar</td>
                    </tr>
                    <tr>
                        <td>BE</td>
                        <td>9.5 CGPA</td>
                        <td>VESIT</td>
                    </tr>
                </tbody>
            </table>
        </details>
    </Education>
  );
};

export default Education;