import { Routes } from '@angular/router';
import { AbsenderVerwaltenComponent } from './components/absender-verwalten/absender-verwalten.component';
import { AbsenderAuswahlComponent } from './components/absender-auswahl/absender-auswahl.component';

import { ExpressionEditorComponent } from './components/expression-editor/expression-editor.component';
import { DocumentCommandEditorComponent } from './components/document-command-editor/document-command-editor.component';
import { ExpressionInsertFragComponent } from './components/expression-insert-frag/expression-insert-frag.component';
import { ExpressionOverrideFragComponent } from './components/expression-override-frag/expression-override-frag.component';

export const appRoutes: Routes = [
  { path: 'absender-verwalten', component: AbsenderVerwaltenComponent },
  { path: 'absender-auswahl', component: AbsenderAuswahlComponent },
  {
    path: 'expression-editor', component: ExpressionEditorComponent,
    children: [
      { path: 'document-command-editor', component: DocumentCommandEditorComponent },
      { path: 'insert-frag-editor', component: ExpressionInsertFragComponent },
      { path: 'override-frag-editor', component: ExpressionOverrideFragComponent }
    ]
  }
];
