import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export default function AddStudent() {
  const validationSchema = yup.object({
    firstName: yup.string(),
    lastName: yup.string(),
    fullName: yup.string(),
    fatherName: yup.string(),
    nationality: yup.string(),
    city: yup.string(),
    email: yup.string(),
    designation: yup.string(),
    department: yup.string(),
    campus: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      fullName: this.firstName + " " + this.lastName,
      fatherName: "",
      nationality: "",
      city: "",
      email: "",
      designation: "",
      department: "",
      campus: "",
      rolesChecked: [],
      new: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          fullWidth
          margin="dense"
          id="firstName"
          label="First Name"
          name="firstName"
          color="secondary"
          variant="outlined"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />

        <TextField
          margin="dense"
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          color="secondary"
          variant="outlined"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />

        <TextField
          margin="dense"
          fullWidth
          id="fatherName"
          label="Father/Husband Name"
          name="fatherName"
          color="secondary"
          variant="outlined"
          value={formik.values.fatherName}
          onChange={formik.handleChange}
          error={formik.touched.fatherName && Boolean(formik.errors.fatherName)}
          helperText={formik.touched.fatherName && formik.errors.fatherName}
        />

        <TextField
          margin="dense"
          fullWidth
          id="nationality"
          label="Nationality"
          name="nationality"
          color="secondary"
          variant="outlined"
          value={formik.values.nationality}
          onChange={formik.handleChange}
          error={
            formik.touched.nationality && Boolean(formik.errors.nationality)
          }
          helperText={formik.touched.nationality && formik.errors.nationality}
        />

        <TextField
          margin="dense"
          fullWidth
          id="city"
          label="City"
          name="city"
          color="secondary"
          variant="outlined"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />

        <TextField
          margin="dense"
          fullWidth
          id="email"
          label="Email"
          name="email"
          color="secondary"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          margin="dense"
          fullWidth
          id="designation"
          label="Designation"
          name="designation"
          color="secondary"
          variant="outlined"
          value={formik.values.designation}
          onChange={formik.handleChange}
          error={
            formik.touched.designation && Boolean(formik.errors.designation)
          }
          helperText={formik.touched.designation && formik.errors.designation}
        />

        <TextField
          margin="dense"
          fullWidth
          id="department"
          label="Department"
          name="department"
          color="secondary"
          variant="outlined"
          value={formik.values.department}
          onChange={formik.handleChange}
          error={formik.touched.department && Boolean(formik.errors.department)}
          helperText={formik.touched.department && formik.errors.department}
        />

        <TextField
          margin="dense"
          fullWidth
          id="campus"
          label="Campus"
          name="campus"
          color="secondary"
          variant="outlined"
          value={formik.values.campus}
          onChange={formik.handleChange}
          error={formik.touched.campus && Boolean(formik.errors.campus)}
          helperText={formik.touched.campus && formik.errors.campus}
        />
        <div
          style={{
            margin: ".25rem .75rem .25rem",
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                type="checkbox"
                name="rolesChecked"
                value="ADMIN"
                color="secondary"
              />
            }
            label="Admin"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="rolesChecked"
                value={formik.values.rolesChecked}
                color="secondary"
              />
            }
            label="GAC"
          />
          <FormControlLabel
            control={
              <Checkbox name="rolesChecked" value="GO" color="secondary" />
            }
            label="GO"
          />
          <FormControlLabel
            control={
              <Checkbox name="rolesChecked" value="MS" color="secondary" />
            }
            label="MS Cor"
          />
          <FormControlLabel
            control={
              <Checkbox name="rolesChecked" value="PhD" color="secondary" />
            }
            label="PhD Cor"
          />
        </div>

        <Button
          margin="normal"
          type="submit"
          variant="contained"
          size="large"
          color="secondary"
        >
          Add Faculty
        </Button>
      </Box>
    </>
  );
}
