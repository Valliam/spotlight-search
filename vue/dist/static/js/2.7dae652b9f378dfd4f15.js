webpackJsonp([2],{"7TQp":function(e,t,i){var s=i("iWlQ");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i("rjj0")("0e086aa5",s,!0)},YFfu:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-form",[i("el-form-item",[e.hasPerm("user:add")?i("el-button",{attrs:{type:"success",icon:"plus"},on:{click:e.showCreate}},[e._v("添加角色\n        ")]):e._e()],1)],1)],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"序号",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{domProps:{textContent:e._s(e.getIndex(t.$index))}})]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"角色",prop:"roleName",width:"150"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"用户"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.users,function(t){return i("div",[i("div",{staticStyle:{display:"inline-block","vertical-align":"middle"},domProps:{textContent:e._s(t.nickname)}})])})}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"菜单&权限",width:"420"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.roleName==e.adminName?i("el-tag",{attrs:{type:"success"}},[e._v("全部")]):i("div",e._l(t.row.menus,function(t){return i("div",{staticStyle:{"text-align":"left"}},[i("span",{staticStyle:{width:"100px",display:"inline-block","text-align":"right"}},[e._v(e._s(t.menuName))]),e._v(" "),e._l(t.permissions,function(t){return i("el-tag",{key:t.permissionName,staticStyle:{"margin-right":"3px"},attrs:{type:"primary"},domProps:{textContent:e._s(t.permissionName)}})})],2)}))]}}])}),e._v(" "),e.hasPerm("role:update")||e.hasPerm("role:delete")?i("el-table-column",{attrs:{align:"center",label:"管理",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return["管理员"!=t.row.roleName?i("div",[e.hasPerm("role:update")?i("el-button",{attrs:{type:"primary",icon:"edit"},on:{click:function(i){e.showUpdate(t.$index)}}},[e._v("修改\n          ")]):e._e(),e._v(" "),t.row.users&&0===t.row.users.length&&e.hasPerm("role:delete")?i("el-button",{attrs:{type:"danger",icon:"delete"},on:{click:function(i){e.removeRole(t.$index)}}},[e._v("\n            删除\n          ")]):e._e()],1):e._e()]}}])}):e._e()],1),e._v(" "),i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{staticClass:"small-space",staticStyle:{width:"600px","margin-left":"50px"},attrs:{model:e.tempRole,"label-position":"left","label-width":"100px"}},[i("el-form-item",{attrs:{label:"角色名称",required:""}},[i("el-input",{staticStyle:{width:"250px"},attrs:{type:"text"},model:{value:e.tempRole.roleName,callback:function(t){e.$set(e.tempRole,"roleName",t)},expression:"tempRole.roleName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"菜单&权限",required:""}},[e._l(e.allPermission,function(t,s){return i("div",{key:t.menuName},[i("span",{staticStyle:{width:"100px",display:"inline-block"}},[i("el-button",{staticStyle:{width:"80px"},attrs:{type:e.isMenuNone(s)?"":e.isMenuAll(s)?"success":"primary",size:"mini"},on:{click:function(t){e.checkAll(s)}}},[e._v(e._s(t.menuName))])],1),e._v(" "),i("div",{staticStyle:{display:"inline-block","margin-left":"20px"}},[i("el-checkbox-group",{model:{value:e.tempRole.permissions,callback:function(t){e.$set(e.tempRole,"permissions",t)},expression:"tempRole.permissions"}},e._l(t.permissions,function(t){return i("el-checkbox",{key:t.id,attrs:{label:t.id},on:{change:function(i){e.checkRequired(t,s)}}},[i("span",{class:{requiredPerm:1===t.requiredPerm}},[e._v(e._s(t.permissionName))])])}))],1)])}),e._v(" "),i("p",{staticStyle:{color:"#848484"}},[e._v("说明:红色权限为对应菜单内的必选权限")])],2)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),"create"==e.dialogStatus?i("el-button",{attrs:{type:"success"},on:{click:e.createRole}},[e._v("创 建")]):i("el-button",{attrs:{type:"primary"},on:{click:e.updateRole}},[e._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var o=i("VU/8")({data:function(){return{list:[],allPermission:[],listLoading:!1,dialogStatus:"create",dialogFormVisible:!1,textMap:{update:"编辑",create:"新建角色"},tempRole:{roleName:"",roleId:"",permissions:[]},adminName:"管理员"}},created:function(){this.getList(),this.getAllPermisson()},methods:{getAllPermisson:function(){var e=this;this.api({url:"/user/listAllPermission",method:"get"}).then(function(t){e.allPermission=t.list})},getList:function(){var e=this;this.listLoading=!0,this.api({url:"/user/listRole",method:"get"}).then(function(t){e.listLoading=!1,e.list=t.list})},getIndex:function(e){return e+1},showCreate:function(){this.tempRole.roleName="",this.tempRole.roleId="",this.tempRole.permissions=[],this.dialogStatus="create",this.dialogFormVisible=!0},showUpdate:function(e){var t=this.list[e];this.tempRole.roleName=t.roleName,this.tempRole.roleId=t.roleId,this.tempRole.permissions=[];for(var i=0;i<t.menus.length;i++)for(var s=t.menus[i].permissions,o=0;o<s.length;o++)this.tempRole.permissions.push(s[o].permissionId);this.dialogStatus="update",this.dialogFormVisible=!0},createRole:function(){var e=this;this.checkRoleNameUnique()&&this.checkPermissionNum()&&this.api({url:"/user/addRole",method:"post",data:this.tempRole}).then(function(){e.getList(),e.dialogFormVisible=!1})},updateRole:function(){var e=this;this.checkRoleNameUnique(this.tempRole.roleId)&&this.checkPermissionNum()&&this.api({url:"/user/updateRole",method:"post",data:this.tempRole}).then(function(){e.getList(),e.dialogFormVisible=!1})},checkPermissionNum:function(){return 0!==this.tempRole.permissions.length||(this.$message.error("请至少选择一种权限"),!1)},checkRoleNameUnique:function(e){var t=this.tempRole.roleName;if(!t)return this.$message.error("请填写角色名称"),!1;for(var i=this.list,s=!0,o=0;o<i.length;o++)if(i[o].roleName===t&&(!e||i[o].roleId!==e)){this.$message.error("角色名称已存在"),s=!1;break}return s},removeRole:function(e){var t=this;this.$confirm("确定删除此角色?","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning"}).then(function(){var i=t.list[e];t.api({url:"/user/deleteRole",method:"post",data:{roleId:i.roleId}}).then(function(){t.getList()}).catch(function(e){})})},isMenuNone:function(e){for(var t=this.allPermission[e].permissions,i=!0,s=0;s<t.length;s++)if(this.tempRole.permissions.indexOf(t[s].id)>-1){i=!1;break}return i},isMenuAll:function(e){for(var t=this.allPermission[e].permissions,i=!0,s=0;s<t.length;s++)if(this.tempRole.permissions.indexOf(t[s].id)<0){i=!1;break}return i},checkAll:function(e){var t=this;t.isMenuAll(e)?t.noPerm(e):t.allPerm(e)},allPerm:function(e){for(var t=this.allPermission[e].permissions,i=0;i<t.length;i++)this.addUnique(t[i].id,this.tempRole.permissions)},noPerm:function(e){for(var t=this.allPermission[e].permissions,i=0;i<t.length;i++){var s=this.tempRole.permissions.indexOf(t[i].id);s>-1&&this.tempRole.permissions.splice(s,1)}},addUnique:function(e,t){t.indexOf(e)<0&&t.push(e)},checkRequired:function(e,t){var i=e.id;this.tempRole.permissions.indexOf(i)>-1?this.makeReuqiredPermissionChecked(t):1===e.requiredPerm&&this.noPerm(t)},makeReuqiredPermissionChecked:function(e){for(var t=this.allPermission[e].permissions,i=0;i<t.length;i++){var s=t[i];1===s.requiredPerm&&this.addUnique(s.id,this.tempRole.permissions)}}}},s,!1,function(e){i("7TQp")},"data-v-98ad7ed4",null);t.default=o.exports},iWlQ:function(e,t,i){(e.exports=i("FZ+f")(!0)).push([e.i,"\n.requiredPerm[data-v-98ad7ed4] {\n  color: #ff0e13;\n}\n","",{version:3,sources:["/Users/valliam/Desktop/code/java/spotlight-search/vue/src/views/user/role.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB",file:"role.vue",sourcesContent:["\n.requiredPerm[data-v-98ad7ed4] {\n  color: #ff0e13;\n}\n"],sourceRoot:""}])}});