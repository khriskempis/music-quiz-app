import React from 'react';

export default class Input extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta.warning}</div>
            );
        }

        return (
            <div className="group">
                <input 
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    value={this.state.value}
                    onChange={this.handleChange}
                    ref={input => this.input = input}
                />
                <span className="bar"></span>
                <label className={this.props.meta.visited ? "valid-input" : ''} htmlFor={this.props.input.name}>
                    {this.props.label}
                </label>
                {error}
                {warning}
            </div>
        );
    }
}