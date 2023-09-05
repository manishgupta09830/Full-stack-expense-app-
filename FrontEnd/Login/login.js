let from2 = document
  .getElementById("signIn")
  .addEventListener("submit", SignIn);

async function SignIn(e) {
  e.preventDefault();
  let email = e.target.email.value;
  let password = e.target.password.value;
  let obj = {
    email,
    password,
  };
  try {
    let res = await axios.post("http://localhost:4000/user/login", obj);
    console.log(res);
    if (res.status === 200) {
      alert("User Logined");
      localStorage.setItem("token", res.data.token);
      window.location.href = "../Expenses/Expense.html";
    }
  } catch (error) {
    console.log("error:", error);
    alert("User Not Found");
  }
}