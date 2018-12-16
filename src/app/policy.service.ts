import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  SERVER_URL: string = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {
  }

  public getPolicies() {
    return this.httpClient.get(this.SERVER_URL + 'policies');
  }

  public getPolicy(policyId) {
    return this.httpClient.get(`${this.SERVER_URL + 'policies'}/${policyId}`);
  }

  public createPolicy(policy) {
    return this.policyService.createPolicy(policy);
  }


  public deletePolicy(policyId) {
    return this.policyService.deletePolicy(policyId);
  }

  public updatePolicy(policy: { id: number, amount: number, clientId: number, userId: number, description: string }) {
    let newPolicy: { id: number, amount: number, clientId: number, userId: number, description: string } = {policy.id, 0, 0, 0};
    return this.policyService.updatePolicy(policyId);
  }

}
