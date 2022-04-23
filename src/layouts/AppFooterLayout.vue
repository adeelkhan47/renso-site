<template>
  <div class="app-footer-layout-wrapper">
    <div class="footer-main-body">
      <p>buchung@radwelt-schlei.de</p>
      <!-- <ul class="links">
        <li class="link">
          <a-icon type="twitter" />
        </li>
        <li class="link">
          <a-icon type="facebook" />
        </li>
        <li class="link">
          <a-icon type="google" />
        </li>
        <li class="link">
          <a-icon type="instagram" />
        </li>
      </ul> -->
    </div>
    <div class="footer-bottom-line">
      Renso ©2022 {{ $t("createdByRensoCorp") }}.
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooterLayout"
};
</script>

<style scoped>
.app-footer-layout-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}

.footer-main-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #333333;
  color: white;
  padding: 20px;
}

.footer-main-body p {
  color: white;
  margin: 10px;
}

.links {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
}

.link {
  margin: 10px;
  font-size: 20px;
}

.link:hover {
  color: #1890ff;
  cursor: pointer;
}

.footer-bottom-line {
  width: 100%;
  height: auto;
  padding: 10px;
  background: #222222;
  color: white;
  text-align: center;
}
</style>
