import React from 'react';
import { Alert } from 'reactstrap';
import './CustomAlert.css';

const CustomAlert = (props) => {
  // const [visible, setVisible] = useState(true);

  // const onDismiss = () => setVisible(false);
  const onDismiss = () => {
    props.hidePop();
  }


  return (
    <Alert className='customAlert' color={props.color} isOpen={true} toggle={onDismiss}>
      {props.content}
    </Alert>
  );
}

export default CustomAlert;