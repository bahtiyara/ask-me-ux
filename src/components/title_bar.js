import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import TextareaAutosize from 'react-autosize-textarea';

class TitleBar extends Component {
    render() {
        const {handleSubmit} = this.props;
        return <div className='title-bar'>
            <form 
                onSubmit={handleSubmit(this.onSubmit.bind(this))}
                className='container'>
                <Field
                    name='title'
                    component={this.renderInput}
                />
                <Field
                    name='title'
                    component={this.renderTextarea}
                />
            </form>
        </div>;
    }

    renderInput(field) {
        return <input
            autoFocus
            placeholder='问题标题…'
            {...field.input}
        />;
    }

    renderTextarea(field) {
        return <TextareaAutosize
            {...field.TextareaAutosize}
            placeholder='问题描述…'
        />;
    }

    onSubmit(values) {
        console.log(values);
    }
}

export default reduxForm({
    form: 'TitleBarForm'
})(TitleBar);