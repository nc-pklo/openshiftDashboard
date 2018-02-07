import { Injectable } from '@angular/core';

@Injectable()
export class EnvironmentsLinksService {

  // //parameter
  // environmentsLinks : {
  //   "PSRM" : "http://dock.inddr.dk/",
  //   "PSRM (no sso login)" : "http://dock.inddr.dk/ouaf/loginPage.jsp?normal",
  //   "Test Portal" : "http://dock.inddr.dk/test-portal/overview",
  //   "Batch Administration Website" : "http://dock.inddr.dk/batch-administration-website/",
  //   "Fordringshaverportal" : "http://fordringshaverportal-dock.inddr.dk"
  // }

  constructor() { }

  //method
  getEnvironmentsLinks() {
    return {
      "PSRM" : "http://dock.inddr.dk/",
      "PSRM2" : "http://dock.inddr.dk/ouaf/loginPage.jsp?normal",
      "TP" : "http://dock.inddr.dk/test-portal/overview",
      "BAW" : "http://dock.inddr.dk/batch-administration-website/",
      "FHP" : "http://fordringshaverportal-dock.inddr.dk",
      "OS" : "https://openshift.inddr.dk:8443/console/project/dock01/overview"
    }
  }


}
