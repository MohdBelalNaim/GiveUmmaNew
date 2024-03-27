import React from 'react'

const Withdrawls = () => {
  const data=[
    {
      amount:12000,
      date:"12-11-2022",
      status:"Rejected"
    },
    {
      amount:1375,
      date:"1-09-2022",
      status:"Success"
    },
    {
      amount:1000,
      date:"12-11-2022",
      status:"Pending"
    },
    {
      amount:12000,
      date:"12-11-2022",
      status:"Rejected"
    },
    {
      amount:1375,
      date:"1-09-2022",
      status:"Success"
    },
    {
      amount:1000,
      date:"12-11-2022",
      status:"Pending"
    },
  ]
  return (
    <div className="">
      <div className='text-xl py-4 font-bold'>Withdrawls</div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>S.no</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,index)=>{
                return (
                  <tr>
                    <th>{index+1}</th>
                    <td>{item.amount}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                  </tr>
                );
              })
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Withdrawls