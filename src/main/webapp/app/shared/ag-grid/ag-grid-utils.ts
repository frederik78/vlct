import {GridOptions} from "ag-grid";
export class AgGridUtil {

    public static getNewAgGridOptionsInstance(): GridOptions {


        let gridOptions = <GridOptions>{
            rowSelection: 'single',
            enableSorting: true,
            enableColResize: true,
            enableFilter: true,
            pagination: true,
            paginationAutoPageSize: true,
            suppressDragLeaveHidesColumns: true,
            overlayLoadingTemplate: '<span class="ag-overlay-loading-center">Chargement en cours</span>',
            overlayNoRowsTemplate: '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">Aucun enregistrement</span>',
            rowData: null,
            rowHeight: 30
        };

        gridOptions.localeText = {

            // for number filter
            equals: 'Égal',
            notEqual: 'Pas égal',
            lessThanOrEqual: 'Moins que ou égal',
            greaterThanOrEqual: 'Plus que ou égal',
            inRange: 'Dans la portée',
            lessThan: 'Moins que',
            greaterThan: 'Plus que',

            // for text filter
            contains: 'Contient',
            notContains: 'Ne contient pas',
            startsWith: 'Commence avec',
            endsWith: 'Termine avec'
        };
        return gridOptions;
    }

}
