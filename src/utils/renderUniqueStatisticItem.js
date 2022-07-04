export const uniqueItems = stats => {
  const filterArr = [];
  for (let i = 0; i < stats.length; i += 1) {
    const currentLabel = stats[i].label;
    const currentPercentage = stats[i].percentage;

    const findRepeatedLabel = filterArr.filter(({ label }) => {
      return label.includes(currentLabel);
    });

    if (findRepeatedLabel.length) {
      filterArr.forEach(el => {
        if (el.id === findRepeatedLabel[0].id) {
          el.percentage += currentPercentage;
        }
      });
      continue;
    }
    const currentUniqueItem = { ...stats[i] };
    filterArr.push(currentUniqueItem);
  }
  return filterArr;
}