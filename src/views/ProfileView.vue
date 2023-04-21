<template>
  <div :style="{ backgroundImage: `url(${imgUrl.lightPaperFibers})` }">
    <div class="container">
      <section class="adopt text-center pb-5">
        <img
          class="img-fluid title-img my-5"
          src="https://i.im.ge/2023/04/01/I5Z1Zh.title02.webp"
          alt="一隻哈巴狗在滑滑板並且有領養專區四個字"
          width="250"
          height="134"
        />
        <div class="row row-cols g-3">
          <div class="col-md-8">
            <div class="card border-0 rounded-4 shadow">
              <div class="card-body text-start p-4">
                <h2 class="card-title fs-4 fw-bold mb-4">等家中-Snow</h2>
                <div class="mb-4 mb-md-5">
                  <div class="row">
                    <dt class="col-6 col-md-4">品種｜哈士奇</dt>
                    <dd class="col-6 col-md-4">年紀｜2個月</dd>
                  </div>
                  <div class="row">
                    <dt class="col-6 col-md-4">性別｜公</dt>
                    <dd class="col-6 col-md-4">結紮｜已結紮</dd>
                  </div>
                  <div class="row">
                    <dt class="col-6 col-md-4">體型｜大型</dt>
                    <dd class="col-6 col-md-4">狂犬病疫苗｜已施打</dd>
                  </div>
                </div>

                <p class="card-text text-start mb-5">
                  看起來很兇但特別怕打雷的Snow，很喜歡吃冰，冰冰的水也喜歡，如果摸他的額頭會發出很像貓的叫聲，相當有活力，不適合關籠會發出像獅子的叫聲。
                  <br />如果照片看起來像你家人，歡迎帶回家一家團圓！
                </p>
                <img
                  class="card-img img-fluid rounded-3"
                  src="https://i.im.ge/2023/04/01/I5ZNAc.dog03.webp"
                  alt="背景在雪地的哈士奇照片"
                  width="808"
                  height="539"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 rounded-4 shadow">
              <img
                class="card-img img-fluid rounded-4 rounded-bottom-0"
                src="https://i.im.ge/2023/04/01/I5ZDAq.08.webp"
                alt="帶著微笑的哈士奇插圖"
                width="424"
                height="424"
              />
              <div class="card-body text-start">
                <p class="mb-0">收容所</p>
                <p class="fw-bold">高雄浪流連途之家</p>
                <p class="mb-0">電話</p>
                <p class="fw-bold">07-123999</p>
                <p class="mb-0">地址</p>
                <p class="fw-bold">高雄市三民區河中三路123號</p>
                <a
                  href="#"
                  class="btn btn-primary rounded-pill fs-4 px-5 fs-5 w-100 mb-3"
                  @click.prevent
                  >前往中途之家</a
                >
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
.title-img {
  width: 150px;
  height: 80px;
}

.rounded-bottom-0 {
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

@include media-breakpoint-up(md) {
  .title-img {
    width: 250px;
    height: 134px;
  }
}
</style>
