import React, { useState } from 'react';
import TextEdit from '../src'

function App() {
	const [text, setText] = useState('react-text-edit');
	
	return (
		<div>
			<h1>react-text-edit 示例</h1>
			<TextEdit 
				editText='修改' 
				maxLength={20} 
				value={text} 
				disabled={false} 
				onOk={(value, callback) => editOk(value, callback)} 
				onCancel={() => console.log('onCancel')}
			/>
		</div>
	)

	function editOk(value, callback) {
		setText(value)
		callback.success()
		console.log('editOk')
	}
    
}

export default App;