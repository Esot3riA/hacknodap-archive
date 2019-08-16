export default function(histories) {
  let historyCount = 0;
  let dateBeforeHistory = new Date();
  let baseTopDistance = -120;
  const baseMargin = 130;
  
  histories.forEach((history) => {
    // Calculate distance weight by passing time
    // One day by 3px
    const historyDate = history.date;
    const timeDiff = (new Date(dateBeforeHistory)) - (new Date(historyDate));
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
    const distanceWeight = daysDiff * 3;
    dateBeforeHistory = historyDate;
    
    // Calculate final distance
    const topDistance = baseTopDistance + baseMargin + distanceWeight;
    history['topDistance'] = topDistance;
    history['location'] = (historyCount % 2) ? 'left' : 'right';
    baseTopDistance = topDistance;
    historyCount += 1;
  });
  return histories;
};