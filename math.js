'use strict';
const gradeForm = document.querySelector('#grade-form');
gradeForm?.addEventListener('submit', event => {
  event.preventDefault();
  const scores = [...gradeForm.querySelectorAll('input')].map(input => Number(input.value));
  const result = document.querySelector('#grade-result');
  if (scores.some(score => !Number.isFinite(score) || score < 0 || score > 100)) { result.className = 'result fail'; result.textContent = '請輸入四個 0 到 100 之間的成績。'; return; }
  const average = scores.reduce((sum, score) => sum + score, 0) / 4;
  const passed = average >= 60;
  result.className = `result ${passed ? 'pass' : 'fail'}`;
  result.innerHTML = `平均 Average = <strong>${average.toFixed(1)}</strong>。${passed ? '恭喜！及格 Pass!' : '未及格 Not yet passed — 再試一次！'}`;
});
