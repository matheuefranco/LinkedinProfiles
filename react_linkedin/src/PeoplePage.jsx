import React from "react";
import Grid from "@mui/material/Grid";
import PersonCard from "./PersonCard";

const PeoplePage = () => {
  const peopleData = [
    { name: "Matheus", age: 39, email: "john.doe@example.com", photoUrl:"https://media.licdn.com/dms/image/C4D03AQFOT2UFGpR_yQ/profile-displayphoto-shrink_400_400/0/1636637941272?e=1686787200&v=beta&t=jAG34v9CBvmTHgvMmNpZDudZAsE-NgUw3b1iXuGlUIY" },
    { name: "Guilherme", age: 21, email: "jane.smith@example.com" },
    { name: "Luiz Felipe", age: 21, email: "mark.johnson@example.com" },
  ]; // Dados de exemplo das pessoas

  return (
    <div>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {peopleData.map((person, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PersonCard
              name={person.name}
              age={person.age}
              email={person.email}
              photoUrl={person.photoUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PeoplePage;
