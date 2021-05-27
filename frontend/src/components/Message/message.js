// frontend/src/components/Navigation/ProfileButton.js
import React,{ useState, useEffect} from "react"; //
import { useDispatch, useSelector } from 'react-redux';

import { getmessages,addmessages } from '../../store/message';
import './message.css';

function Messages ({hostId}) { //will probably need to pass id userId,
  const dispatch = useDispatch();
console.log("hostid",hostId)
  const [message, setMessage] = useState(null);
  const updateMessage = (e) => setMessage(e.target.value);
  const {user} = useSelector(state => state.session);
  const MessageState= useSelector(state => state.messages);
  const messages = Object.values(MessageState);
console.log("where",user.id)
    const usermessages= messages.filter((el) => (el.userId === user.id))
    const hostmessages= messages.filter((el) => (el.userId === 2))
    console.log(hostmessages)
useEffect(() => {
    dispatch(getmessages());
    }, [dispatch])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId:user.id,
      hostId:hostId,
      message
    };

    const addedReview = await dispatch(addmessages(payload));
    if (addedReview) {
      setMessage('');

    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();

  };

  return (
    <section >
        <div className="messages">
            <div>
            THIS IS MESSAGES THAT is HALF WORKING
            1--NEED TO MOVE THIS TO USER
            2-- Need to add the host Id to user not the listing's userid/hostId
            </div>
            <div className="UserChat">
                {usermessages?.map((el, i) => <div  id={`message-${i}`} key={i} >user{el.message}</div>)}
            </div>

            <div className="HostChat">
                {hostmessages?.map((el, i) => <div  id={`message-${i}`} key={i} >host{el.message}</div>)}
            </div>

            <form onSubmit={handleSubmit} className="Chat">
            <textarea value={message} placeholder="Please Enter Your Message Here..." onChange={updateMessage}></textarea>
                    <button type="submit">Enter</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    </section>
  );
}

export default Messages;
