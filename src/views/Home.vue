<template>
  <div class="flex-box footer clear" id="footers">
    <div class="footer-left flex-box">
      <ul>
        <li>{{ $t(`index.products`) }}</li>
        <li v-for="(item,index) in product" :key="index"><a :href="item.href" target="_blank">{{ item.name }}</a></li>
      </ul>
      <ul>
        <li>{{ $t('index.contractSeries') }}</li>
        <li v-for="(item,index) in contractSeries" :key="index"><a :href="item.href" target="_blank">{{ item.name }}</a></li>
      </ul>
      <ul>
        <li>{{ $t(`index.about_us`) }}</li>
        <li><a href="https://58coin-support.zendesk.com/hc/zh-cn/articles/360000620514-%E5%85%AC%E5%8F%B8%E4%BB%8B%E7%BB%8D" target="_blank">{{ $t(`index.about_us_1`) }}</a></li>
        <li><a href="https://58coin-support.zendesk.com/hc/zh-cn/articles/360000645174-%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">{{ $t(`index.about_us_3`) }}</a></li>
        <li><a href="https://58coin-support.zendesk.com/hc/zh-cn/categories/360000038673-%E5%AE%98%E6%96%B9%E5%85%AC%E5%91%8A" target="_blank">{{ $t(`index.about_us_4`) }}</a></li>
      </ul>
      <ul>
        <li>{{ $t(`index.service_support`) }}</li>
        <li><a href="https://github.com/58COIN/58coin-api" target="_blank">{{ $t(`index.service_support_1`) }}</a></li>
        <li><a href="https://58coin-support.zendesk.com/hc/zh-cn/categories/360000082253-%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%BF%83" target="_blank">{{ $t(`index.service_support_2`) }}</a></li>
        <li><a href="https://58coin-support.zendesk.com/hc/zh-cn/sections/360000123013-%E6%95%B0%E5%AD%97%E8%B5%84%E4%BA%A7%E4%BB%8B%E7%BB%8D" target="_blank">{{ $t(`index.service_support_3`) }}</a></li>
        <li><a href="https://58coin-support.zendesk.com/hc/zh-cn/articles/360000836973-%E4%B8%8A%E5%B8%81%E7%94%B3%E8%AF%B7%E8%AF%B4%E6%98%8E" target="_blank">{{ $t(`index.service_support_4`) }}</a></li>
      </ul>
      <ul>
        <li>{{ $t(`index.official_community`) }}</li>
        <li style="position: relative">
          <a @mouseenter="showErcode('wechat')" @mouseleave="hideErcode('wechat')">{{ $t(`index.official_community_4`) }}</a>
          <div v-if="erCode.wechat">
            <em></em>
            <img src="../assets/img/newIndex/wechat_ercode.png" alt="" />
            <span style="white-space: normal;">{{ $t(`index.weChat`) }}</span>
          </div>
        </li>
        <li><a href="https://58coin-support.zendesk.com/hc/zh-cn/articles/360000812354-%E5%A6%82%E4%BD%95%E5%8A%A0%E5%85%A558COIN%E5%AE%98%E6%96%B9Telegram%E7%BE%A4" target="_blank">{{ $t(`index.official_community_1`) }}</a></li>
        <li style="position: relative">
          <a @mouseenter="showErcode('api')" @mouseleave="hideErcode('api')">{{ $t(`index.official_community_5`) }}</a>
          <div v-if="erCode.api">
            <em></em>
            <img src="../assets/img/newIndex/API.png" alt="" />
            <span style="white-space: normal;">{{ $t(`index.api`) }}</span>
          </div>
        </li>
      </ul>
      <ul>
        <li>{{ $t(`index.downLoad`) }}</li>
        <li style="position: relative">
          <a @mouseenter="showErcode('AndroidDown')" @mouseleave="hideErcode('AndroidDown')">Android App</a>
          <div v-if="erCode.AndroidDown" style="left: 84px">
            <em></em>
            <img :src="downlondAppSrc" alt="" />
            <span style="white-space: normal;">Android App</span>
          </div>
        </li>
        <li style="position: relative">
          <a @mouseenter="showErcode('IOSDown')" @mouseleave="hideErcode('IOSDown')">IOS App</a>
          <div v-if="erCode.IOSDown" style="left: 84px">
            <em></em>
            <img :src="downlondAppSrc" alt="" />
            <span style="white-space: normal;">IOS App</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer-right">
      <ul>
        <li>{{ $t(`index.follow`) }}</li>
        <li>58COIN GLOBAL</li>
        <li>
          <a href="https://www.facebook.com/coin.wuba.7" target="_blank"></a>
          <a href="https://twitter.com/58_coin" target="_blank"></a>
          <a href="https://weibo.com/6357500607/profile?topnav=1&wvr=6" target="_blank"></a>
        </li>
        <li>Copyright © 2018 58COIN. All rights reserved.</li>
      </ul>
    </div>
  </div>
