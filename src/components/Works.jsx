import React from 'react'
import { Section } from './Section'


let context = require.context("../img/thumbs", true, /^\.\/.*\.png$/)

export class Works extends React.Component {

	itemClick(e, item) 
	{
		if(item.link.indexOf('swf') > -1)
		{
			e.preventDefault();
			this.props.lightboxCallback(item.link);
		}
	}

	render() {

		return <Section id="games" preHeading="" heading="Works" postHeading="Stuff I've worked on over the years ">
			<ul className="media-list">
				{this.props.items.map((item, index) => {
					return <li className="media mt-3" key={index}>
						<a className="media-left" href={item.link} target="_blank" onClick={e => this.itemClick(e, item)}>
							<img className="media-object rounded" src={context(item.img)} />
						</a>

						<div className="media-body">
							<h4 className="media-heading">{item.title}</h4>
							{item.description}
							<h5>
							<a href={item.link} target="_blank" onClick={e => this.itemClick(e, item)}>
								{item.linkDescription ? item.linkDescription : "view more"}
								{item.external &&
									<i className="fa fa-external-link-square" aria-hidden="true"></i>
								}								
							</a>
							</h5>
						</div>
					</li>
				})}
			</ul>
		</Section>
	}
}