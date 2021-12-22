<template>
  <div class="contact">
    <div class="section">
      <div class="text">
        <h1>Get in touch!</h1>
        <p>Contact us for a quote, help or to join the team.</p>
      </div>

      <div class="selections">
        <div class="selection address">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
            />
          </svg>

          <p>123 This Street, Toronto</p>
        </div>
        <div class="selection phone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"
            />
          </svg>

          <p>+647 888 7777</p>
        </div>
        <div class="selection email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
            />
          </svg>

          <p>hello@oxiee.com</p>
        </div>
      </div>

      <div class="contact-form-container">
        <h3>Contact Form</h3>

        <form action="" class="form">
          <div class="information">
            <div class="name">
              <label for="name">Your name</label>
              <div class="input">
                <input type="text" id="name" name="name" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M1.341 6.502c1.11-2.157 2.877-3.984 5.162-5.16l.766 1.848c-1.779.954-3.169 2.393-4.074 4.081l-1.854-.769zm5.93 14.302c-1.688-.904-3.126-2.294-4.08-4.074l-1.848.765c1.175 2.286 3.002 4.054 5.16 5.165l.768-1.856zm-4.845-5.921c-.584-1.932-.549-3.932.005-5.765l-1.856-.768c-.739 2.311-.782 4.852.003 7.299l1.848-.766zm5.925-14.306l.766 1.848c1.932-.583 3.933-.549 5.765.005l.77-1.855c-2.313-.74-4.853-.782-7.301.002zm8.378 2.619c1.688.905 3.126 2.294 4.079 4.073l1.848-.766c-1.176-2.285-3.002-4.052-5.159-5.163l-.768 1.856zm4.845 5.919c.584 1.933.549 3.933-.005 5.766l1.855.769c.74-2.311.782-4.853-.003-7.301l-1.847.766zm-.77 7.614c-.904 1.688-2.294 3.126-4.072 4.08l.766 1.848c2.285-1.176 4.052-3.003 5.162-5.16l-1.856-.768zm-5.92 4.845c-1.933.584-3.933.549-5.766-.005l-.77 1.856c2.312.739 4.853.782 7.301-.002l-.765-1.849z"
                  />
                </svg>
              </div>
            </div>

            <div class="email">
              <label for="email">Mail</label>
              <div class="input">
                <input type="email" id="email" name="email" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
                  />
                </svg>
              </div>
            </div>

            <div class="phone">
              <label for="phone">Phone</label>
              <div class="input">
                <input type="tel" id="phone" name="phone" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="message">
            <label for="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
        </form>

        <div class="products">
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Lorem ipsum</button>
          <button>Other</button>
        </div>

        <button class="send">Send Message</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  width: 100%;
  background: var(--darkPurpleColor);

  display: flex;
  justify-content: center;
}

.section {
  width: 625px;
  margin: 2em 0em;

  color: white;
}

.text {
  text-align: center;
}

.text h1 {
  font-size: 3em;
}

.text p {
  font-size: 1.125em;
}

.selections {
  width: 100%;
  margin-top: 2em;

  display: flex;
  justify-content: space-between;
}

.selection {
  width: 200px;
  height: 100px;

  border-radius: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: 0.5s ease all;
}

.selection:hover {
  background: var(--lightPinkColor);
}

.selection p {
  margin-top: 0.5em;
}

svg {
  fill: white;
}

.contact-form-container {
  width: 100%;
  min-height: 550px;
  background: white;
  color: black;
  border-radius: 16px;

  margin: 2em 0em;
  padding: 1.75em;

  display: flex;
  flex-direction: column;
}

.form {
  display: flex;
  justify-content: space-between;
}

.information,
.message {
  width: 45%;
}

.information div,
.message {
  display: flex;
  flex-direction: column;
}

.information > div,
.message {
  margin: 2em 0em;
}

.input {
  position: relative;
  height: 40px;
  margin-top: 0.25em;
}

.input svg {
  position: absolute;
  top: 50%;
  left: 6%;
  transform: translateY(-50%);
  fill: grey;

  width: 14px;
  height: 14px;
}

.input input {
  height: 100%;
  outline: none;
  border: 2px solid rgb(221, 221, 221);
  border-radius: 8px;

  padding-left: 3em;
}

.input input:focus,
.message textarea:focus {
  border: 2px solid var(--lightPinkColor);
}

.input input:focus ~ svg {
  fill: var(--lightPinkColor);
}

.message textarea {
  width: 100%;
  height: 100%;
  outline: none;

  border: 2px solid rgb(221, 221, 221);
  border-radius: 8px;
  resize: none;
  padding: 0.5em;
}

.products {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.products button {
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.45s ease all;
}

.products button:hover {
  background: var(--lightPinkColor);
  color: white;
}

.send {
  background: var(--lightPinkColor);
  color: white;
  border: none;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 10px;

  margin-top: 2.5em;
  align-self: center;
}
</style>
