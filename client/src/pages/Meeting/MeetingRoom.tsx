// import { Socket, io } from "socket.io-client";
// import { useRef, useEffect, useState } from "react";
// import VideocamIcon from '@mui/icons-material/Videocam';
// import VideocamOffIcon from '@mui/icons-material/VideocamOff';
// import MicIcon from '@mui/icons-material/Mic';
// import MicOffIcon from '@mui/icons-material/MicOff';
// import { Socket_PORT } from "../../services/Secret";

// import { useState } from "react";

// interface RTCMessage {
//     type: string;
//     sdp?: string;
//     candidate?: string;
//     sdpMid?: string;
//     sdpMLineIndex?: number;
// }

// const configuration: RTCConfiguration = {
//     iceServers: [
//         {
//             urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
//         },
//     ],
//     iceCandidatePoolSize: 10,
// };

// const socket: Socket = io(Socket_PORT, { transports: ["websocket"] });

// let pc: RTCPeerConnection | null = null;
// let localStream: MediaStream | null = null;

// const MeetingRoom: React.FC = () => {
//     const startButton = useRef<HTMLButtonElement>(null);
//     const hangupButton = useRef<HTMLButtonElement>(null);
//     const muteAudButton = useRef<HTMLButtonElement>(null);
//     const localVideo = useRef<HTMLVideoElement>(null);
//     const remoteVideo = useRef<HTMLVideoElement>(null);
//     const [audioState, setAudioState] = useState<boolean>(false);

//     useEffect(() => {
//         if (hangupButton.current && muteAudButton.current) {
//             hangupButton.current.disabled = true;
//             muteAudButton.current.disabled = true;
//         }
//     }, []);

