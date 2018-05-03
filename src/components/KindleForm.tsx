import * as React from 'react';
import './KindleForm.css';
import { Form, FormGroup } from 'reactstrap';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

export interface Props extends InjectedFormProps {}

function KindleForm(props: Props) {
  return (
    <Form className="KindleForm">
      <p>Minimum volume: </p>
      <FormGroup>
        <Field
          name="minimumVolume"
          component="input"
          type="text"
          placeholder="Mininum Volume"
          className={'form-control'}
        />
      </FormGroup>
      <p>Only next volume published: </p>
      <FormGroup>
        <Field
          name="onlyNextVolumePublished"
          component="input"
          type="checkbox"
          className={'form-control'}
        />
      </FormGroup>
    </Form>
  );
}

export default reduxForm({
  form: 'kindleForm',
  initialValues: {
    minimumVolume: 3,
    onlyNextVolumePublished: true
  }
})(KindleForm);
