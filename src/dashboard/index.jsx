import Page from "../layout/page";
import SearchBar from "./components/searchBar";
import Location from "./components/location";
import Specialisation from "./components/specialisation";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import DoctorCard from "./components/doctorCard";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import Flex from "../shared/components/Flex";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadDoctors } from "../state/doctors/slice";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 900,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
    },
    searchSection: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: theme.spacing(3),
    },
    content: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    pageNation: {
      marginBottom: theme.spacing(5),
    },
  })
);

function Dashboard() {
  const classes = useStyles();
  const { doctors, pages } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDoctors());
  }, []);
  const onPageClick = (e, page) => {
    dispatch(loadDoctors(page));
  }
  return (
    <Page>
      <div className={classes.root}>
        <div className={classes.searchSection}>
          <Location />
          <Specialisation />
          <SearchBar />
        </div>
        <Grid container className={classes.content}>
          <Grid item container xs={12} spacing={4} style={{ margin: "0" }}>
            {doctors.map((doctor) => (
              <Grid item xs={12} sm={6} md={4} key={doctor.id}>
                <DoctorCard data={doctor}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Flex center full className={classes.pageNation}>
          <Pagination count={pages} variant="outlined" color="primary" onChange={onPageClick} />
        </Flex>
      </div>
    </Page>
  );
}

export default Dashboard;
