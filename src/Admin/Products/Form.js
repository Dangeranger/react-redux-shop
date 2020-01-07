import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "@reach/router";

import { createProduct } from "../../actions/products";

import styles from "./Form.module.scss";

class Form extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    if (this.props.submitSucceeded) {
      return <Redirect to="/" />;
    }

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="price">Price</label>
          <Field name="price" component="input" type="text" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="picture">Picsum ID</label>
          <Field name="picture" component="input" type="text" />
        </div>
        <button className={styles.submitButton}>Submit</button>
      </form>
    );
  }
}

const ProductForm = reduxForm({ form: "product" })(Form);

class FormContainer extends React.Component {
  render() {
    return <ProductForm onSubmit={this.props.submit} />;
  }
}

const mapStateToProps = state => {
  if (state.form && state.form.product) {
    return {
      submitSucceeded: state.form.product.submitSucceeded
    };
  } else {
    return {
      submitSucceeded: false
    };
  }
};

const mapDispatchToProps = dispatch => ({
  submit: values => {
    dispatch(createProduct(values));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
