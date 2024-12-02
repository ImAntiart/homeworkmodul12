import AppController from '../controller/controller';
import { DataForNews, DataForSource } from '../interfaces/TResponsePortal';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const element = document.querySelector('.sources');
        if (typeof element != 'undefined' && element != null) {
            element.addEventListener('click', (e) =>
                this.controller.getNews(e, <T>(data: T): void => {
                    this.view.drawNews(data as DataForNews);
                })
            );
            this.controller.getSources(<T>(data: T): void => this.view.drawSources(data as DataForSource));
        }
    }
}

export default App;
