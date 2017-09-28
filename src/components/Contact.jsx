import React from 'react'
import { Section } from './Section'

export class Contact extends React.Component {

	render() {
		return <Section id="contact" preHeading="Communication is Key" heading="Contact">
			<div className="row">
				<div className="col-md-6 text-md-right">
					<img src={require("../img/MECard.gif")} alt="qr con datos de contacto" />
				</div>
				<div className="col-md-6">
					<h5>Scan this to get my contact info to your smartphone.</h5>
					<p>Or you can:</p>
					<ul className="list-unstyled">
						<li>
							<a href="mailto:mail@cesarvarela.com">mail@cesarvarela.com</a>
						</li>
						<li>
							<a href="tel:+598%2094%20085%20280">+598 94 085 280</a>
						</li>
					</ul>
				</div>
			</div>
		</Section>
	}
}