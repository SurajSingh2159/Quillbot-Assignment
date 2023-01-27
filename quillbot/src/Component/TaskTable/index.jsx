import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const TaskTable = () => {
  return (
    <div className='conatiner'>
      <div className="row">
            <h2>Experience the full power of Quillbot</h2>
            <div className="col">
      <Card style={{ width: '18rem', margin: '1rem', marginLeft: '5px' }}>
      <Card.Header style={{backgroundColor: ' #90EE90'}}>Free</Card.Header>
      <button className= "rounded-pill" style={{backgroundColor: ' #90EE90', width: '200px',marginLeft:'40px'}}>Sign Up - it's Free</button>
      <ListGroup variant="flush">
        <ListGroup.Item>125 words in the Paraphraser</ListGroup.Item>
        <ListGroup.Item>Standard and fluency mode</ListGroup.Item>
        <ListGroup.Item>3 synonym options</ListGroup.Item>
        <ListGroup.Item>1 Freeze word or Phrase</ListGroup.Item>
        <ListGroup.Item>1200 words in the summarizer</ListGroup.Item>
      </ListGroup>
      <Card.Footer>No Credit Card required</Card.Footer>
    </Card>
    </div>
    <div style={{height: '2rem'}}></div>
    <div className="col">
      <Card style={{ width: '18rem', margin: '1rem', marginLeft: '5px'}}>
      <Card.Header style={{backgroundColor: '#FFD580'}}>
            Premium</Card.Header>
            <button className= "rounded-pill" style={{backgroundColor: '#FFD580',width: '200px',marginLeft:'40px'}}>Upgrade to Premium</button>
            
      <ListGroup variant="flush">
      <ListGroup.Item>Unlimited words in the Paraphraser</ListGroup.Item>
        <ListGroup.Item>Standard,fluency,Expand,Shorten,Formal,Simple and Creative mode</ListGroup.Item>
        <ListGroup.Item>4 synonym options</ListGroup.Item>
        <ListGroup.Item>unlimited Freeze word or Phrase</ListGroup.Item>
        <ListGroup.Item>6000 words in the summarizer</ListGroup.Item>
      </ListGroup>
      <Card.Footer>3-day Money Back Guarantee</Card.Footer>
    </Card>
    </div>
    </div>
    </div>
  )
}

export default TaskTable
