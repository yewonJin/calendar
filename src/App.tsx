import { Container } from "@mui/material";

import Month from "./components/Month";
import Calendar from "./components/Calendar";

import useMonth from "./hooks/useMonth";
import useCalendar from "./hooks/useCalendar";
import { Months } from "./types/month";

function App() {
  const { curMonth, setNextMonth, setPrevMonth } = useMonth();
  const { startIndex, endIndex } = useCalendar(curMonth, 2023);

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
      <Calendar startIndex={startIndex} endIndex={endIndex} />
    </Container>
  );
}

export default App;
