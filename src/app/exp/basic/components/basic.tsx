"use client";
import { useState } from "react";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";

type BasicValue = {
  first: number;
  second: number;
  third: number;
};

export default function Basic() {
  const [total, setTotal] = useState<number>(0);
  const [average, setAverage] = useState<number>(0);
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<BasicValue>({
    defaultValues: {
      first: 0,
      second: 0,
      third: 0,
    },
    mode: "onBlur",
  });
  const calculateTotal = () => {
    const values = getValues();
    const total =
      Number(values.first) + Number(values.second) + Number(values.third);

    setTotal(total);
  };

  const oncalculateTotalClick = () => {
    calculateTotal();
  };

  const calculateAvagare = () => {
    const values = getValues();
    const average =
      (Number(values.first) + Number(values.second) + Number(values.third)) / 3;
    const rounded = parseFloat(average.toFixed(2));

    setAverage(rounded);
  };

  const oncalculateAverageClick = () => {
    calculateAvagare();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex", // Flexbox コンテナとして設定
          flexDirection: "column", // 子要素を縦方向に並べる
          gap: 2, // 各 TextField 間に 16px のスペースを設定
          p: 2, // Padding for the box
          maxWidth: 200, // 最大幅を300pxに設定
          marginRight: "auto", // 中央寄せ
        }}
      >
        <Controller
          name="first"
          control={control}
          rules={{ required: true, pattern: /^[0-9]*$/ }}
          render={({ field }) => (
            <TextField
              {...field}
              label="First Value"
              variant="outlined"
              error={!!errors.first}
              helperText={
                errors.first ? "Only numeric characters are allowed" : ""
              }
            />
          )}
        />
        <Controller
          name="second"
          control={control}
          rules={{ required: true, pattern: /^[0-9]*$/ }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Second Value"
              variant="outlined"
              error={!!errors.second}
              helperText={
                errors.second ? "Only numeric characters are allowed" : ""
              }
            />
          )}
        />
        <Controller
          name="third"
          control={control}
          rules={{ required: true, pattern: /^[0-9]*$/ }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Third Value"
              variant="outlined"
              error={!!errors.third}
              helperText={
                errors.third ? "Only numeric characters are allowed" : ""
              }
            />
          )}
        />
      </Box>
      <Box
        sx={{
          display: "flex", // Flexbox コンテナとして設定
          flexDirection: "row", // 子要素を縦方向に並べる
          alignItems: "center",
          gap: 2, // 各 TextField 間に 16px のスペースを設定
          p: 2, // Padding for the box
          maxWidth: 300, // 最大幅を300pxに設定
          marginRight: "auto", // 中央寄せ
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={oncalculateTotalClick}
        >
          合計値:
        </Button>
        <div>{total}</div>
        <Button variant="contained" onClick={oncalculateAverageClick}>
          平均値:
        </Button>
        <div>{average}</div>
      </Box>
    </>
  );
}
