import  {React, Component} from 'react';

export default class SideBar extends Component {

    state = {
        page: 0,
    };



    render (){
        return(
            <div class="side-bar">
                <div class="side-bar-header">

                </div>
                <div class="side-bar-line">

                </div>
                <button class="side-bar-button active" onClick={() => {this.props.callback(0)}}>
                    Início
                </button>
                <button class="side-bar-button" onClick={() => {this.props.callback(1)}}>
                    Sobre mim
                </button>
                <button class="side-bar-button" onClick={() => {this.props.callback(2)}}>
                    Formação
                </button>
                <button class="side-bar-button" onClick={() => {this.props.callback(3)}}>
                    Experiência
                </button>
                <button class="side-bar-button" onClick={() => {this.props.callback(4)}}>
                    Projetos
                </button>
            </div>
        );
    }
}