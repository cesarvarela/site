import React from 'react'
import Link from 'gatsby-link'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { Contact } from '../components/Contact'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Social, SocialItemProps } from '../components/Social'
import { ProjectItemProps, Projects } from '../components/Projects'
import { Works, WorkItemProps } from '../components/Works'
import { Lightbox } from '../components/Lightbox'


let socialItems =
  [
    {
      key: 'stack-overflow',
      description: 'Stack Overflow',
      link: 'http://stackoverflow.com/users/1030208/cesar-varela'
    },
    {
      key: 'linkedin',
      description: 'Linkedin',
      link: 'https://www.linkedin.com/in/cesarluisvarela'
    },
    {
      key: 'github',
      description: 'Github',
      link: 'https://github.com/cesarvarela'
    },
    {
      key: 'lastfm',
      description: 'Lastfm',
      link: 'http://www.last.fm/user/elcesarpo'
    },
    {
      key: 'facebook',
      description: 'Facebook',
      link: 'https://www.facebook.com/elcesarpo'
    },
    {
      key: 'twitter',
      description: 'Twitter',
      link: 'https://twitter.com/cesarpo'
    },
  ]

let projectItems =
  [
    // {
    //   key: 'poatm',
    //   link: 'https://poandthemachines.com',
    //   img: './poatm.png',
    //   title: 'Po and the machines',
    //   description: `This is where I host all my personal projects. I do all the design and development over there, please check it out and try my games!`,
    // },
    {
      key: 'tbm',
      link: 'https://www.thebotmakers.com',
      img: './tbm.png',
      title: 'The Bot Makers',
      description: `A chatbots development studio I've started along with some friends. Need a chatbot? Don't hesitate and talk with us!`,
    },
    {
      key: 'botsfactory',
      link: 'https://www.botsfactory.io',
      img: './bf.png',
      title: 'BotsFactory',
      description: `A chatbots visual development platform built on top of Microsoft Bot Framework`,
    }
  ]

let works =
  [
    {
      img: "./thumb-botsfactory.png",
      title: "Botsfactory",
      description: "A chatbots development platform where I lead the Frontend and UX/UI efforts of the development team. ",
      link: "https://www.botsfactory.io",
      external: true
    },
    {
      img: "./thumb-kavachess.png",
      title: "Kava Chess",
      description: "Concept, design (graphics and gameplay), and development.",
      link: "https://itunes.apple.com/us/app/kava-chess/id1143682673",
      external: true
    },
    {
      img: "./thumb-stealthy.png",
      title: "Stealhty - Work in progress",
      description: "Concept, design (graphics and gameplay), and development.",
      link: "https://poandthemachines.com/stealthy/",
      external: true
    },
    {
      img: "./thumb-totems.png",
      title: "The day of the Totems",
      description: "Concept, design (graphics and gameplay), and development.",
      link: "https://poandthemachines.com/thedayofthetotems/",
      external: true
    }
  ]

let skills =
  [
    {
      name: "Languages",
      items:
      [
        {
          name: "Javascript"
        },
        {
          name: "Typescript"
        },
        {
          name: "Swift"
        },
        {
          name: "C#"
        },
        {
          name: "ActionScript 3"
        },
        {
          name: "PHP"
        },
        {
          name: "GO"
        },
      ]
    },
    {
      name: "FRAMEWORKS/LIBRARIES",
      items:
      [
        {
          name: "React"
        },
        {
          name: "Angular"
        },
        {
          name: "Express"
        },
      ]
    },

    {
      name: "STACKS/PLATFORMS",
      items:
      [
        {
          name: "Node.js"
        },
        {
          name: "iOS"
        },
        {
          name: ".NET"
        },
        {
          name: "Unity 3D"
        },
        {
          name: "LAMP"
        }
      ]
    },
    {
      name: "SOFTWARE",
      items:
      [
        {
          name: "Visual Studio/ VSCode"
        },
        {
          name: "Xcode"
        },
        {
          name: "Photoshop"
        },
        {
          name: "Unity 3D"
        },
        {
          name: "Sketch"
        },
        {
          name: "Chrome DEV tools"
        }
      ]
    }
  ]

class IndexPage extends React.Component {

  lightbox;

  showInLightbox(src) {

    this.lightbox.show(src)
  }

  render() {

    return (<div>
      <Header />
      <hr className="dot hidden-md-down" />
      <Menu />
      <hr className="dot" />
      <Works items={works} lightboxCallback={this.showInLightbox.bind(this)} />
      <About skills={skills} />
      <Projects items={projectItems} />
      <Social items={socialItems} />
      <Contact />
      <Footer />
      <Lightbox ref={r => this.lightbox = r} />
    </div>)
  }
}

export default IndexPage