</template>
<script>
import ApiConfig from '../../myConfig/api.config.js'
import cn from '../assets/img/newIndex/iosAndAndroid_cn.png'
import en from '../assets/img/newIndex/iosAndAndroid_en.png'
import ja from '../assets/img/newIndex/iosAndAndroid_ja.png'
import ko from '../assets/img/newIndex/iosAndAndroid_ko.png'
import ru from '../assets/img/newIndex/iosAndAndroid_ru.png'
export default {
  data() {
    return {
      erCode: {
        wechat: false,
        api: false,
        ios: false,
        android: false,
        AndroidDown: false,
        IOSDown: false
      },
      product: [],
      contractSeries: [],
      postMessageAddress: '',
      downlondAppSrc: cn,
      cn: cn,
      en: en,
      ja: ja,
      ko: ko,
      ru: ru
    }
  },
  created () {
    this.contractSeries = [
      {
        name: this.$t('product.trade'),
        href: ApiConfig.swapsDomain
      },
      {
        name: this.$t('product.usdtTrade'),
        href: ApiConfig.usdtDomain
      }
    ]
    this.product = [
      {
        name: this.$t('product.otc'),
        href: ApiConfig.otcDomain
      },
      {
        name: this.$t('product.spot'),
        href: ApiConfig.spotDomain
      },
      // {
      //   name: this.$t('product.trade'),
      //   href: ApiConfig.swapsDomain
      // },
      // {
      //   name: this.$t('product.usdtTrade'),
      //   href: ApiConfig.usdtDomain
      // },
      {
        name: this.$t('product.labs'),
        href: ApiConfig.labsDomain
      },
      {
        name: this.$t('product.loan'),
        href: ApiConfig.loanDomain
      },
      {
        name: '58B',
        href: ApiConfig.mainDomain + '58BTopics'
      },
      {
        name: this.$t('product.agent'),
        href: ApiConfig.mainDomain + 'agent/index'
      }
    ]
  },
  watch: {
    "$i18n.locale" () {
      this.contractSeries = [
        {
          name: this.$t('product.trade'),
          href: ApiConfig.swapsDomain
        },
        {
          name: this.$t('product.usdtTrade'),
          href: ApiConfig.usdtDomain
        }
      ]
      this.product = [
        {
          name: this.$t('product.otc'),
          href: ApiConfig.otcDomain
        },
        {
          name: this.$t('product.spot'),
          href: ApiConfig.spotDomain
        },
        // {
        //   name: this.$t('product.trade'),
        //   href: ApiConfig.swapsDomain
        // },
        // {
        //   name: this.$t('product.usdtTrade'),
        //   href: ApiConfig.usdtDomain
        // },
        {
          name: this.$t('product.labs'),
          href: ApiConfig.labsDomain
        },
        {
          name: this.$t('product.loan'),
          href: ApiConfig.loanDomain
        },
        {
          name: '58B',
          href: ApiConfig.mainDomain + '58BTopics'
        },
        {
          name: this.$t('product.agent'),
          href: ApiConfig.mainDomain + 'agent/index'
        }
      ]
    }
  },
  methods: {
    showErcode(name) {
      this.erCode[name] = true
    },
    hideErcode(name) {
      this.erCode[name] = false
    },
    postParent () {
      let autoMessage = {"height":document.getElementById('footers').offsetHeight}
      window.parent.postMessage(autoMessage,this.postMessageAddress)
      window.onresize = () => {
        let autoMessage = {"height":document.getElementById('footers').offsetHeight}
        window.parent.postMessage(autoMessage,this.postMessageAddress)
      }
    }
  },
  mounted() {
    window.addEventListener('message',(e) => {
      if (e.data && e.data.language && e.data.href && e.data.color) {
        this.$i18n.locale = e.data.language
        this.postMessageAddress = e.data.href
        if (e.data.language === 'cn') {
          this.downlondAppSrc = this.cn
        }
        if (e.data.language === 'en') {
          this.downlondAppSrc = this.en
        }
        if (e.data.language === 'ja') {
          this.downlondAppSrc = this.ja
        }
        if (e.data.language === 'ko') {
          this.downlondAppSrc = this.ko
        }
        if (e.data.language === 'ru') {
          this.downlondAppSrc = this.ru
        }
        this.postParent()
        setTimeout(() => {
          document.getElementById('footers').style.backgroundColor = e.data.color
        }, 1)
      } else {
        this.downlondAppSrc = this.cn
      }
    }, false)
  }
}

