'use strict';
const params=new URLSearchParams(location.search);
const inputOrder=params.get('inputs');
const direction=params.get('direction');
const validInputs=['height,weight','weight,height'].includes(inputOrder);
const validDirection=['asc','desc'].includes(direction);
const flowLink=document.getElementById('flow-link');
if(validInputs&&validDirection){
  flowLink.href=`result.html?inputs=${inputOrder}&direction=${direction}`;
  const first=inputOrder.split(',')[0];
  const order=first==='weight'?'weight → height':'height → weight';
  const decisions=direction==='desc'?'≥ 27 → ≥ 24 → ≥ 18.5':'< 18.5 → < 24 → < 27';
  document.getElementById('learning-order').textContent=`Your flowchart · 你的流程圖：input ${order}; decisions ${decisions}。Scratch 方塊也請照這個順序連接。`;
  if(first==='height'){
    document.getElementById('input-flow-cue').insertBefore(document.getElementById('flow-height'),document.getElementById('flow-weight'));
    document.getElementById('input-scratch-cue').insertBefore(document.getElementById('block-height'),document.getElementById('block-weight'));
  }
  if(direction==='desc'){
    document.getElementById('decision-example').textContent='BMI ≥ 27';
    document.getElementById('decision-guidance').textContent='Scratch has no ≥ block: use not (BMI < 27), then not (BMI < 24) and not (BMI < 18.5) inside each else. · Scratch 沒有 ≥ 方塊：可用 not (BMI < 27)，再於各層 else 使用 not (BMI < 24)、not (BMI < 18.5)。';
  }
}else{
  document.getElementById('learning-order').textContent='Follow your completed flowchart. · 對照你完成的流程圖，把每個步驟轉成 Scratch 方塊。';
}
