import React, {useState} from 'react';
import useInfiniteScroll from './hooks/useInfiniteScroll';
import { Grid, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import './App.css';

function App() {
  const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
      setIsFetching(false);
    }, 2000);
  }
  
  return (
   <Grid container spacing={2} className="MainContainer">
     <Grid item xs={12} md={8}>
       <Typography className="header" variant="h3">Infinite scrolling list</Typography>
       <List>
        {listItems.map((listItem, idx) => <ListItem key={idx} className="listItems">
          <ListItemText>List Item {listItem}</ListItemText>
          </ListItem>)}
          {isFetching && <CircularProgress />}
      </List>
      </Grid>
   </Grid>
  );
}

export default App;
