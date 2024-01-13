import pageLoad from "./pageload";
import overviewRender from "./overviewRender";
import './style.css'
import taxRender from "./taxRender";
import {shopWindow} from "./shopWindow";
import {projectBoxRender} from "./projectBoxRender";
import { renderBuildings } from "./renderBuildings";
import { renderWeeks } from "./weekLog";




pageLoad();
overviewRender();
taxRender();
shopWindow();
projectBoxRender();
renderBuildings();
renderWeeks();