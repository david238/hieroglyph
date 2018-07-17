import React, { Component} from 'react';
import { iconsArray, iconsArray2, iconsArray3 } from '../Arrays';
import Pwd from '../../components/Pwd/Pwd';
import Email from '../../components/Email/Email';
import ListBlock from '../../components/ListBlock/Listblock';
import classes from './Register.css';
import axios from '../../axios';

class Register extends Component {

    state = {
        iconStack: [],
        iconStack2: [],
        iconStack3: [],
        password: '',
        email: ''
    }

    componentWillMount() {
        const temp = Array.from(Array(+this.props.howlong).keys());
        const tempo = temp.map( function(index) {
            return {key: index, name: iconsArray[Math.floor(Math.random() * iconsArray.length)], display: true}
        });
        const tempo2 = temp.map( function(index) {
            return {key: index, name: iconsArray2[Math.floor(Math.random() * iconsArray2.length)], display: true}
        });
        const tempo3 = temp.map( function(index) {
            return {key: index, name: iconsArray3[Math.floor(Math.random() * iconsArray3.length)], display: true}
        });
        this.setState({
            ...this.state,
            iconStack: tempo,
            iconStack2: tempo2,
            iconStack3: tempo3
        });
    }

    onClickHandler = (index) => {    
        // console.log(index);
        const tempStack = {
            ...this.state
        }
        if (tempStack.iconStack[index].display === true)
        {
            const newpwd = tempStack.password + tempStack.iconStack[index].name
            tempStack.iconStack[index].display = false;
            this.setState({
                iconStack: tempStack.iconStack,
                password: newpwd
            });
        }
    }
    
    onClickHandler2 = (index) => {    
        // console.log(index);
        const tempStack = {
            ...this.state
        }
        if (tempStack.iconStack2[index].display === true)
        {
            const newpwd = tempStack.password + tempStack.iconStack2[index].name
            tempStack.iconStack2[index].display = false;
            this.setState({
                iconStack2: tempStack.iconStack2,
                password: newpwd
            });
        }
    }
    
    onClickHandler3 = (index) => {    
        // console.log(index);
        const tempStack = {
            ...this.state
        }
        if (tempStack.iconStack3[index].display === true)
        {
            const newpwd = tempStack.password + tempStack.iconStack3[index].name
            tempStack.iconStack3[index].display = false;
            this.setState({
                iconStack3: tempStack.iconStack3,
                password: newpwd
            });
        }
    }

    onChangedHandler = (event) => {
        // console.log(event.target.value)
        this.setState({
            email: event.target.value
        });
    }

    btnonClickHandler = () => {
        // console.log('register page');
        const param = {
            email: this.state.email,
            password: this.state.password
        }
        // console.log(param);
        axios.post('/users/signup', param)
        .then( res => alert(res.data.message))
        .catch(error => alert(error));
    }

    render() {
        return (
            <div className={classes.Login}>
                <Email 
                    email={this.state.email}
                    onChanged = {this.onChangedHandler}/>
                <Pwd pwd={this.state.password} />
                <div className={classes.bg}>
                    <ListBlock
                        iconStack = {this.state.iconStack}
                        clicked={this.onClickHandler}
                    />
                    <ListBlock
                        iconStack = {this.state.iconStack2}
                        clicked={this.onClickHandler2}
                    />
                    <ListBlock
                        iconStack = {this.state.iconStack3}
                        clicked={this.onClickHandler3}
                    />
                </div>
                <div>
                    <button className={classes.button}
                    onClick={this.btnonClickHandler}>Register</button>
                </div>
            </div>
        );
    }
}

export default Register;