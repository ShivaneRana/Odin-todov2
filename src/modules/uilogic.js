export const expandLogic = (function () {
  const checkButtonName = function (but) {
    if ((but.textContent = "Expand")) {
      return true;
    } else if ((but.textContent = "Collapse")) {
      return false;
    }
  };

  const expandFinale = function (sideBar, navBar, mainBar) {};

  return { expandFinale };
})();
