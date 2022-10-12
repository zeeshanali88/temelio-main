import { Grid } from "@mui/material";
import * as React from "react";
import FoundationList from "components/foundationTable";
import SendEmailsForm from "components/senEmailsForm";
import UserMetaData from "components/userMetaData";

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6} p={2}>
        <Grid item p={5}>
          <UserMetaData />
        </Grid>
        <Grid item>
          <FoundationList />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} p={2}>
        <SendEmailsForm />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
