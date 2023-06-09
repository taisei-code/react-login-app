import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className='formContainer'>
        <form>
          <h1>ログインフォーム</h1>
          <hr />

          <div className="uiForm">

            <div className="formField">
              <label>ユーザー名</label>
              <input type='text' placeholder='ユーザー名' name='' />
            </div>

            <div className="formField">
              <label>メールアドレス</label>
              <input type='text' placeholder='メールアドレス' name='' />
            </div>

            <div className="formField">
              <label>パスワード</label>
              <input type='text' placeholder='パスワード' name='' />
            </div>

          </div>
        </form>
      </div>
    </>
  );
}

export default App;
