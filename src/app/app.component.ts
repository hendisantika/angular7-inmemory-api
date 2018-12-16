import {Component, OnInit} from '@angular/core';
import {PolicyService} from './policy.service';

@Component({
  selector: 'app-root',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class PolicyListComponent implements OnInit {

  policies: any[] = [];

  constructor(private policyService: PolicyService) {
  }

  ngOnInit() {
    this.policyService.getPolicies().subscribe((data: any[]) => {
      console.log(data);
      this.policies = data;
    });
  }
}
