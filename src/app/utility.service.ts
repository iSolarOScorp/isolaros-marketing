import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  users: AngularFireList<any>;
  constructor(private db: AngularFireDatabase,
              private router: Router) { }


    addRecord() {
       let timestamp = new Date().toLocaleString();
       this.db.list('database/projects').push({
       dateTime: timestamp,
        referredBy: 'FB Lead',
        }).then(data => {
                window.localStorage.setItem("key", data.key);
        })
              }
              
              updateRecord() {
                let key = window.localStorage.getItem("key");
                this.db.object('database/projects/' + key).update({ surveryInit: 'Yes' }).then(
                  () => {
                    this.router.navigateByUrl('/getting-started/survey')
                  }
                )
              }
              updateHomeOwner(data) {
                let key = window.localStorage.getItem("key");
                this.db.object('database/projects/' + key).update({ home_owner: data }).then(
                  () => {
            
                  }
                )
              }
              updateBill(data) {
                let key = window.localStorage.getItem("key");
                this.db.object('database/projects/' + key).update({ utility_bill: data }).then(
                  () => {
                    console.log("data updated");
                  }
                )
              }
              updateCredit(data) {
                let key = window.localStorage.getItem("key");
                this.db.object('database/projects/' + key).update({ credit_estimate: data }).then(
                  () => {
                    console.log("data updated");
                  }
                )
              }
              updateName(data) {
                let key = window.localStorage.getItem("key");
                this.db.object('database/projects/' + key).update({ firstName: data }).then(
                  () => {
                    console.log("data updated");
                  }
                )
              }
              updateLast(data) {
                let key = window.localStorage.getItem("key");
                this.db.object('database/projects/' + key).update({ last_name: data }).then(
                  () => {
                    console.log("data updated");
                  }
                )
              }
              updateAddress(data) {
                let key = window.localStorage.getItem("key");
                this.db.object('database/projects/' + key).update({ address: data }).then(
                  () => {
                    console.log("data updated");
                  }
                )
              }
            
              updateEmail(data) {
                let key = window.localStorage.getItem("key");
                this.db.object('database/projects/' + key).update({ email: data }).then(
                  () => {
                    console.log("data updated");
                  }
                )
              }
              updateContactNumber(areaCode, data) {
                let contactnumber = "+ 0 (" + areaCode + ")" + data;
                let key = window.localStorage.getItem("key");
                this.db.object('database/projects/' + key).update({ contact_number: contactnumber }).then(
                  () => {
                    console.log("data updated");
                  }
                ).then(
                  () => {
                      this.db.object('database/projects/' + key).valueChanges().subscribe(x => {
                        console.log("userdata",x);
            
                        let userdata = x;
            
                        // this.sendEmailtoAdmin(userdata).subscribe(x => {
                        //   console.log(x);
                        // });
                      })
                  }
                )
              }
              updateAppointment(data) {
                let key;
                key = window.localStorage.getItem("key");
                console.log(key);
                this.db.object('database/projects/' + key).update({ appointment: data }).then(
                  () => {
                    console.log("appointment created successfully");
                    this.db.object('database/projects/' + key).valueChanges().subscribe(x => {
                        console.log("userdata",x);
                        let userdata = x;
                        // this.sendEmailtoAdmin(userdata).subscribe(x => {
                        //       console.log(x);
                        //     });
                            this.router.navigateByUrl('/getting-started/appointment-confirmed');
                          })
            
                          window.localStorage.clear();
                      }
                ).catch(err => {
                  alert(err);
                })
              }       
}
