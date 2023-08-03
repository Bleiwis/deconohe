"use client";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import zero from "assets/0.jpg";
import one from "assets/1.jpg";
import two from "assets/2.jpg";
import three from "assets/3.jpg";
import four from "assets/4.jpg";
import five from "assets/5.jpg";
import six from "assets/6.jpg";
import seven from "assets/7.jpg";
import eight from "assets/8.jpg";
import nine from "assets/9.png";
import Image from "next/image";

export default function Home() {
  const imageList = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
  ];
  return (
    <Grid container style={{ justifyContent: "center" }} spacing={2}>
      {imageList.map((img, k) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          key={k}
          // style={{ display: "flex", justifyContent: "center" }}
        >
          <Image
            src={img}
            //  width={400}
            alt={`imagen de catalogo ${k}`}
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
