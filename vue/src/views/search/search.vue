<template>
  <div>
  <!--  <div class="search-box">-->
    <div class="search-box-search" style="position: fixed;top: 2.6%;left: 50%">
      <input class="search-txt-search" type="text" placeholder="Type to search" v-model="wantToSearch" @keydown.enter="searchEnterFun()"/>
      <a class="search-btn-search" @click="toSearch">
        <el-button icon="el-icon-search" circle @click="toSearch"></el-button>
      </a>
    </div>
<!--    一排-->
    <div>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content bg-purple">
<!--          card-->
          <el-card style="width: 27%; position: fixed; float:left; margin: 15px;">
            <div slot="header" class="clearfix">
              <span>期刊名称</span>
            </div>
            <el-collapse v-model="activeNames" @change="handleChange" accordion>
              <el-collapse-item title="内容" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
              <el-collapse-item title="期刊官网" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </el-collapse-item>
              <el-collapse-item title="评价" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
              </el-collapse-item>
              <el-collapse-item title="来源网址" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </div></el-col>

        <el-col :span="8"><div class="grid-content bg-purple">
          <el-card style="width: 27%; position: fixed; float:left; margin: 15px;">
            <div slot="header" class="clearfix">
              <span>期刊名称</span>
            </div>
            <el-collapse v-model="activeNames" @change="handleChange" accordion>
              <el-collapse-item title="内容" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
              <el-collapse-item title="期刊官网" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </el-collapse-item>
              <el-collapse-item title="评价" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
              </el-collapse-item>
              <el-collapse-item title="来源网址" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </div></el-col>

        <el-col :span="8"><div class="grid-content bg-purple">
          <el-card style="width: 27%; position: fixed; float:left; margin: 15px;">
            <div slot="header" class="clearfix">
              <span>期刊名称</span>
            </div>
            <el-collapse v-model="activeNames" @change="handleChange" accordion>
              <el-collapse-item title="内容" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
              <el-collapse-item title="期刊官网" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </el-collapse-item>
              <el-collapse-item title="评价" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
              </el-collapse-item>
              <el-collapse-item title="来源网址" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </div></el-col>

      </el-row>
    </div>

    <div>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content bg-purple">
          <!--          card-->
          <el-card style="width: 27%; position: fixed; float:left; margin: 15px;">
            <div slot="header" class="clearfix">
              <span>期刊名称</span>
            </div>
            <el-collapse v-model="activeNames" @change="handleChange" accordion>
              <el-collapse-item title="内容" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
              <el-collapse-item title="期刊官网" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </el-collapse-item>
              <el-collapse-item title="评价" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
              </el-collapse-item>
              <el-collapse-item title="来源网址" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </div></el-col>

        <el-col :span="8"><div class="grid-content bg-purple">
          <el-card style="width: 27%; position: fixed; float:left; margin: 15px;">
            <div slot="header" class="clearfix">
              <span>期刊名称</span>
            </div>
            <el-collapse v-model="activeNames" @change="handleChange" accordion>
              <el-collapse-item title="内容" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
              <el-collapse-item title="期刊官网" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </el-collapse-item>
              <el-collapse-item title="评价" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
              </el-collapse-item>
              <el-collapse-item title="来源网址" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </div></el-col>

        <el-col :span="8"><div class="grid-content bg-purple">
          <el-card style="width: 27%; position: fixed; float:left; margin: 15px;">
            <div slot="header" class="clearfix">
              <span>期刊名称</span>
            </div>
            <el-collapse v-model="activeNames" @change="handleChange" accordion>
              <el-collapse-item title="内容" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
              <el-collapse-item title="期刊官网" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </el-collapse-item>
              <el-collapse-item title="评价" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
              </el-collapse-item>
              <el-collapse-item title="来源网址" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </div></el-col>

      </el-row>
    </div>


  </div>
</template>
<script>
  import {periodicalList} from "../../api/periodical";

  export default {
        name:"search",
        data() {
            return {
                activeNames: ['1'],
                //和this.$route.query里面的bookName值一样
                wantToSearch: this.$route.query.bookName,
                list: [],
                totalCount: 0,
                listLoading: false,
                listQuery: {
                    pageNum: 1,//页码
                    pageRow: 6,//每页条数
                    name: ''
                }
            };
        },
        created() {
            console.log(this.$route.query.bookName);
            // this.getPeriodicalList();
            this.toSearch()
        },
        methods: {
            toSearch() {
                this.getPeriodicalList();
                // this.$router.push('/SpotLight/search?' + `bookName=${this.wantToSearch}`)
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

            },
            handleChange(val) {
                console.log(val);
            },
            getPeriodicalList() {
                this.listLoading = true;
                periodicalList(this.wantToSearch).then(response => {
                    this.listLoading = false;
                    console.log(response)
                    this.list = response.list;
                    this.total = response.body.total;
                    console.log(this.total)
                    // console.log(this.list)
                }).catch(function (error) {
                    console.log(error)
                })
            },
        }
    }
</script>
<style>
  body {
    margin: 0;
    padding: 0;
    background: #f0f2f5;
  }
  .search-box-search {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f0f2f5;
    height: 40px;
    width:780px;
    border-radius: 40px;
    padding: 0px;
  }
  .search-btn-search {
    color: #e84118;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    text-decoration: none;
  }
  .search-txt-search {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: black;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0;
  }
  .search-box-search:hover > .search-txt-search {
    width: 700px;
    padding: 0 20px;
  }
  .search-box-search:hover > .search-btn-search {
    background: #ff0e13;
  }

  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 300px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
