import {React, Component} from 'react';
import SideBar from './SideBar.js';
import Content from './Content.js';


export default class MainPage extends Component {

    constructor(props) {
        super(props)
        this.state = {page: 0}
        this.changePage = this.changePage
    }

    changePage = (page) => {this.setState({ page })}

    render(){
        return (
            <div class="page">
                <SideBar callback={this.changePage} />
                <div class="content">
                    <Content page={this.state.page} />
                </div>
            </div>
        );
    }


}

