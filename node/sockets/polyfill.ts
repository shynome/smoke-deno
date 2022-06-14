type RTCErrorDetailType =
  | "data-channel-failure"
  | "dtls-failure"
  | "fingerprint-failure"
  | "hardware-encoder-error"
  | "hardware-encoder-not-available"
  | "sctp-failure"
  | "sdp-syntax-error";

export interface RTCError extends DOMException {
  readonly errorDetail: RTCErrorDetailType;
  readonly receivedAlert: number | null;
  readonly sctpCauseCode: number | null;
  readonly sdpLineNumber: number | null;
  readonly sentAlert: number | null;
}

export interface RTCErrorEvent extends Event {
  readonly error: RTCError;
}
