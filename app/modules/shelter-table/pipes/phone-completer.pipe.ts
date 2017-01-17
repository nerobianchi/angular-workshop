import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'phonenumber'
})
export class PhoneCompleterPipe implements PipeTransform {
    transform(phone: string, suffix: string): string {
        return '+9' + phone + ' ' + suffix;
    }
}