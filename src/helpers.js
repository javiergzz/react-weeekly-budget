export const checkBudget = (budget, remainig) => {
  let cssClass;
  // 25%
  if ((budget / 4) > remainig){
    cssClass = "error";
  } else if ((budget / 2) > remainig){
    cssClass = "warning";
  } else {
    cssClass = "success";
  }
  return cssClass;
}