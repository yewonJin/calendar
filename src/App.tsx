import { Container } from "@mui/material";
import Month from "./components/Month";
import Calendar from "./components/Calendar";

function App() {
  return (
    <Container      
      maxWidth="md"
      sx={{
        marginTop: "80px",
        padding: "30px 0px",
        backgroundColor: "white",
      }}
    >
      <Month />
      <Calendar />
    </Container>
  );
}

export default App;
