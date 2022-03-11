<template>
  <div class="bookings-page">
    <!-- <div class="app-logo">
      <img class="logo-img" src="../assets/logo.png" alt="Logo" />
    </div> -->
    <ul class="bookings" v-if="bookings && bookings.length">
      <li class="booking" v-for="booking of bookings" :key="booking.id">
        <booking-tile :booking="booking" />
      </li>
    </ul>
    <template v-else>
      <div class="no-item-types">
        <a-empty :image="$empty.PRESENTED_IMAGE_SIMPLE" />
      </div>
    </template>
    <div class="page-row total-row">
      <a-input-search
        placeholder="Voucher Code"
        size="large"
        v-model="voucher"
        class="discount"
      >
        <a-button
          slot="enterButton"
          type="primary"
          icon="tags"
          @click="applyVoucher"
        >
          Apply Voucher
        </a-button>
      </a-input-search>

      <a-statistic
        title="Total Price"
        :value="totalPrice"
        type="primary"
        class="total"
      >
        <template #suffix>
          <a-icon type="euro" />
        </template>
      </a-statistic>
    </div>
    <div class="page-row actions">
      <a-button
        class="action"
        size="large"
        icon="shopping"
        @click="addMoreItems"
      >
        Add More Items
      </a-button>
      <a-button
        type="primary"
        size="large"
        class="action"
        icon="credit-card"
        @click="checkout"
      >
        Checkout
      </a-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BookingTile from "../views/BookingTile.vue";

export default {
  name: "BookingsPage",

  components: { BookingTile },

  data() {
    return {
      voucher: ""
    };
  },

  computed: {
    ...mapGetters("bookingModule", ["bookings"]),

    totalPrice() {
      return (Math.random() * 50 * (this.bookings.length + 1)).toFixed(2);
    }
  },

  methods: {
    applyVoucher() {},

    addMoreItems() {
      this.$router.push("/");
    },

    checkout() {
      this.$router.push("/checkout");
    }
  }
};
</script>

<style scoped>
.bookings-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.app-logo {
  margin: 50px 10px;
  width: 200px;
  height: auto;
  overflow: hidden;
}

img.logo-img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

