webpackJsonp([6],{"3ZDv":function(e,t){},"8GHt":function(e,t){},NL5j:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add"},[a("span",{staticClass:"el-icon-back back",on:{click:function(t){return e.back()}}},[e._v(" 返回")]),e._v(" "),a("h3",[e._v("   添加记录")]),e._v(" "),a("el-form",{ref:"addFormRef",staticClass:"demo-ruleForm",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"94px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"ID",prop:"id"}},[a("el-input",{attrs:{placeholder:"请输入ID"},model:{value:e.addForm.id,callback:function(t){e.$set(e.addForm,"id",t)},expression:"addForm.id"}},[e._v("ID")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"访问IP",prop:"accip"}},[a("el-input",{attrs:{placeholder:"请输入访问IP"},model:{value:e.addForm.accip,callback:function(t){e.$set(e.addForm,"accip",t)},expression:"addForm.accip"}},[e._v("访问IP")])],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"页面代码",prop:"type"}},[a("el-input",{attrs:{placeholder:"页面代码"},model:{value:e.addForm.type,callback:function(t){e.$set(e.addForm,"type",t)},expression:"addForm.type"}},[e._v("页面代码")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"访问类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择访问类型"},model:{value:e.addForm.type,callback:function(t){e.$set(e.addForm,"type",t)},expression:"addForm.type"}},[a("el-option",{attrs:{label:"浏览",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"点击",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"停留",value:"3"}})],1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"动作描述",prop:"action"}},[a("el-input",{attrs:{placeholder:"请输入动作描述"},model:{value:e.addForm.action,callback:function(t){e.$set(e.addForm,"action",t)},expression:"addForm.action"}},[e._v("动作描述")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"终端类型",prop:"useragent"}},[a("el-input",{attrs:{placeholder:"请输入终端类型"},model:{value:e.addForm.useragent,callback:function(t){e.$set(e.addForm,"useragent",t)},expression:"addForm.useragent"}},[e._v("终端类型")])],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"上报时间",prop:"create_time"}},[a("el-input",{attrs:{placeholder:"请输入上报时间"},model:{value:e.addForm.create_time,callback:function(t){e.$set(e.addForm,"create_time",t)},expression:"addForm.create_time"}},[e._v("上报时间")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}})],1)],1),e._v(" "),a("div",{staticClass:"btn"},[a("el-button",{staticClass:"btn-opera",attrs:{type:"primary"}},[e._v("确定")]),e._v(" "),a("el-button",{staticClass:"btn-opera",attrs:{type:"primary",plain:""},on:{click:function(t){return e.back()}}},[e._v("取消")])],1)],1)},staticRenderFns:[]};var r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"update"},[a("span",{staticClass:"el-icon-back back",on:{click:function(t){return e.back()}}},[e._v(" 返回")]),e._v(" "),a("h3",[e._v("   修改模型")]),e._v(" "),a("el-form",{ref:"updateFormRef",staticClass:"demo-ruleForm",attrs:{model:e.updateForm,rules:e.updateFormRules,"label-width":"94px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"ID",prop:"id"}},[a("el-input",{attrs:{placeholder:"请输入ID"},model:{value:e.updateForm.id,callback:function(t){e.$set(e.updateForm,"id",t)},expression:"updateForm.id"}},[e._v("ID")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"访问IP",prop:"accip"}},[a("el-input",{attrs:{placeholder:"请输入访问IP"},model:{value:e.updateForm.accip,callback:function(t){e.$set(e.updateForm,"accip",t)},expression:"updateForm.accip"}},[e._v("访问IP")])],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"页面代码",prop:"type"}},[a("el-input",{attrs:{placeholder:"页面代码"},model:{value:e.updateForm.type,callback:function(t){e.$set(e.updateForm,"type",t)},expression:"updateForm.type"}},[e._v("页面代码")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"访问类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择访问类型"},model:{value:e.updateForm.type,callback:function(t){e.$set(e.updateForm,"type",t)},expression:"updateForm.type"}},[a("el-option",{attrs:{label:"浏览",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"点击",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"停留",value:"3"}})],1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"动作描述",prop:"action"}},[a("el-input",{attrs:{placeholder:"请输入动作描述"},model:{value:e.updateForm.action,callback:function(t){e.$set(e.updateForm,"action",t)},expression:"updateForm.action"}},[e._v("动作描述")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"终端类型",prop:"useragent"}},[a("el-input",{attrs:{placeholder:"请输入终端类型"},model:{value:e.updateForm.useragent,callback:function(t){e.$set(e.updateForm,"useragent",t)},expression:"updateForm.useragent"}},[e._v("终端类型")])],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"上报时间",prop:"create_time"}},[a("el-input",{attrs:{placeholder:"请输入上报时间"},model:{value:e.updateForm.create_time,callback:function(t){e.$set(e.updateForm,"create_time",t)},expression:"updateForm.create_time"}},[e._v("上报时间")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}})],1)],1),e._v(" "),a("div",{staticClass:"btn"},[a("el-button",{staticClass:"btn-opera",attrs:{type:"primary"}},[e._v("确定")]),e._v(" "),a("el-button",{staticClass:"btn-opera",attrs:{type:"primary",plain:""},on:{click:function(t){return e.back()}}},[e._v("取消")])],1)],1)},staticRenderFns:[]};var o={data:function(){return{show:"1",ruleForm:{code:"",res_time:"",journal_type:[],date:[]},rules:{},tableData:[{id:"52",accip:"52",ucode:"52",cid:"52",cname:"52",type:"1",action:"52",remain:"52",useragent:"52",create_time:"52"}],tableList:[{label:"id",value:"ID",checked:!1},{label:"accip",value:"访问IP",checked:!0},{label:"ucode",value:"页面代码",checked:!0},{label:"cid",value:"城市编号",checked:!1},{label:"cname",value:"地区名称",checked:!0},{label:"type",value:"访问类型",checked:!0},{label:"action",value:"动作描述",checked:!0},{label:"remain",value:"停留时间",checked:!0},{label:"useragent",value:"终端类型",checked:!0},{label:"create_time",value:"上报时间",checked:!0}],checkList:[],uncheckList:{},currentPage:1,pagesize:10,total:1}},components:{msAdd:a("VU/8")({data:function(){return{show:"1",addForm:{},addFormRules:{}}},methods:{back:function(){this.$emit("child",this.show)}}},l,!1,function(e){a("T+NE")},"data-v-2e7bcd90",null).exports,msUpdate:a("VU/8")({data:function(){return{show:"1",updateForm:{},updateFormRules:{}}},methods:{back:function(){this.$emit("child",this.show)}}},r,!1,function(e){a("3ZDv")},"data-v-896046f2",null).exports},mounted:function(){this.filter()},methods:{submitForm:function(e){var t,a,l=this;this.$refs[e].validate((t=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,l)}),a=function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function l(r,o){try{var n=e[r](o),c=n.value}catch(e){return void a(e)}if(!n.done)return Promise.resolve(c).then(function(e){l("next",e)},function(e){l("throw",e)});t(c)}("next")})},function(e){return a.apply(this,arguments)}))},addModel:function(){this.show="2"},showTable:function(e){this.show=e},updateModel:function(){this.show="3"},deleteModel:function(){},handleSizeChange:function(e){this.pagesize=e},handleCurrentChange:function(e){this.currentPage=e},filter:function(e){if(void 0===e)for(var t in this.tableList){var a=this.tableList[t];!0===this.tableList[t].checked&&this.checkList.push(a.label),this.uncheckList[a.label]=!0}for(var l in this.uncheckList)this.uncheckList[l]=!1;for(var r in this.checkList){var o=this.checkList[r];o in this.uncheckList&&(this.uncheckList[o]=!0)}this.$forceUpdate()}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vHistory"},["1"==e.show?a("div",{staticClass:"i_cont"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"80px","label-position":"left"}},[a("el-form-item",{attrs:{label:"页面代码",prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入页面代码"},model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",t)},expression:"ruleForm.code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"停留时间",prop:"res_time"}},[a("el-input",{attrs:{placeholder:"请输入停留时间"},model:{value:e.ruleForm.res_time,callback:function(t){e.$set(e.ruleForm,"res_time",t)},expression:"ruleForm.res_time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"日志类型",prop:"journal_type"}},[a("el-select",{attrs:{placeholder:"请选择日志类型"},model:{value:e.ruleForm.journal_type,callback:function(t){e.$set(e.ruleForm,"journal_type",t)},expression:"ruleForm.journal_type"}},[a("el-option",{attrs:{label:"全部类型",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"访问记录",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"点击记录",value:"3"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"时间范围",prop:"date"}},[a("el-date-picker",{attrs:{type:"datetimerange",format:"yyyy-MM-dd hh:mm:ss","value-format":"yyyy-MM-dd hh:mm:ss","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.ruleForm.date,callback:function(t){e.$set(e.ruleForm,"date",t)},expression:"ruleForm.date"}})],1),e._v(" "),a("el-button",{staticClass:"btn-color",attrs:{icon:"el-icon-search"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("搜索")])],1),e._v(" "),a("div",{staticClass:"btn"},[a("div",{staticClass:"fl clearfix"},[a("el-button",{staticClass:"btn-opera",attrs:{icon:"el-icon-plus"},on:{click:function(t){return e.addModel()}}},[e._v("添加")])],1),e._v(" "),a("div",{staticClass:"fr clearfix"},[a("el-button-group",[a("el-button",{attrs:{plain:"",icon:"el-icon-refresh-right"}}),e._v(" "),a("el-popover",{attrs:{placement:"bottom",title:"列筛选",width:"160",trigger:"click"}},[a("el-checkbox-group",{on:{change:e.filter},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},e._l(e.tableList,function(t,l){return a("el-checkbox",{key:l,attrs:{label:t.label}},[e._v(e._s(t.value))])}),1),e._v(" "),a("el-button",{attrs:{slot:"reference",size:"small",plain:"",icon:"el-icon-s-operation"},slot:"reference"},[a("i",{staticClass:"el-icon-caret-bottom"})])],1)],1)],1)]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),"current-page":e.currentPage,height:"550",border:""},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}},[a("el-table-column",{attrs:{type:"index",width:"60",label:"序号"}}),e._v(" "),e.uncheckList.id?a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"id",label:"ID",align:"center"}}):e._e(),e._v(" "),e.uncheckList.accip?a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"accip",label:"访问IP",align:"center"}}):e._e(),e._v(" "),e.uncheckList.ucode?a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"ucode",label:"页面代码",align:"center"}}):e._e(),e._v(" "),e.uncheckList.cid?a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"cid",label:"城市编号",align:"center"}}):e._e(),e._v(" "),e.uncheckList.cname?a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"cname",label:"地区名称",align:"center"}}):e._e(),e._v(" "),e.uncheckList.type?a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"type",label:"访问类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.type?a("span",{staticClass:"ta_btn",staticStyle:{"background-color":"#bdb7ff"}},[e._v("访问")]):a("span",{staticClass:"ta_btn",staticStyle:{"background-color":"#ffc107"}},[e._v("点击")])]}}],null,!1,1415826240)}):e._e(),e._v(" "),e.uncheckList.action?a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"action",label:"动作描述",align:"center"}}):e._e(),e._v(" "),e.uncheckList.remain?a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"remain",label:"停留(秒)",align:"center"}}):e._e(),e._v(" "),e.uncheckList.useragent?a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"useragent",label:"终端类型",align:"center"}}):e._e(),e._v(" "),e.uncheckList.create_time?a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"create_time",label:"上报时间",align:"center"}}):e._e(),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",round:"",size:"small",title:"修改",icon:"el-icon-edit"},on:{click:function(t){return e.updateModel()}}}),e._v(" "),a("el-button",{attrs:{type:"danger",round:"",size:"small",title:"删除",icon:"el-icon-delete"},on:{click:function(t){return e.deleteModel()}}})]}}],null,!1,3093496569)})],1),e._v(" "),a("el-pagination",{attrs:{"page-sizes":[10,50,100],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1):e._e(),e._v(" "),"2"==e.show?a("ms-add",{on:{child:e.showTable}}):e._e(),e._v(" "),"3"==e.show?a("ms-update",{on:{child:e.showTable}}):e._e()],1)},staticRenderFns:[]};var c=a("VU/8")(o,n,!1,function(e){a("8GHt")},"data-v-fce578a2",null);t.default=c.exports},"T+NE":function(e,t){}});
//# sourceMappingURL=6.9400f465741871913ebc.js.map