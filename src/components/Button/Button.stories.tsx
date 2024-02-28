import { Button } from './index'

export default {
    title:'Button',
    component: Button
}

export const primary = ()=> <Button label='Label' onClick={()=>{return;}}/>
export const outlined = ()=> <Button label='Label' variant='outlined' onClick={()=>{return;}}/>