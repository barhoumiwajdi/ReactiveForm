import { AbstractControl } from "@angular/forms";

export function NamForbiden(control: AbstractControl): { [key: string]: any } | null {

    const forbiden = /admin/.test(control.value);

    return forbiden ? { 'forbiddenname': { value: control.value } } : null



}