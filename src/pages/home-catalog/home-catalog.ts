import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Crush } from './crush.model';

/**
 * Generated class for the HomeCatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-home-catalog',
    templateUrl: 'home-catalog.html',
})
export class HomeCatalogPage {

    public current: Crush;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.current = this.generateCrush();

        console.log(this.current);
    }

    public like(): void {
        console.log('like');
    }

    public dislike(): void {
        console.log('dislike');
    }

    public generateCrush(): Crush {
        let names = ['Jéssica', 'Fernanda', 'Paula', 'Márcia', 'Lúcia', 'Paloma', 'Roberta'];
        let images = [
            '../../assets/imgs/girl1.jpg'
            , '../../assets/imgs/girl2.jpg'
            , '../../assets/imgs/girl3.jpg'
            , '../../assets/imgs/girl4.jpg'
            , '../../assets/imgs/girl5.jpg'
        ];
        let descriptions = [
            'Por alguma razão eu faço as pessoas quererem beber. Eu acho que isso é algo bom, enquanto nos mantemos responsáveis'
            , 'Desculpe, todas as minhas fotos com carros esportivos e viajando para lugares maravilhosos estão no meu outro smartphone'
            , 'Olhando para aquela pessoa especial que vai assistir Stranger Things, 2º temporada, comigo neste fim de semana sem me julgar'
            , 'Inútil, burra, adoro animais, adoro café, adoro barba, amo séries *-*. Estudante de alguma coisa mas nunca estudei. Adoro beber, festejar, viajar (com o seu dinheiro) e nem queira saber do meu passado. Em busca do trigésimo terceiro namorado.'
            , 'Nasci para satisfazer a grande necessidade que eu tinha de mim mesmo.'
            , 'Amo ler, e praticar esportes ao ar livre. Viajar é uma outra paixão. Apreciadora de vinhos(embora não entenda nada sobre rsrs).'
        ];

        let name = names[this.getRandomNumber(0, names.length)];
        let age = this.getRandomNumber(18, 27);
        let description = descriptions[this.getRandomNumber(0, descriptions.length)];
        let image = images[this.getRandomNumber(0, images.length)];
        let percent = this.getRandomNumber(75, 98);

        return new Crush(name, age, percent, description, image);
    }

    getRandomNumber(max: number, min: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
