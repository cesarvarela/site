import React from 'react'
import { SkillItem, SkillItemProps } from './SkillItem'
import { Section } from './Section'

export class About extends React.Component {

    render() {
        return <Section id="about" heading="About" preHeading="'cause everybody has a past" postHeading="Something to say about me! (seems like one of those self-help questions)">
            <div className="skills">
                <h3>Skills</h3>
                <p>Analysis, design and software development.</p>

                <h3>Technologies</h3>
                <p>Over the years I've worked on lots of different projects with different requirements and challenges, here is some of the tools that helped me get thorugh them.</p>

                <div className="row">
                    {
                        this.props.skills.map((skillList) => {
                            return <div className="col-md-3">
                                <h4>{skillList.name}</h4>
                                <ul>
                                    {
                                        skillList.items.map((item, index) => {
                                            return <SkillItem name={item.name} key={index} />
                                        })
                                    }
                                </ul>
                            </div>
                        })
                    }
                </div>
            </div>

            <h3 className="cv"><a target="_blank" href="/assets/curriculum.pdf">
                You can also download my CV here <i className="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
            </h3>
        </Section>
    }
}