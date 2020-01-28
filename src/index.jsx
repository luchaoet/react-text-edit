import React, { useState } from 'react';
import styles from './index.scss';
// import { Input, Button } from './components';

function TextEdit(props) {
  const { value, onOk, disabled=false, editText='编辑' } = props;
  const [inputValue, setInputValue] = useState(value);
  const [editStatus, setEditStatus] = useState(false);

  function inputChange(val) {
      console.log(val)
    setInputValue(val)
  }

  function cancel() {
    setInputValue(value)
    setEditStatus(false)
  }

  function ok() {
    if(onOk)onOk(
      inputValue,
      {
        success: () => { 
          setEditStatus(false);
        },
        error: () => {
          setEditStatus(true);
          setInputValue(value);
        }
      }
    )
  }

  return editStatus ? (
    <div className='text-editing-wrap'>
      <input value={inputValue} onChange={(val)=> inputChange(val.target.value)} />
      <p>
        <button className='text-editing-button-ok' onClick={()=> ok()}>确定</button>
        <button className='text-editing-button-cancel' onClick={()=> cancel()}>取消</button>
      </p>
    </div>
  ) : (
    <div className='text-edit-wrap'>
      <span className='text'>{inputValue}</span>
      <button
        className='edit-button'
        onClick={()=>setEditStatus(true)}
        disabled={disabled}
      >{editText}</button>
    </div>
  )
}

export default TextEdit;