import Tooltip from './wizzy-ui/tooltip';
import Dropdown from './wizzy-ui/dropdown';

//create a tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    const instance = new Dropdown(dropdown);
    instance.init()
});
