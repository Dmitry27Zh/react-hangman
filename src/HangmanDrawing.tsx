const HangmanDrawing = () => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '50px',
          width: '10px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div
        style={{
          height: '10px',
          width: '200px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div
        style={{
          height: '400px',
          width: '10px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div
        style={{
          height: '10px',
          width: '250px',
          background: 'black',
        }}
      />
    </div>
  )
}

export default HangmanDrawing
