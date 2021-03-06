import {default as addons} from '!!raw-loader!./examples/addons.txt';
import {default as appModuleIcons} from '!!raw-loader!./examples/app-module-icons.txt';
import {default as appModuleOptional} from '!!raw-loader!./examples/app-module-optional.txt';
import {default as appModule} from '!!raw-loader!./examples/app-module.txt';
import {default as appTemplate} from '!!raw-loader!./examples/app-template.txt';
import {default as assets} from '!!raw-loader!./examples/assets.txt';
import {default as ieSupport} from '!!raw-loader!./examples/ie-support.txt';
import {default as importBaseLess} from '!!raw-loader!./examples/import-base-less.txt';
import {default as importLocalLess} from '!!raw-loader!./examples/import-local-less.txt';
import {default as main} from '!!raw-loader!./examples/main.txt';
import {default as ponyfill} from '!!raw-loader!./examples/ponyfill.txt';
import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'home',
    templateUrl: 'home.template.html',
    styleUrls: ['./home.style.less'],
    changeDetection,
})
export class HomeComponent {
    readonly examples = {
        appModule,
        appTemplate,
        appModuleIcons,
        appModuleOptional,
        assets,
        importBaseLess,
        importLocalLess,
        main,
        addons,
        ponyfill,
        ieSupport,
    };
}
