import Vue from 'vue'
import Loading from './loading.vue'
const Mask = Vue.extend(Loading)
const toggleEl = (el,binding)=>{
  if(binding.value){
    el.instance.visible = true
    insertDom(el,el)
  }else{
    el.instance.visible = false
  }
}
const insertDom = (parent,child)=>{
  parent.appendChild(child.mask)
}
export default{
  bind:function(el,binding,Vnode){
    let mask = new Mask({
      el:document.createElement('div'),
      data(){}
    })
    el.instance = mask
    el.mask = mask.$el
    binding.value && toggleEl(el,binding)
  },
  update:function(el,binding){
    console.log(binding.oldValue);
    if(binding.value!==binding.oldValue){
      toggleEl(el,binding)
    }
  },
   //指令与元素解绑时调用
   unbind: function (el, binding) {
    console.log(3333);
    el.instance && el.instance.$destroy()
  }
}