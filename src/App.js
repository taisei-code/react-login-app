import React, { useState } from 'react';
import './App.css';

function App() {
  // stateを定義

  // 初期値を空で用意
  const initialValues = { username: "", mailAddress: "", password: "" }
  // formValues（フォームに入力された値）
  const [formValues, setFormValues] = useState(initialValues);
  // エラーを配列に格納する
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
  // 分割代入でnameとvalueをe.targetから抽出
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  }

  // フォームが送信されたときの処理
  const handleSubmit = (e) => {
    e.preventDefault();
    // バリデーションチェック validate関数の引数にフォームに入力された値（formValues)
    setFormErrors(validate(formValues))
  }

  const validate = (values) => {
    const errors = {};
    
  }

  return (
    <>
      <div className='formContainer'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>ログインフォーム</h1>
          <hr />

          <div className="uiForm">

            <div className="formField">
              <label>ユーザー名</label>
              <input type='text' placeholder='ユーザー名' name='username' onChange={(e) => handleChange(e)}/>
            </div>

            <div className="formField">
              <label>メールアドレス</label>
              <input type='text' placeholder='メールアドレス' name='mailAddress' onChange={(e) => handleChange(e)}/>
            </div>

            <div className="formField">
              <label>パスワード</label>
              <input type='text' placeholder='パスワード' name='password' onChange={(e) => handleChange(e)}/>
            </div>

          </div>
        </form>
      </div>
    </>
  );
}

export default App;
