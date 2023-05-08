export interface ModalDialog {
  title: string,
  task: string,
  buttons: ModalButton[]
}

export interface ModalButton {
  text: string,
  action: string,
  condition: string
}