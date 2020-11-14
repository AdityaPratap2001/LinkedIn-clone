import React from 'react';
import { Alert } from 'reactstrap';
import './CustomAlert.css';

const CustomAlert = (props) => {
  // const [visible, setVisible] = useState(true);

  // const onDismiss = () => setVisible(false);
  const onDismiss = () => {
    props.hidePop();
  }

  let styles = null;
  if(props.where === 'createPost'){
    styles = {
      marginLeft : '-16px',
      transform : 'translateY(-60px)'
    }
  }

  return (
    <Alert style={styles} className='customAlert' color={props.color} isOpen={true} toggle={onDismiss}>
      {props.content}
    </Alert>
  );
}

export default CustomAlert;