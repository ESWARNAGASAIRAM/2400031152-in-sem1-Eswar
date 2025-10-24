export class Weather {
constructor(data) {
const { main, weather, ...rest } = data;
this.temp = main.temp;
export class Weather {
constructor(data) {
const { main, weather, ...rest } = data;
this.temp = main.temp;
}
}
