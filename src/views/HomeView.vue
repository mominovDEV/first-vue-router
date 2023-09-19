<template>
  <div class="home">
    <div class="navbar">
      <h1>ROLLS-ROYCE</h1>
      <ul>
        <li><a href="#home" class="header-item">DISCOVER</a></li>
        <li><a href="#location" class="header-item">IN DETAIL</a></li>
        <li><a href="#about" class="header-item">COMMISSION</a></li>
        <li><a href="#blog" class="header-item">BLACK BADGE</a></li>
        <li><a href="#contact" class="header-item">ENQUIRE</a></li>
      </ul>
    </div>

    <div class="main">
      <router-link
      to="/login"
      class="button"
      >goto login</router-link
    >
      <!-- <button type="submit">LOGIN</button> -->
    </div>
  </div>
</template>
<style>
* {
  margin: auto;
  padding: 0;
  box-sizing: border-box;
}

.main {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/download.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar {
  width: 100%;
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
}

.navbar h1 {
  color: #ffffff;
  font-family: Ribeye;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 36px */
  letter-spacing: 1.44px;
}

.navbar ul {
  display: flex;
  gap: 30px;
  list-style: none;
  top: 0;
}

.navbar ul li a {
  text-decoration: none;
  color: #ffffff;
  font-family: Ribeye;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}

.button {
  /* width: 263px;
  height: 51px; */
  
  flex-shrink: 0;
  border-radius: 5px;
  background: #87b7b7;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
