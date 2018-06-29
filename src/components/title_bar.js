import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import TextareaAutosize from 'react-autosize-textarea';

class TitleBar extends Component {
    render() {
        return <div className='title-bar'>
            <form className='container'>
                <Field
                    name='title'
                    component={this.renderInput}
                    onChange={this.props.onInputChange}
                    inputAutoFocus={this.props.autoFocus}
                    inputValue={this.props.title}
                    
                />
                <Field
                    name='desc'
                    component={this.renderTextarea}
                    inputValue={this.props.desc}
                />
            </form>
        </div>;
    }

    renderInput(field) {
        console.log(field);
        return <input
            onKeyPress={e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    document.querySelector('.title-bar textarea').focus();
                }
            }}
            autoComplete='off'
            placeholder='问题标题…'
            {...field.input}
            // value={field.inputValue}
            autoFocus={field.inputAutoFocus}
        />;
    }

    renderTextarea(field) {
        return <TextareaAutosize
            onKeyDown={e => {
                if (field.input.value === '' && e.key === 'Backspace') {
                    document.querySelector('.title-bar input').focus();
                }
            }}
            placeholder='问题描述…'
            {...field.input}
            value={field.inputValue}
        />;
    }
}

export default reduxForm({
    form: 'TitleBarForm'
})(TitleBar);