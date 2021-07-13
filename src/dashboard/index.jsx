import Page from "../layout/Page/page";
import SearchBar from "./components/SearchBar/searchBar";
import Location from "./components/Location/location";
import Specialisation from "./components/Specialization/specialisation";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import DoctorCard from "./components/DoctorCard/doctorCard";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import Flex from "../shared/components/Flex";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadDoctors } from "../state/doctors/slice";
import { useStyles } from "./styles";


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
