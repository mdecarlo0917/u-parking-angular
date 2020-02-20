import { Component } from '@angular/core';

@Component({
    selector: 'app-vehicle-list',
    templateUrl: './vehicle-list.component.html',
    styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent {
    vehicles: any[] = [
        {
            "vehicleId": 1,
            "make": "Jeep",
            "model": "Wrangler",
            "licensePlate": "J89374"
        },
        {
            "vehicleId": 2,
            "make": "Toyota",
            "model": "Camry",
            "licensePlate": "J88322"
        },
        {
            "vehicleId": 3,
            "make": "Ford",
            "model": "Focus",
            "licensePlate": "P83948"
        },
        {
            "vehicleId": 4,
            "make": "Subaru",
            "model": "Outback",
            "licensePlate": "M88483"
        }
    ];

    vehicleIdHandler() {
        console.log("Clicked");
    }
}