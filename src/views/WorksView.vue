<template>
  <div :style="{ backgroundImage: `url(${imgUrl.lightPaperFibers})` }">
    <div class="container">
      <div class="works text-center py-5">
        <img
          class="mb-4 mb-md-5 img-fluid title-img"
          src="https://i.im.ge/2023/04/01/I5ZSXM.title01.webp"
          alt="一隻戴眼鏡的灰貓抱著鉛筆並且有近期作品四個字"
          width="250"
          height="134"
        />
        <div class="row row-cols">
          <div class="col-md-3">
            <aside class="text-md-start" style="font-family: var(--bs-font-family-Kalam)">
              <h2 class="fs-4 fw-bold mb-4 text-secondary">Designer</h2>
              <ul class="nav flex-md-column fs-5 justify-content-center mb-4 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link works-nav-link px-md-0" href="#" @click.prevent
                    ><span class="nav-link-hover-item">—</span>All</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link works-nav-link px-md-0" href="#" @click.prevent
                    ><span class="nav-link-hover-item">—</span>Meili</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link works-nav-link px-md-0" href="#" @click.prevent
                    ><span class="nav-link-hover-item">—</span>Zoe</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link works-nav-link px-md-0" href="#" @click.prevent
                    ><span class="nav-link-hover-item">—</span>Michael</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link works-nav-link px-md-0" href="#" @click.prevent
                    ><span class="nav-link-hover-item">—</span>Birdy</a
                  >
                </li>
              </ul>
            </aside>
          </div>
          <div class="col-md-9">
            <div class="row row-cols g-3 g-md-4 mb-5">
              <div class="col-6 col-lg-4">
                <div
                  class="card rounded-5 border-0 position-relative server-img-hover"
                  style="background-color: var(--bs-primary)"
                >
                  <a href="#" class="stretched-link" @click.prevent>
                    <img
                      class="img-fluid rounded-5 card-img"
                      src="https://i.im.ge/2023/04/01/I5ZmG0.dog05.webp"
                      alt="脖子紅色領巾的黃狗插圖"
                      width="312"
                      height="312"
                    />
                  </a>
                  <div
                    class="position-absolute server-img-hover-item-shadow text-start text-white fs-5 fw-light top-auto w-100 h-100"
                    style="font-family: var(--bs-font-family-Kalam)"
                  >
                    <div class="server-img-hover-item">
                      designer<br /><span class="fs-3 fw-bold">Meili</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div
                  class="card rounded-5 border-0 position-relative server-img-hover"
                  style="background-color: var(--bs-primary)"
                >
                  <a href="#" class="stretched-link" @click.prevent>
                    <img
                      class="img-fluid rounded-5 card-img"
                      src="https://i.im.ge/2023/04/01/I5ZPpL.dog07.webp"
                      alt="左眼下方有一顆痣的貓咪插圖"
                      width="312"
                      height="312"
                    />
                  </a>
                  <div
                    class="position-absolute server-img-hover-item-shadow text-start text-white fs-5 fw-light top-auto w-100 h-100"
                    style="font-family: var(--bs-font-family-Kalam)"
                  >
                    <div class="server-img-hover-item">
                      designer<br /><span class="fs-3 fw-bold">Meili</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div
                  class="card rounded-5 border-0 position-relative server-img-hover"
                  style="background-color: var(--bs-primary)"
                >
                  <a href="#" class="stretched-link" @click.prevent>
                    <img
                      class="img-fluid rounded-5 card-img"
                      src="https://i.im.ge/2023/04/01/I5Z67T.dog06.webp"
                      alt="吐著舌頭的黑色狗插圖"
                      width="312"
                      height="312"
                    />
                  </a>
                  <div
                    class="position-absolute server-img-hover-item-shadow text-start text-white fs-5 fw-light top-auto w-100 h-100"
                    style="font-family: var(--bs-font-family-Kalam)"
                  >
                    <div class="server-img-hover-item">
                      designer<br /><span class="fs-3 fw-bold">Meili</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div
                  class="card rounded-5 border-0 position-relative server-img-hover"
                  style="background-color: var(--bs-primary)"
                >
                  <a href="#" class="stretched-link" @click.prevent>
                    <img
                      class="img-fluid rounded-5 card-img"
                      src="https://i.im.ge/2023/04/01/I5ZbGz.Michael.webp"
                      alt="帶著黃色領巾粉紅色鼻子的白色小狗插圖"
                      width="312"
                      height="312"
                    />
                  </a>
                  <div
                    class="position-absolute server-img-hover-item-shadow text-start text-white fs-5 fw-light top-auto w-100 h-100"
                    style="font-family: var(--bs-font-family-Kalam)"
                  >
                    <div class="server-img-hover-item">
                      designer<br /><span class="fs-3 fw-bold">Meili</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router'
export default {
  data() {
    return {
      imgUrl: {
        lightPaperFibers: 'https://i.im.ge/2023/04/01/I5ZAwx.lightpaperfibers.webp'
      }
    }
  }
}
</script>
<style lang="scss">
.server-img-hover-item-shadow {
  opacity: 0;
  transition: all 0.5s;
  display: block;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
  border-radius: 30px;
}
.server-img-hover-item {
  position: absolute;
  bottom: 30px;
  left: 30px;
}
.server-img-hover {
  &:hover {
    .server-img-hover-item-shadow {
      opacity: 1;
    }
  }
}
.title-img {
  width: 150px;
  height: 80px;
}

.works-nav-link {
  color: var(--bs-secondary);
  display: inline-block;
  transition: all 0.2s;
  &:hover {
    color: var(--bs-primary);
    .nav-link-hover-item {
      width: 30px;
      opacity: 1;
    }
  }
}

// 行動版不會顯示橫向向右推出的動畫
.nav-link-hover-item {
  display: none;
}

@include media-breakpoint-up(md) {
  .title-img {
    width: 250px;
    height: 134px;
  }
  .nav-link-hover-item {
    display: none;
    display: inline-block;
    width: 0;
    opacity: 0;
    transition: all 0.2s;
  }
}
</style>
