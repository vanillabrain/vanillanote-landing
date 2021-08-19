import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from "firebase";
//import {Form} from "./form";

export default class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            writer_name: '',
            writer_email: '',
            content: ''
        };

        this.wrapperRef = React.createRef();
        //this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

//config your firebase push
    config = {
        apiKey: "AIzaSyAWs7ItBH2E7ATOyEsTEJThxBcYnjRt7wM",
        authDomain: "vanillanoteapp.web.app",
        databaseURL: "https://vanillanoteapp-default-rtdb.firebaseio.com/",
        projectId: "vanillanoteapp",
        storageBucket: "vanillanoteapp.appspot.com",
        messagingSenderId: "443932673550"
    };

    //create a functions to push
    firebasePush() {
        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(this.config);
        }

        //push itself
        var mailsRef = firebase.database().ref('queries').push().set(
            {
                writerName: this.state.writer_name.trim(),//orm.writer_name,
                mail: this.state.writer_email.trim(),//email.value,
                content: this.state.content//content.value
            }
        );
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!this.state.writer_name.trim()){
            formIsValid = false;
        }
        //Email
        if(!this.state.writer_email.trim()){
            formIsValid = false;
        }

        if (!this.state.content) {
            formIsValid = false;
        }

        return formIsValid;
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email.trim()).toLowerCase());
    }

    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current.contains(event.target)) {
            event.preventDefault();

            if (!this.handleValidation()) {
                return alert('All Fields are required.');
            }
            else if (!this.validateEmail(this.state.writer_email)) {
                return alert('A valid E-Mail address is required.');
            }
            else {
                this.firebasePush();
                this.setState({
                    writer_name: '',
                    writer_email: '',
                    content: ''
                });
                //shows alert if everything went well.
                return alert('Your E-Mail was successfully sent to the administrator.');
            }
        }
    }

    updateInputValue(evt) {
        this.setState({
            writer_name: evt.target.value
        });
    }

    updateInputValue2(evt) {
        this.setState({
            writer_email: evt.target.value
        });
    }

    updateInputValue3(evt) {
        this.setState({
            content: evt.target.value
        });
    }

    render() {
        return (
            <form className="form">
            <div>
                <label htmlFor="writer_name" className="writer_name">{this.props.data ? this.props.data.writer_name : 'Loading'}</label>
                <input id="writer_name" name="writer_name" className="fourth_input" value={this.state.writer_name} onChange={evt => this.updateInputValue(evt)}
                       required placeholder={this.props.data ? this.props.data.hint_writer_name : 'Loading'}>
                </input>
            </div>
        <div>
            <label htmlFor="writer_email" className="writer_email">{this.props.data ? this.props.data.writer_email : 'Loading'}</label>
            <input id="writer_email" name="writer_email" className="fourth_input" required value={this.state.writer_email} onChange={evt => this.updateInputValue2(evt)}
                   placeholder={this.props.data ? this.props.data.hint_writer_email : 'Loading'}>
            </input>
        </div>
        <div>
            <label htmlFor="form_content" className="form_content">{this.props.data ? this.props.data.content : 'Loading'}</label>
            <textarea id="form_content" name="form_content" className="fourth_textarea" value={this.state.content} onChange={evt => this.updateInputValue3(evt)}
                      required placeholder={this.props.data ? this.props.data.hint_content : 'Loading'}></textarea>
        </div>
            <div ref={this.wrapperRef}>
            <button type="submit" className="Rectangle-19" onClick="onClick()">
                <span className="form_done">{this.props.data ? this.props.data.form_done : 'Loading'}</span>
            </button>
            </div>
            </form>
        );
    }
}

Submit.propTypes = {
    children: PropTypes.element.isRequired,
};