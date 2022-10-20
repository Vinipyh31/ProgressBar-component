import React from 'react';
import './App.css';


const Data = [
  { name: 'Sold', color: '#BD1FBE', value: 677 },
  { name: 'Got free', color: '#FC64FF', value: 23 },
  { name: 'Burned', color: 'lime', value: 202 },
  { name: 'Free float', color: 'gray', value: 323 },
  { name: 'Zero', color: 'black', value: 0 },
]


function Bar({ width, height, color }) {
  return (
    <div
      className='bar'
      style={{
        width: width,
        height: height,
        backgroundColor: color,
      }}
    >
    </div>
  )
}

function ProgressBar({ items, width, height }) {

  const filteredItems = items.filter((item) => item.value !== 0);
  const sumOfValues = filteredItems.reduce((prev, obj) => obj.value + prev, 0);
  const heightForRows = height * 0.4;

  const maxBars = Math.floor(width / 10);

  return (
    <div className='progress-bar'
      style={{
        width: width,
        height: height,
      }}>
      <div className='bars'>
        {filteredItems.map((item) => {
          const percent = item.value / (sumOfValues * 0.01)
          let numOfBars = Math.round(maxBars * 0.01 * percent);
          if (!numOfBars) numOfBars = 1;
          return [...Array(numOfBars)].map(() => <Bar height={heightForRows} color={item.color} />)
        })}
      </div>
      <div className='description'>
        {filteredItems.map((item) =>
          <div className='description__item'>
            <div
              className='circle'
              style={{
                width: heightForRows,
                height: heightForRows,
                backgroundColor: item.color
              }}
            ></div> {`${item.name}: ${item.value} (${(item.value / (sumOfValues * 0.01)).toFixed(1)}%)`}
          </div>)}
      </div>
    </div>
  )
}


function App() {

  return (
    <div className="App">
      <ProgressBar items={Data} height={50} width={800} />
    </div>
  );
}

export default App;
