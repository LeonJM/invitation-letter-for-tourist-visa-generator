import html2pdf from 'html2pdf.js';

export abstract class BaseTemplate {
    templateName: string;

    constructor(templateName: string) {
        this.templateName = templateName;
    }

    protected generatePdf(): void {
        console.warn('base template generating pdf');
        const element = document.getElementById('pdf-content');

        if (element) {
        const opt = {
            margin:       0.5,
            filename:     'my-document.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
        }
    }
}