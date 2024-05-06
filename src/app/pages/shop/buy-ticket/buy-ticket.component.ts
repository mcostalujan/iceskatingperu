import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.scss', 'buy-ticket.component.css'],
})
export class BuyTicketComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  buyNowForm: FormGroup;

  clothingSocks = false;
  clothingGloves = false;
  equipmentFoquita25 = false;
  equipmentFoquita55 = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.buyNowForm = this.fb.group({
      selectedDate: [null, Validators.required], // Date input
      minutesDuration: [25, Validators.required], // Radio buttons
      clothingSocks: [false], // Checkboxes
      clothingGloves: [false],
      equipmentFoquita25: [false],
      equipmentFoquita55: [false],
    });
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Shop' },
      { label: 'Buy Ticket', active: true },
    ];
  }

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  buyNow(): void {

    if (this.buyNowForm.valid) {
      let paymentPayload = {
        date: this.buyNowForm.get('selectedDate')!.value,
        minutesDuration: this.buyNowForm.get('minutesDuration')!.value,
        'add-ons': {
          stocks: this.buyNowForm.get('clothingSocks')!.value,
          gloves: this.buyNowForm.get('clothingGloves')!.value,
          foquita25: this.buyNowForm.get('equipmentFoquita25')!.value,
          foquita55: this.buyNowForm.get('equipmentFoquita55')!.value,
        },
      };
      console.log(paymentPayload);
    } else {
      // Form is invalid, show an error message or prevent submission
      alert('Please fill all required fields.');
    }

    // You can redirect to a payment page or perform any other action.
  }
}
