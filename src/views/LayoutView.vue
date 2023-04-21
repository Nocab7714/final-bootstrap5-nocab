<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white py-3 py-md-4 fixed-top border-bottom border-2 border-lg-0 border-primary"
    >
      <div class="container">
        <router-link class="navbar-brand py-0" to="/"
          ><img
            class="img-fluid logo"
            src="https://i.im.ge/2023/04/01/I5ZYcS.logo.webp"
            alt="有一張狗臉插圖與撿到寶的文字"
            width="119"
            height="40"
        /></router-link>
        <button
          class="navbar-toggler border-0 py-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon fs-6"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto text-center">
            <li class="nav-item">
              <router-link class="nav-link fw-bold mx-4 border-bottom border-bottom-lg-0" to="/"
                >首頁</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link fw-bold mx-4 border-bottom border-bottom-lg-0"
                to="/service"
                >服務介紹</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link fw-bold mx-4 border-bottom border-bottom-lg-0"
                to="/works"
                >設計作品</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold mx-4" to="/adopt">領養專區</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link bg-primary fw-bold rounded-pill navbar-btn-hover px-5 mx-4"
                to="/order"
                >毛孩似顏繪</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- 畫面顯示區塊 -->
    <div class="navbar-fixed-height">
      <router-view></router-view>
    </div>
    <!-- footer -->
    <footer class="border-top border-primary border-4">
      <div class="container bg-white py-5">
        <div class="d-flex justify-content-center flex-column flex-md-row flex-wrap">
          <div class="d-flex flex-md-row flex-column mx-3 align-items-center mb-5 mb-xl-0">
            <img
              class="mb-md-0 me-md-4 mb-4 img-fluid"
              src="https://i.im.ge/2023/04/01/I5Zy1G.link01.webp"
              alt="兩隻不同顏色的手在握手"
              width="200"
              height="127"
            />
            <div class="text-center text-md-start">
              <h2 class="fs-4 fw-bold">加入奴才團隊</h2>
              <p>我也會畫畫，希望能盡一份心力！</p>
              <router-link
                class="btn btn-outline-dark btn-hover-primary rounded-pill px-5 fs-5"
                to="/adopt"
                >領養專區</router-link
              >
            </div>
          </div>
          <div class="d-flex flex-md-row flex-column mx-3 align-items-center">
            <img
              class="mb-md-0 me-md-4 mb-4 img-fluid"
              src="https://i.im.ge/2023/04/01/I5ZxXJ.link02.webp"
              alt="一隻手在棕色狗的下巴下面"
              width="200"
              height="105"
            />
            <div class="text-center text-md-start">
              <h2 class="fs-4 fw-bold">加入奴才團隊</h2>
              <p>我也會畫畫，希望能盡一份心力！</p>
              <router-link
                class="btn btn-outline-dark btn-hover-primary rounded-pill px-5 fs-5"
                to="/adopt"
                >領養專區</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="bg-secondary text-center text-white py-4 fs-7 fs-md-6">
        Copyright © 2021 撿到寶.All rights reserved.
      </div>
    </footer>
  </div>
</template>
<style lang="scss">
// 修正 navbar 使用 .fixed top 被吃掉的空間
.navbar-fixed-height {
  margin-top: 64px;
}
// navbar 毛孩似繪顏 按鈕 hover 效果
.navbar-btn-hover {
  &:hover {
    box-shadow: 0px 3px 1px black;
    color: black;
  }
}
.logo {
  height: 32px;
  width: 95px;
}

nav {
  // .router-link-exact-active {
  //   color: var(--bs-primary);
  // }
  // .router-link-active {
  //   color: var(--bs-primary);
  // }
}

@include media-breakpoint-up(md) {
  .navbar-fixed-height {
    margin-top: 88px;
  }
  .logo {
    height: 40px;
    width: 119px;
  }
}
</style>
<script>
import { RouterView, RouterLink } from 'vue-router'
</script>
