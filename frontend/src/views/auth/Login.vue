<template>
  <div class="login">
    <div class="left">
      <div class="container">
        <h2>Welcome back</h2>
        <p>Hello, please fill in your credentials</p>

        <form action="">
          <div class="email">
            <label for="email" id="email" name="email">Your email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div class="password">
            <label for="password" id="password" name="password">Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div class="selections">
            <div class="remember">
              <input type="checkbox" name="remember" id="remember" />
              <label for="remember">Remember me</label>
            </div>

            <router-link to="/forgot">Forgot password</router-link>
          </div>

          <input type="submit" value="Sign in" />
        </form>

        <span class="create">
          Don't have an account?
          <router-link to="/signup">Sign up for free!</router-link>
        </span>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/login-image.jpg" alt="accounting" />
    </div>
  </div>
</template>

<script></script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.left {
  flex: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  width: 70%;
}

.container p {
  color: grey;
  margin-bottom: 1em;
}

form > div {
  display: flex;
  flex-direction: column;
  margin: 1em 0em;
}

.email input,
.password input {
  height: 35px;
  outline: none;
  padding-left: 0.5em;
  border: 1px solid rgb(219, 219, 219);
}

.selections {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.selections a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 0.9em;
}

.remember input {
  margin-right: 0.35em;
}

input[type="submit"] {
  width: 100%;
  height: 40px;
  color: white;
  background: black;
  border: none;
  font-weight: bold;
}

.create {
  color: grey;
}

.create a {
  text-decoration: none;
  color: black;
}

.right {
  flex: 60%;
}

.right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
