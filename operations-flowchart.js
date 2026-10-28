'use strict';
const steps = [
  { question:'流程圖要從哪裡開始？', answer:'start', result:'Start · 開始', type:'start' },
  { question:'要輸入 4 個數字 a、b、c、d，選哪個圖形？', answer:'para', result:'Input a → Input b → Input c → Input d', type:'para' },
  { question:'要計算成績 = (a + b + c + d) ÷ 4，選哪個圖形？', answer:'rect', result:'成績 = (a + b + c + d) ÷ 4', type:'rect' },
  { question:'要判斷「成績 ≥ 60?」，選哪個圖形？', answer:'diamond', result:'成績 ≥ 60?', type:'diamond' },
  { question:'要顯示 Pass 或 Not pass，選哪個圖形？', answer:'para', result:'True → Output: Pass；False → Output: Not pass', type:'para' },
  { question:'流程圖最後要用哪個圖形結束？', answer:'start', result:'End · 結束', type:'start' }
];
const choices = [['start','開始／結束'],['para','平行四邊形'],['rect','長方形'],['diamond','菱形']];
const builder = document.querySelector('#builder');
let current = 0;
function node(step){return `<div class="virtual-node ${step.type}">${step.result.replaceAll('；','<br>')}</div>`;}
function drawFlow(){
  return steps.slice(0,current).map((step,index)=>{
    if(step.type === 'para' && step.result.includes('True')) return `<div class="flow-output"><div><span>True</span>${node({type:'para',result:'Output: Pass'})}</div><div><span>False</span>${node({type:'para',result:'Output: Not pass'})}</div></div>`;
    return `${index ? '<div class="virtual-arrow">↓</div>' : ''}${node(step)}`;
  }).join('');
}
function render(feedback=''){
  const finished = current === steps.length;
  const flow = `<div class="virtual-flow">${drawFlow()}</div>`;
  if(finished){builder.innerHTML=`<div class="complete-card"><h3>完成虛擬流程圖！</h3><p>現在請依照這個結構，在紙上或 draw.io 畫出自己的版本，再完成 Scratch 作品。</p>${flow}</div>`;return;}
  const step=steps[current];
  builder.innerHTML=`<div class="question-card"><span>BUILD STEP ${current+1} / ${steps.length}</span><h3>${step.question}</h3><div class="icon-choices">${choices.map(([type,label])=>`<button type="button" data-choice="${type}"><i class="choice-icon ${type}"></i><b>${label}</b></button>`).join('')}</div><p class="feedback">${feedback}</p></div>${flow}`;
  builder.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>{
    if(button.dataset.choice===step.answer){current++;render('答對了！正確圖形已加入流程圖。');}
    else render('再想想：請根據這一步的用途，選擇正確圖形。');
  }));
}
render();
