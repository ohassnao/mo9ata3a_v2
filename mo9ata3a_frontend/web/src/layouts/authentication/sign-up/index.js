import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import bgImage from "assets/images/back.jpg";
import axios from "axios";

function Cover() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    cin: "",
    adresse: "",
    username: "",
    email: "",
    password: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/demande_inscri/save", formData);

      if (response.status === 200) {
        // Handle success
        console.log("User registered successfully!");
        // Redirect or display a success message
      } else {
        // Handle failure
        console.error("Registration failed");
        // Display an error message to the user
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle any network errors or exceptions
    }
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
        </MDBox>
        <MDBox pt={1} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox >
              <MDInput
                type="text"
                label="Nom"
                variant="standard"
                fullWidth
                name="nom"
                value={formData.nom}
                onChange={handleChange}
              />
            </MDBox>
            <MDBox >
              <MDInput
                type="text"
                label="Prenom"
                variant="standard"
                fullWidth
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
              />
            </MDBox>
            <MDBox >
              <MDInput
                type="text"
                label="CIN"
                variant="standard"
                fullWidth
                name="cin"
                value={formData.cin}
                onChange={handleChange}
              />
            </MDBox>
            <MDBox >
              <MDInput
                type="email"
                label="email"
                variant="standard"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </MDBox>
            <MDBox >
              <MDInput
                type="text"
                label="username"
                variant="standard"
                fullWidth
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </MDBox>
            <MDBox >
              <MDInput
                type="password"
                label="password"
                variant="standard"
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </MDBox>
            
            {/* Add similar MDInput components for other user attributes */}
            {/* Example: */}
            {/* <MDBox mb={2}>
              <MDInput
                type="text"
                label="CIN"
                variant="standard"
                fullWidth
                name="cin"
                value={formData.cin}
                onChange={handleChange}
              />
            </MDBox> */}
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                Demande D'inscription
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
