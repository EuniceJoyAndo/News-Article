import './App.css';
import './index.css';
import data from './MOCK_DATA.json';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from './Modal';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const BUTTON_WRAPPER_STYLES ={
  position: 'relative',
  zIndex: 2
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [articles, setArticles] = useState( );
  
  return (
    <>
    {data.map((article, index) => (
      <Modal open={isOpen} onClose={() => setIsOpen(false)} >
         <h2>{article.title}</h2>
         <p>{article.author} | {article.date}</p>
         <p>{article.content}</p>
         </Modal>
 )) }
    <div className='App'>
      <header className='App-header'>
      <Stack spacing={1} direction="row">
      <input type='checkbox'  />
      <Button variant="outlined">Published</Button>
      <Button variant="outlined" color='error' >Delete</Button>
      <input className='tag' type='textfield' placeholder='Search'></input>
      </Stack>
      </header> 
      
      <main className='App-main'>
        <ul>
          {data.map((article, index) => (
            <li key={index}>
              <DragIndicatorIcon />
              <input type='checkbox' />
              
              <div className="article">
              <h2>{article.title}</h2>
              <p><AccountCircleIcon fontSize="small" color="success"/>{article.author} <DateRangeIcon fontSize="small" color="success"/>{article.date}</p>
              
              <p>{article.content.slice(0, 100)}...
                <Button onClick={() => setIsOpen(true)} edge="end"> <VisibilityIcon/> Read Full </Button></p>
                </div>
            </li>
          )
          )
          }
        </ul>
      </main>
      </div>
      </>
  )}
  
export default App;