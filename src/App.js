import { GlobalStyles, Container } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { Poll } from "./components";
import { BaseTheme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <Container>
        <GlobalStyles />
        <Poll />
      </Container>
    </ThemeProvider>
  );
}

export default App;
