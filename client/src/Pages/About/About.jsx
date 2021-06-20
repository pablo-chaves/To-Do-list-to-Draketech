import { Button } from 'antd'
import React from 'react'
import style from './About.module.css';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import pablo from './images/pablo.jpg';

const About = () => {

    const profiles = [
        {
            name: "Pablo Chaves",
            linkedIn: "https://www.linkedin.com/in/pablo-chaves-/",
            github: "https://github.com/pablo-chaves",
            image: pablo,
        }
    ]

    let team = profiles.sort(function () { return Math.random() - 0.5 })

    return (
        <div className={style.aboutUsContainer}>
            <div className={style.titleAboutUs}>About</div>
            <div className={style.descriptionAboutUs}>To-Do App is an application developed with the following technologies: React, Redux, HTML, CSS, NodeJS, Express, Sequelize, Postgres, Typescript, JWT, Axios and bootstrap 4.
            </div>
            <div className={style.cardscontainer}>
            {
                team.map((e, i) =>
                    <div className={style.flipcard} key={i}>
                        <div className={style.flipcardinner}>

                            <div className={style.flipcardfront}>
                                <img className={style.imageProfileAboutUs} src={e.image} alt="profilepic" />
                                <div className={style.aboutUsName}>{e.name}</div>
                            </div>

                            <div className={style.flipcardback}>
                                <div className={style.aboutUsIcons}>
                                    <Button type="text" href={e.linkedIn} target="_blank"><AiFillLinkedin style={{ color: "white", fontSize: "35px" }} /></Button>
                                    <Button type="text" href={e.github} target="_blank"><AiFillGithub style={{ color: "white", fontSize: "35px" }} /></Button>
                                </div>
                                <div className={style.aboutUsName1}>{e.name}</div>
                            </div>
                        </div>
                    </div>
                )
            }
          </div>
        </div>
    )
}

export default About;
