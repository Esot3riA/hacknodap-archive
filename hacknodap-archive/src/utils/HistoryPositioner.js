export default function(histories) {
  let historyCount = 0;
  const defaultTopDistance = 100;
  const marginConstant = 200;
  
  histories.forEach((history) => {
    history['topDistance'] = defaultTopDistance + (historyCount * marginConstant);
    history['location'] = (historyCount % 2) ? 'left' : 'right';
    historyCount += 1;
  });
  return histories;
};