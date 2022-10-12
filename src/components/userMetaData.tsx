import React, { useState } from "react";
import { TabContext, TabList } from "@mui/lab";
import { Tab, Box } from "@mui/material";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useStore } from "store";
import { Users } from "interfaces";

const UserMetaData = () => {
  const { state, dispatch } = useStore();
  const initialValues: Users = {
    name: "",
    address: "",
    email: "",
    type: ""
  };
  const [data, setData] = useState(initialValues)
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const paperStyle = {
    padding: 20,
    height: 350,
    width: 350,
    border: 1,
    borderColor: "red"
  };

  const onSubmit = (
    values: Users
  ) => {
    console.log(values);
    //  dispatch(setFoundationUsers([...state.foundationUsers ,{email:values.email, type:'Foundation'}]))
    // setTimeout(() => {
    //   props.resetForm();
    //   props.setSubmitting(false);
    // }, 1000);
  };

  return (
    <Box sx={{ width: "390px", margin: "5px auto", border: "" }}>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Non Profit" value="1" />
          <Tab label="Foundation" value="2" />
        </TabList>
        <Paper style={paperStyle}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {(props) => {
              return (
                <Form>
                  {value === "1" && <>
                    <Field
                      as={TextField}
                      label="Name"
                      name="name"
                      placeholder="Enter username"
                      fullWidth
                      helperText={<ErrorMessage name="name" />}
                      style={{ marginBottom: "15px" }}
                    />
                    <Field
                      as={TextField}
                      label="Address"
                      name="address"
                      placeholder="Enter address"
                      fullWidth
                      helperText={<ErrorMessage name="address" />}
                      style={{ marginBottom: "15px" }}
                    />
                  </>}
                  <Field
                    as={TextField}
                    label="Email"
                    name="email"
                    placeholder="Enter username"
                    fullWidth
                    helperText={<ErrorMessage name="email" />}
                    style={{ marginBottom: "15px" }}
                  />
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    Add
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Paper>
      </TabContext>
    </Box>
  );
};

export default UserMetaData;
