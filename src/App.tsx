import { Container } from "@mui/material";

import Month from "./components/Month";
import Calendar from "./components/Calendar";

import useMonth from "./hooks/useMonth";
import { Months } from "./types/month";

function App() {
  const { curMonth, setNextMonth, setPrevMonth } = useMonth();

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "80px",
        padding: "30px 0px",
        backgroundColor: "white",
      }}
    >
      <Month
        curMonth={curMonth as Months}
        setNextMonth={setNextMonth}
        setPrevMonth={setPrevMonth}
      />
      <Calendar />
    </Container>
  );
}

export default App;
