import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export type Mode = 'dev' | 'user' | 'ano';

@Injectable({ providedIn: 'root' })
export class InterfaceService {

  private modeSource = new BehaviorSubject<Mode>('ano');
  mode$ = this.modeSource.asObservable();

  setMode(mode: Mode) {
    this.modeSource.next(mode);
  }

  get currentMode() {
    return this.modeSource.value;
  }
}