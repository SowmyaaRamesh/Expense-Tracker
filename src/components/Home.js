import React, { useContext, useState } from "react";
import { Balance } from "./Balance";
import { IncomeExpense } from "./IncomeExpense";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { GlobalProvider } from "../context/GlobalState";
import { UserContext } from "../context/UserContext";
import { ToggleButton } from "./ToggleButton";
import styled, { ThemeProvider } from "styled-components/";
import { GlobalStyles, lightTheme, darkTheme } from "../globalStyles";

// const Container = styled.div{

// }

export const Home = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const { user } = useContext(UserContext);
  return (
    <GlobalProvider>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <ToggleButton theme={theme} toggleTheme={toggleTheme} />
        <h1>Hello, {user}</h1>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </ThemeProvider>
    </GlobalProvider>
  );
};
