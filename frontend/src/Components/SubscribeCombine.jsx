import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Customer from '../Pages/Customer'
import Subscription from '../Pages/Subscription'

const SubscribeCombine = () => {
    const [flag, setflag] = useState(true)
    const token=localStorage.getItem("token")

    const Check=()=>{
        axios.get("https://codissstream.herokuapp.com/user/subscribe",{
            headers: {
                Authorization: token,
              },
        }).then((res)=>{
            setflag(res.data)
        }).catch((err)=>{
            console.log("err",err)
        })
    }
    useEffect(() => {
     Check()
    }, [flag])
    
  return (
    <div>
        {flag ? <Subscription/> :<Customer/>}
    </div>
  )
}

export default SubscribeCombine