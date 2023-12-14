import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"
import {getBillList} from '@/store/modules/billStore'


const Layout = () => {
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getBillList())
    },[dispatch])
    return (
        <div>
            <div>this is Layout</div>
            <Outlet />
        </div>
    )
}

export default Layout