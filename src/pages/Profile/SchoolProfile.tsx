import BoxTitle from "../../components/BoxTitle";
import OrganizationDetails from "./components/OrganizationDetails";
import LoginAndPassword from "./components/LoginAndPassword";
import { useState } from "react";
import {Button} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { form_msg } from "../../utils/constants";

interface Values {
	bin_number: string;
	phone_number: string;
	legal_address: string;
	actual_address: string;
	directors_fullname: string;
	director_inn: string;
	email_address: string;
	post_address: string;
	email: string;
	login: string;
	password: string;
	reg_role: string;
}

const SchoolProfile = (props: unknown) => {
  const [editMode, setEditMode] = useState(0);

  const { values, errors, touched, handleChange, handleSubmit, resetForm } =
    useFormik<Values>({
		initialValues: {
			bin_number: "",
			phone_number: "",
			legal_address: "",
			actual_address: "",
			directors_fullname: "",
			director_inn: "",
			email_address: "",
			post_address: "",
			email: "",
			login: "",
			password: "",
			reg_role: "school",
		  },
      validationSchema: yup.object().shape({
		login: yup.string().required(form_msg.REQUIRED),
		password: yup
		  .string()
		  .required(form_msg.REQUIRED)
		  .min(6, form_msg.MIN_LENGTH()),
		reg_role: yup.string().required(form_msg.REQUIRED),
		bin_number: yup.string().required(form_msg.REQUIRED),
		phone_number: yup.string().required(form_msg.REQUIRED),
		legal_address: yup.string().required(form_msg.REQUIRED),
		actual_address: yup.string().required(form_msg.REQUIRED),
		directors_fullname: yup.string().required(form_msg.REQUIRED),
		director_inn: yup.string().required(form_msg.REQUIRED),
		email_address: yup
		  .string()
		  .email(form_msg.EMAIL)
		  .required(form_msg.REQUIRED),
		post_address: yup.string().required(form_msg.REQUIRED),
		email: yup
		  .string()
		  .email(form_msg.EMAIL)
		  .required(form_msg.REQUIRED),
	  }),
      async onSubmit(values: Values, { resetForm }) {
        console.log(values);

		try {
			// await updateAct(values).unwrap();
			// onClose();
			// resetForm();
		  } catch (err) {
			const error = err as Error;
			alert(error.message);
			// enqueueSnackbar(error.data.message, {variant: 'error'});
		  }
      },
    });

  const handlers = {
    changeEditMode: () => {
      if (editMode) resetForm();
      setEditMode(editMode === 0 ? 1 : 0);
    },
    saveNewData: () => {
      handleSubmit();
      setEditMode(0);
    },
  };

  return (
    <>
      <BoxTitle title={"Сведения об организации"}>
        {editMode === 0 ? (
          <>
            <Button onClick={handlers.changeEditMode}>Редактировать</Button>
          </>
        ) : (
          <>
            <Button variant="outlined" onClick={handlers.changeEditMode}>
              Отменить
            </Button>
            <Button onClick={handlers.saveNewData}>Сохранить</Button>
          </>
        )}
      </BoxTitle>

      <OrganizationDetails
        values={values}
        touched={touched}
        errors={errors}
        editMode={editMode}
        handleChange={handleChange}
      />

      <LoginAndPassword
        values={values}
        touched={touched}
        errors={errors}
        editMode={editMode}
        handleChange={handleChange}
      />
    </>
  );
};

export default SchoolProfile;
