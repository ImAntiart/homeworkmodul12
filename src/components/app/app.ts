import AppController from '../controller/controller';
import { AppView } from '../view/appView';

// Определяем интерфейсы для контроллера и представления
interface AppControllerInterface {
    getNews(event: Event, callback: (data: unknown) => void): void;
    getSources(callback: (data: unknown) => void): void;
}

interface AppViewInterface {
    drawNews(data: unknown): void;
    drawSources(data: unknown): void;
}

// Определяем класс App с использованием интерфейсов
class App {
    private controller: AppControllerInterface;
    private view: AppViewInterface;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));

        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
