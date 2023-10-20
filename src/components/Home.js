import "../App.css";
import "../App.scss"
import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div className="textarea_home" id="home">


                <div className="main_content">
                    <div class="wrapper">
                        <div class="focus">
                            SeungIl Choi
                        </div>
                        <div class="mask">
                            <div class="text"> Seungil Choi</div>
                        </div>
                    </div>
                    <br />
                    {/* <img className="Img" src={Propic} /> */}
                    {/* <div className="iam">
                        I AM
                    </div> */}
                    <div className="spring_body">
                        <div class="clock">
                            <div class="wheel">
                                <div class="leaf"></div>
                                <div class="leaf"></div>
                                <div class="leaf"></div>
                                <div class="leaf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="spring_body">
                        <div class="clock2">
                            <div class="wheel2">
                                <div class="leaf2"></div>
                                <div class="leaf2"></div>
                                <div class="leaf2"></div>
                                <div class="leaf2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="spring_body">
                        <div class="clock3">
                            <div class="wheel3">
                                <div class="leaf3"></div>
                                <div class="leaf3"></div>
                                <div class="leaf3"></div>
                                <div class="leaf3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="spring_body">
                        <div class="clock4">
                            <div class="wheel4">
                                <div class="leaf4"></div>
                                <div class="leaf4"></div>
                                <div class="leaf4"></div>
                                <div class="leaf4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="spring_body">
                        <div class="clock5">
                            <div class="wheel5">
                                <div class="leaf5"></div>
                                <div class="leaf5"></div>
                                <div class="leaf5"></div>
                                <div class="leaf5"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="title">Software Engineer</h2>
                </div>





            </div >


        );

    }
}

export default Home;




