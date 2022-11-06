import React from 'react'
import Plot from 'react-plotly.js'

export default function Graph({ time, amount, item }) {
  return (
    <Plot
      data={[
        {
          x: [time],
          y: [amount],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'black' },
        },
        { type: 'bar', x: [time], y: [amount] },
      ]}
      layout={{ width: 420, height: 340, title: 'Average spending' }}
    />
  )
}
