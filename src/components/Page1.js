import "../App.css";
import React, { Component } from "react";

class Page1 extends Component {

  render() {
    return (

      <div className="typeare_personality">
        <div className="bio">
          <br />

          <h2 className="skills">
            Technical Skills:
          </h2>
          <h3 className="skills">
            Languages
          </h3>
          <br />

          <div className="skill_wrapper">
            <ul>
              <li>JavaScript</li>

              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Jest</li>
                <li>Node.js</li>
                <li>React Bootstrap</li>
                <li>AngularJS</li>
                <li>jQuery</li>
                <li>npm</li>
                <li>Vue</li>
              </ul>
            </ul>
            <ul>

              <li>Java</li>
              <ul>
                <li>Spring Boot</li>
                <li>JUnit</li>
                <li>Maven</li>
                <li>J2EE</li>
                <li>Spring MVC</li>
                <li>Mockitto</li>
              </ul>
            </ul>
            <ul>
              <li>C#</li>
              <ul>
                <li>.Net</li>
              </ul>

            </ul>
            <ul>
              <li>Ruby</li>
              <ul>
                <li>Ruby on Rails</li>
              </ul>

            </ul>
          </div>


          <ul>
            <h3 className="skills">Tools</h3>
            <li>GitHub</li>
            <li>Chrome Dev Tools</li>
            <li>Postman</li>
            <li>Visual Studio</li>
            <li>Linux</li>
            <li>Ubuntu</li>
          </ul>

          <ul>

            <h4>Flatiron School</h4>

            <li>Certificate of Completion of Software Engineering 2021</li>

            <h4>Binghamton University</h4>

            <li>Bachelor of Fine Arts 2015</li>

          </ul>

        </div>

        <div className="typearea">
          <h1>Proactive</h1>
          <h1>Creative</h1>
          <h1>Team Player</h1>
          <h1>Sculptor</h1>
          <h1>Planner</h1>
        </div>
      </div>


    );
  }
}

export default Page1;
