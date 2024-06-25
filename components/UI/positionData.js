export default function createDataPos(iteration) {
  const div = document.createElement("div");
  if (iteration < 10) {
    div.dataset.position = `0,${iteration}`;
  } else if (iteration >= 10 && iteration < 20) {
    div.dataset.position = `1,${iteration % 10}`;
  } else if (iteration >= 20 && iteration < 30) {
    div.dataset.position = `2,${iteration % 10}`;
  } else if (iteration >= 30 && iteration < 40) {
    div.dataset.position = `3,${iteration % 10}`;
  } else if (iteration >= 40 && iteration < 50) {
    div.dataset.position = `4,${iteration % 10}`;
  } else if (iteration >= 50 && iteration < 60) {
    div.dataset.position = `5,${iteration % 10}`;
  } else if (iteration >= 60 && iteration < 70) {
    div.dataset.position = `6,${iteration % 10}`;
  } else if (iteration >= 70 && iteration < 80) {
    div.dataset.position = `7,${iteration % 10}`;
  } else if (iteration >= 80 && iteration < 90) {
    div.dataset.position = `8,${iteration % 10}`;
  } else if (iteration >= 90 && iteration < 100) {
    div.dataset.position = `9,${iteration % 10}`;
  }

  return div;
}
