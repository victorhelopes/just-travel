import { Select } from './index'

export default {
    title:'Select',
    component: Select
}

export const primary = ()=> <Select options={[1,2,3,4]} selected={1} onChange={()=>{return;}}  />