import { buildings, setBuildings } from "./buildingsStats";
import { count, setCount } from "./compileEvent";
import { economy, setEconomy } from "./economyStats";
import { projectArray, setProjects } from "./projectBoxRender";
import { deployedArray, setDeployed } from "./renderDeployed";
import { setNotes, userNotes } from "./renderNotes";
import { nonselectedUpgrades, selectedLevels, selectedUpgrades, setNonselectedUpgrades, setSelectedLevels, setSelectedUpgrades } from "./renderUpgrades";
import { safety, setSafety } from "./safetyStats";
import { setSettlement, settlement } from "./settlementStats";
import { setSurvival, survival } from "./survivalStats";
import { changeLog, setChangeLog, setWeekLog, weekLog } from "./weekLog";

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

  function setStorage() {
    localStorage.setItem('settlementData', JSON.stringify(settlement));
    localStorage.setItem('survivalData', JSON.stringify(survival));
    localStorage.setItem('safetyData', JSON.stringify(safety));
    localStorage.setItem('economyData', JSON.stringify(economy));
    localStorage.setItem('buildingData', JSON.stringify(buildings));
    localStorage.setItem('projectArray', JSON.stringify(projectArray));
    localStorage.setItem('deployedArray', JSON.stringify(deployedArray));
    localStorage.setItem('playerNotes', JSON.stringify(userNotes));
    localStorage.setItem('selectedUpgrades', JSON.stringify(selectedUpgrades));
    localStorage.setItem('selectedLevels', JSON.stringify(selectedLevels));
    localStorage.setItem('nonselectedUpgrades', JSON.stringify(nonselectedUpgrades));
    localStorage.setItem('projectCount', JSON.stringify(count));
    localStorage.setItem('weekLog', JSON.stringify(weekLog));
    localStorage.setItem('changeLog', JSON.stringify(changeLog));

}

  function checkStorage() {
    if (storageAvailable("localStorage")) {
        if(!localStorage.getItem('settlementData')) {
            setStorage();
        } else {
            loadStorage();
        }
      } else {
        alert('fuck no');
      }
  }

  function loadStorage() {
    let settlementData = JSON.parse(localStorage.getItem('settlementData'));
    setSettlement(settlementData);

    let survivalData = JSON.parse(localStorage.getItem('survivalData'));
    setSurvival(survivalData);

    let safetyData = JSON.parse(localStorage.getItem('safetyData'));
    setSafety(safetyData);

    let economyData = JSON.parse(localStorage.getItem('economyData'));
    setEconomy(economyData);

    let buildingData = JSON.parse(localStorage.getItem('buildingData'));
    setBuildings(buildingData);

    let projectData = JSON.parse(localStorage.getItem('projectArray'));
    setProjects(projectData);

    let deployedData = JSON.parse(localStorage.getItem('deployedArray'));
    setDeployed(deployedData);

    let notesData = JSON.parse(localStorage.getItem('playerNotes'));
    setNotes(notesData);

    let selectedData = JSON.parse(localStorage.getItem('selectedUpgrades'));;
    setSelectedUpgrades(selectedData);

    let selectedLevelsData = JSON.parse(localStorage.getItem('selectedLevels'));
    setSelectedLevels(selectedLevelsData);

    let nonselectedData = JSON.parse(localStorage.getItem('nonselectedUpgrades'));
    setNonselectedUpgrades(nonselectedData);

    let countData = JSON.parse(localStorage.getItem('projectCount'));
    setCount(countData);

    let weekData = JSON.parse(localStorage.getItem('weekLog'));
    setWeekLog(weekData);

    let changeData = JSON.parse(localStorage.getItem('changeLog'));;
    setChangeLog(changeData);

    
  }

  export { checkStorage, setStorage }