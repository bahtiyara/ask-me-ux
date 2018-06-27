import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import TextareaAutosize from 'react-autosize-textarea';

class TitleBar extends Component {
    render() {
        return <div className='title-bar'>
            <form className='container'>
                <Field
                    inputAutoFocus={this.props.autoFocus}
                    onChange={this.props.onInputChange}
                    name='title'
                    inputValue={this.props.title}
                    component={this.renderInput}
                />
                <Field
                    name='desc'
                    inputValue={this.props.desc}
                    component={this.renderTextarea}
                />
            </form>
        </div>;
    }

    renderInput(field) {
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
            value={field.inputValue}
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