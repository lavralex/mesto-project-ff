import "./pages/index.css";
import { loadCards, listenAddCardSubmit } from "./components/cards.js";
import { initPopups } from "./components/modal.js";
import listenProfileSubmit from "./components/profile.js";

loadCards();
initPopups();
listenAddCardSubmit();
listenProfileSubmit();
