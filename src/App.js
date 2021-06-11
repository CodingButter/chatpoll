import { GlobalStyles, Container, Header } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { Poll } from "./components";
import { BaseTheme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <GlobalStyles />
      <Container>
        <Header>7 Days Poll</Header>
        <Poll />
      </Container>
    </ThemeProvider>
  );
}

export default App;
