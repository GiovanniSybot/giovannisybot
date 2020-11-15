import {React, Component} from 'react';
import AboutMe from '../Contents/AboutMe.js';
import Experience from '../Contents/Experience.js';
import Projects from '../Contents/Projects.js';
import Welcome from '../Contents/Welcome.js';
import Formation from '../Contents/Formation.js';

export default class Content extends Component {
    render() {
        switch (this.props.page) {
            case 0:
                return(<Welcome/>);
            case 1:
                return(<AboutMe/>);
            case 2:
                return(<Formation/>);
            case 3:
                return(<Experience/>);
            case 4:
                return(<Projects/>);
            default:
                return(<p>Outra pagina</p>);
        }
    }
}