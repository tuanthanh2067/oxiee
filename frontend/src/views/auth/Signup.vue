<template>
  <div class="signup">
    <div id="left">
      <div class="container">
        <h2>Become a new member</h2>
        <p>Hello, please fill in your information</p>

        <form action="">
          <div class="email">
            <label for="email" id="email" name="email">Your email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div class="fname">
            <label for="fname" id="fname" name="fname">First name</label>
            <input type="text" placeholder="Enter your first name" />
          </div>

          <div class="lname">
            <label for="lname" id="lname" name="lname">Last name</label>
            <input type="text" placeholder="Enter your last name" />
          </div>
          <div class="password">
            <label for="password" id="password" name="password">Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div class="cPassword">
            <label for="cPassword" id="cPassword" name="password"
              >Confirm your password</label
            >
            <input type="password" placeholder="Confirm your password" />
          </div>

          <input type="submit" value="Sign up" />
        </form>

        <span class="create">
          Already a member
          <router-link to="/login">Log in here!</router-link>
        </span>
      </div>
    </div>
    <div id="right">
      <img src="@/assets/signup-image.jpg" alt="accounting" />

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
.signup {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
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
.password input,
.fname input,
.lname input,
.cPassword input {
  height: 35px;
  outline: none;
  padding-left: 0.5em;
  border: 1px solid rgb(219, 219, 219);
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
