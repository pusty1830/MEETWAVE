import { client } from "./axiosClient";


export function registerProfile(body: any) {
    return client.post("auth/signup", body);
}

export function login(body: any) {
    return client.post("auth/signin", body);
}


export function generateMeetingId(){
    return client.get("/videocall/meetingId");
}

export function createMeeting(body:any){
    return client.post("/meeting/meeting/create", body);
}