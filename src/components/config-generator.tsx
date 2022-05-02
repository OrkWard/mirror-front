import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import CodeBlock from "./code-block";
import { Language } from "prism-react-renderer";
import { Trans } from "gatsby-plugin-react-i18next";

export default ({
  promptString,
  versionList,
  defaultVersion,
  language,
  configGen,
}: {
  promptString: string;
  versionList: string[];
  defaultVersion: string | undefined;
  language?: Language,
  configGen: (version: string) => string;
}) => {
  const [version, setVersion] = useState(defaultVersion ?? versionList[0]);
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <Grid item sx={{ mb: 1 }}>
          <Typography component="p">{promptString}</Typography>
        </Grid>
        <Grid item>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              <Trans>版本</Trans>
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Age"
              onChange={event => {
                setVersion(event.target.value as string);
              }}
              defaultValue={version}
            >
              {versionList.map((item, i) => {
                return (
                  <MenuItem key={i} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <CodeBlock language={language}>{configGen(version)}</CodeBlock>
    </Box>
  );
};
