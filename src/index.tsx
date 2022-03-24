import { Detail } from "@raycast/api";

export default function main() {
  return <Detail markdown="# Hello World" />;
}



// import * as vscode from 'vscode';
// import { Mode } from './mode';
// import { StatusBar } from './statusbar';

// export class Remap {

//   public mode: Mode;
//   public statusBar: StatusBar;

//   public constructor(prevColorConfig: vscode.WorkspaceConfiguration) {

//     this.mode = Mode.Edit;
//     this.statusBar = new StatusBar(prevColorConfig);
//   }

//   public updateMode(mode: Mode): void {

//     this.mode = mode;
//     vscode.commands.executeCommand('setContext', 'remap.mode', mode);

//     const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('remap');
//     if (config.get('changeStatusBarText')) {
//         this.statusBar.changeStatusBarText(mode);
//     }
//     if (config.get('changeStatusBarColor')) {
//         this.statusBar.changeStatusBarColor(mode);
//     }
//   }
// }
  