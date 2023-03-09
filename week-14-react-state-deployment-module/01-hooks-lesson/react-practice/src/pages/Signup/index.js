import React, { useState} from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

function Signup() {
  const [userState, setUserState] = useState({

    name: "",
    password: ""
  });

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit= {handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
            <input onChange={(event) => setUserState({...userState, name:event.target.value})} className="form-control" type="text" placeholder="Username" name="username" />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(event) => setUserState({...userState, password:event.target.value})}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {userState.name}!</h3>
          <p>I probably shouldn't tell you this, but your password is {userState.password}!</p>
        </Container>
      </form>
    </div>
  );
};


const handleSubmit = (event, userState) => {
  event.preventDefault();

  return console.log(userState.name, userState.password)

}
export default Signup;
