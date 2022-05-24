import React, { useState } from 'react';
import { GovernPageModalContent } from '../../pages/styles/GovernPage.styles';
import { sendContract } from '../../utils/KAS';

const CreatePoll = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const createPollHander = async () => {
    const result = await sendContract({
      contractName: 'Govern',
      contractAddress: '0x27a6bC74934F7f57350eDF7eDacC59C9eE60F134',
      methodName: 'createPoll',
      parameters: [title, content, +day],
    });
    console.log(result);
  };
  return (
    <GovernPageModalContent>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <input id="content" onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <label htmlFor="day">Day</label>
        <input id="day" onChange={(e) => setDay(e.target.value)} />
      </div>
      <button onClick={createPollHander}>Create</button>
    </GovernPageModalContent>
  );
};
export default CreatePoll;