import { DocumentCommand } from '../actions/template-actions';

export enum LoadingStatus {
  None,
  Loading,
  Finished
}

export enum DocumentCommandStatus {
  New,
  Executing,
  Done
}

/**
 * Status von Templates und Fragmenten.
 */
export interface TemplateState {
  name: string;
  status: LoadingStatus;
  overrideFrags: { fragId: string, newFragId: string }[];
  documentCommands: { cmd: DocumentCommand, status: DocumentCommandStatus }[];
}
