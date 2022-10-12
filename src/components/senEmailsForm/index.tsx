import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { useStore } from "store";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setEmailTemplete } from "store/actions";

interface formValues {
  recipients: string[];
  subject: string;
  message: string;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SendEmailsForm = () => {
  const paperStyle = {
    padding: 20,
    height: "480px",
    width: 350,
    margin: "70px auto 0 auto",
  };
  const btnstyle = { marginTop: "0px" };
  const initialValues: formValues = {
    recipients: [],
    subject: "",
    message: "",
  };
  const [senderEmail, setSenderEmail] = React.useState<string[]>([]);
  const { state, dispatch } = useStore();
  const form = useRef<HTMLElement>(null);

  const validationSchema = Yup.object().shape({
    recipients: Yup.string().required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });
  const onSubmit = (
    values: any,
    props: { resetForm: () => void; setSubmitting: (arg0: boolean) => void }
  ) => {
    dispatch(setEmailTemplete({sender: '', recipients: [], subject:'', message:''}))
   setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 1000);
  };

  const onSubmitFormTemplate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };


  const CustomizedSelectForFormik = ({ children, form, field }: any) => {
    const { name, value } = field;
    const { setFieldValue } = form;

    return (
      <FormControl sx={{ mb: 2, width: "100%" }}>
        <InputLabel id="demo-multiple-name-label">Recipients</InputLabel>
        <Select
          multiple
          name={name}
          value={value}
          input={<OutlinedInput label="Recipients" />}
          onChange={(e) => {
            setFieldValue(name, typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value);
          }}
          fullWidth
        >
          {children}
        </Select>
      </FormControl>
    );
  };

  return (
    <Box sx={{ width: "auto", margin: "20px auto" }}>
      <Grid mt={2.3}>
        <Paper style={paperStyle}>
          <h2>Email Template Form</h2>
          <FormControl sx={{ mb: 2, width: "100%" }}>
            <InputLabel id="demo-multiple-name-label">Sender</InputLabel>
            <Select
              value={senderEmail}
              onChange={ (e) => setSenderEmail(
                typeof e.target.value === "string" ? e.target.value.split(",") : e.target.value
              )}
              input={<OutlinedInput label="Sender" />}
              renderValue={(selected: any) => {
                if (selected.length === 0) {
                  return <em>Sender</em>;
                }
                return selected.join(", ");
              }}
              fullWidth
              required
              MenuProps={MenuProps}
            >
              <MenuItem disabled value="">
                <em>Sender</em>
              </MenuItem>
              {/* {state?.foundationUsers.map((name, i) => {
                return (
                  <MenuItem key={i} value={name.email}>
                    {name.email}
                  </MenuItem>
                );
              })} */}
            </Select>
          </FormControl>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => {
              return (
                //@ts-ignore
                <Form ref={form} onSubmit={onSubmitFormTemplate}>
                  <Field
                    component={CustomizedSelectForFormik}
                    label="Recipients"
                    name="recipients"
                    renderValue={(selected: any) => {
                      if (selected.length === 0) {
                        return <em>recipients</em>;
                      }
                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
            
                  >
                    <MenuItem disabled value="">
                      <em>recipients</em>
                    </MenuItem>
                    {/* {state?.nonProfitUsers.map((name, i) => {
                      return (
                        <MenuItem key={i} value={name.email}>
                          {name.email}
                        </MenuItem>
                      );
                    })} */}
                  </Field>
                  <Field
                    as={TextField}
                    label="Subject"
                    name="subject"
                    placeholder="Enter subject"
                    fullWidth
                    helperText={<ErrorMessage name="subject" />}
                    style={{ marginBottom: "15px" }}
                  />
                  <Field
                    as={TextareaAutosize}
                    label="Message"
                    name="message"
                    placeholder="Enter message"
                    fullWidth
                    helperText={<ErrorMessage name="message" />}
                    style={{
                      marginBottom: "15px",
                      width: "93.5%",
                      height: "100px",
                      padding: "10px",
                    }}
                  />

                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    disabled={props.isSubmitting}
                    style={btnstyle}
                    fullWidth
                  >
                    {props.isSubmitting ? "Loading" : "Send"}
                  </Button>
                </Form>
              );
            }}
          </Formik>
          <ToastContainer autoClose={2000} />
        </Paper>
      </Grid>
    </Box>
  );
};

export default SendEmailsForm;
