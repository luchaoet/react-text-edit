import React, { useState } from 'react';
import './index.scss';

function TextEdit(props) {
  const { value, onOk, onCancel, disabled=false, editText='编辑', maxLength } = props;
  const [inputValue, setInputValue] = useState(value);
  const [editStatus, setEditStatus] = useState(false);

  function inputChange(val) {
    setInputValue(val)
  }

  function cancel() {
		if(onCancel)onCancel();
    setInputValue(value);
		setEditStatus(false);
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
      <input value={inputValue} maxLength={maxLength} onChange={(val)=> inputChange(val.target.value)} />
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