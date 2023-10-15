import "../App.css";
import React from "react";
import pdf from '../files/Seungil Choi - Resume.pdf';



function Page4() {

    function onResumeClick() {
        window.open(pdf);
    }
    return (
        <div className="typearea" id="page4">
            <a className="resumePreview" onClick={onResumeClick}> Resume (Click HERE see the preview) </a>

            <h1>Cover Letter</h1>

            <p className="experience">
                <br />
                To whom it may concern,
                <br />
                <br />
                I have 3 years of experience with JavaScript and React as a web developer, and I've successfully contributed to various projects during my tenure at Infosys Limited LTD. With my proven track record in web development, I am confident in my ability to make a valuable contribution to your team. I'm excited about the opportunity to grow as a software developer, particularly in JavaScript, and I'm drawn to the dynamic nature of this role.

                In addition to my technical expertise, I also bring 5 years of managerial experience in an office-setting, where I thrived in a fast-paced environment with demanding deadlines. My creative, tech-savvy, and detail-oriented approach allows me to quickly comprehend and develop new skills. For a more detailed overview of what I can offer and my accomplishments, please refer to my resume.

                <br />
                <br />
                The prospect of collaborating with professionals who share my passion for Infosys Limit LTD is truly inspiring. During my career, I have demonstrated my adaptability, problem-solving abilities, and commitment to achieving results. These qualities align well with the demands of FrontEnd assignments, where rapid response, flexibility, and expertise are essential.

                <br />
                <br />
                In my previous roles at Infosys Limited, I refined my skills through involvement in JavaScript - React projects and Java - Spring Boot projects enabling me to excel in dynamic and rapidly evolving work settings. I have a proven track record of successful UBS projects that underscore my capacity to deliver high-quality outcomes within tight timelines. Through my experience, I've gained a deep appreciation for the significance of effective communication and collaboration, both of which are pivotal in the successful execution of web application assignments.

                <br />
                <br />
                My goal at this juncture is to launch my career in the tech industry by joining an exceptional company where I can foster my growth and enhance my skills as a software engineer. I eagerly anticipate the opportunity to delve into how I can contribute to your organization's success. You can reach me at your earliest convenience by phone at 607-206-6529 or via email at schoi0115@gmail.com. I am excited about the prospect of joining your team as a Software Engineer and am ready to start making immediate contributions.

                <br />
                <br />


                Sincerely,
                <br />

                Seungil Choi
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>

    );

}

export default Page4;