//     const makeCall = async (): Promise<void> => {
//         try {
//             pc = new RTCPeerConnection(configuration);
//             pc.onicecandidate = (e: RTCPeerConnectionIceEvent) => {
//                 const message: any = {
//                     type: "candidate",
//                     candidate: null,
//                 };
//                 if (e.candidate) {
//                     message.candidate = e.candidate.candidate;
//                     message.sdpMid = e.candidate.sdpMid;
//                     message.sdpMLineIndex = e.candidate.sdpMLineIndex;
//                 }
//                 socket.emit("message", message);
//             };
//             pc.ontrack = (e: RTCTrackEvent) => {
//                 if (remoteVideo.current) {
//                     remoteVideo.current.srcObject = e.streams[0];
//                 }
//             };
//             if (localStream) {
//                 localStream.getTracks().forEach((track) => {
//                     if (pc && localStream) {
//                         pc.addTrack(track, localStream);
//                     }
//                 });
//             }
//             const offer = await pc.createOffer();
//             socket.emit("message", { type: "offer", sdp: offer.sdp });
//             await pc.setLocalDescription(offer);
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     const handleOffer = async (offer: RTCSessionDescriptionInit): Promise<void> => {
//         if (pc) {
//             console.error("existing peerconnection");
//             return;
//         }
//         try {
//             pc = new RTCPeerConnection(configuration);
//             pc.onicecandidate = (e: RTCPeerConnectionIceEvent) => {
//                 const message: any = {
//                     type: "candidate",
//                     candidate: null,
//                 };
//                 if (e.candidate) {
//                     message.candidate = e.candidate.candidate;
//                     message.sdpMid = e.candidate.sdpMid;
//                     message.sdpMLineIndex = e.candidate.sdpMLineIndex;
//                 }
//                 socket.emit("message", message);
//             };
//             pc.ontrack = (e: RTCTrackEvent) => {
//                 if (remoteVideo.current) {
//                     remoteVideo.current.srcObject = e.streams[0];
//                 }
//             };
//             if (localStream) {
//                 localStream.getTracks().forEach((track) => {
//                     if (pc && localStream) {
//                         pc.addTrack(track, localStream);
//                     }
//                 });
//             }
//             await pc.setRemoteDescription(offer);

//             const answer = await pc.createAnswer();
//             socket.emit("message", { type: "answer", sdp: answer.sdp });
//             await pc.setLocalDescription(answer);
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     const handleAnswer = async (answer: RTCSessionDescriptionInit): Promise<void> => {
//         if (!pc) {
//             console.error("no peerconnection");
//             return;
//         }
//         try {
//             await pc.setRemoteDescription(answer);
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     const handleCandidate = async (candidate: RTCIceCandidateInit | null): Promise<void> => {
//         try {
//             if (!pc) {
//                 console.error("no peerconnection");
//                 return;
//             }
//             if (!candidate) {
//                 await pc.addIceCandidate();
//             } else {
//                 await pc.addIceCandidate(candidate);
//             }
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     const hangup = (): void => {
//         if (pc) {
//             pc.close();
//             pc = null;
//         }
//         if (localStream) {
//             localStream.getTracks().forEach((track) => track.stop());
//             localStream = null;
//         }
//         if (startButton.current && hangupButton.current && muteAudButton.current) {
//             startButton.current.disabled = false;
//             hangupButton.current.disabled = true;
//             muteAudButton.current.disabled = true;
//         }
//     };

//     useEffect(() => {
//         socket.on("message", (e: any) => {
//             if (!localStream) {
//                 console.log("not ready yet");
//                 return;
//             }
//             switch (e.type) {
//                 case "offer":
//                     handleOffer(e);
//                     break;
//                 case "answer":
//                     handleAnswer(e);
//                     break;
//                 case "candidate":
//                     handleCandidate(e);
//                     break;
//                 case "ready":
//                     if (pc) {
//                         console.log("already in call, ignoring");
//                         return;
//                     }
//                     makeCall();
//                     break;
//                 case "bye":
//                     if (pc) {
//                         hangup();
//                     }
//                     break;
//                 default:
//                     console.log("unhandled", e);
//                     break;
//             }
//         });

//         return () => {
//             socket.off("message");
//         };
//     }, []);

//     const startB = async (): Promise<void> => {
//         try {
//             localStream = await navigator.mediaDevices.getUserMedia({
//                 video: true,
//                 audio: { echoCancellation: true },
//             });
//             if (localVideo.current) {
//                 localVideo.current.srcObject = localStream;
//             }
//         } catch (err) {
//             console.log(err);
//         }

//         if (startButton.current && hangupButton.current && muteAudButton.current) {
//             startButton.current.disabled = true;
//             hangupButton.current.disabled = false;
//             muteAudButton.current.disabled = false;
//         }

//         socket.emit("message", { type: "ready" });
//     };

//     const hangB = async (): Promise<void> => {
//         hangup();
//         socket.emit("message", { type: "bye" });
//     };

//     const muteAudio = (): void => {
//         if (localVideo.current) {
//             localVideo.current.muted = !audioState;
//             setAudioState(!audioState);
//         }
//     };

//     return (
//         <main className="container">
//             <div className="video bg-main">
//                 <video
//                     ref={localVideo}
//                     className="video-item"
//                     autoPlay
//                     playsInline
//                 />
//                 <video
//                     ref={remoteVideo}
//                     className="video-item"
//                     autoPlay
//                     playsInline
//                 />
//             </div>

//             <div className="btn">
//                 <button
//                     className="btn-item btn-start"
//                     ref={startButton}
//                     onClick={startB}
//                 >
//                     <VideocamIcon />
//                 </button>
//                 <button
//                     className="btn-item btn-end"
//                     ref={hangupButton}
//                     onClick={hangB}
//                 >
//                     <VideocamOffIcon />
//                 </button>
//                 <button
//                     className="btn-item btn-start"
//                     ref={muteAudButton}
//                     onClick={muteAudio}
//                 >
//                     {audioState ? <MicIcon /> : <MicOffIcon />}
//                 </button>
//             </div>
//         </main>
//     );
// };

// export default MeetingRoom;


import React, { useState, useRef, useEffect, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import Video from '../../components/Video';
import { WebRTCUser } from './types';
import { Socket_PORT } from '../../services/Secret';
import { useLocation } from 'react-router-dom';

const pc_config = {
    iceServers: [
        // {
        //   urls: 'stun:[STUN_IP]:[PORT]',
        //   'credentials': '[YOR CREDENTIALS]',
        //   'username': '[USERNAME]'
        // },
        {
            urls: 'stun:stun.l.google.com:19302',
        },
    ],
};

const Socket_URl = Socket_PORT;


const MeetingRoom = () => {
    const location = useLocation();
    const { meetingId } = location?.state;
    console.log(meetingId)
    const socketRef = useRef<Socket>();
    const pcsRef = useRef<{ [socketId: string]: RTCPeerConnection }>({});
    const localVideoRef = useRef<HTMLVideoElement>(null);
    const localStreamRef = useRef<MediaStream>();
    const [users, setUsers] = useState<WebRTCUser[]>([]);


    const getLocalStream = useCallback(async () => {
        try {
            const localStream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: {
                    width: 240,
                    height: 240,
                },
            });
            localStreamRef.current = localStream;
            if (localVideoRef.current) localVideoRef.current.srcObject = localStream;
            if (!socketRef.current) return;
            if (meetingId) {
                socketRef.current.emit("join_room", { room: meetingId });
            } else {
                console.error("Room ID is undefined");
            }

        } catch (e) {
            console.log(`getUserMedia error: ${e}`);
        }
    }, []);

    const createPeerConnection = useCallback((socketID: string, email: string) => {
        try {
            const pc = new RTCPeerConnection(pc_config);

            pc.onicecandidate = (e) => {
                if (!(socketRef.current && e.candidate)) return;
                console.log('onicecandidate');
                socketRef.current.emit('candidate', {
                    candidate: e.candidate,
                    candidateSendID: socketRef.current.id,
                    candidateReceiveID: socketID,
                });
            };

            pc.oniceconnectionstatechange = (e) => {
                console.log(e);
            };

            pc.ontrack = (e) => {
                console.log('ontrack success');
                setUsers((oldUsers) =>
                    oldUsers
                        .filter((user) => user.id !== socketID)
                        .concat({
                            id: socketID,
                            email,
                            stream: e.streams[0],
                        }),
                );
            };

            if (localStreamRef.current) {
                console.log('localstream add');
                localStreamRef.current.getTracks().forEach((track) => {
                    if (!localStreamRef.current) return;
                    pc.addTrack(track, localStreamRef.current);
                });
            } else {
                console.log('no local stream');
            }

            return pc;
        } catch (e) {
            console.error(e);
            return undefined;
        }
    }, []);

    useEffect(() => {
        socketRef.current = io(Socket_URl, { transports: ["websocket"] });
        getLocalStream();

        socketRef.current.on('all_users', (allUsers: Array<{ id: string; email: string }>) => {
            allUsers.forEach(async (user) => {
                if (!localStreamRef.current) return;
                const pc = createPeerConnection(user.id, user.email);
                if (!(pc && socketRef.current)) return;
                pcsRef.current = { ...pcsRef.current, [user.id]: pc };
                try {
                    const localSdp = await pc.createOffer({
                        offerToReceiveAudio: true,
                        offerToReceiveVideo: true,
                    });
                    console.log('create offer success');
                    await pc.setLocalDescription(new RTCSessionDescription(localSdp));
                    socketRef.current.emit('offer', {
                        sdp: localSdp,
                        offerSendID: socketRef.current.id,
                        offerSendEmail: 'offerSendSample@sample.com',
                        offerReceiveID: user.id,
                    });
                } catch (e) {
                    console.error(e);
                }
            });
        });

        socketRef.current.on(
            'getOffer',
            async (data: {
                sdp: RTCSessionDescription;
                offerSendID: string;
                offerSendEmail: string;
            }) => {
                const { sdp, offerSendID, offerSendEmail } = data;
                console.log('get offer');
                if (!localStreamRef.current) return;
                const pc = createPeerConnection(offerSendID, offerSendEmail);
                if (!(pc && socketRef.current)) return;
                pcsRef.current = { ...pcsRef.current, [offerSendID]: pc };
                try {
                    await pc.setRemoteDescription(new RTCSessionDescription(sdp));
                    console.log('answer set remote description success');
                    const localSdp = await pc.createAnswer({
                        offerToReceiveVideo: true,
                        offerToReceiveAudio: true,
                    });
                    await pc.setLocalDescription(new RTCSessionDescription(localSdp));
                    socketRef.current.emit('answer', {
                        sdp: localSdp,
                        answerSendID: socketRef.current.id,
                        answerReceiveID: offerSendID,
                    });
                } catch (e) {
                    console.error(e);
                }
            },
        );

        socketRef.current.on(
            'getAnswer',
            (data: { sdp: RTCSessionDescription; answerSendID: string }) => {
                const { sdp, answerSendID } = data;
                console.log('get answer');
                const pc: RTCPeerConnection = pcsRef.current[answerSendID];
                if (!pc) return;
                pc.setRemoteDescription(new RTCSessionDescription(sdp));
            },
        );

        socketRef.current.on(
            'getCandidate',
            async (data: { candidate: RTCIceCandidateInit; candidateSendID: string }) => {
                console.log('get candidate');
                const pc: RTCPeerConnection = pcsRef.current[data.candidateSendID];
                if (!pc) return;
                await pc.addIceCandidate(new RTCIceCandidate(data?.candidate));
                console.log('candidate add success');
            },
        );

        socketRef.current.on('user_exit', (data: { id: string }) => {
            if (!pcsRef.current[data.id]) return;
            pcsRef.current[data.id].close();
            delete pcsRef.current[data.id];
            setUsers((oldUsers) => oldUsers.filter((user) => user.id !== data.id));
        });

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
            users.forEach((user) => {
                if (!pcsRef.current[user.id]) return;
                pcsRef.current[user.id].close();
                delete pcsRef.current[user.id];
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [createPeerConnection, getLocalStream]);

    return (
        <div>
            <video
                style={{
                    width: 240,
                    height: 240,
                    margin: 5,
                    backgroundColor: 'black',
                }}
                muted
                ref={localVideoRef}
                autoPlay
            />
            {users.map((user, index) => (
                <Video key={index} email={user.email} stream={user.stream} />
            ))}
        </div>
    );
}

export default MeetingRoom;