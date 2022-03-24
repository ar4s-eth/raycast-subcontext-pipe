{
    "statusbar_command.commands": [
        {
          "text": "$(gear)",
          "tooltip": "workspace settings",
          "id": "sbc_settings",
          "name": "settings",
          "priority": -1000,
          "alignment": "right",
          "command": "workbench.action.openWorkspaceSettings"
        },
        {
            "text": "$(file-text)",
            "id": "sbc_format",
            "name": "formatDocument",
            "tooltip": "format",
            "alignment": "left",
            "priority": 100,
            "include": "\\.js",
            "command": "editor.action.formatDocument"
        },
        {
          "text": "TS",
          "tooltip": "Typescript Server neustarten",
          "alignment": "right",
          "priority": 1000,
          "id": "sbc_ts",
          "name": "Typescript Server neustarten",
          "include": "\\.[ts|vue]",
          "command": "typescript.restartTsServer"
        },
        {
          "text": "$(terminal)",
          "tooltip": "Terminal",
          "id": "sbc_terminal",
          "name": "Terminal",
          "alignment": "right",
          "priority": 1000,
          "command": "workbench.action.terminal.toggleTerminal"
        },{
            "text": "ctrl+h",
            "id": "runTask",
            "name": "runTask",
            "command": "workbench.action.tasks.runTask",
            "arguments": ["taskName"]
        },{
          "alignment": "left",
          "command": "github.copilot.toggleCopilot",
          "id": "sbc.copilot",
          "text": "Github Copilot",
          "scriptEvents": ["vscode.workspace.onDidChangeConfiguration"],
          "script": "statusBarItem.text = vscode.workspace.getConfiguration('github.copilot.inlineSuggest').enable ? '$(github)' : '$(github-inverted)'"
        }
      ]
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
    