ul.bookings {
  position: relative;
  width: 100%;
  list-style-type: none;
  margin: 0px;
  padding: 5px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  overflow: hidden;
  overflow-y: auto;
  height: auto;
  max-height: 500px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3cpath d='M25.28 140C25.28 123.27 3.18 129.64 0 112C-9.46 59.64 -30.59 25.41 0 0C36.82 -30.59 68.23 -2.18 134.81 0C138.23 0.11 137.55 4.59 140 4.59C142.15 4.59 141 0.1 144 0C211 -2.2 212 0 280 0C350 0 350 0 420 0C461.17 0 463.76 -9.42 502.35 0C533.76 7.67 533.67 34.19 560 34.19C578.3 34.19 570.58 5.14 591.61 0C640.58 -11.96 645.81 0 700 0C752.5 0 757.85 -12.44 805 0C827.85 6.02 816.68 31.74 840 36.92C904.18 51.18 910.12 35.5 980 38.89C1050.12 42.29 1059.12 64.02 1120 50.49C1146.62 44.57 1129.16 9.32 1155 0C1199.16 -15.93 1207.5 0 1260 0C1310.77 0 1315.47 -11.87 1361.54 0C1385.47 6.17 1378.17 36.08 1400 36.08C1433.12 36.08 1433.73 9.72 1471.43 0C1503.73 -8.32 1528.73 -23.01 1540 0C1563.01 46.99 1540 70 1540 140C1540 210 1540 210 1540 280C1540 350 1540 350 1540 420C1540 490 1575 525 1540 560C1505 595 1470 560 1400 560C1330 560 1330 560 1260 560C1190 560 1190 560 1120 560C1087.91 560 1087.2 564.97 1055.83 560C1017.2 553.87 1018.78 544.61 980 537.8C910.86 525.65 909.33 518.05 840 522.08C769.33 526.19 758.89 576.16 700 554.08C622.78 525.12 631.61 488.64 567.78 420C561.61 413.36 563.77 403.53 560 403.53C556.29 403.53 553.78 411.12 552.82 420C545.34 489.36 578.5 522.71 543.13 560C512.09 592.71 481.57 560 420 560C350 560 350 560 280 560C210 560 210 560 140 560C70 560 35 595 0 560C-35 525 0 490 0 420C0 350 0 350 0 280C0 249.57 -5.35 248.73 0 219.13C7.29 178.73 25.28 176.84 25.28 140' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M420 110.53C408.56 110.53 393.33 127.25 393.33 140C393.33 149.98 407.74 156 420 156C428.74 156 435.34 149.1 435.34 140C435.34 126.36 429.56 110.53 420 110.53' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M140 277.67C133.91 277.67 127.27 278.89 127.27 280C127.27 281.11 133.87 282.12 140 282.12C141.79 282.12 143.11 281.09 143.11 280C143.11 278.87 141.83 277.67 140 277.67' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M980 235.79C958.76 235.79 943.87 258.8 943.87 280C943.87 298.97 959.43 316.13 980 316.13C1009.8 316.13 1044.62 299.52 1044.62 280C1044.62 259.35 1009.13 235.79 980 235.79' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M73.89 140C73.89 100.85 106.7 100.78 140 61.97C166.76 30.78 159.79 15.14 194 0C229.79 -15.84 237 0 280 0C350 0 350 0 420 0C426.87 0 433.73 -3.45 433.73 0C433.73 5.76 427.6 9.82 420 18.42C365.74 79.82 310 87.38 310 140C310 181.17 369.41 206 420 206C456.06 206 449.96 171.21 483.29 140C519.96 105.65 523.76 109.64 560 74.88C596.74 39.64 587.92 22.11 629.25 0C657.92 -15.33 664.63 0 700 0C734.27 0 740.71 -14.98 768.54 0C810.71 22.71 795.06 56.79 840 75.38C900.79 100.54 910.24 79.4 980 87.5C1050.24 95.65 1053.08 89.41 1120 107.87C1148.21 115.66 1166.38 114.55 1170.26 140C1179.5 200.61 1126 219.08 1146.25 280C1170.87 354.08 1197.74 405.57 1260 410C1324.61 414.6 1326.06 307.09 1400 298.06C1466.06 289.99 1485.14 328.01 1540 375.79C1555.14 388.98 1540 397.89 1540 420C1540 462 1566.25 488.25 1540 504C1496.25 530.25 1464.18 487.05 1400 504C1358.18 515.05 1368.1 543.96 1328 560C1298.1 571.96 1294 560 1260 560C1221.61 560 1217.34 572.25 1183.23 560C1147.34 547.12 1157.05 521.57 1120 509.74C1055.43 489.13 1048.4 509.92 980 495.12C908.4 479.63 909.23 446.78 840 449.17C769.23 451.61 762.44 512.94 700 504.79C650.64 498.35 649.58 468.41 616.39 420C579.58 366.31 587.3 300.59 560 300.59C533.08 300.59 522.17 357.52 507.95 420C492.65 487.23 528.84 515.63 500.96 560C484.86 585.63 460.48 560 420 560C350 560 350 560 280 560C210 560 210 560 140 560C70 560 43.75 586.25 0 560C-26.25 544.25 -11.78 513.97 0 476C9.94 443.97 18.57 445.03 43.45 420C88.57 374.61 89.64 374.89 140 335.15C178.36 304.89 220.89 308.49 220.89 280C220.89 250.58 176.36 253.96 140 219.33C102.86 183.96 73.89 179.53 73.89 140' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M70 0C70 16.43 21.35 58.15 0 58.15C-13.65 58.15 -15.88 13.19 0 0C19.12 -15.88 70 -12.64 70 0' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1260 86.97C1225.75 44.84 1194.77 27.18 1194.77 0C1194.77 -16.31 1227.39 0 1260 0C1291.54 0 1296.88 -13.5 1323.08 0C1366.88 22.58 1356.1 71.07 1400 72.16C1464.56 73.76 1502.52 -12.78 1540 5.38C1572.52 21.14 1540 72.69 1540 140C1540 186.06 1567.22 207.03 1540 232.11C1497.22 271.54 1455.3 291.03 1400 269.02C1339.61 244.98 1356.72 202.56 1308.61 140C1286.72 111.54 1282.67 114.84 1260 86.97' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M980 189.74C936.63 189.74 906.24 236.72 906.24 280C906.24 318.73 938.01 353.76 980 353.76C1040.85 353.76 1111.92 319.86 1111.92 280C1111.92 237.85 1039.47 189.74 980 189.74' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M122.5 140C122.5 129.63 128.73 119.34 140 119.34C162.68 119.34 190.4 129.6 190.4 140C190.4 150.43 162.62 161 140 161C128.67 161 122.5 150.46 122.5 140' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M5.19 0C5.19 1.22 1.58 4.31 0 4.31C-1.01 4.31 -1.18 0.98 0 0C1.42 -1.18 5.19 -0.94 5.19 0' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M280 74.12C256.82 74.12 244 25.79 244 0C244 -11.27 262 0 280 0C313.16 0 346.32 -14.83 346.32 0C346.32 22.23 307.98 74.12 280 74.12' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M531.23 140C531.23 124.72 542.51 115.58 560 115.58C615.23 115.58 676.67 119.91 676.67 140C676.67 162.12 608.25 200 560 200C535.53 200 531.23 166.93 531.23 140' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M700 123.2C683.68 123.2 666.88 48.9 666.88 0C666.88 -12.7 683.44 0 700 0C716.04 0 732.08 -12.4 732.08 0C732.08 49.2 716.28 123.2 700 123.2' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M721 140C746.76 101.38 780.14 114.75 840 113.85C909.64 112.8 910.03 124.78 980 136.11C990.8 137.86 1001.54 138.11 1001.54 140C1001.54 141.89 987.34 135.95 980 143.68C920.87 205.95 916.12 207.18 868.6 280C846.12 314.46 862.34 324.33 840 358.24C816.22 394.33 812.27 395.06 776.36 420C742.27 443.68 734.98 455.49 700 455.49C679.3 455.49 665 441.93 665 420C665 369.4 676.52 361.66 700 310.43C708.6 291.66 726.74 299.69 729.17 280C737.24 214.48 691.35 184.45 721 140' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1260 33.94C1247.41 33.94 1234.55 10.61 1234.55 0C1234.55 -6.36 1247.28 0 1260 0C1272.31 0 1284.62 -6.28 1284.62 0C1284.62 10.69 1272.44 33.94 1260 33.94' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1357.22 140C1357.22 120.72 1375.26 108.25 1400 108.25C1466.65 108.25 1540 117.66 1540 140C1540 163.73 1461.53 200.39 1400 200.39C1370.14 200.39 1357.22 166.79 1357.22 140' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M326.67 280C349.38 246.74 374.4 256 420 256C447.32 256 466.22 256.1 472.5 280C487.76 338.1 466.51 349.94 463.08 420C459.66 489.94 475.67 505.18 458.8 560C454.13 575.18 439.4 560 420 560C384.22 560 366.88 583.05 348.44 560C310.88 513.05 313.53 491.09 308 420C302.64 351.09 293.38 328.74 326.67 280' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M103.79 420C119.3 401.65 118.56 388.18 140 388.18C186.67 388.18 233.98 385.52 240 420C248.98 471.43 211.96 501.26 170 560C161.96 571.26 155 560 140 560C70 560 67.02 562.98 0 560C-2.98 559.87 -1.84 556.26 0 553.78C50.06 486.26 49.3 484.45 103.79 420' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M901.76 420C901.76 404.87 939.81 391.4 980 391.4C1048.93 391.4 1120 404.78 1120 420C1120 435.3 1048.66 452.44 980 452.44C939.54 452.44 901.76 435.39 901.76 420' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1389.23 420C1389.23 415.95 1394.38 410.97 1400 410.97C1406.43 410.97 1413.33 416.02 1413.33 420C1413.33 423.64 1406.53 426.22 1400 426.22C1394.48 426.22 1389.23 423.58 1389.23 420' stroke='rgba(238%2c 238%2c 238%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}

li.booking {
  margin: 10px 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.page-row {
  width: 100%;
  height: auto;
  margin: 20px 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 900px;
}

.discount {
  width: 400px;
  margin: 10px 0;
}

.total {
  margin: 10px;
  margin-left: 100px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid lightgrey;
  padding: 10px 20px;
}

.page-row.actions {
  justify-content: flex-end;
  margin-bottom: 70px;
}

.action {
  margin: 0 10px;
  margin-left: 20px;
}

@media only screen and (max-width: 770px) {
  .total-row {
    justify-content: center;
  }

  .total-row .total {
    margin-left: 10px;
  }

  .page-row.actions {
    justify-content: center;
  }

  .action {
    margin: 10px;
  }
}

@media only screen and (max-width: 400px) {
  ul.bookings {
    background: transparent;
    background-image: none;
    max-height: min(90vh, 500px);
  }
}
</style>

<style>
@media only screen and (max-width: 450px) {
  .discount .ant-btn {
    font-size: 14px;
  }
}
</style>
