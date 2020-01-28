import React, { useState } from 'react';
import TextEdit from '../src'

function App() {
	const [num, setNum] = useState(1)
	
	return (
		<div>
			<h1>react-text-edit 示例</h1>
			<TextEdit value={'哈哈哈哈'} disabled={false} />
		</div>
	)
    
}

export default App;