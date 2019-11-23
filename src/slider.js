import React from 'react';
import logo1 from './images/1.jpg';
import logo2 from './images/2.jpg';
import logo3 from './images/3.jpg';
import logo4 from './images/4.jpg';
import logo5 from './images/5.jpg';
import logo6 from './images/6.jpg';
import logo7 from './images/7.jpg';
import logo8 from './images/8.jpg';
import logo9 from './images/9.jpg';
import logo10 from './images/10.jpg';
import logo11 from './images/11.jpg';
import logo12 from './images/12.jpg';
import logo13 from './images/13.jpg';
import logo14 from './images/14.jpg';
import logo15 from './images/15.jpg';
import  './style.css';
import Header from './header';
import  {data as text}  from './data';

class Slider extends React.Component {
    state={
        currentImages:{},
        allText:[],
        currentText:'текст первого слайда' ,
}

componentDidMount() {

        this.setState({ currentImages: logo1, allText:text, currentText:'текст первого слайда' });

}
nextImages=()=>{
    switch(this.state. currentImages) {
        case logo1:this.setState({ currentImages: logo2,  currentText:this.state.allText[1] });
            break;
        case logo2:this.setState({ currentImages: logo3,  currentText:this.state.allText[2] });
            break;
        case logo3:this.setState({ currentImages: logo4,  currentText:this.state.allText[3] });
            break;
        case logo4:this.setState({ currentImages: logo5,  currentText:this.state.allText[4] });
            break;
        case logo5:this.setState({ currentImages: logo6,  currentText:this.state.allText[5] });
            break;
        case logo6:this.setState({ currentImages: logo7,  currentText:this.state.allText[6] });
            break;
        case logo7:this.setState({ currentImages: logo8,  currentText:this.state.allText[7] });
            break;
        case logo8:this.setState({ currentImages: logo9,  currentText:this.state.allText[8] });
            break;
        case logo9:this.setState({ currentImages: logo10,  currentText:this.state.allText[9] });
            break;
        case logo10:this.setState({ currentImages: logo11,  currentText:this.state.allText[10] });
            break;
        case logo11:this.setState({ currentImages: logo12,  currentText:this.state.allText[11] });
            break;
        case logo12:this.setState({ currentImages: logo13,  currentText:this.state.allText[12] });
            break;
        case logo13:this.setState({ currentImages: logo14,  currentText:this.state.allText[13] });
            break;
        case logo14:this.setState({ currentImages: logo15,  currentText:this.state.allText[14] });
            break;
        default:
            break;
    }
};
    prevImages=()=>{
        switch(this.state. currentImages) {
            case logo2:this.setState({ currentImages: logo1,  currentText:this.state.allText[0] });
                break;
            case logo3:this.setState({ currentImages: logo2,  currentText:this.state.allText[1] });
                break;
            case logo4:this.setState({ currentImages: logo3,  currentText:this.state.allText[2] });
                break;
            case logo5:this.setState({ currentImages: logo4,  currentText:this.state.allText[3] });
                break;
            case logo6:this.setState({ currentImages: logo5,  currentText:this.state.allText[4] });
                break;
            case logo7:this.setState({ currentImages: logo6,  currentText:this.state.allText[5] });
                break;
            case logo8:this.setState({ currentImages: logo7,  currentText:this.state.allText[6] });
                break;
            case logo9:this.setState({ currentImages: logo8,  currentText:this.state.allText[7] });
                break;
            case logo10:this.setState({ currentImages: logo9,  currentText:this.state.allText[8] });
                break;
            case logo11:this.setState({ currentImages: logo10,  currentText:this.state.allText[9] });
                break;
            case logo12:this.setState({ currentImages: logo11,  currentText:this.state.allText[10] });
                break;
            case logo13:this.setState({ currentImages: logo12,  currentText:this.state.allText[11] });
                break;
            case logo14:this.setState({ currentImages: logo13,  currentText:this.state.allText[12] });
                break;
            case logo15:this.setState({ currentImages: logo14,  currentText:this.state.allText[13] });
                break;
            default:
                break;
        }
    };

