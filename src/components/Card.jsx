import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";

const students = [
  {
    id: 1,
    name: "Zebo Furqatzoda",
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/665b1e68630c061cb7545ebc/5d2adc91-4b9f-4d14-9d7e-a854fabd6c9d/Untitled+design+%281%29.jpg?format=2500w",
    desc: "New York University of Abu Dhabi, Philosophy & Economics",
    meetLink: "https://calendar.app.google/nANf7igy7jrP1xPg6",
  },
  {
    id: 2,
    name: "Lakhan Rajput",
    imageSrc: "public/lakhan.webp",
    desc: "New York University of Abu Dhabi, Philosophy & Economics",
    meetLink: "https://calendar.app.google/nANf7igy7jrP1xPg6",
  },
  {
    id: 3,
    name: "John Veliz Reyes",
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/665b1e68630c061cb7545ebc/c53899b9-e8c6-4767-a090-b8ec76257868/Screenshot+2024-07-15+at+3.21.02+PM.png?format=2500w",
    desc: "Cornell University,Mathematics. Teaching assistant at Cornell University  ",
    meetLink: "https://calendar.app.google/gfbxNSNPjS32x3Vj8",
  },
  {
    id: 4,
    name: "Zebo Furqatzoda",
    imageSrc: "",
    desc: "New York University of Abu Dhabi, Philosophy & Economics",
    meetLink: "https://calendar.app.google/gfbxNSNPjS32x3Vj8",
  },
];

export default function BioCard({ students, index }) {
  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-200 sm:text-3xl ">
            Our current students
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-300">
            Real university insights, just one click away!
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {students.map((student) => (
            <Card
              sx={{
                width: 320,
                maxWidth: "100%",
                boxShadow: "lg",
              }}
            >
              <CardContent
                sx={{ alignItems: "center", textAlign: "center" }}
                key={index}
              >
                <Avatar
                  src={student["imageurl"]}
                  sx={{ "--Avatar-size": "4rem" }}
                />

                <Typography level="title-lg">
                  {student["student_name"]}
                </Typography>
                <Typography level="body-sm" sx={{ maxWidth: "26ch" }}>
                  {student["university_name"]}
                </Typography>
                <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
                  {"Language: "}
                  {student["spoken_language"]}
                </Typography>
                <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
                  {" "}
                  {student["subject"]}
                </Typography>
                <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
                  {" "}
                  {student["country"]}
                </Typography>
                <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
                  {"Timezone : "}
                  {student["timezone"]}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mt: 2,
                    "& > button": { borderRadius: "2rem" },
                  }}
                ></Box>
              </CardContent>

              <CardOverflow sx={{ bgcolor: "background.level1" }}>
                <CardActions buttonFlex="1">
                  <ButtonGroup
                    variant="outlined"
                    sx={{ bgcolor: "background.surface" }}
                  >
                    <Button
                      component="a"
                      href={student["meetingLink"]}
                      target="_blank"
                    >
                      Book a Call
                    </Button>
                  </ButtonGroup>
                </CardActions>
              </CardOverflow>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
