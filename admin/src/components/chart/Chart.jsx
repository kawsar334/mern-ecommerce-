import "./chart.css"
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({title, data,dataKey, grid}) => {


  

  return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>

          <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
              <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                  }}
              >
                  <CartesianGrid strokeDasharray="3 3" stroke="#2005f8" />
                  <XAxis dataKey="name" stroke="#5550bd" />
                  <YAxis />
                  <Tooltip />
                  {/* <Legend /> */}
                 {grid && <Line type="monotone" dataKey={dataKey} stroke=" #f80564 " />}
                

              </LineChart>
          </ResponsiveContainer>

    </div>
  )
}

export default Chart