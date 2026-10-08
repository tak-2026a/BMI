# BMI Classroom · BMI 雙語課堂

從 index.html 開始。整個資料夾可以直接放到 GitHub Pages，無須安裝套件。

## 頁面

- index.html：介紹 BMI，透過數線滑桿或身高（m）／體重（kg）輸入切換單張角色圖與英文說明。公式為 BMI = kg ÷ m²；計算結果同步滑桿。分類使用未四捨五入的值。
- process.html：放入 Start、Input height、Input weight、Calculate 四個積木。輸入順序可以互換；過早計算或沒有先開始會要求確認後重試。
- ifelse.html：六個固定判斷條件，英文在前、中文在後，數線互動。只允許 < 18.5 → < 24 → < 27，或 ≥ 27 → ≥ 24 → ≥ 18.5。成功後顯示完整流程圖入口。
- result.html：依兩種輸入順序及兩種判斷順序產生完整流程圖。18.5、24、27 的判斷在菱形中以單行顯示；左側浮動按鈕可放大或還原網頁。可下載 PNG 或 SVG，並到 draw.io 仿畫。

跨頁順序使用網址參數傳遞，不依賴 localStorage，因此直接以本機檔案開啟也可傳递。直接開啟 ifelse.html 可以練習，但要先完成 process 活動才能產生個人完整流程圖。result.html 缺少有效參數時會引導回活動。

## 圖片與檔案

請一併上傳所有 HTML、JS、lesson.css、bmi.css、assets/ 目錄。四張角色圖以內建 image_gen 產生，存放 assets/underweight.png、normal.png、overweight.png、obesity.png。完整生成提示保存在 assets/prompts.json。圖片僅為詞彙教學示意，不應依外觀判定 BMI。

## 驗證

已檢查兩種合法輸入順序、提前計算拒絕、四種最終流程圖組合、跨頁參數、圖片與檔案連結。尚未以瀏覽器實際驗證畫面與 PNG 下載。

## 部署

GitHub repository：https://github.com/tak-2026a/BMI 。GitHub Pages 若已啟用，提交到 main 後會依設定部署。

## 分類

臺灣成人：BMI < 18.5 Underweight；18.5 ≤ BMI < 24 Normal；24 ≤ BMI < 27 Overweight；BMI ≥ 27 Obesity。Obesity 為肥胖，不全等同重度肥胖。此組分類不適用於兒童及青少年健康判定。
來源：https://www.hpa.gov.tw/Pages/List.aspx?nodeid=1757

首頁互動：bmi.js 與 bmi.css。已檢查 BMI 分界、1.70 m / 60 kg 換算、滑桿同步、無效輸入、刻度擴充。瀏覽器視覺效果尚未實測。

## 課堂操作更新

各頁已放大字體並簡化說明，首頁不再顯示下方教學提示。process 完成拼圖後，先到 draw.io 畫前半段，勾選完成後才開放下一頁。最終頁特別標示 BMI 計算必須以箭頭接到第一個 If / Else 判斷，完成後將自己的流程圖截圖交到學習吧。已驗證確認門檻、兩種輸入順序、錯誤點選，以及兩種判斷方向的連線。
