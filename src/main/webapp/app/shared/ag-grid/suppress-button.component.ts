import {Component} from "@angular/core";
import {GridApi} from "ag-grid/dist/lib/gridApi";

@Component({
    selector: 'suppress-button.component',
    templateUrl: './suppress-button.component.html',
    styleUrls: ['./suppress-button.component.css'],
})
export class SuppressButtonComponent {

    private params: any;

    constructor() {

    }

    agInit(params: any): void {
        this.params = params;
    }

    removeItem() {
        // let box_content = 'Êtes-vous sûre de supprimer \'' + this.params.data[this.params.dialog_box_parameter] + '\'?';
        // if (this.params.dialog_box_content) {
        //     box_content = this.params.dialog_box_content;
        //     box_content = box_content.replace(new RegExp('\\[PLACEHOLDER\\]', 'g'), this.params.data[this.params.dialog_box_parameter]);
        // }
        // this.dialogBoxService.confirm(this.params.dialog_box_title, box_content, 'Supprimer').subscribe(
        //     (result) => {
        //         if (result === ConfirmDialog.OK) {
        //             this.driverCommonService.removeItem(this.params.api_endpoint, this.params.data.id).subscribe(
        //                 (success) => {
        //                     const gridApi: GridApi = this.params.api;
        //                     gridApi.removeItems([this.params.node], false);
        //                 },
        //                 (error) => {
        //                     console.log('Suppression impossible', error);
        //                 }
        //             );
        //
        //         }
        //     }
        // );

    }
}
