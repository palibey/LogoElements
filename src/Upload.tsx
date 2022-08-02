import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/upload';
import {Header} from "./components/Header";

const Upload = logoWebWrapper('logo-elements-upload');

export function UploadComp() {
    window.customElements.whenDefined('logo-elements-upload').then(() => {
        const local = {
            dropFiles: {
                one: 'Dosyanı buraya sürükleyin',
                many: 'Dosyaları buraya sürükleyin',
            },
            addFiles: {
                one: 'Bir dosya seçin',
                many: 'Dosyaları seçin',
            },
            error: {
                tooManyFiles: 'Çok fazla dosya.',
                fileIsTooBig: 'Dosya çok büyük',
                incorrectFileType: 'Desteklenmeyen dosya türü',
            },
            uploading: {
                status: {
                    connecting: 'Bağlanıyor...',
                    stalled: 'Durduruldu',
                    processing: 'Dosya işleniyor...',
                    held: 'Tek dosya kaldı',
                },
                remainingTime: {
                    prefix: 'Kalan tahmini süre: ',
                    unknown: 'Kalan süre hesaplanamıyor',
                },
                error: {
                    serverUnavailable: 'Sunucu cevap vermiyor. Lütfen daha sonra tekrar deneyiniz',
                    unexpectedServerError: 'Beklenmeyen sunucu hatası.',
                    forbidden: 'Red edildi.',
                },
            },
        }

        const element = document.querySelector('logo-elements-upload');
        if (element != null)
            element['i18n'] = local;
    });
    return (
        <div>
            <Header value={'Upload'}/>
            <Upload target="/api/fileupload"></Upload>
            <hr/>
            <Upload id="noDrop" nodrop></Upload>
            <hr/>
            <Upload id="noDrop" nodrop></Upload>
            <hr/>
            <Upload id="noAuto" no-auto></Upload>


        </div>

    );
}
