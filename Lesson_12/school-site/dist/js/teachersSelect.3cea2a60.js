"use strict";(self["webpackChunkschool_site"]=self["webpackChunkschool_site"]||[]).push([[302],{8567:function(e,s,t){t.r(s),t.d(s,{default:function(){return I}});var n=t(6768);const l={class:"container"},o=["disabled"];function i(e,s,t,i,c,u){const r=(0,n.g2)("select-filter");return(0,n.uX)(),(0,n.CE)("div",l,[(0,n.Lk)("section",null,[s[1]||(s[1]=(0,n.Lk)("h2",null,"Choose teachers:",-1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(u.lessonsList,(s=>((0,n.uX)(),(0,n.Wv)(r,{key:s.id,lessonInfo:s,"items-list":e.teachers,onSelect:u.onChoose},null,8,["lessonInfo","items-list","onSelect"])))),128)),(0,n.Lk)("button",{class:"red-btn",disabled:!u.isDataValid,onClick:s[0]||(s[0]=(...e)=>u.getSchedule&&u.getSchedule(...e))},"Start studying",8,o)])])}t(4114),t(8111),t(1148);var c=t(4232),u=t(5130);const r=["value"];function d(e,s,t,l,o,i){return(0,n.uX)(),(0,n.CE)("label",null,[(0,n.eW)((0,c.v_)(t.lessonInfo.title)+": ",1),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>o.selectedItem=e),onChange:s[1]||(s[1]=e=>i.onSelect(t.lessonInfo.id,o.selectedItem))},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.itemsList,(e=>((0,n.uX)(),(0,n.CE)("option",{key:e.id,value:e.id},(0,c.v_)(e.name),9,r)))),128))],544),[[u.u1,o.selectedItem]])])}var a={name:"SelectFilter",props:{lessonInfo:{type:Object,required:!0},itemsList:{type:Array,required:!0}},data(){return{selectedItem:null}},methods:{onSelect(e,s){const t={[e]:e+"-"+s};this.$emit("select",t)}}},h=t(1241);const L=(0,h.A)(a,[["render",d]]);var m=L,p=t(782),f={name:"TeachersSelectView",components:{SelectFilter:m},props:{idLessons:{type:Array,required:!0}},data(){return{scheduleList:{}}},computed:{...(0,p.L8)("lessons",["getLessonsById"]),...(0,p.L8)("teachers",["teachers"]),lessonsList(){return this.getLessonsById(this.idLessons)},isDataValid(){return this.idLessons.every((e=>Object.keys(this.scheduleList).includes(e)))}},methods:{onChoose(e){this.scheduleList={...this.scheduleList,...e}},getSchedule(){const e=Object.values(this.scheduleList);this.$router.push({name:"schedule",params:{scheduleData:e}})}}};const v=(0,h.A)(f,[["render",i]]);var I=v}}]);
//# sourceMappingURL=teachersSelect.3cea2a60.js.map