import React, { Component } from 'react';
import NavBar from 'components/NavBar';
import Header from 'components/Header';
import SkillArea from 'components/SkillArea';
import Footer from 'components/Footer';
import Work from 'components/Work';
import Timeline from 'components/Timeline';
import Contact from 'components/Contact';
import lang from 'lang';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
  }

  componentDidMount = () => {
    this.setState({
      height: window.innerHeight
    });
  };

  render() {
    const { height } = this.state;

    return (
      <div>
        <NavBar list={lang('EN').MENU_LIST} />
        <Header height={height} />
        <SkillArea />
        <Work />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    );
  }
}
