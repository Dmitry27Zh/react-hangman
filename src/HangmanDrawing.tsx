const Head = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50px',
        right: '-30px',
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        border: '10px solid black',
      }}
    />
  )
}
const Body = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '120px',
        right: 0,
        width: '10px',
        height: '100px',
        background: 'black',
      }}
    />
  )
}
const RightArm = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '150px',
        right: '-100px',
        width: '100px',
        height: '10px',
        background: 'black',
        rotate: '-30deg',
        transformOrigin: 'left bottom',
      }}
    />
  )
}
const LeftArm = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '150px',
        right: '10px',
        width: '100px',
        height: '10px',
        background: 'black',
        rotate: '30deg',
        transformOrigin: 'right bottom',
      }}
    />
  )
}
const RightLeg = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '210px',
        right: '-90px',
        width: '100px',
        height: '10px',
        background: 'black',
        rotate: '60deg',
        transformOrigin: 'left bottom',
      }}
    />
  )
}
const LeftLeg = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '210px',
        right: 0,
        width: '100px',
        height: '10px',
        background: 'black',
        rotate: '-60deg',
        transformOrigin: 'right bottom',
      }}
    />
  )
}
const BODY_PARTS = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      {BODY_PARTS.slice(0, numberOfGuesses).map((Part) => (
        <Part key={crypto.randomUUID()} />
      ))}
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
