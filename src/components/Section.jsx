import React from 'react'

export class Section extends React.Component {

    render() {

        return <section id={this.props.id}>
            <div className="container-fluid">
                <p className="pre-heading">{this.props.preHeading}</p>
                <h2 className="line-heading">{this.props.heading}</h2>
                <p className="sub-line-heading">{this.props.postHeading}</p>
            </div>

            <div className="container"> 
                { this.props.children } 
            </div>
        </section>
    }
}