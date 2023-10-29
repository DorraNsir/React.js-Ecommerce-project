//  import React from 'react'
var departments=[
    { name:"pc",description:"aaaaaaaaaaaaaaaa",img:"images/portfolio/item-2.png"},
    { name:"phone",description:"bhbhbhbhbhbhb",img:"images/portfolio/item-1.png"},
    { name:"smart-watch",description:"bhbhbhbhbhbhb",img:"images/portfolio/item-3.png"},
    { name:"chargeur",description:"bhbhbhbhbhbhb",img:"images/portfolio/item-4.png"},
    { name:"ipad",description:"bhbhbhbhbhbhb",img:"images/portfolio/item-5.png"},
    { name:"mac",description:"bhbhbhbhbhbhb",img:"images/portfolio/item-6.png"},

]
var list=departments.map((item,index)=>(
<div key={index} className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div className="card shadow text-center">
          <div className="position-relative rounded-top progress-wrapper" data-color="#fdb157" style={{height:"254px"}}>
            <img src={item.img} alt="" style={{width:"100%", height:"250px"}}/>
            <div className="wave" data-progress="90%"></div>
          </div>
          <div className="card-footer bg-white">
            <h4 className="card-title" style={{color:"pink"}}>{item.name}</h4>
            <h4 className="card-title">{item.description}</h4>
          </div>
        </div>
      </div>
))
export default function Departments() {
  return (
    <section className="section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-title">Site sections</h2>
      </div>
      {list}
      </div>
  </div>
</section>
  )
}
