import React from "react";

import UserPosts from "./UserPosts";
import CountdownTimer from "./CountdownTimer";
import WindowSize from "./WindowSize";
import ValidatedInput from "./ValidatedInput";

function Exercise13() {
  const validateEmail = (value) => {
    return value.includes("@");
  };

  return (
    <div>
      <h1>Exercise 13 - useEffect</h1>

      <hr />

      <UserPosts userId={1} />

      <hr />

      <CountdownTimer initialValue={10} />

      <hr />

      <WindowSize />

      <hr />

      <ValidatedInput
        validationFunction={validateEmail}
        errorMessage="Email must contain @"
      />
    </div>
  );
}

export default Exercise13;