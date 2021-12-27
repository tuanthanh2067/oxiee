<template>
  <div class="login">
    <div id="left">
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
    <div id="right">
      <img src="@/assets/login-image.jpg" alt="accounting" />

      <div class="glass">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          corrupti ducimus harum ipsum ea omnis commodi totam autem assumenda
          culpa.
        </h2>

        <div class="rate">
          <h1>Lauren K.</h1>
          <div class="stars">
            <Stars color="white" />
            <Stars color="white" />
            <Stars color="white" />
            <Stars color="white" />
          </div>
        </div>

        <div class="sup">
          <div class="title">
            <h4>Restaurant Manager</h4>
            <p>Big World Hotel</p>
          </div>
          <div class="arrows">
            <div>
              <Arrow orientation="left" color="white" />
            </div>
            <div>
              <Arrow orientation="right" color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "@/components/utils/Star.vue";
import Arrow from "@/components/utils/Arrow.vue";

export default {
  name: "Login",
  components: {
    Stars,
    Arrow,
  },
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-attachment: fixed;
}

#left {
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

#right {
  flex: 60%;
  position: relative;
}

#right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#right .glass {
  background: inherit;
  position: absolute;
  left: 50%;
  bottom: 2%;
  transform: translateX(-50%);

  width: 80%;
  height: 300px;

  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  box-shadow: 0 0 2px 0 white;

  padding: 1.25em;
  color: white;
}

.rate {
  margin-top: 0.875em;
  display: flex;
  justify-content: space-between;
}

.sup {
  margin-top: 0.75em;
  display: flex;
  justify-content: space-between;
}

.sup .title p {
  color: white;
  font-size: 0.95em;
}

.arrows {
  display: flex;
}

.arrows > div {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 50px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;

  margin-left: 1em;
}
</style>
