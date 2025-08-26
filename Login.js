const Data = {
  email: "user@example.com",
  password: "password123"
};
const Login = () => {
  console.log("Logging in with credentials:");
  console.log(`Email: ${Data.email}`);
  console.log(`Password: ${Data.password}`);
};

Login();

const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
  <h2>Login Information</h2>
  <p>Email: ${Data.email}</p>
  <p>Password: ${Data.password}</p>
`;
