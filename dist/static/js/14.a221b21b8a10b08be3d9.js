webpackJsonp([14],{"+L4n":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={data:function(){return{frozen:!1,data:[{id:1,label:"顶级",children:[{id:4,label:"总公司",children:[{id:9,label:"开发部"},{id:10,label:"运营部"}]}]}],defaultProps:{children:"children",label:"label"},ruleForm:{name:"",date:[]},rules:{},tableData:[{account:"1",name:"cg",phone:"cg",createTime:"cg",status:"cg"}],tableList:[{label:"order",value:"账号"},{label:"name",value:"姓名"},{label:"phone",value:"电话"},{label:"createTime",value:"创建时间"},{label:"zhuantai",value:"状态"}],checkList:[],uncheckList:{},currentPage:1,pagesize:10,total:1,addDialogFormVisible:!1,addForm:{account:"",name:"",password:"",salt:"",roleid:"",phone:""},addFormRules:{},updateDialogFormVisible:!1,updateForm:{account:"",name:"",password:"",salt:"",roleid:"",phone:""},updateFormRules:{}}},mounted:function(){this.filter()},methods:{getTableData:function(){var e=this;this.$http.post("/mgr/list",{}).then(function(t){e.tableData=t}).catch(function(e){e&&console.log(e),alert("请求失败")})},handleSizeChange:function(e){this.pagesize=e},handleCurrentChange:function(e){this.currentPage=e},filter:function(e){if(void 0===e)for(var t in this.tableList){var a=this.tableList[t];this.checkList.push(a.label),this.uncheckList[a.label]=!0}for(var l in this.uncheckList)this.uncheckList[l]=!1;for(var o in this.checkList){var r=this.checkList[o];r in this.uncheckList&&(this.uncheckList[r]=!0)}this.$forceUpdate()},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addUser:function(){},updateDialogClosed:function(){this.$refs.updateFormRef.resetFields()},updateUser:function(){},deleteUser:function(){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},resetPass:function(){},roleAssign:function(){},frozenUser:function(){},unfrozenUser:function(){}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("h3",[e._v("用户管理")]),e._v(" "),a("div",{staticClass:"user-cont"},[a("div",{staticClass:"organiza"},[a("h4",[e._v("组织机构")]),e._v(" "),a("el-tree",{attrs:{data:e.data,"node-key":"id","default-expand-all":"",props:e.defaultProps}})],1),e._v(" "),a("div",{staticClass:"data"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"80px","label-position":"left"}},[a("el-form-item",{attrs:{label:"用户名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入用户名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"起止日期",prop:"date",required:""}},[a("el-date-picker",{attrs:{type:"datetimerange",format:"yyyy-MM-dd hh:mm:ss","value-format":"yyyy-MM-dd hh:mm:ss","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.ruleForm.date,callback:function(t){e.$set(e.ruleForm,"date",t)},expression:"ruleForm.date"}})],1),e._v(" "),a("el-button",{staticClass:"btn-color",attrs:{icon:"el-icon-search"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("搜索")]),e._v(" "),a("el-button",{staticClass:"btn-color",attrs:{icon:"el-icon-delete"},on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1),e._v(" "),a("div",{staticClass:"btn"},[a("div",{staticClass:"fl clearfix"},[a("el-button",{staticClass:"btn-opera",attrs:{icon:"el-icon-plus"},on:{click:function(t){e.addDialogFormVisible=!0}}},[e._v("添加")])],1),e._v(" "),a("div",{staticClass:"fr clearfix"},[a("el-button-group",[a("el-button",{attrs:{plain:"",icon:"el-icon-refresh-right"}}),e._v(" "),a("el-popover",{attrs:{placement:"bottom",title:"列筛选",width:"160",trigger:"click"}},[a("el-checkbox-group",{on:{change:e.filter},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},e._l(e.tableList,function(t,l){return a("el-checkbox",{key:l,attrs:{label:t.label}},[e._v(e._s(t.value))])}),1),e._v(" "),a("el-button",{attrs:{slot:"reference",size:"small",plain:"",icon:"el-icon-s-operation"},slot:"reference"},[a("i",{staticClass:"el-icon-caret-bottom"})])],1)],1)],1)]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),"current-page":e.currentPage,height:"550",border:""},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}},[a("el-table-column",{attrs:{type:"index",width:"60"}}),e._v(" "),e.uncheckList.account?a("el-table-column",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{prop:"roleid",label:"roleid","header-align":"center",align:"center",sortable:""}}):e._e(),e._v(" "),e.uncheckList.account?a("el-table-column",{attrs:{prop:"account",label:"账号","header-align":"center",align:"center",sortable:""}}):e._e(),e._v(" "),e.uncheckList.name?a("el-table-column",{attrs:{prop:"name",label:"姓名","header-align":"center",align:"center",sortable:""}}):e._e(),e._v(" "),e.uncheckList.phone?a("el-table-column",{attrs:{prop:"phone",label:"电话","header-align":"center",align:"center",sortable:""}}):e._e(),e._v(" "),e.uncheckList.createTime?a("el-table-column",{attrs:{prop:"createTime",label:"创建时间","header-align":"center",align:"center",sortable:""}}):e._e(),e._v(" "),e.uncheckList.status?a("el-table-column",{attrs:{prop:"status",label:"状态","header-align":"center",align:"center",sortable:""}}):e._e(),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"110px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.frozen?a("el-button",{attrs:{type:"success",size:"small",title:"冻结",icon:"el-icon-circle-check"},on:{click:function(t){return e.frozenUser()}}},[e._v("冻结")]):a("el-button",{attrs:{type:"danger",size:"small",title:"解除冻结",icon:"el-icon-s-custom"},on:{click:function(t){return e.unfrozenUser()}}},[e._v("解除冻结")])]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",round:"",size:"small",title:"修改",icon:"el-icon-edit"},on:{click:function(t){e.updateDialogFormVisible=!0}}}),e._v(" "),a("el-button",{attrs:{type:"danger",round:"",size:"small",title:"删除",icon:"el-icon-delete"},on:{click:function(t){return e.deleteUser()}}}),e._v(" "),a("el-button",{attrs:{type:"info",round:"",size:"small",title:"重置密码",icon:"el-icon-lock"},on:{click:function(t){return e.resetPass()}}}),e._v(" "),a("el-button",{attrs:{type:"warning",round:"",size:"small",title:"角色分配",icon:"el-icon-s-custom"},on:{click:function(t){return e.roleAssign()}}})]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"page-sizes":[10,50,100],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("el-dialog",{staticClass:"modal",attrs:{title:"添加管理员",visible:e.addDialogFormVisible,width:"700px","close-on-click-modal":!1},on:{"update:visible":function(t){e.addDialogFormVisible=t},close:e.addDialogClosed}},[a("el-form",{ref:"addFormRef",staticClass:"demo-ruleForm",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"94px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"账户",prop:"account"}},[a("el-input",{attrs:{placeholder:"请输入账户"},model:{value:e.addForm.account,callback:function(t){e.$set(e.addForm,"account",t)},expression:"addForm.account"}},[e._v("账户")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}},[e._v("姓名")])],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"请输入密码","show-password":""},model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}},[e._v("密码")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"确认密码",prop:"salt"}},[a("el-input",{attrs:{type:"password",placeholder:"请确认密码","show-password":""},model:{value:e.addForm.salt,callback:function(t){e.$set(e.addForm,"salt",t)},expression:"addForm.salt"}},[e._v("确认密码")])],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"角色",prop:"roleid"}},[a("el-input",{attrs:{placeholder:"请输入角色"},model:{value:e.addForm.roleid,callback:function(t){e.$set(e.addForm,"roleid",t)},expression:"addForm.roleid"}},[e._v("角色")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"电话",prop:"phone"}},[a("el-input",{attrs:{placeholder:"请输入电话"},model:{value:e.addForm.phone,callback:function(t){e.$set(e.addForm,"phone",t)},expression:"addForm.phone"}},[e._v("电话")])],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addDialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addUser("addFormRef")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"modal",attrs:{title:"修改",visible:e.updateDialogFormVisible,width:"700px","close-on-click-modal":!1},on:{"update:visible":function(t){e.updateDialogFormVisible=t},close:e.updateDialogClosed}},[a("el-form",{ref:"updateFormRef",staticClass:"demo-ruleForm",attrs:{model:e.updateForm,rules:e.updateFormRules,"label-width":"94px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"账户",prop:"account"}},[a("el-input",{attrs:{placeholder:"请输入账户"},model:{value:e.updateForm.account,callback:function(t){e.$set(e.updateForm,"account",t)},expression:"updateForm.account"}},[e._v("账户")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.updateForm.name,callback:function(t){e.$set(e.updateForm,"name",t)},expression:"updateForm.name"}},[e._v("姓名")])],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"请输入密码","show-password":""},model:{value:e.updateForm.password,callback:function(t){e.$set(e.updateForm,"password",t)},expression:"updateForm.password"}},[e._v("密码")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"确认密码",prop:"salt"}},[a("el-input",{attrs:{type:"password",placeholder:"请确认密码","show-password":""},model:{value:e.updateForm.salt,callback:function(t){e.$set(e.updateForm,"salt",t)},expression:"updateForm.salt"}},[e._v("确认密码")])],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"角色",prop:"roleid"}},[a("el-input",{attrs:{placeholder:"请输入角色"},model:{value:e.updateForm.roleid,callback:function(t){e.$set(e.updateForm,"roleid",t)},expression:"updateForm.roleid"}},[e._v("角色")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"电话",prop:"phone"}},[a("el-input",{attrs:{placeholder:"请输入电话"},model:{value:e.updateForm.phone,callback:function(t){e.$set(e.updateForm,"phone",t)},expression:"updateForm.phone"}},[e._v("电话")])],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.updateDialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.updateUser("updateFormRef")}}},[e._v("确 定")])],1)],1)],1)])])},staticRenderFns:[]};var r=a("VU/8")(l,o,!1,function(e){a("7Uu8")},"data-v-5c2f82be",null);t.default=r.exports},"7Uu8":function(e,t){}});
//# sourceMappingURL=14.a221b21b8a10b08be3d9.js.map