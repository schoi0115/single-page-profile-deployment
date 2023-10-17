import "../App.css";
import React from "react";

function Page2() {


    return (
        <div className="page2layout" id="page2">
            <div>
                <br />
                <h2>
                    Technical Skills:
                </h2>
                <br />
                <h3>
                    Languages
                </h3>

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
                <br />
                <div>
                    <h3>Database (DB)</h3>
                    <ul className="database_layout">

                        <li>Oracle/Sybase</li>
                        <li>Hibernate</li>
                        <li>MongoDB</li>
                        <li>DB2 MySQL</li>
                        <li>SQL Server</li>
                        <li>PostgreSQL</li>
                        <li>Amazon DynamoDB</li>
                        <li>Apache Ignite</li>

                    </ul>
                </div>
                < br />
                <div>
                    <h3>Tools</h3>
                    <ul className="tool_layout">

                        <li>GitHub / GitLab</li>
                        <li>Chrome Dev Tools</li>
                        <li>Postman</li>
                        <li>Visual Studio</li>
                        <li>Linux</li>
                        <li>Ubuntu</li>
                        <li>Eclipse/IntelliJ</li>
                        <li>Unix Shell scripts</li>
                        <li>Agile Methodology</li>
                        <li>Design Patterns</li>
                        <li>Object-Oriented Design</li>
                        <li>Distributed Computation</li>
                        <li>Jira</li>
                        <li>Waterfall</li>

                    </ul>
                </div>




                {/* Education section */}
                {/* <ul>

                    <h4>Flatiron School</h4>

                    <li>Certificate of Completion of Software Engineering 2021</li>

                    <h4>Binghamton University</h4>

                    <li>Bachelor of Fine Arts 2015</li>

                </ul> */}

            </div>

        </div>
        // <div className="typearea">
        //<h1>Proactive</h1>
        //<h1>Creative</h1>
        //<h1>Team Player</h1>
        //<h1>Sculptor</h1>
        //<h1>Planner</h1>
        //</div>
    );

}

export default Page2;




