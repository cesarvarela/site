import React from 'react'
import classnames from 'classnames'
import { Section } from './Section'

let context = require.context("../img/projects", true, /^\.\/.*\.png$/)

export class Projects extends React.Component {

    render() {
        return <Section id="projects" heading="Projects I'm part of">
            <div className="row">
                {
                    this.props.items.map((item, index) => {
                        return <div key={index} className="col-md-6">
                            <div className="image">
                                <a href={item.link} target="_blank">
                                    <img src={context(item.img)} />
                                </a>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    })
                }
            </div>
        </Section>
    }
}