<template>
  <div id="contact-form">
    <h2>Contact us!</h2>
    <div class="form-group">

      <div class="name-section section">
        <!-- <label class="label" for="username">Your Name</label> -->
        <p :class="{ 'control': true }">
            <input v-model="name" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('username') }" name="username" type="text" placeholder="Name">
            <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
        </p>
      </div>

      <div class="email-section section">
        <!-- <label class="label" for="email">Your Email</label> -->
        <p :class="{ 'control': true }">
            <input v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </p>
      </div>

      <div class="message-section section">
        <!-- <label class="label" for="message">Message</label> -->
        <p :class="{ 'control': true }">
            <textarea v-model="message" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('message') }" name="message" type="text" placeholder="Message"></textarea>
            <span v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</span>
        </p>
      </div>
      <div class="button-container">
        <button class="attach-btn" @click="attach">Attach Your Basket</button>
        <button class="send-btn" @click="send()">Send Message</button>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'form',
  data () {
    return {
      name: '',
      email: '',
      message: '',
      config: []
    }
  },
  methods: {
    send() {
      this.$http.post('https://hidden-earth-71841.herokuapp.com/', {
        message: this.message,
        sender: this.email
      }).then(response => {
          console.log(response.body);
        }
      );
    },
    attach() {
      console.log('attach');
    }
  }
}
</script>

<style lang="postcss" scoped>
#contact-form {
  width: 50%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  h2 {
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    text-align: center;
  }
  .form-group {
    padding: 10px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    .message-section {
      margin-bottom: 20px;
    }
    .section {
      /*padding-top: 5px;*/
      /*padding-bottom: 5px;*/
      .control {
      }
      input {
        height: 35px;
        width: 100%;
        padding: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 12px;
      }
      label {
        font-size: 14px;
      }
      textarea {
        height: 200px;
        width: 100%;
        padding: 5px;
        margin-top: 10px;
        overflow: scroll;
        border: 1px solid lightgray;
        font-size: 12px;
      }
      textarea:focus, input:focus {
        outline: 2px solid black;
      }
      .help {
        color: tomato;
        padding-bottom: 10px;
      }
    }
    .button-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      button {
        width: 100%;
        height: 35px;
        padding: 5px;
        text-align: center;
        display: inline-block;
        margin-top: 10px;
        background-color: white;
        border: 1px solid lightgray;
        cursor: pointer;
        font-size: 12px;
        transition: all 0.3s;
      }
      button:hover {
        border: none;
        background-color: black;
        color: white;
      }
    }
  }
}
</style>
