import styles from "../css/store.module.css"
import React, { useEffect, useState } from "react"
import { useParams,Navigate, useSearchParams } from "react-router-dom"
import axios from "axios"
import Product from "../Components/Product"

const GetfilterData=(type="",page=1,cat)=>{
    return axios({
        method:"get",
        url:`https://pacific-plains-94481.herokuapp.com/api/clothing`,
        params:{
            q:type,
            _page:page,
            _limit:20,
            category:cat
        }
    })
}

const GetfilterBrand=(type="JAINISH",page=1,cat)=>{
    return axios({
        method:"get",
        url:`https://pacific-plains-94481.herokuapp.com/api/clothing`,
        params:{
            title:type,
            _page:page,
            _limit:20,
            category:cat
        }
    })
}
const  queryData=(q)=>{
    return axios({
        method:"get",
        url:`https://pacific-plains-94481.herokuapp.com/api/clothing`,
        params:{
          q
        }
    })
}
const getData=(type,page=1)=>{
   return axios({
        method:"get",
        url:`https://pacific-plains-94481.herokuapp.com/api/clothing`,
        params:{
            category:type,
            _page:page,
            _limit:20,
        }
    })
}

export default function Store(){
    const [searchParams,setSearchParams]=useSearchParams()
    const initPage= +searchParams.get("page")||1
    const initQ=searchParams.get("q")||""
    const initType= searchParams.get("type")||""
    const [page,setPage]=React.useState(initPage)
    const [lastPage,setLastPAge]=useState(page)
    const [total,setTotal]=useState("...")
    const [data,setData]=useState([])
    const [type,setType]=useState(initType)
    const [q,setQ]=useState(initQ)
     


useEffect(()=>{
    if(type)   getData(type,page).then((res)=>setData(res.data))
  else  queryData(q).then((res)=>setData(res.data))
},[page,type])


useEffect(()=>{
 
if(type){
    axios({
        method:"get",
        url:`https://pacific-plains-94481.herokuapp.com/api/clothing`,
        params:{
            category:type
        }
    }).then((res)=>{setTotal(res.data.length); let lastPage=Math.ceil(res.data.length/20) ;setLastPAge(lastPage) })
}else{
    axios({
        method:"get",
        url:`https://pacific-plains-94481.herokuapp.com/api/clothing`,
        params:{
            q
        }
    }).then((res)=>{setTotal(res.data.length); let lastPage=Math.ceil(res.data.length/20) ;setLastPAge(lastPage) })
}
},[type,q])

useEffect(()=>{
setSearchParams({
    page,type,q
})
},[page,type,q])

const SearchData=(cat)=>{
    setType(cat)
}


const filterData=(val)=>{
    GetfilterData(val,page,type).then((res)=>{setData(res.data);setTotal(data.length); let lastPage=Math.ceil(res.data.length/20) ;setLastPAge(lastPage) })
   
}

const  getfilterBrand=(title)=>{
    GetfilterBrand(title,page,type).then((res)=>setData((prev)=>res.data))
}


    return <div style={{margin:"0px 20px"}}>
    
    <div  className={styles.firstDiv}>
        <div>
        <span>Home / </span> <p> Myntra Fashion Store</p>
        </div>
        <div>
            <p>Myntra Fashion Store</p> <span>- {total} items</span>
        </div>
    </div>





<div className={styles.StoreMain}>

  <div>
  <p style={{marginLeft:"10px"}}>FILTERS</p>
    <div className={styles.Type}>
      <div>
      <input onClick={(e)=>{SearchData(e.target.value)}}  className={styles.radioPink} type="radio" id="Mens" name="contact" value="Mens" />
      <label>Men</label>

      </div>
      <div>
      <input onClick={(e)=>{SearchData(e.target.value)}}  className={styles.radioPink} type="radio" id="Womens" name="contact" value="Womens" />
      <label>Women</label>
      </div>

    <div>
    <input onClick={(e)=>{SearchData(e.target.value)}}  className={styles.radioPink} type="radio" id="Child" name="contact" value="Child" />
      <label>Child</label>
    </div>

    </div>

    <div className={styles.filterC}>
        <p  style={{marginLeft:"10px"}}>CATEGORIES</p>
      
       <div className={styles.FilterCat}>
       <input type="checkbox" onClick={(e)=>{if(e.target.checked)filterData(e.target.value)}} className={styles.colorCheck} value={"Tshirts"}/>
        <label htmlFor="">Tshirts</label>
       </div>    <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked)filterData(e.target.value)}}  className={styles.colorCheck} value={"Jeans"}/>
        <label htmlFor="">Jeans</label>
       </div>    <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked)filterData(e.target.value)}}   className={styles.colorCheck} value={"Shirts"}/>
        <label htmlFor="">Shirts</label>
       </div>    <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked)filterData(e.target.value)}}  className={styles.colorCheck} value={"Belts"}/>
        <label htmlFor="">Belts</label>
       </div>    <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked)filterData(e.target.value)}}  className={styles.colorCheck} value={"Sweatshirts"}/>
        <label htmlFor="">Sweatshirts</label>
       </div>
       <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked)filterData(e.target.value)}}  className={styles.colorCheck} value={"Flip Flops"}/>
        <label htmlFor="">Flip Flops</label>
       </div>    <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked)filterData(e.target.value)}}  className={styles.colorCheck} value={"Shorts"}/>
        <label htmlFor="">Shorts</label>
       </div>    <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked)filterData(e.target.value)}}  className={styles.colorCheck} value={"Trousers"}/>
        <label htmlFor="">Trousers</label>
       </div>

    </div>


    <div className={styles.filterC}>
        <p  style={{marginLeft:"10px"}}>BRANDS</p>
       <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked) getfilterBrand(e.target.value)}}  className={styles.colorCheck} value={"Roadster"}/>
        <label htmlFor="">Roadster</label>
       </div>
       <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked) getfilterBrand(e.target.value)}}  className={styles.colorCheck} value={"HIGHLANDER"}/>
        <label htmlFor="">HIGHLANDER</label>
       </div>    <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked) getfilterBrand(e.target.value)}}  className={styles.colorCheck} value={"The Indian Garage Co"}/>
        <label htmlFor="">The Indian Garage Co</label>
       </div>    <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked) getfilterBrand(e.target.value)}}  className={styles.colorCheck} value={"JAINISH"}/>
        <label htmlFor="">JAINISH</label>
       </div>    <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked) getfilterBrand(e.target.value)}}  className={styles.colorCheck} value={"Flying Machine"}/>
        <label htmlFor="">Flying Machine</label>
       </div>    <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked) getfilterBrand(e.target.value)}}  className={styles.colorCheck} value={"Mast & HarBour"}/>
        <label htmlFor="">Mast & HarBour</label>
       </div>
       <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked) getfilterBrand(e.target.value)}}  className={styles.colorCheck} value={"SPYKAR"}/>
        <label htmlFor="">SPYKAR</label>
       </div>    <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked) getfilterBrand(e.target.value)}}  className={styles.colorCheck} value={"Indian Terrain"}/>
        <label htmlFor="">Indian Terrain</label>
       </div>    <div className={styles.FilterCat}>
       <input type="checkbox"  onClick={(e)=>{if(e.target.checked) getfilterBrand(e.target.value)}}  className={styles.colorCheck} value={"Trousers"}/>
        <label htmlFor="">Trousers</label>
       </div>

    </div>

  </div>


   <div className={styles.products}>
{

      data.map((item,id)=>{
          return <Product key={item.title+item.subtitle+Math.random(100)} item={item} id={id} />
      })

}


   </div>

</div>
    

<div className={styles.pgn}>
    <button disabled={page==1} onClick={()=>setPage(page-1)} >PREV</button>
    <button>{page}</button>
    <button disabled={page==lastPage} onClick={()=>setPage(page+1)}>NEXT</button>
</div>
    
    </div>

    
}