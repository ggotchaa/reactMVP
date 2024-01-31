import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DeclarationStep1 from './components/DeclarationStep1';
import DeclarationStep2 from './components/DeclarationStep1';
import DeclarationStep3 from './components/DeclarationStep1';

const validationSchema = Yup.object({
  // to do
});

const initialValues = {
  signer_fullname: '',
  signer_official_number: '',
  organization_name: '',
  official_number: '',
  official_address: '',
  actual_address: '',
  email: '',
  passwordTEST: ''
};

const SchoolDeclarationCreate: React.FC = () => {
  const [step, setStep] = useState(0);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const renderStep = () => {
    switch(step) {
      case 0:
        return <DeclarationStep1 formik={formik} />;
      case 1:
        return <DeclarationStep2 formik={formik} />;
      case 2:
        return <DeclarationStep3 formik={formik} />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      formik.handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div>
      {renderStep()}
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default SchoolDeclarationCreate;
