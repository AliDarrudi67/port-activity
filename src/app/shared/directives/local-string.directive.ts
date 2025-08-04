import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appLocalString]'
})
export class LocalStringDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: any): void {
    let inputValue: string = event.target.value;

    // حذف هر چیزی جز اعداد و ممیز
    inputValue = inputValue.replace(/[^0-9.]/g, '');

    // جدا کردن اعداد به دسته‌های سه رقم سه رقم
    const parts = inputValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // ترکیب دوباره اعداد
    // قرار دادن مقدار قالب‌بندی شده در ورودی
    this.el.nativeElement.value = parts.join('.');
  }

}
