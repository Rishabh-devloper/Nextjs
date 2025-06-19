import React from 'react'

const layout = ({lineChart , barChart , tabChart}:{
    lineChart: React.ReactNode ,
    barChart: React.ReactNode ,
    tabChart: React.ReactNode ,
}) => {
  return (
    <>
        <div className="">
            {lineChart}
        </div>
        <div className="">
            {barChart}
        </div>
        <div className="">
            {tabChart}
        </div>
    </>
  )
}

export default layout