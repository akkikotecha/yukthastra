import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../sidebar/Sidebar';
import axios from 'axios';

const useStyles = makeStyles({
  fullWidth: {
    marginTop: '30px',
    width: '100%',
    paddingRight: '20px',
    paddingLeft: '25px',
  },
  textPitch: {
    color: '#fff',
    fontWeight: 500,
    background: 'linear-gradient(195deg, #71b2b5, rgb(25 111 114))',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '18px!important',
    paddingLeft: '15px'
  },
});

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const token = localStorage.getItem('accessToken'); // Adjust based on where your token is stored

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/certificate`,config)
      .then((res) => {
        console.log("response", res);
        // if (res.data.status == 0) {
        //   toast.error(res.data.data);
        //   setData(res.data.data); // Assuming response.data is an array of objects with { name, age }
        // } 
      })
      .catch((error) => {
        console.error("API request failed:", error);
      });
  } catch (error) {
    console.log("error1", error);
    // toast.warning("Something went wrong!");
  }

  

  return (
    <Grid container>
      <Sidebar />
      <div className={classes.fullWidth}>
        <h1 className={`${classes.textPitch} mb-4 h5`}>Dashboard</h1>
        <div>
        </div>
      </div>
    </Grid>
  );
};

export default Dashboard;
