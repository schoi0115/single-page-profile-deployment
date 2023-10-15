import "../App.css";
import "../App.scss"
import React from "react";
import pdf from '../files/Seungil Choi - Resume.pdf';
function Home() {

    return (
        <div className="textarea_home">
            <a href={pdf} download className="resume">Click to download my Resume</a>
            <div class="wrapper">
                <div class="focus">
                    Shawn Choi
                </div>
                <div class="mask">
                    <div class="text">Shawn Choi</div>
                </div>
            </div>

            <div className="home" id="home">
                <br />
                <h2 className="title">Software Engineer</h2>
                {/* <img className="Img" src={Propic} /> */}


                <div className="textStyle">
                    <br />
                    <h2 className="skills">
                        Technical Skills:
                    </h2>
                    <h3 className="skills">Languages</h3>
                    <br />
                    <ul className="skill-language">

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

                        <br />
                        <li>Java</li>
                        <ul>
                            <li>Spring Boot</li>
                            <li>JUnit</li>
                            <li>Maven</li>
                            <li>J2EE</li>
                            <li>Spring MVC</li>
                            <li>Mockitto</li>
                        </ul>

                        <br />
                        <li>C#</li>
                        <ul>
                            <li>.Net</li>
                        </ul>

                        <br />
                        <li>Ruby</li>
                        <ul>
                            <li>Ruby on Rails</li>
                        </ul>

                    </ul>

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
                    <div className="skills">
                        With 3 years of experience in software development and 5 years of effective managerial leadership, I have a proven track record of engaging with diverse customers and training team members collaboratively.
                        <br />
                        <br />
                        I am also bilingual in Korean and English, holding a Bachelor of Fine Arts. My professional background includes proficiency in Ruby on Rails and JavaScript programming, complemented by a solid foundation in Arts and Design. I am adept at using various tools, including Quickbooks, Adobe Photoshop, and Microsoft/Google platforms, and I am well-versed in communication tools like Zoom. Currently, I am actively seeking full-time Full-Stack Developer positions."


                        <br />
                        <br />

                        I am a quick learner and enjoy a face-paced environment.
                    </div>
                </div>
            </div>






        </div >


    );

}

export default Home;




