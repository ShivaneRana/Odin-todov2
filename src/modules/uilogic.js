import { renderExpand } from "./dom";

export const expandLogic = (function () {
  const checkContent = function (button) {
    if (button.textContent === "Expand") {
      return true;
    } else if (button.textContent === "Collapse") {
      return false;
    }
    return null;
  };

  const expandFinale = function (sideBar, navBar, mainBar, button) {
    let flag = checkContent(button);

    if (flag) {
      // when the expand button is "Expand";

      renderExpand.expand(sideBar, navBar, mainBar, button);
    } else if (flag === false) {
      // when the expand button is "Collapse";

      renderExpand.collapse(sideBar, navBar, mainBar, button);
    } else {
      // when the expand button is neither and returns null
      alert("No changes were made");
    }
  };

  return { expandFinale };
})();

export const themeLogic = function(){
  const themeIsDark = function(theme){
    if(theme.textContent === "Dark"){
      return true;
    }else if (theme.textContent === "Light"){
      return false;
    }else{
      return null;
    }
  }

  const themeFinale = function(theme){
    
  }

  return {};
}
