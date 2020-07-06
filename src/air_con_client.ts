import * as child from 'child_process';

export default class AirConClient {
  private static readonly device = "ac"; // TODO: make variable

  public static MIN_COOL_VALUE = 19;
  public static MAX_COOL_VALUE = 23;
  public static MIN_HEAT_VALUE = 23;
  public static MAX_HEAT_VALUE = 23;

  public static changeTemp(mode: number, temperature: number) {
    if (mode == 1) {
      this.sendEvent(this.device, `HEAT_${temperature}_MED`);
    } else if (mode == 2) {
      this.sendEvent(this.device, `COOL_${temperature}_MED`);
    }
    return temperature;
  }

  public static powerOff() {
    this.sendEvent(this.device, `OFF`);
    return true;
  }

  private static sendEvent(device: string, command: string) {
    child.exec(`irsend SEND_ONCE ${device} ${command}`);
  }


}
