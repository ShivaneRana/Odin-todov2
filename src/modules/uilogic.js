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

export const themeLogic = (function () {
  const darkThemeApplied = function (theme) {
    if (theme.textContent === "Theme : Light") {
      console.log("Dark theme is applied");
      theme.textContent = "Theme : Dark";
      return true;
    } else if (theme.textContent === "Theme : Dark") {
      console.log("Light theme is applied");
      theme.textContent = "Theme : Light";
      return false;
    }
  };

  const applyDarkTheme = function () {
    document.documentElement.classList.toggle("dark");
  };

  const applyLightTheme = function () {
    document.documentElement.classList.remove("dark");
  };

  const themeFinale = function (theme) {
    if (darkThemeApplied(theme)) {
      applyLightTheme(theme);
    } else {
      applyDarkTheme(theme);
    }
  };

  return { themeFinale };
})();

const allButtonLogic = (function () {
  return {};
})();

const todayButtonLogic = (function () {
  return {};
})();

const completedButtonLogic = (function () {
  return {};
})();

// this logic is shared amound all the todo container like all,completed,today
// also all the new created projects
export const universalLogic = (function () {
  let currentList;

  const todoFormat = function (title, description, date, target, priority) {
    return {
      title: title,
      description: description,
      date: date,
      target: target,
      priority,
      priority,
      completed: false,
    };
  };

  const assignList = function (value) {
    currentList = value;
  };

  const deleteFromList = function (value) {
    delete currentList[value];
  };

  const storeToList = function () {};

  const addToList = function (value) {
    currentList[value.title] = value;
  };

  const finale = function () {};

  return { assignList, deleteFromList, finale, todoFormat };
})();
