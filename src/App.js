import {
  ActionButton,
  Button,
  defaultTheme,
  Flex,
  Grid,
  Provider,
  TextField,
  View,
  Switch
} from "@adobe/react-spectrum";
import { useState } from "react";
import "./styles.css";

export default function App() {
  let [selected, setSelection] = useState(false);
  return (
    <Provider colorScheme={selected ? "dark" : "light"} theme={defaultTheme}>
      <Provider colorScheme="dark" theme={defaultTheme}>
        <Button variant="cta">Hello React Spectrum!</Button>
      </Provider>
      <Provider colorScheme={selected ? "light" : "dark"} theme={defaultTheme}>
        reversed theme around here
      </Provider>

      <Switch label="theme"></Switch>
      <Switch defaultSelected></Switch>

      <Switch isSelected={selected} onChange={setSelection}>
        {selected ? "dark" : "light"}
      </Switch>
      <Button variant="cta">Hello React Spectrum!</Button>
      <TextField
        label="Your name"
        labelPosition="side"
        placeholder="John smith"
        width="size-2000"
      />
      <ActionButton marginStart="size-150">submit</ActionButton>
      <Flex direction="column" width="size-2000" gap="size-100">
        <View backgroundColor="celery-600" height="size-800" />
        <View backgroundColor="blue-600" height="size-800" />
        <View backgroundColor="magenta-600" height="size-800" />
      </Flex>
      <Grid
        areas={["header  header", "sidebar content", "footer  footer"]}
        columns={["1fr", "3fr"]}
        rows={["size-1000", "auto", "size-1000"]}
        height="size-6000"
        gap="size-100"
      >
        <View backgroundColor="celery-600" gridArea="header" />
        <View backgroundColor="blue-600" gridArea="sidebar" />
        <View backgroundColor="purple-600" gridArea="content" />
        <View backgroundColor="magenta-600" gridArea="footer" />
      </Grid>
      <Grid
        areas={{
          base: ["header", "nav", "content", "footer"],
          M: [
            "header   header",
            "nav      content",
            "nav      content",
            "footer   footer"
          ],
          L: [
            "header header  header",
            "nav    content toc",
            "nav    content toc",
            "footer footer  footer"
          ]
        }}
        columns={{
          M: ["size-2000", "1fr"],
          L: ["size-2000", "1fr", "size-2000"]
        }}
        gap="size-100"
      >
        <View
          backgroundColor="celery-600"
          gridArea="header"
          height="size-1000"
        />
        <View backgroundColor="blue-600" gridArea="nav">
          <Flex
            direction={{ base: "row", M: "column" }}
            gap="size-100"
            margin="size-100"
          >
            <View
              backgroundColor="static-gray-50"
              height="size-250"
              minWidth="size-900"
            />
            <View
              backgroundColor="static-gray-50"
              height="size-250"
              minWidth="size-900"
            />
            <View
              backgroundColor="static-gray-50"
              height="size-250"
              minWidth="size-900"
            />
          </Flex>
        </View>
        <View
          backgroundColor="purple-600"
          gridArea="content"
          height="size-4600"
        />
        <View
          backgroundColor="magenta-600"
          gridArea="toc"
          minHeight="size-1000"
          isHidden={{ base: true, L: false }}
        />
        <View
          backgroundColor="seafoam-600"
          gridArea="footer"
          height="size-1000"
        />
      </Grid>
    </Provider>
  );
}
