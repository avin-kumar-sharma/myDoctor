import Page from "../layout/Page/page";
import React from "react";
import { useStyles } from "./styles";
import { Avatar, Button, Grid, Input, Typography } from "@material-ui/core";
import Flex from "../shared/components/Flex";

function Chat() {
  const classes = useStyles();
  return (
    <Page>
      <div className={classes.root}>
        <Grid container style={{ border: "1px solid grey", height: '80vh' }}>
          <Grid item xs={4} style={{ borderRight: "1px solid grey" }}>
            <Typography>ONGOING CONSULTATIONS</Typography>
            <Flex style={{ padding: "8px 0" }}>
              <Avatar style={{ margin: "8px" }} />
              <Flex column>
                <Typography>Dr. Samar Sen</Typography>
                <Typography>2months ago</Typography>
                <Typography>Online</Typography>
              </Flex>
            </Flex>
          </Grid>
          <Grid item xs={8}>
           <Flex column style={{height: '100%'}}>
            <Flex style={{ borderBottom: "1px solid grey" }} centerY>
              <Avatar style={{ margin: "8px" }} />
              <Typography>Dr. Samar Sen</Typography>
            </Flex>
            <Flex style={{flex: 1, backgroundColor: 'grey'}} column>
                <Flex column>
                  <Typography>Hello Doctor</Typography>
                  <Typography>11:15 AM</Typography>
                </Flex>
                <Flex column>
                  <Typography>Hello</Typography>
                  <Typography>11:16 AM</Typography>
                </Flex>
            </Flex>
            <Flex>
                <Input/>
                <Button>Send</Button>
            </Flex>
            </Flex>
          </Grid>
        </Grid>
      </div>
    </Page>
  );
}

export default Chat;
