<template>
  <div>
    <div class="dashboard-container" align="center">
      <div style="margin: 100px"></div>
      <a href="https://www.baidu.com" target="_blank">
        <img style="margin: 20px;width:300px" src="chrome-extension://ngiclcoldiplnjcafhjkacjcmdidcmjp/images/Baidu%20Lite6s.png">
      </a>
      <div class="search-box" style="box-shadow: 2px 2px  10px #ced6e0">
        <input class="search-txt" type="text" placeholder="Type to search" v-model="wantToSearch" @keydown.enter="searchEnterFun()" />
        <a class="search-btn" @click="toSearch" style="color: #848484">
          <el-button icon="el-icon-search" circle></el-button>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "index",
        data() {
            return {
                touqisuohao: "/Users/valliam/Desktop/code/java/SpringBoot-Shiro-Vue/vue/src/assets/touqisuohao.png",
                wantToSearch: ''
            }
        },
        methods: {
            toSearch() {
                this.$router.push('/SpotLight/search?' + `bookName=${this.wantToSearch}`)
            },

            searchEnterFun:function(e){
                this.toSearch();
                // console.log("1")
                // var keyCode = window.event? e.keyCode:e.which;
                // console.log(keyCode)
                // //  console.log('回车搜索',keyCode,e);
                // if(keyCode == 13 && this.input){
                //     this.search()
                // }

            }
        }
    }
</script>
<style>
  body {
    margin: 0;
    padding: 0;
    background: #ffffff;
  }
  .search-box {
    position: absolute;
    top: 130%;
    left: 55%;
    transform: translate(-50%, -50%);
    background: #f0f2f5;
    height: 50px;
    width:680px;
    border-radius: 40px;
    padding: 0px;
  }
  .search-btn {
    color: #f0f2f5;
    float: right;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #747d8c;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    text-decoration: none;
  }
  .search-txt {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 5px;
    color: black;
    font-size: 17px;
    transition: 0.6s;
    line-height: 40px;
    width: 0;
  }
  .search-box:hover > .search-txt {
    width: 600px;
    padding: 5px 20px;
  }
  .search-box:hover > .search-btn {
    background: #f1f2f6;
  }
</style>
