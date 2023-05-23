import React,{ useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Redux/action";
import styles from './Landing.module.css'


export const Landing = ()=>{
    const item = useSelector ((state)=>state.data);
    const dispatch = useDispatch();
    useEffect(()=>{
dispatch(getData(item));
    },[])

    //console.log(item)
    return(
        <>
        <h1>Search Form</h1>
        <select name="" id="">
            <option value="All">All</option>
            <option value="Status">Status</option>
            <option value="Original Launch">Original Launch</option>
            <option value="Type">Type</option>
        </select>
        <div className={styles.container}>
            {item.map((ele)=>{
                return (
                    <div key={ele.capsule_serial} className={styles.capsule}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Falcon_Heavy_Demo_Mission_%2839337245145%29.jpg/1200px-Falcon_Heavy_Demo_Mission_%2839337245145%29.jpg" alt="" />
                        <p>{ele.status}</p>
                        <p>{ele.original_launch}</p>
                        <p>{ele.type}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}