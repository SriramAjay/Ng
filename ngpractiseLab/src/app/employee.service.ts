import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }
  getEmployeeData(){
return [
  {"id":1059,"name":"Ajay","PNo":9030427423},
  {"id":1060,"name":"RK","PNo":7842598857},
  {"id":1031,"name":"Nagendra","PNo":8749148778},
  {"id":1068,"name":"Siva","PNo":8273218187}
];

  }
}
