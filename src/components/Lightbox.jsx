import React from 'react'
const flashdetect = require('flashdetect')

export class Lightbox extends React.Component {

    constructor() {
        super()
        this.state =
            {
                visible: false
            }
    }

    show(src) {
        this.setState({ visible: true, src: src });
    }

    hide() {
        this.setState({ visible: false })
    }

    render() {

        if (this.state.visible) {
            return <div className="lightbox">
                <i className="fa fa-times-circle hide" aria-hidden="true" onClick={this.hide.bind(this)} />
            </div>
        }
        else {
            return <div />
        }
    }
}