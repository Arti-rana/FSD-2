import { useDispatch, useSelector } from "react-redux"; //npm install redux react-redux
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function CounterReduxParent(props) {
  // useSelector : to read state from the Redux store
  const count = useSelector((state) => state.count);

  // useDispatch : to dispatch actions to the Redux store
  const dispatch = useDispatch();

  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: "#A5D6A7", height: "100px" }}>
        <h3>
          {props.cno} : Global State (Redux) Count: {count}
        </h3>

        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increase
        </Button>

        <Button
          variant="outlined"
          color="success"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrease
        </Button>
      </Box>
    </Container>
  );
}
