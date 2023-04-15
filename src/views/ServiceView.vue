<template>
  <div :style="{ backgroundImage: `url(${imgUrl.lightPaperFibers})` }">
    <header class="d-flex flex-column align-items-center pt-3">
      <img
        class="img-fluid header-banner-sm"
        src="https://i.im.ge/2023/04/08/IVhAZ4.AnyConv-com-banner-service-sm.webp"
        alt="四隻不同顏色的貓咪頭上有毛孩似繪顏的文字"
        width="348"
        height="215"
      />
      <img
        class="img-fluid header-banner"
        src="https://i.im.ge/2023/04/01/I5ZU1P.banner.webp"
        alt="四隻不同顏色的貓咪中間有毛孩似繪顏的文字"
        width="1440"
        height="288"
      />
    </header>
    <div class="container">
      <section class="service py-5">
        <div class="row row-cols g-4">
          <div class="col-lg-3 col-md-6">
            <div class="d-flex flex-md-column align-items-center">
              <img
                class="mb-md-3 me-3 me-md-0 service-img img-fluid"
                src="https://i.im.ge/2023/04/01/I5Zg76.step01.webp"
                alt="一隻狗咬著一張紙狗盆裡有紙鈔"
                width="100"
                height="98"
              />
              <div class="d-flex flex-column text-md-center">
                <h2
                  class="text-primary fw-bold fs-5"
                  style="font-family: var(--bs-font-family-Kalam)"
                >
                  STEP1
                </h2>
                <h3 class="fw-bold fs-5 mb-1 mb-md-3">購買似顏繪服務</h3>
                <p class="">填寫購買表單 <br />並完成轉帳付款</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="d-flex flex-md-column align-items-center">
              <img
                class="mb-md-3 me-3 me-md-0 service-img img-fluid"
                src="https://i.im.ge/2023/04/01/I5ZRpK.step02.webp"
                alt="一個穿綠色短袖的戴眼鏡的女設計師在繪製"
                width="100"
                height="98"
              />
              <div class="d-flex flex-column text-md-center">
                <h2
                  class="text-primary fw-bold fs-5"
                  style="font-family: var(--bs-font-family-Kalam)"
                >
                  STEP2
                </h2>
                <h3 class="fw-bold fs-5 mb-1 mb-md-3">設計師繪製</h3>
                <p class="">
                  設計師繪製似顏繪<br />
                  不提供改稿
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="d-flex flex-md-column align-items-center">
              <img
                class="mb-md-3 me-3 me-md-0 service-img img-fluid"
                src="https://i.im.ge/2023/04/01/I5ZK6X.step04.webp"
                alt="戴眼鏡的女設計師拿著畫好的哈士奇插圖"
                width="100"
                height="98"
              />
              <div class="d-flex flex-column text-md-center">
                <h2
                  class="text-primary fw-bold fs-5"
                  style="font-family: var(--bs-font-family-Kalam)"
                >
                  STEP3
                </h2>
                <h3 class="fw-bold fs-5 mb-1 mb-md-3">畫作提供</h3>
                <p class="">電子檔案or實體化做寄送<br />設計師提供作品</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="d-flex flex-md-column align-items-center">
              <img
                class="mb-md-3 me-3 me-md-0 service-img img-fluid"
                src="https://i.im.ge/2023/04/01/I5ZZ29.step03.webp"
                alt="一隻狗正在吃飯並用並用英文說謝謝"
                width="100"
                height="98"
              />
              <div class="d-flex flex-column text-md-center">
                <h2
                  class="text-primary fw-bold fs-5"
                  style="font-family: var(--bs-font-family-Kalam)"
                >
                  STEP4
                </h2>
                <h3 class="fw-bold fs-5 mb-1 mb-md-3">幫助浪浪</h3>
                <p class="">每個月30號我們會將設計費<br />購買飼料，提供給xxx中途之家</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
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
@import 'bootstrap/scss/functions';
@import '../assets/helpers/variables';
@import 'bootstrap/scss/maps';
@import 'bootstrap/scss/mixins';
@import '../assets/helpers/utilities';

.header-banner-sm {
  display: block;
}

.header-banner {
  display: none;
}

.service-img {
  width: 100px;
  height: 98px;
}

@include media-breakpoint-up(md) {
  .header-banner {
    display: block;
  }
  .header-banner-sm {
    display: none;
  }
  .service-img {
    width: 200px;
    height: 203px;
  }
}
</style>
