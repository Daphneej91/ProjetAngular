import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class InterfaceService {

  private modeSource = new BehaviorSubject<'dev' | 'user'>('user');
  mode$ = this.modeSource.asObservable();

  setMode(mode: 'dev' | 'user') {
    this.modeSource.next(mode);
  }

  get currentMode() {
    return this.modeSource.value;
  }
}