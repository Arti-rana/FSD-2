import { useContext } from "react";
import { CounterContext } from "./context/CounterGlobalContextAPI";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function CounterContextParent(props) {
  const { count, setCount } = useContext(CounterContext);

  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: "#FFB74D", height: "100px" }}>
        <h3>
          {props.cno} : Global State (ContextAPI) Count: {count}
        </h3>

        <Button
          variant="contained"
          color="warning"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </Button>

        <Button
          variant="outlined"
          color="warning"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </Button>
      </Box>
    </Container>
  );
}
