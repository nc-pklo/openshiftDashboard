export interface EnvironmentJenkins {
  dockerEnv : string,
  requester : string,
  releaseAll : number,
  releaseTestUtilities : number,
  requestDate? : string,
  provisionDate? : string,
  provisionState? : string,
  integrated? : boolean,
  visible? : boolean
  }


  // {

  //   "dockerEnv" : "dock99",
  //   "requester" : "pklo",
  //   "releaseAll" : 2343,
  //   "releaseTestUtilities" : 1234,
  //   "requestDate" : "2007-12-03T10:15:30",
  //   "intergated" : true,
  //   "visible" : true
  
  // }