</script>
<style lang="less" scoped>
* {
  line-height: 1;
}
.flex-box{
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
  -webkit-justify-content: space-between;
}
 /*footer*/
.footer {  
  padding: 37px 10% 10px 10%;
  width: 100%;
  // height: 266px;
  background: #121723;
}
.footer-left {
  width: 90%;
  div {
    position: absolute;
    top: -14px;
    left: 74px;
    z-index: 1;
    border: 12px solid #26294D;
    border-bottom: none;
    border-radius: 3px;
    img {
      width: 114px;
      height: 114px;
    }
    em {
      position: absolute;
      top: 12px;
      left: -24px;
      border-top: 10px solid transparent;
      border-right: 16px solid #26294D;
      border-bottom: 10px solid transparent;
    }
    span {
      padding: 10px 0;
      display: inline-block;
      width: 100%;
      font-size: 12px;
      color: #CBD7F0;
      text-align: center;
      background: #26294D;
    }
  }
}
.footer-left, .footer-right {
  ul {
    li {
      text-align: left;
      list-style:none;
      font-size: 12px;
      color: #7183A9;
      white-space: nowrap;
      padding-right: 10px;
      a {
        display: inline-block;
        margin-top: 14px;
        color: #9DA5C8;
        &:hover {
          color: #CBD7F0;
        }
      }
    }
  }
}
.footer-right {
  float: right;
  margin-left: 12%;
  width: 280px;
  position: relative;
  ul {
    height: 100%;
    width: 280px;
    li {
      &:nth-child(2) {
        margin-top: 14px;
      }
      &:nth-child(3) {
        margin-top: 21px;
        a {
          margin-right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 100%;
          background: #7183A9;
          background-repeat: no-repeat;
          background-position: 50%;
          background-image: url('../assets/img/newIndex/facebook.png');
          background-size: 20px 20px;
          &:nth-child(2) {
            background-image: url('../assets/img/newIndex/twitter.png');
          }
          &:last-child {
            margin-right: 0;
            background-image: url('../assets/img/newIndex/sina.png');
          }
          &:hover {
            background-color: #CBD7F0;
            background-repeat: no-repeat;
            background-position: 50%;
          }
        }
      }
      &:last-child {
       position: absolute;
       bottom: 10px;
       left: 0;
      }
    }
  }
}

@media screen and (max-width:1366px) {
  .flex-box{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
  .footer {
    padding: 24px 8% 10px 8%;
    width: 100%;
    background: #121723;
  }
  .footer-left {
    width: 90%;
    div {
      position: absolute;
      top: -40px;
      left: 76px;
      border: 12px solid #26294D;
      border-bottom: none;
      border-radius: 3px;
      img {
        width: 114px;
        height: 114px;
      }
      em {
        position: absolute;
        left: -24px;
        top: 34px;
        border-top: 10px solid transparent;
        border-right: 16px solid #26294D;
        border-bottom: 10px solid transparent;
      }
      span {
        padding: 10px 0;
        display: inline-block;
        width: 100%;
        font-size: 12px;
        color: #CBD7F0;
        text-align: center;
        background: #26294D;
      }
    }
  }
  .footer-left, .footer-right {
    ul {
      li {
        list-style:none;
        font-size: 12px;
        color: #7183A9;
        white-space: nowrap;
        padding-right: 10px;
        a {
          display: inline-block;
          margin-top: 10px;
          color: #9DA5C8;
        }
      }
    }
  }
  .footer-right {
    float: right;
    margin-left: 10%;
    width: 280px;
    position: relative;
    ul {
      height: 100%;
      width: 280px;
      li {
        &:nth-child(2) {
          margin-top: 10px;
        }
        &:nth-child(3) {
          margin-top: 12px;
          a {
            margin-right: 14px;
            width: 28px;
            height: 28px;
            border-radius: 100%;
            background: #7183A9;
            background-repeat: no-repeat;
            background-position: 50%;
            background-image: url('../assets/img/newIndex/facebook.png');
            background-size: 20px 20px;
            &:nth-child(2) {
              background-image: url('../assets/img/newIndex/twitter.png');
            }
            &:last-child {
              margin-right: 0;
              background-image: url('../assets/img/newIndex/sina.png');
            }
            &:hover {
              background-color: #CBD7F0;
              background-repeat: no-repeat;
              background-position: 50%;
            }
          }
        }
        &:last-child {
          position: absolute;
          bottom: 10px;
          left: 0;
        }
      }
    }
  }
}

</style>
