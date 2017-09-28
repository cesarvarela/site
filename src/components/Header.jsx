import React from 'react'
import { Section } from './Section'

export class Header extends React.Component {

	render() {
		return <Section id="head">
			<h1>Cesar Varela</h1>
			<img className="po" src={ require("../img/po.png") } alt="po face" />
			<hr className="dot" />
			<p className="po-quote">
				Hi, my name is Cesar Varela, this is my personal website,
				scroll down to know a little more about me.
			</p>
		</Section>
	}
}