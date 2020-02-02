# react-text-edit
#### react 16 文本编辑 组件

安装
------
    npm install react-text-edit --save

示例
------
```javascript
/**
 * value      初始值
 * disabled   是否禁用编辑按钮
 * editText   编辑按钮文字 默认 “编辑”
 * onOk(value, callback)      确定按钮回调函数
 */
import React, { useState } from 'react';
import TextEdit from 'react-text-edit'

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

```
