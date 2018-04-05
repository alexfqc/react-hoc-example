import React from 'react';

const FormHOC = WrappedComponent =>
  class FormComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        form: {},
      };
      this.setForm = this.setForm.bind(this);
    }

    setForm(ev) {
      const { name, value } = ev.target;
      const { form } = this.state;

      form[name] = value;

      this.setState({ form });
    }

    render() {
      return (
        <WrappedComponent {...this.props} setForm={this.setForm} form={this.state.form} />
      );
    }
  };

export default FormHOC;
