import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import TextareaAutosize from 'react-autosize-textarea';

class TitleBar extends Component {
    render() {
        const {onInputChange, autoFocus, noShadow} = this.props;
        return <div className='title-bar' style={{boxShadow: noShadow ? '':'0 2px 4px 0 rgba(0,0,0,0.20)'}}>
            <form className='container'>
                <Field
                    name='title'
                    component='input'
                    onChange={onInputChange} // For changing the color of submit icon
                    autoFocus={autoFocus ? true : false} // Cuz not every time need to autofocus
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            document.querySelector('.title-bar textarea').focus();
                        }
                    }}
                    autoComplete='off'
                    placeholder='问题标题…'
                />
                <Field
                    name='desc'
                    component={this.renderAutoTextarea}
                />
            </form>
        </div>;
    }

    renderAutoTextarea(field) {
        return <TextareaAutosize
            placeholder='问题描述…'
            onKeyDown={e => {
                if (field.input.value === '' && e.key === 'Backspace') {
                    document.querySelector('.title-bar input').focus();
                }
            }}
            {...field.input}
        />;
    }
}

export default reduxForm({
    form: 'TitleBarForm'
})(TitleBar);