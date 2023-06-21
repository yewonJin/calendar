import { Container } from "@mui/material";

import Date from "./components/Date";
import Calendar from "./components/Calendar";

import useMonth from "./hooks/useMonth";
import useCalendar from "./hooks/useCalendar";
import { Months } from "./types/month";

function App() {
  const { curMonth, curYear, setNextMonth, setPrevMonth } = useMonth();
  const { startIndex, endIndex } = useCalendar(curMonth, curYear);

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "80px",
        padding: "30px 0px",
        backgroundColor: "white",
      }}
    >
      <Date
        curYear={curYear}
        curMonth={curMonth as Months}
        setNextMonth={setNextMonth}
        setPrevMonth={setPrevMonth}
      />
      <Calendar startIndex={startIndex} endIndex={endIndex} />
    </Container>
  );
}

export default App;
