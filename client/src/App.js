
import List from './Pages/List';
import Grid from '@mui/material/Grid'
import Appbar from "./Conponents/Appbar.jsx"


function App() {

  return (
    <div>
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid container item xs={12}>
          <Appbar/>
        </Grid>
        <Grid container item xs={12} sx={{ justifyContent: "center" }} >
         <List/>
        </Grid>

      </Grid>
     
    </div>
  );
}

export default App;
