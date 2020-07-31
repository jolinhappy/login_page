# 登入帳密檢查機制
帳密驗證機制。

## 網站功能
- 正確輸入白名單帳號密碼可登入到歡迎頁面。
- 帳號或密碼輸入會在登入介面顯示錯誤訊息，且無法登入。

## 專案畫面
![image](https://github.com/jolinhappy/login_page/blob/master/login.png)

## 安裝步驟
1.開啟終端機，並clone此專案。
<br>```git clone https://github.com/jolinhappy/login_page.git```

2.進入專案資料。
<br>```cd login_page```

3.在進入專案資料夾的狀態下安裝npm
<br>```npm install```

4.安裝nodemon
<br>```npm install nodemon```

5.啟動程式
<br>```npm run dev```
<br>*成功啟動後，終端機會顯示 Express is listening on localhost:3000

6.連結專案網址
<br>在瀏覽器上輸入 localhost:3000 進入專案網頁

## 測試帳號&密碼
 Email               | Password        
:-------------------:|:---------------: 
tony@stark.com       |  iamironman         
captain@hotmail.com  |icandothisallday     
peter@parker.com     |  enajyram           
natasha@gamil.com    |*parol#@$!           
nick@shield.com      |  password               

## 環境建置與需求
- Node.js: v10.15.0
- Express: v4.17.1
- Express-Handlebars: v5.1.0
- Body-parser: v1.19.0
