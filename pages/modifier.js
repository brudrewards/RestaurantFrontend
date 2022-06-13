import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import ModifierCard from "../layouts/components/modifier/modifierCard";
import modifierCard1 from "../public/assets/modifierCard1.png";
import modifierCard2 from "../public/assets/modifierCard2.png";
import modifierCard3 from "../public/assets/modifierCard3.png";
import NoFood from "../public/assets/noFood.png";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useForm } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import * as FiIcons from "react-icons/fi";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FormLabel from "@mui/material/FormLabel";

import Image from "next/image";

const label = { inputProps: { "aria-label": "Switch demo" } };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Modifier = () => {
  const [size, setSize] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [modifierModal, setModifierModal] = React.useState(false);
  const openModifer = () => setModifierModal(true);
  const closeModifier = () => setModifierModal(false);

  const handleSize = (event) => {
    setSize(event.target.value);
    console.log(size);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <Container maxWidth="md">
      <Tabs
        sx={{ marginBottom: 5 }}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label={<ModifierCard img={modifierCard1} />} />
        <Tab label={<ModifierCard img={modifierCard2} />} />
        <Tab label={<ModifierCard img={modifierCard3} />} />
        <Tab label={<ModifierCard img={modifierCard1} />} />
        <Tab label={<ModifierCard img={modifierCard2} />} />
        <Tab label={<ModifierCard img={modifierCard3} />} />
      </Tabs>

      <Typography variant="h6">Modifier</Typography>

      <Grid sx={{ marginTop: 3 }} container spacing={3}>
        <Grid item xs={8} md={9} lg={9}>
          <FormControl variant="standard" sx={{ minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">Size</InputLabel>
            <Select
              {...register("size", {
                required: true,
              })}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={size}
              onChange={handleSize}
              label="size"
            >
              <MenuItem value="sm">SM</MenuItem>
              <MenuItem value="md">MD</MenuItem>
              <MenuItem value="lg">LG</MenuItem>
            </Select>
            <Typography sx={{ color: "#D35E3C" }} variant="body2">
              {errors.size && <span>Please Input Size</span>}
            </Typography>
          </FormControl>
        </Grid>

        <Grid sx={{ marginTop: 2 }} item xs={1} md={1} lg={1}>
          <Button variant="rounded">Edit</Button>
        </Grid>
        <Grid
          sx={{
            marginTop: 2,
            marginLeft: {
              xs: 5,
              md: 1,
              lg: 1,
            },
          }}
          item
          xs={1}
          md={1}
          lg={1}
        >
          <Button onClick={handleOpen}>
            <FiIcons.FiTrash style={{ width: "25px", height: "25px" }} />
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex" }}>
        <Button
          onClick={openModifer}
          sx={{
            marginTop: 5,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          variant="rounded"
        >
          Add New Modifier
        </Button>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{ marginLeft: "auto", marginRight: "auto" }}>
              <Image src={NoFood} width={350} height={350} priority={true} />
              <Typography variant="p">
                Are you sure you want to delete the modifier?
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: 2,
                }}
              >
                <Button
                  onClick={handleClose}
                  sx={{ backgroundColor: "#E5E5E5", color: "black" }}
                  variant="rounded"
                >
                  Cancel
                </Button>
                <Button variant="rounded">Delete</Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </form>

      <Modal
        open={modifierModal}
        onClose={closeModifier}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container maxWidth="lg">
          <Box sx={style}>
            <Box sx={{ marginLeft: "auto", marginRight: "auto" }}>
              <Typography variant="h6">Add Modifier Group</Typography>

              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth={true}
                    id="standard-basic"
                    label="Group Name"
                    variant="standard"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6} md={6} lg={6}>
                  <TextField
                    fullWidth={true}
                    id="standard-basic"
                    label="Modifier Name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <TextField
                    fullWidth={true}
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    id="standard-basic"
                    label="Set Price"
                    variant="standard"
                  />
                </Grid>
              </Grid>

              <Button sx={{ paddingX: "0px" }}>Add More</Button>

              <Grid sx={{ marginTop: 5 }} container>
                <Grid item>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Select As:
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="single"
                      control={<Radio />}
                      label="single"
                    />
                    <FormControlLabel
                      value="multiple"
                      control={<Radio />}
                      label="multiple"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>

              <Grid container>
                <Grid xs={2}>
                  <Switch edge="start" {...label} defaultChecked />
                </Grid>
                <Grid sx={{ margin: "auto" }} xs={10}>
                  <Typography variant="p">Enable Modifier</Typography>
                </Grid>
              </Grid>

              <Box sx={{ display: "flex", marginTop: 5 }}>
                <Button
                  center
                  sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  variant="rounded"
                >
                  {" "}
                  Add Modifier
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Modal>
    </Container>
  );
};

export default Modifier;
