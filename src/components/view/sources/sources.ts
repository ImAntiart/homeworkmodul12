import { Source } from '../../classes/Source';
import './sources.css';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp')!;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            if (sourceClone) sourceClone.querySelector('.source__item-name')!.textContent = item.name;
            sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