    handleKeyPress = (event) => {
        if(event.charCode == '90'){
            switch(this.state. currentImages) {
                case logo2:this.setState({ currentImages: logo1,  currentText:this.state.allText[0] });
                    break;
                case logo3:this.setState({ currentImages: logo2,  currentText:this.state.allText[1] });
                    break;
                case logo4:this.setState({ currentImages: logo3,  currentText:this.state.allText[2] });
                    break;
                case logo5:this.setState({ currentImages: logo4,  currentText:this.state.allText[3] });
                    break;
                case logo6:this.setState({ currentImages: logo5,  currentText:this.state.allText[4] });
                    break;
                case logo7:this.setState({ currentImages: logo6,  currentText:this.state.allText[5] });
                    break;
                case logo8:this.setState({ currentImages: logo7,  currentText:this.state.allText[6] });
                    break;
                case logo9:this.setState({ currentImages: logo8,  currentText:this.state.allText[7] });
                    break;
                case logo10:this.setState({ currentImages: logo9,  currentText:this.state.allText[8] });
                    break;
                case logo11:this.setState({ currentImages: logo10,  currentText:this.state.allText[9] });
                    break;
                case logo12:this.setState({ currentImages: logo11,  currentText:this.state.allText[10] });
                    break;
                case logo13:this.setState({ currentImages: logo12,  currentText:this.state.allText[11] });
                    break;
                case logo14:this.setState({ currentImages: logo13,  currentText:this.state.allText[12] });
                    break;
                case logo15:this.setState({ currentImages: logo14,  currentText:this.state.allText[13] });
                    break;
                default:
                    break;
            }
        }
        if(event.charCode == '88'){
            switch(this.state. currentImages) {
                case logo1:this.setState({ currentImages: logo2,  currentText:this.state.allText[1] });
                    break;
                case logo2:this.setState({ currentImages: logo3,  currentText:this.state.allText[2] });
                    break;
                case logo3:this.setState({ currentImages: logo4,  currentText:this.state.allText[3] });
                    break;
                case logo4:this.setState({ currentImages: logo5,  currentText:this.state.allText[4] });
                    break;
                case logo5:this.setState({ currentImages: logo6,  currentText:this.state.allText[5] });
                    break;
                case logo6:this.setState({ currentImages: logo7,  currentText:this.state.allText[6] });
                    break;
                case logo7:this.setState({ currentImages: logo8,  currentText:this.state.allText[7] });
                    break;
                case logo8:this.setState({ currentImages: logo9,  currentText:this.state.allText[8] });
                    break;
                case logo9:this.setState({ currentImages: logo10,  currentText:this.state.allText[9] });
                    break;
                case logo10:this.setState({ currentImages: logo11,  currentText:this.state.allText[10] });
                    break;
                case logo11:this.setState({ currentImages: logo12,  currentText:this.state.allText[11] });
                    break;
                case logo12:this.setState({ currentImages: logo13,  currentText:this.state.allText[12] });
                    break;
                case logo13:this.setState({ currentImages: logo14,  currentText:this.state.allText[13] });
                    break;
                case logo14:this.setState({ currentImages: logo15,  currentText:this.state.allText[14] });
                    break;
                default:
                    break;
            }
        }
    };
    render() {
        console.log('this.state.allText',this.state.allText);
        return (
           <div onKeyPress={this.handleKeyPress}>
                <Header/>
               <img src={this.state.currentImages} className="image" alt="logo" />
               <div className="text">
               {this.state.currentText}
               </div>
               <button onClick={this.prevImages}  className="prev"/>
               <button onClick={this.nextImages}   className="next"/>

           </div>
        );
    }
}

export default Slider;
