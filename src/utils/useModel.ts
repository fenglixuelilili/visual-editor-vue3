import { computed, ref, watch, UnwrapRef } from "vue"
// 泛型T 一般就是props里面的属性
export default function useModel<T>( getter: () => T, emiter: (val: T) => void  ){
  let state = ref<T>(getter())
  watch(getter, (val: any ) => {
    if (val == state.value) { 
      return
    }
    state.value = val 
  })
  return computed({
    get(){
      return state.value
    },
    set(val: any) {
      if (val == state.value) { 
        return
      }
      state.value = val
      emiter(val)
    }
  })
}