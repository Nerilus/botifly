import React, { useState } from "react";
import './ChatBox.css'
import SideBar from "../Sidebar/SideBar";




const ChatBox = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        // Handle the Enter key press, for example, sending the input value
        sendInput(inputValue);
        // Clear the input field
        setInputValue('');
      }
    };
  
    const sendInput = (value) => {
      // Here, you can implement your logic to send the input
      // This function will be called when Enter is pressed.
      console.log('Sending input:', value);
    };
    

    return(
        <>
           <div className="ChatBox-container">
          <>
            {/* chat-header */}
            <div className="chat-header">
              <div className="follower">
                <div>
    
                  <div className="name" style={{ fontSize: "1.2rem" }}>
                    <span>
                   Hello welcome to botifly
                    </span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="chat-body" >
    
                <>
                  <div ref={scroll}
                    className=
                        "message own message">
                    
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus voluptatum corporis, veritatis, iste laboriosam expedita perspiciatis sint assumenda provident mollitia quasi laborum quaerat quidem exercitationem voluptatem obcaecati excepturi? Quia.</span>{" "}
                    <span>19h354</span>
                  </div>
                  <img src="" alt="" />
                </>
                <>
                  <div ref={scroll}
                    className=
                        "message own message">
                    
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus voluptatum corporis, veritatis, iste laboriosam expedita perspiciatis sint assumenda provident mollitia quasi laborum quaerat quidem exercitationem voluptatem obcaecati excepturi? Quia.</span>{" "}
                    <span>19h354</span>
                  </div>
                  <img src="" alt="" />
                </>
            </div>
            
            {/* chat-sender */}
            <div className="chat-sender">
              <div>+</div>
              <input type="text"
               value={inputValue}
               onChange={handleInputChange}
               onKeyDown={handleKeyDown} // Use onKeyDown instead of onKeyPress
              placeholder="type '/' for commands"
              />
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
              />
            </div>{" "}
          </>    
      </div>
      </>
    )
}


export default ChatBox;