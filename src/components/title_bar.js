import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import TextareaAutosize from 'react-autosize-textarea';

class TitleBar extends Component {
    render() {
        const {handleSubmit} = this.props;
        return <div className='title-bar'>
            <form
                onSubmit={handleSubmit(this.onFormSubmit)}
                className='container'>
                <Field
                    onChange={this.props.onInputChange}
                    name='title'
                    component={this.renderInput}
                />
                <Field
                    name='desc'
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
            autoFocus
            placeholder='问题标题…'
            {...field.input}
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
        />;
    }

    onFormSubmit(values) {
        console.log(values);
    }
}

export default reduxForm({
    form: 'TitleBarForm'
})(TitleBar);